// Parsing of stats.csv and the cohort estimator. Pure functions, used by the build, the checker and the browser.

export interface StatRow {
  measure: string;
  /** Dimension values this number is broken down by. Empty for totals. */
  by: Record<string, string>;
  value: number;
  /** Written as `~123` in the file: the source gives an approximate number. */
  approx: boolean;
  /** Key of the source in dataset.yaml. */
  source: string;
  /** Where in the source: a table, figure, page or section. */
  where: string;
  note: string;
  line: number;
}

export interface DimensionInfo {
  id: string;
  combine: 'all' | 'any';
  partition: boolean;
  values: string;
}

export const STATS_HEADER = ['measure', 'by', 'value', 'source', 'where', 'note'] as const;

/** RFC 4180 CSV: commas, double-quoted fields, doubled quotes inside quotes. */
export function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = '';
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') {
        field += '"';
        i++;
      } else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ',') {
      row.push(field);
      field = '';
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
    } else field += c;
  }
  if (field !== '' || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

export function parseBy(by: string): { pairs: [string, string][]; error?: string } {
  const pairs: [string, string][] = [];
  if (!by.trim()) return { pairs };
  for (const part of by.split(';')) {
    const eq = part.indexOf('=');
    if (eq < 1) return { pairs, error: `"${part.trim()}" is not dimension=value` };
    pairs.push([part.slice(0, eq).trim(), part.slice(eq + 1).trim()]);
  }
  return { pairs };
}

export function formatBy(by: Record<string, string>): string {
  return Object.entries(by)
    .map(([k, v]) => `${k}=${v}`)
    .join(';');
}

export interface ParsedStats {
  rows: StatRow[];
  errors: { line: number; message: string }[];
}

/** Parses the file structure only. Vocabulary and consistency checks live in validate.ts. */
export function parseStats(text: string): ParsedStats {
  const errors: ParsedStats['errors'] = [];
  const table = parseCsv(text.replace(/^﻿/, '')).filter((r) => r.some((c) => c.trim() !== ''));
  if (!table.length) return { rows: [], errors: [{ line: 1, message: 'the file is empty' }] };
  const header = table[0].map((h) => h.trim());
  if (header.join(',') !== STATS_HEADER.join(',')) {
    errors.push({ line: 1, message: `the header must be exactly: ${STATS_HEADER.join(',')}` });
    return { rows: [], errors };
  }
  const rows: StatRow[] = [];
  table.slice(1).forEach((cells, i) => {
    const line = i + 2;
    if (cells.length !== STATS_HEADER.length) {
      errors.push({ line, message: `expected ${STATS_HEADER.length} columns, found ${cells.length}` });
      return;
    }
    const [measure, byText, valueText, source, where, note] = cells.map((c) => c.trim());
    const { pairs, error } = parseBy(byText);
    if (error) errors.push({ line, message: error });
    const approx = valueText.startsWith('~');
    const value = Number(valueText.replace(/^~/, ''));
    if (valueText === '' || !Number.isFinite(value) || value < 0) {
      errors.push({ line, message: `value "${valueText}" is not a number of 0 or more` });
      return;
    }
    rows.push({ measure, by: Object.fromEntries(pairs), value, approx, source, where, note, line });
  });
  return { rows, errors };
}

/** Age bins in completed years: `60-69` is [60, 70), `90+` is [90, inf), `0-0.5` is [0, 0.5). */
export function parseAgeBin(bin: string): [number, number] | null {
  const plus = /^(\d+(?:\.\d+)?)\+$/.exec(bin);
  if (plus) return [Number(plus[1]), Infinity];
  const range = /^(\d+(?:\.\d+)?)-(\d+(?:\.\d+)?)$/.exec(bin);
  if (!range) return null;
  const lo = Number(range[1]);
  let hi = Number(range[2]);
  if (Number.isInteger(lo) && Number.isInteger(hi)) hi += 1;
  return hi > lo ? [lo, hi] : null;
}

export function contrastSetParts(set: string): string[] {
  return set.split('+').map((s) => s.trim());
}

export function canonicalContrastSet(parts: string[]): string {
  return [...parts].sort((a, b) => a.localeCompare(b, 'en')).join('+');
}

// Cohort estimation ----------------------------------------------------------------------------

export type Constraint =
  | { dim: string; values: string[] }
  /** Age range in years, [from, to). */
  | { dim: 'age'; range: [number, number] };

export interface Estimate {
  lo: number;
  hi: number;
  /** Total for the measure, Infinity when the dataset does not report one. */
  total: number;
}

export interface EstimateContext {
  rows: StatRow[];
  dims: Record<string, DimensionInfo>;
  /** Dataset-level values per dimension (declared in dataset.yaml plus those seen in stats). */
  facets: Record<string, string[]>;
}

interface Atom {
  keys: string[];
  lo: number;
  hi: number;
}

type Match =
  { kind: 'match'; keys: string[] } | { kind: 'partial'; keys: string[] } | { kind: 'miss' } | { kind: 'skip' };

/**
 * Bounds on how many units (subjects, scans, ...) satisfy all constraints at once.
 *
 * Every constraint is split into keys: one per selected value for dimensions where a subject must
 * have all values (contrast), one per dimension otherwise (sex, age). Rows in stats.csv give lower
 * and upper bounds for single keys or groups of keys. The upper bound is the smallest bound of any
 * group, the lower bound follows from the Fréchet inequality over a cover of the keys:
 * |A ∩ B| ≥ |A| + |B| − N.
 */
export function estimate(ctx: EstimateContext, measure: string, constraints: Constraint[]): Estimate {
  const totalRow = ctx.rows.find((r) => r.measure === measure && Object.keys(r.by).length === 0);
  const N = totalRow ? totalRow.value : Infinity;
  const active = constraints.filter((c) => ('range' in c ? true : c.values.length > 0));
  if (!active.length) return { lo: totalRow ? N : 0, hi: N, total: N };

  const keysOf = (c: Constraint) =>
    'range' in c || ctx.dims[c.dim]?.combine !== 'all' ? [c.dim] : c.values.map((v) => `${c.dim}:${v}`);
  const allKeys = active.flatMap(keysOf);
  const atoms: Atom[] = allKeys.map((k) => ({ keys: [k], lo: 0, hi: N }));
  const single = (key: string) => atoms.find((a) => a.keys.length === 1 && a.keys[0] === key)!;
  const byDim = new Map(active.map((c) => [c.dim, c]));
  const rows = ctx.rows.filter((r) => r.measure === measure);

  // Facts from dataset.yaml: a value the dataset does not have at all means zero.
  for (const c of active) {
    const facet = ctx.facets[c.dim];
    if ('range' in c) {
      const min = ctx.rows.find((r) => r.measure === 'age_min' && !Object.keys(r.by).length)?.value;
      const max = ctx.rows.find((r) => r.measure === 'age_max' && !Object.keys(r.by).length)?.value;
      if (min !== undefined && max !== undefined) {
        if (c.range[1] <= min || c.range[0] > max) single('age').hi = 0;
        else if (c.range[0] <= min && c.range[1] > max) single('age').lo = N === Infinity ? 0 : N;
      }
      continue;
    }
    if (ctx.dims[c.dim]?.combine === 'all') {
      // Contrasts, modalities and tracers are always listed, so a missing one means the dataset has none.
      for (const v of c.values) if (!facet?.includes(v)) single(`${c.dim}:${v}`).hi = 0;
    } else if (facet && !c.values.some((v) => facet.includes(v))) single(c.dim).hi = 0;
  }

  const matchEntry = (dim: string, value: string): Match => {
    if (dim === 'contrast_set') {
      const c = byDim.get('contrast');
      if (!c || 'range' in c) return { kind: 'skip' };
      const parts = contrastSetParts(value);
      return c.values.every((v) => parts.includes(v))
        ? { kind: 'match', keys: c.values.map((v) => `contrast:${v}`) }
        : { kind: 'miss' };
    }
    const c = byDim.get(dim);
    if (!c) return { kind: 'skip' };
    if ('range' in c) {
      const bin = parseAgeBin(value);
      if (!bin) return { kind: 'skip' };
      if (bin[0] >= c.range[0] && bin[1] <= c.range[1]) return { kind: 'match', keys: ['age'] };
      if (bin[1] <= c.range[0] || bin[0] >= c.range[1]) return { kind: 'miss' };
      return { kind: 'partial', keys: ['age'] };
    }
    if (ctx.dims[dim]?.combine === 'all') {
      return c.values.includes(value) ? { kind: 'match', keys: [`${dim}:${value}`] } : { kind: 'skip' };
    }
    return c.values.includes(value) ? { kind: 'match', keys: [dim] } : { kind: 'miss' };
  };

  // Group rows by the set of dimensions they are broken down by, e.g. "sex" or "age;sex".
  const groups = new Map<string, StatRow[]>();
  for (const r of rows) {
    const dims = Object.keys(r.by);
    if (!dims.length) continue;
    const sig = [...dims].sort().join(';');
    groups.set(sig, [...(groups.get(sig) ?? []), r]);
  }

  for (const [sig, groupRows] of groups) {
    const dims = sig.split(';');
    const isPartition = dims.every((d) => ctx.dims[d]?.partition);
    const results = groupRows.map((r) => {
      const entries = Object.entries(r.by).map(([d, v]) => matchEntry(d, v));
      if (entries.some((e) => e.kind === 'skip')) return { row: r, kind: 'skip' as const, keys: [] as string[] };
      if (entries.some((e) => e.kind === 'miss')) return { row: r, kind: 'miss' as const, keys: [] as string[] };
      const keys = entries.flatMap((e) => ('keys' in e ? e.keys : []));
      const partial = entries.some((e) => e.kind === 'partial');
      return { row: r, kind: partial ? ('partial' as const) : ('match' as const), keys };
    });
    // Rows about other values of an "all" dimension (another contrast) say nothing here.
    const relevant = results.filter((x) => x.kind !== 'skip');
    if (!relevant.length) continue;

    // "All" dimensions give one atom per row: subjects with T1w, subjects with FLAIR.
    if (dims.length === 1 && ctx.dims[dims[0]]?.combine === 'all' && dims[0] !== 'contrast_set') {
      for (const x of relevant) {
        if (x.kind !== 'match') continue;
        const a = single(x.keys[0]);
        a.lo = Math.max(a.lo, x.row.value);
        a.hi = Math.min(a.hi, x.row.value);
      }
      continue;
    }

    const byKeys = new Map<string, typeof relevant>();
    for (const x of relevant) {
      if (x.kind === 'miss') continue;
      const k = [...new Set(x.keys)].sort().join('|');
      byKeys.set(k, [...(byKeys.get(k) ?? []), x]);
    }
    const missSum = relevant.filter((x) => x.kind === 'miss').reduce((s, x) => s + x.row.value, 0);
    // Only other values listed (e.g. just "male" when asking for "female"): the rest is an upper bound.
    if (!byKeys.size && isPartition && N !== Infinity) {
      const keys = dims.flatMap((d) =>
        d === 'contrast_set' ? allKeys.filter((k) => k.startsWith('contrast:')) : allKeys.includes(d) ? [d] : []
      );
      if (keys.length) atoms.push({ keys: [...new Set(keys)].sort(), lo: 0, hi: N - missSum });
      continue;
    }
    const keySets = [...byKeys.keys()];
    for (const k of keySets) {
      const xs = byKeys.get(k)!;
      const matches = xs.filter((x) => x.kind === 'match').map((x) => x.row.value);
      // Values of a dimension that is not a partition can overlap, so only the largest one is certain.
      const lo = matches.length ? (isPartition ? matches.reduce((s, v) => s + v, 0) : Math.max(...matches)) : 0;
      let hi = Infinity;
      if (isPartition && keySets.length === 1 && N !== Infinity) hi = N - missSum;
      else if (!isPartition && xs.every((x) => x.kind === 'match')) {
        const c = byDim.get(dims[0]);
        const listed = new Set(xs.map((x) => x.row.by[dims[0]]));
        const facet = ctx.facets[dims[0]];
        const complete =
          dims.length === 1 &&
          c &&
          'values' in c &&
          c.values.every((v) => listed.has(v) || (facet && !facet.includes(v)));
        if (complete) hi = matches.reduce((s, v) => s + v, 0);
      }
      atoms.push({ keys: k.split('|'), lo, hi: Math.min(hi, N) });
    }
  }

  // Tighten single-key atoms with everything that covers exactly that key.
  const merged = new Map<string, Atom>();
  for (const a of atoms) {
    const k = a.keys.join('|');
    const m = merged.get(k);
    if (m) {
      m.lo = Math.max(m.lo, a.lo);
      m.hi = Math.min(m.hi, a.hi);
    } else merged.set(k, { ...a });
  }
  const list = [...merged.values()];

  // Upper bound: the cohort is contained in every atom.
  let hi = N;
  for (const a of list) hi = Math.min(hi, a.hi);

  // Lower bound: best Fréchet bound over covers of all keys by disjoint atoms.
  let lo = 0;
  const cover = (remaining: string[], sum: number, count: number) => {
    if (!remaining.length) {
      const bound = count === 1 ? sum : N === Infinity ? 0 : sum - (count - 1) * N;
      lo = Math.max(lo, bound);
      return;
    }
    const first = remaining[0];
    for (const a of list) {
      if (!a.keys.includes(first) || !a.keys.every((k) => remaining.includes(k))) continue;
      cover(
        remaining.filter((k) => !a.keys.includes(k)),
        sum + a.lo,
        count + 1
      );
    }
  };
  cover([...new Set(allKeys)], 0, 0);
  if (hi === Infinity && lo === 0 && N === Infinity) return { lo: 0, hi: Infinity, total: N };
  return { lo: Math.min(lo, hi), hi, total: N };
}

/** Rows broken down by exactly one dimension, as [value, row] pairs. */
export function marginal(rows: StatRow[], measure: string, dim: string): StatRow[] {
  return rows.filter((r) => r.measure === measure && Object.keys(r.by).length === 1 && dim in r.by);
}

export function total(rows: StatRow[], measure: string): StatRow | undefined {
  return rows.find((r) => r.measure === measure && Object.keys(r.by).length === 0);
}

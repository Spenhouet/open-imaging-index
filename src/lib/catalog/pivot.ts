import { parseAgeBin } from './stats';
import { tone } from './rules';
import type { DatasetSummary, VocabData } from './types';
import { countryName, label } from './vocab';

// Cross tabulation over the whole catalog: any two attributes, counted as datasets or summed as subjects.

export interface PivotDim {
  id: string;
  label: string;
  /** stat: the value can come with a subject count from stats.csv. meta: a property of the whole dataset. */
  kind: 'stat' | 'meta';
}

export const PIVOT_DIMS: PivotDim[] = [
  { id: 'modality', label: 'Modality', kind: 'stat' },
  { id: 'contrast', label: 'Contrast', kind: 'stat' },
  { id: 'anatomy', label: 'Anatomy', kind: 'stat' },
  { id: 'condition', label: 'Condition', kind: 'stat' },
  { id: 'sex', label: 'Sex', kind: 'stat' },
  { id: 'age', label: 'Age (decade)', kind: 'stat' },
  { id: 'vendor', label: 'Scanner vendor', kind: 'stat' },
  { id: 'field_strength', label: 'Field strength', kind: 'stat' },
  { id: 'country', label: 'Country', kind: 'stat' },
  { id: 'task', label: 'Task', kind: 'meta' },
  { id: 'access', label: 'Access', kind: 'meta' },
  { id: 'license', label: 'License', kind: 'meta' },
  { id: 'rule:commercial_use', label: 'Commercial use', kind: 'meta' },
  { id: 'rule:model_training', label: 'Model training', kind: 'meta' },
  { id: 'rule:redistribute_original', label: 'Re-sharing data', kind: 'meta' },
  { id: 'year', label: 'Release period', kind: 'meta' }
];

export type Measure = 'datasets' | 'subjects';

/** Values of a dimension for one dataset, with a subject count where stats.csv has one. */
export function valuesOf(d: DatasetSummary, dim: string, vocab: VocabData): Map<string, number | undefined> {
  const out = new Map<string, number | undefined>();
  if (dim.startsWith('rule:')) {
    const id = dim.slice(5);
    out.set(d.rules[id], d.totals.subjects);
    return out;
  }
  if (dim === 'access') return new Map([[d.meta.access.type, d.totals.subjects]]);
  if (dim === 'license') return new Map(d.licenseIds.map((l) => [l, d.totals.subjects]));
  if (dim === 'task') return new Map((d.meta.tasks ?? []).map((t) => [t, d.totals.subjects]));
  if (dim === 'year') {
    const y = d.meta.year;
    const bucket =
      y < 2010
        ? 'before 2010'
        : y < 2015
          ? '2010 to 2014'
          : y < 2020
            ? '2015 to 2019'
            : y < 2023
              ? '2020 to 2022'
              : '2023 and later';
    return new Map([[bucket, d.totals.subjects]]);
  }
  const rows = d.stats.filter((r) => r.measure === 'subjects' && Object.keys(r.by).length === 1);
  if (dim === 'age') {
    // Re-bin into decades. A source bin spanning several decades counts only when it fits in one.
    for (const r of rows.filter((x) => 'age' in x.by)) {
      const bin = parseAgeBin(r.by.age);
      if (!bin) continue;
      const decade = Math.floor(bin[0] / 10) * 10;
      if (bin[1] > decade + 10) continue;
      const key = decade >= 90 ? '90+' : `${decade}-${decade + 9}`;
      out.set(key, (out.get(key) ?? 0) + r.value);
    }
    return out;
  }
  if (dim === 'sex') {
    for (const r of rows.filter((x) => 'sex' in x.by)) out.set(r.by.sex, r.value);
    return out;
  }
  for (const v of d.facets[dim] ?? []) out.set(v, undefined);
  for (const r of rows.filter((x) => dim in x.by)) out.set(r.by[dim], r.value);
  // A single value with no breakdown row covers every subject.
  if (out.size === 1 && d.totals.subjects !== undefined) {
    const [k, v] = [...out][0];
    if (v === undefined) out.set(k, d.totals.subjects);
  }
  return out;
}

export interface PivotCell {
  datasets: string[];
  subjects: number;
  /** Datasets that have the value but no subject count for it. */
  unknown: number;
}

export interface Pivot {
  rows: string[];
  cols: string[];
  cells: Map<string, PivotCell>;
  rowTotals: Map<string, PivotCell>;
}

const NONE = '__all__';

export function pivot(datasets: DatasetSummary[], rowDim: string, colDim: string | null, vocab: VocabData): Pivot {
  const cells = new Map<string, PivotCell>();
  const rowTotals = new Map<string, PivotCell>();
  const add = (map: Map<string, PivotCell>, key: string, id: string, n: number | undefined) => {
    const c = map.get(key) ?? { datasets: [], subjects: 0, unknown: 0 };
    if (!c.datasets.includes(id)) c.datasets.push(id);
    if (n === undefined) c.unknown++;
    else c.subjects += n;
    map.set(key, c);
  };
  for (const d of datasets) {
    const rv = valuesOf(d, rowDim, vocab);
    const cv = colDim ? valuesOf(d, colDim, vocab) : new Map([[NONE, d.totals.subjects]]);
    for (const [r, rn] of rv) {
      add(rowTotals, r, d.id, rn);
      for (const [c, cn] of cv) {
        // Subjects in both: exact when one side covers the whole dataset, otherwise the joint row if reported.
        let n: number | undefined;
        const rWhole = rn !== undefined && rn === d.totals.subjects;
        const cWhole = cn !== undefined && cn === d.totals.subjects;
        if (cWhole || colDim === null) n = rn;
        else if (rWhole) n = cn;
        else n = joint(d, rowDim, r, colDim!, c);
        add(cells, `${r}\u0000${c}`, d.id, n);
      }
    }
  }
  const sortKeys = (keys: string[], dim: string | null) =>
    dim === 'age' || dim === 'field_strength' || dim === 'year'
      ? keys.sort((a, b) => parseFloat(a) - parseFloat(b) || a.localeCompare(b))
      : keys.sort(
          (a, b) =>
            (rowTotals.get(b)?.datasets.length ?? 0) - (rowTotals.get(a)?.datasets.length ?? 0) || a.localeCompare(b)
        );
  const rows = sortKeys([...rowTotals.keys()], rowDim);
  const colSet = new Set<string>();
  for (const k of cells.keys()) colSet.add(k.split('\u0000')[1]);
  const cols = colDim
    ? [...colSet].sort((a, b) => {
        if (colDim.startsWith('rule:'))
          return (
            ['yes', 'conditional', 'unspecified', 'no'].indexOf(a) -
            ['yes', 'conditional', 'unspecified', 'no'].indexOf(b)
          );
        if (['age', 'field_strength', 'year'].includes(colDim))
          return parseFloat(a) - parseFloat(b) || a.localeCompare(b);
        const count = (v: string) =>
          [...cells].filter(([k]) => k.endsWith(`\u0000${v}`)).reduce((s, [, c]) => s + c.datasets.length, 0);
        return count(b) - count(a);
      })
    : [NONE];
  return { rows, cols, cells, rowTotals };
}

function joint(d: DatasetSummary, dimA: string, a: string, dimB: string, b: string): number | undefined {
  const r = d.stats.find(
    (x) => x.measure === 'subjects' && Object.keys(x.by).length === 2 && x.by[dimA] === a && x.by[dimB] === b
  );
  return r?.value;
}

export function cellKey(r: string, c: string) {
  return `${r}\u0000${c}`;
}

export const ALL = NONE;

export function valueLabel(vocab: VocabData, dim: string, v: string, licenseNames: Map<string, string>): string {
  if (v === NONE) return 'All';
  if (dim.startsWith('rule:'))
    return { yes: 'Yes', no: 'No', conditional: 'Conditional', unspecified: 'Not stated' }[v] ?? v;
  if (dim === 'license') return licenseNames.get(v) ?? v;
  if (dim === 'year' || dim === 'age') return v;
  if (dim === 'country') return countryName(v);
  return label(vocab, dim === 'access' ? 'access' : dim, v);
}

/** Catalog query that shows the datasets behind a pivot cell, when the filters can express it. */
export function cellQuery(dim: string, v: string, vocab: VocabData): Record<string, string> | null {
  if (v === NONE) return {};
  if (
    ['modality', 'anatomy', 'condition', 'task', 'access', 'license', 'country', 'vendor', 'field_strength'].includes(
      dim
    )
  )
    return { [dim]: v };
  if (dim === 'contrast') return { contrasts: v };
  if (dim === 'sex') return { sex: v };
  if (dim === 'age') {
    const bin = parseAgeBin(v);
    return bin ? { age: `${bin[0]}-${Number.isFinite(bin[1]) ? bin[1] - 1 : 100}` } : null;
  }
  if (dim.startsWith('rule:')) {
    const rule = vocab.licenseRules.rules.find((r) => r.id === dim.slice(5));
    return rule && tone(v as never, rule.good) === 'good' ? { rules: rule.id } : null;
  }
  return null;
}

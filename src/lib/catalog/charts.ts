import { contrastSetParts, parseAgeBin, type StatRow } from './stats.js';
import type { VocabData } from './types.js';
import { formatNumber, label, modalityColor } from './vocab.js';

// Turns a dataset's stats.csv rows into the charts on its page. Every row ends up in exactly one place: a chart
// (in one of its measure variants), the age summary, the totals, or `other`, which the page lists as a table.

export const COUNT_MEASURES = ['subjects', 'images', 'scans', 'studies', 'slides'] as const;
const AGE_STATS = ['age_mean', 'age_sd', 'age_median', 'age_min', 'age_max'] as const;
const SEX_ORDER = ['female', 'male', 'other', 'unknown'];
const BREAKDOWN_DIMS = [
  'modality',
  'contrast',
  'tracer',
  'condition',
  'anatomy',
  'vendor',
  'field_strength',
  'country',
  'split',
  'view'
];

/** One chart drawn for one measure. Charts reported for several measures get a switch. */
export interface Variant<T> {
  measure: string;
  rows: StatRow[];
  data: T;
}
export interface Item {
  key: string;
  label: string;
  value: number;
  approx?: boolean;
  color?: string;
  /** Age statistics reported for this group, as text. */
  note?: string;
}
export interface Breakdown {
  dim: string;
  title: string;
  variants: Variant<Item[]>[];
}
export interface Cross {
  key: string;
  title: string;
  rowDim: string;
  colDim: string;
  variants: Variant<{ rows: Item[]; cols: Item[]; cells: Map<string, StatRow> }>[];
}
export interface AgeSummary {
  mean?: StatRow;
  sd?: StatRow;
  median?: StatRow;
  min?: StatRow;
  max?: StatRow;
}
export interface DatasetCharts {
  totals: StatRow[];
  age: AgeSummary;
  sex: Variant<Item[]>[];
  /** Age statistics per sex, as text. */
  sexAgeNote: { rows: StatRow[]; text: string } | null;
  ageBins: Variant<Item[]>[];
  pyramid: Variant<{ bins: string[]; left: Map<string, number>; right: Map<string, number> }>[];
  combos: Variant<{ contrasts: string[]; rows: { set: string[]; value: number; approx: boolean }[] }>[];
  breakdowns: Breakdown[];
  crosses: Cross[];
  other: StatRow[];
}

const dimsOf = (r: StatRow) => Object.keys(r.by).sort();
const isMarginal = (r: StatRow, dim: string) => dimsOf(r).length === 1 && dim in r.by;
const byMeasure = (rows: StatRow[]) => {
  const out: Variant<null>[] = [];
  for (const m of COUNT_MEASURES) {
    const rs = rows.filter((r) => r.measure === m);
    if (rs.length) out.push({ measure: m, rows: rs, data: null });
  }
  return out;
};
const ageStart = (bin: string) => parseAgeBin(bin)?.[0] ?? Infinity;
const fmt = (r?: StatRow) => (r ? formatNumber(r.value, r.approx) : undefined);

/** "mean 72 ± 6, median 70, range 55 to 90" from the age statistics of one group. */
export function ageNote(s: AgeSummary): string {
  const parts: string[] = [];
  if (s.mean) parts.push(`mean ${fmt(s.mean)}${s.sd ? ` ± ${fmt(s.sd)}` : ''}`);
  else if (s.sd) parts.push(`SD ${fmt(s.sd)}`);
  if (s.median) parts.push(`median ${fmt(s.median)}`);
  if (s.min && s.max) parts.push(`range ${fmt(s.min)} to ${fmt(s.max)}`);
  else if (s.min) parts.push(`from ${fmt(s.min)}`);
  else if (s.max) parts.push(`up to ${fmt(s.max)}`);
  return parts.join(', ');
}

function ageStatsBy(rows: StatRow[], dim: string): Map<string, { summary: AgeSummary; rows: StatRow[] }> {
  const out = new Map<string, { summary: AgeSummary; rows: StatRow[] }>();
  for (const r of rows) {
    if (!(AGE_STATS as readonly string[]).includes(r.measure) || !isMarginal(r, dim)) continue;
    const e = out.get(r.by[dim]) ?? { summary: {}, rows: [] };
    e.summary[r.measure.slice(4) as keyof AgeSummary] = r;
    e.rows.push(r);
    out.set(r.by[dim], e);
  }
  return out;
}

export function datasetCharts(rows: StatRow[], vocab: VocabData): DatasetCharts {
  const used = new Set<StatRow>();
  const use = <T extends { rows: StatRow[] }>(v: T) => (v.rows.forEach((r) => used.add(r)), v);
  const lbl = (dim: string, id: string) => label(vocab, dim, id);
  const dimTitle = (dim: string) => vocab.dimensions.find((x) => x.id === dim)?.label ?? dim;

  const totals = rows.filter((r) => (COUNT_MEASURES as readonly string[]).includes(r.measure) && !dimsOf(r).length);
  totals.forEach((r) => used.add(r));
  const age: AgeSummary = {};
  for (const m of AGE_STATS) {
    const r = rows.find((x) => x.measure === m && !dimsOf(x).length);
    if (r) ((age[m.slice(4) as keyof AgeSummary] = r), used.add(r));
  }

  const sex = byMeasure(rows.filter((r) => isMarginal(r, 'sex'))).map((v) =>
    use({
      ...v,
      data: [...v.rows]
        .sort((a, b) => SEX_ORDER.indexOf(a.by.sex) - SEX_ORDER.indexOf(b.by.sex))
        .map((r) => ({ key: r.by.sex, label: lbl('sex', r.by.sex), value: r.value, approx: r.approx }))
    })
  );
  const sexAges = ageStatsBy(rows, 'sex');
  let sexAgeNote: DatasetCharts['sexAgeNote'] = null;
  if (sex.length && sexAges.size) {
    const groups = [...sexAges].sort((a, b) => SEX_ORDER.indexOf(a[0]) - SEX_ORDER.indexOf(b[0]));
    sexAgeNote = use({
      rows: groups.flatMap(([, e]) => e.rows),
      text: `Age: ${groups.map(([s, e]) => `${lbl('sex', s).toLowerCase()} ${ageNote(e.summary)}`).join('; ')}`
    });
  }

  const ageBins = byMeasure(rows.filter((r) => isMarginal(r, 'age') && parseAgeBin(r.by.age))).map((v) =>
    use({
      ...v,
      data: [...v.rows]
        .sort((a, b) => ageStart(a.by.age) - ageStart(b.by.age))
        .map((r) => ({ key: r.by.age, label: r.by.age, value: r.value, approx: r.approx }))
    })
  );

  const ageSex = (r: StatRow) => dimsOf(r).join() === 'age,sex' && parseAgeBin(r.by.age);
  const pyramid = byMeasure(rows.filter(ageSex))
    .filter((v) => v.rows.length >= 2)
    .map((v) => {
      const bins = [...new Set(v.rows.map((r) => r.by.age))].sort((a, b) => ageStart(a) - ageStart(b));
      const side = (s: string) => new Map(v.rows.filter((r) => r.by.sex === s).map((r) => [r.by.age, r.value]))!;
      // Rows for other sexes do not fit the two sides. Leave them for the table.
      return use({
        ...v,
        rows: v.rows.filter((r) => r.by.sex === 'female' || r.by.sex === 'male'),
        data: { bins, left: side('female'), right: side('male') }
      });
    });

  const order = (vocab.terms.contrast ?? []).map((x) => x.id);
  const combos = byMeasure(rows.filter((r) => isMarginal(r, 'contrast_set'))).map((v) => {
    const contrasts = [...new Set(v.rows.flatMap((r) => contrastSetParts(r.by.contrast_set)))].sort(
      (a, b) => order.indexOf(a) - order.indexOf(b)
    );
    return use({
      ...v,
      data: {
        contrasts,
        rows: v.rows
          .map((r) => ({ set: contrastSetParts(r.by.contrast_set), value: r.value, approx: r.approx }))
          .sort((a, b) => b.value - a.value)
      }
    });
  });

  const breakdowns: Breakdown[] = [];
  for (const dim of BREAKDOWN_DIMS) {
    const variants = byMeasure(rows.filter((r) => isMarginal(r, dim)));
    if (!variants.length) continue;
    const ages = ageStatsBy(rows, dim);
    breakdowns.push({
      dim,
      title: dimTitle(dim),
      variants: variants.map((v) => {
        const items = v.rows
          .map((r) => ({
            key: r.by[dim],
            label: lbl(dim, r.by[dim]),
            value: r.value,
            approx: r.approx,
            color: dim === 'modality' ? modalityColor(r.by[dim]) : undefined,
            note: undefined as string | undefined
          }))
          .sort((a, b) => b.value - a.value);
        const extra: StatRow[] = [];
        // Age statistics per group go with the first measure, next to each bar.
        if (v === variants[0])
          for (const it of items) {
            const e = ages.get(it.key);
            if (e) ((it.note = `Age ${ageNote(e.summary)}`), extra.push(...e.rows));
          }
        return use({ ...v, rows: [...v.rows, ...extra], data: items });
      })
    });
  }

  // Every other two-way table, one chart per pair of dimensions.
  const pairs = new Map<string, StatRow[]>();
  for (const r of rows) {
    const ds = dimsOf(r);
    if (used.has(r) || ds.length !== 2 || !(COUNT_MEASURES as readonly string[]).includes(r.measure)) continue;
    if (ds.includes('contrast_set')) continue;
    // Other sexes next to a pyramid are too few for a table of their own.
    if (ds.join() === 'age,sex' && pyramid.some((p) => p.measure === r.measure)) continue;
    pairs.set(ds.join(), [...(pairs.get(ds.join()) ?? []), r]);
  }
  const crosses: Cross[] = [];
  for (const [key, prs] of pairs) {
    const [a, b] = key.split(',');
    const count = (dim: string) => new Set(prs.map((r) => r.by[dim])).size;
    // Age reads top to bottom. Otherwise the dimension with fewer values becomes the columns.
    const [rowDim, colDim] = a === 'age' ? [a, b] : b === 'age' ? [b, a] : count(a) >= count(b) ? [a, b] : [b, a];
    const axis = (rs: StatRow[], dim: string): Item[] => {
      const sums = new Map<string, number>();
      for (const r of rs) sums.set(r.by[dim], (sums.get(r.by[dim]) ?? 0) + r.value);
      const keys = [...sums.keys()];
      if (dim === 'age') keys.sort((x, y) => ageStart(x) - ageStart(y));
      else if (dim === 'sex') keys.sort((x, y) => SEX_ORDER.indexOf(x) - SEX_ORDER.indexOf(y));
      else keys.sort((x, y) => sums.get(y)! - sums.get(x)!);
      return keys.map((k) => ({ key: k, label: lbl(dim, k), value: sums.get(k)! }));
    };
    crosses.push({
      key,
      rowDim,
      colDim,
      title: `${dimTitle(rowDim)} by ${dimTitle(colDim).toLowerCase()}`,
      variants: byMeasure(prs).map((v) =>
        use({
          ...v,
          data: {
            rows: axis(v.rows, rowDim),
            cols: axis(v.rows, colDim),
            cells: new Map(v.rows.map((r) => [`${r.by[rowDim]}\u0000${r.by[colDim]}`, r]))
          }
        })
      )
    });
  }
  crosses.sort((x, y) => y.variants[0].rows.length - x.variants[0].rows.length);

  return {
    totals,
    age,
    sex,
    sexAgeNote,
    ageBins,
    pyramid,
    combos,
    breakdowns,
    crosses,
    other: rows.filter((r) => !used.has(r))
  };
}

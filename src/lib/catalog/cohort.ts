import { tone } from './rules';
import { estimate, type Constraint, type Estimate } from './stats';
import type { DatasetSummary, VocabData } from './types';
import { cohortConstraints, dimsInfo, facetValues, run, type FacetId, type FilterState } from './filter';
import { withDescendants } from './vocab';
import type MiniSearch from 'minisearch';

// The Explore page: one cohort built from the catalog filters, summed over datasets and broken down by attribute.

/** Uses a person may have in mind. Each is a license rule filter, see RULE_FILTERS. */
export const NEEDS = [
  { id: 'commercial_use', label: 'Commercial use' },
  { id: 'product_validation', label: 'Validate a product' },
  { id: 'model_training', label: 'Train models' },
  { id: 'share_model_weights', label: 'Share trained models' },
  { id: 'redistribute_original', label: 'Re-share the data' },
  { id: 'signed_agreement', label: 'No agreement to sign' }
] as const;

/** Facets that are also stats dimensions, so they can count subjects and not only datasets. */
const STAT_FACETS = ['modality', 'anatomy', 'condition', 'vendor', 'field_strength', 'country'] as const;
const HIERARCHICAL = ['modality', 'anatomy', 'condition'];

/** Constraints for subject counts: the cohort filters plus facet selections, where values are alternatives. */
export function exploreConstraints(f: FilterState, vocab: VocabData): Constraint[] {
  const out = cohortConstraints(f, vocab).filter((c) => c.dim !== 'condition');
  for (const dim of STAT_FACETS) {
    const selected = f.facets[dim];
    if (!selected?.length) continue;
    const values = HIERARCHICAL.includes(dim) ? selected.flatMap((v) => withDescendants(vocab, dim, v)) : selected;
    out.push({ dim, values, combine: 'any' });
  }
  return out;
}

export interface Range {
  lo: number;
  hi: number;
}

const add = (a: Range, b: Estimate | Range): Range => ({ lo: a.lo + b.lo, hi: a.hi + b.hi });
const zero = (): Range => ({ lo: 0, hi: 0 });

function datasetEstimate(d: DatasetSummary, constraints: Constraint[], vocab: VocabData): Estimate {
  if (!constraints.length) {
    const n = d.totals.subjects;
    return n === undefined ? { lo: 0, hi: Infinity, total: Infinity } : { lo: n, hi: n, total: n };
  }
  return estimate({ rows: d.stats, dims: dimsInfo(vocab), facets: d.facets }, 'subjects', constraints);
}

export type Usability = 'usable' | 'unclear' | 'blocked';

/** How a dataset's license answers fit the chosen needs. With no needs, every dataset is usable. */
export function usability(d: DatasetSummary, needs: string[], vocab: VocabData): Usability {
  let result: Usability = 'usable';
  for (const id of needs) {
    const rule = vocab.licenseRules.rules.find((r) => r.id === id);
    if (!rule) continue;
    const t = tone(d.rules[id], rule.good);
    if (t === 'bad') return 'blocked';
    if (t !== 'good') result = 'unclear';
  }
  return result;
}

export interface Contribution {
  dataset: DatasetSummary;
  estimate: Estimate;
  usability: Usability;
}

export interface CohortSummary {
  datasets: Contribution[];
  /** Matching subjects summed over datasets. Datasets can share subjects, so this is an upper view of the pool. */
  total: Range;
  /** Datasets without a subject count for these filters. */
  unknown: number;
  byUse: Record<Usability, { range: Range; datasets: number; unknown: number }>;
}

export function summarize(
  datasets: DatasetSummary[],
  search: MiniSearch,
  f: FilterState,
  vocab: VocabData,
  needs: string[]
): CohortSummary {
  const { results } = run(datasets, search, f, vocab, { counts: false });
  const constraints = exploreConstraints(f, vocab);
  const byUse: CohortSummary['byUse'] = {
    usable: { range: zero(), datasets: 0, unknown: 0 },
    unclear: { range: zero(), datasets: 0, unknown: 0 },
    blocked: { range: zero(), datasets: 0, unknown: 0 }
  };
  let total = zero();
  let unknown = 0;
  const rows: Contribution[] = [];
  for (const r of results) {
    const e = datasetEstimate(r.dataset, constraints, vocab);
    if (constraints.length && e.hi === 0) continue;
    const u = usability(r.dataset, needs, vocab);
    const finite = { lo: e.lo, hi: Number.isFinite(e.hi) ? e.hi : e.lo };
    if (!Number.isFinite(e.hi)) {
      unknown++;
      byUse[u].unknown++;
    }
    total = add(total, finite);
    byUse[u].range = add(byUse[u].range, finite);
    byUse[u].datasets++;
    rows.push({ dataset: r.dataset, estimate: e, usability: u });
  }
  rows.sort((a, b) => b.estimate.lo - a.estimate.lo || fin(b.estimate.hi) - fin(a.estimate.hi));
  return { datasets: rows, total, unknown, byUse };
}

const fin = (n: number) => (Number.isFinite(n) ? n : 0);

// Linked breakdowns ---------------------------------------------------------------------------------

export type ChartKind = 'facet' | 'contrast' | 'sex' | 'age';

export interface ChartDef {
  id: string;
  label: string;
  kind: ChartKind;
  facet?: FacetId;
}

export const CHARTS: ChartDef[] = [
  { id: 'modality', label: 'Modality', kind: 'facet', facet: 'modality' },
  { id: 'contrast', label: 'Contrast', kind: 'contrast' },
  { id: 'condition', label: 'Condition', kind: 'facet', facet: 'condition' },
  { id: 'age', label: 'Age', kind: 'age' },
  { id: 'sex', label: 'Sex', kind: 'sex' },
  { id: 'anatomy', label: 'Anatomy', kind: 'facet', facet: 'anatomy' },
  { id: 'vendor', label: 'Scanner vendor', kind: 'facet', facet: 'vendor' },
  { id: 'field_strength', label: 'Field strength', kind: 'facet', facet: 'field_strength' },
  { id: 'country', label: 'Country', kind: 'facet', facet: 'country' },
  { id: 'access', label: 'Access', kind: 'facet', facet: 'access' }
];

export interface Bar {
  key: string;
  range: Range;
  /** Datasets that have this value within the cohort. */
  datasets: number;
  /** Datasets that have the value but report no count for it. */
  unknown: number;
  selected: boolean;
}

/** The filters with this chart's own selection removed, so the chart keeps showing all its options. */
export function withoutChart(f: FilterState, chart: ChartDef): FilterState {
  const g: FilterState = { ...f, facets: { ...f.facets } };
  if (chart.kind === 'facet' && chart.facet) delete g.facets[chart.facet];
  if (chart.kind === 'contrast') g.contrasts = [];
  if (chart.kind === 'sex') g.sex = [];
  if (chart.kind === 'age') g.age = null;
  return g;
}

export const DECADES = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];

function selectedIn(f: FilterState, chart: ChartDef, key: string): boolean {
  if (chart.kind === 'facet' && chart.facet) return f.facets[chart.facet]?.includes(key) ?? false;
  if (chart.kind === 'contrast') return f.contrasts.includes(key);
  if (chart.kind === 'sex') return f.sex.includes(key);
  if (chart.kind === 'age' && f.age) {
    const d = Number(key);
    return d >= f.age[0] && d <= f.age[1];
  }
  return false;
}

function valueConstraint(chart: ChartDef, key: string, vocab: VocabData): Constraint | null {
  if (chart.kind === 'contrast') return { dim: 'contrast', values: [key] };
  if (chart.kind === 'sex') return { dim: 'sex', values: [key] };
  if (chart.kind === 'age')
    return { dim: 'age', range: [Number(key), Number(key) === 90 ? Infinity : Number(key) + 10] };
  if (chart.facet && (STAT_FACETS as readonly string[]).includes(chart.facet)) {
    const values = HIERARCHICAL.includes(chart.facet) ? withDescendants(vocab, chart.facet, key) : [key];
    return { dim: chart.facet, values, combine: 'any' };
  }
  return null;
}

function candidateKeys(chart: ChartDef, datasets: DatasetSummary[], vocab: VocabData): string[] {
  if (chart.kind === 'age') return DECADES.map(String);
  if (chart.kind === 'sex') return ['female', 'male'];
  if (chart.kind === 'contrast') return [...new Set(datasets.flatMap((d) => d.facets.contrast ?? []))];
  const keys = new Set(datasets.flatMap((d) => facetValues(d, chart.facet!)));
  // Narrower terms count under their parent too, so show parents that only appear through children.
  if (chart.facet && HIERARCHICAL.includes(chart.facet)) {
    for (const k of [...keys]) {
      let parent = vocab.terms[chart.facet]?.find((t) => t.id === k)?.parent;
      while (parent) {
        keys.add(parent);
        parent = vocab.terms[chart.facet]?.find((t) => t.id === parent)?.parent;
      }
    }
  }
  return [...keys];
}

/** Matching subjects per value of one attribute, over the cohort defined by all other filters. */
export function breakdown(
  datasets: DatasetSummary[],
  search: MiniSearch,
  f: FilterState,
  vocab: VocabData,
  chart: ChartDef
): Bar[] {
  const g = withoutChart(f, chart);
  const { results } = run(datasets, search, g, vocab, { counts: false });
  const base = exploreConstraints(g, vocab);
  const keys = candidateKeys(
    chart,
    results.map((r) => r.dataset),
    vocab
  );
  const bars: Bar[] = [];
  for (const key of keys) {
    const vc = valueConstraint(chart, key, vocab);
    let range = zero();
    let count = 0;
    let unknown = 0;
    const want =
      chart.kind === 'facet' && chart.facet
        ? HIERARCHICAL.includes(chart.facet)
          ? withDescendants(vocab, chart.facet, key)
          : [key]
        : null;
    const constraints = vc ? [...base, vc] : base;
    for (const { dataset: d } of results) {
      if (want && chart.facet) {
        const have = facetValues(d, chart.facet);
        if (!want.some((v) => have.includes(v))) continue;
      }
      if (chart.kind === 'contrast' && !(d.facets.contrast ?? []).includes(key)) continue;
      const e = datasetEstimate(d, constraints, vocab);
      if (e.hi === 0) continue;
      count++;
      if (!Number.isFinite(e.hi)) unknown++;
      range = add(range, { lo: e.lo, hi: Number.isFinite(e.hi) ? e.hi : e.lo });
    }
    if (count) bars.push({ key, range, datasets: count, unknown, selected: selectedIn(f, chart, key) });
  }
  if (chart.kind === 'age' || chart.id === 'field_strength') bars.sort((a, b) => Number(a.key) - Number(b.key));
  else bars.sort((a, b) => b.range.lo - a.range.lo || b.range.hi - a.range.hi || b.datasets - a.datasets);
  return bars;
}

/** Applies a click on a bar to the filters. Age bars build one contiguous range. */
export function toggle(f: FilterState, chart: ChartDef, key: string): FilterState {
  const flip = (list: string[]) => (list.includes(key) ? list.filter((x) => x !== key) : [...list, key]);
  if (chart.kind === 'facet' && chart.facet)
    return { ...f, facets: { ...f.facets, [chart.facet]: flip(f.facets[chart.facet] ?? []) } };
  if (chart.kind === 'contrast') return { ...f, contrasts: flip(f.contrasts) };
  if (chart.kind === 'sex') return { ...f, sex: flip(f.sex) };
  if (chart.kind === 'age') {
    const d = Number(key);
    const hi = d === 90 ? 100 : d + 9;
    if (!f.age) return { ...f, age: [d, hi] };
    const [a, b] = f.age;
    if (d >= a && hi <= b) return { ...f, age: d === a && hi === b ? null : [d, hi] };
    return { ...f, age: [Math.min(a, d), Math.max(b, hi)] };
  }
  return f;
}

// Coverage ------------------------------------------------------------------------------------------

export interface CoverageCell {
  datasets: number;
  range: Range;
}

/** Datasets and subjects per condition and modality over the whole catalog, to show where data is missing. */
export function coverage(datasets: DatasetSummary[], vocab: VocabData) {
  const topModality = (m: string) => vocab.terms.modality?.find((t) => t.id === m)?.parent ?? m;
  const modalities = [...new Set(datasets.flatMap((d) => (d.facets.modality ?? []).map(topModality)))];
  modalities.sort(
    (a, b) =>
      datasets.filter((d) => d.facets.modality?.some((m) => topModality(m) === b)).length -
      datasets.filter((d) => d.facets.modality?.some((m) => topModality(m) === a)).length
  );
  const terms = (vocab.terms.condition ?? []).filter((t) => t.id !== 'healthy');
  const cells = new Map<string, CoverageCell>();
  const rowTotals = new Map<string, number>();
  for (const t of terms) {
    const ids = withDescendants(vocab, 'condition', t.id);
    for (const m of modalities) {
      const mods = withDescendants(vocab, 'modality', m);
      let range = zero();
      let n = 0;
      for (const d of datasets) {
        if (!d.facets.condition?.some((c) => ids.includes(c))) continue;
        if (!d.facets.modality?.some((x) => mods.includes(x))) continue;
        const e = datasetEstimate(
          d,
          [
            { dim: 'condition', values: ids, combine: 'any' },
            { dim: 'modality', values: mods, combine: 'any' }
          ],
          vocab
        );
        // The dataset lists both, but no subject has both (e.g. lung CT and brain MRI in one collection).
        if (e.hi === 0) continue;
        n++;
        range = add(range, { lo: e.lo, hi: Number.isFinite(e.hi) ? e.hi : e.lo });
      }
      if (n) cells.set(`${t.id}|${m}`, { datasets: n, range });
      rowTotals.set(t.id, (rowTotals.get(t.id) ?? 0) + n);
    }
  }
  const covered = terms.filter((t) => (rowTotals.get(t.id) ?? 0) > 0);
  const missing = terms.filter((t) => !rowTotals.get(t.id));
  covered.sort((a, b) => (rowTotals.get(b.id) ?? 0) - (rowTotals.get(a.id) ?? 0));
  return { modalities, rows: covered, missing, cells };
}

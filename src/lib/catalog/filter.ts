import MiniSearch from 'minisearch';
import { tone } from './rules';
import { estimate, type Constraint, type DimensionInfo, type Estimate } from './stats';
import type { DatasetSummary, VocabData } from './types';
import { withDescendants } from './vocab';

// Catalog filtering. All state lives in the URL query so every view can be shared.

/** Dataset fields that can be filtered with checkboxes. */
export const FACETS = [
  { id: 'modality', label: 'Modality' },
  { id: 'anatomy', label: 'Anatomy' },
  { id: 'condition', label: 'Condition' },
  { id: 'task', label: 'Task' },
  { id: 'access', label: 'Access' },
  { id: 'license', label: 'License' },
  { id: 'format', label: 'Format' },
  { id: 'vendor', label: 'Scanner vendor' },
  { id: 'field_strength', label: 'Field strength' },
  { id: 'country', label: 'Country' }
] as const;
export type FacetId = (typeof FACETS)[number]['id'];

/** License rules offered as quick filters, phrased from the user's side. */
export const RULE_FILTERS = [
  { id: 'commercial_use', label: 'Commercial use allowed' },
  { id: 'model_training', label: 'Model training allowed' },
  { id: 'share_model_weights', label: 'Trained models shareable' },
  { id: 'redistribute_original', label: 'Data may be re-shared' },
  { id: 'redistribute_derivatives', label: 'Derived data may be shared' },
  { id: 'signed_agreement', label: 'No agreement to sign' },
  { id: 'ethics_approval', label: 'No ethics approval needed' },
  { id: 'share_alike', label: 'No share-alike' }
] as const;

export type Sort = 'relevance' | 'subjects' | 'newest' | 'name' | 'match';

export interface FilterState {
  q: string;
  facets: Partial<Record<FacetId, string[]>>;
  rules: string[];
  /** Also accept "conditional" answers for rule filters. */
  lenient: boolean;
  /** Subjects must have all of these contrasts. */
  contrasts: string[];
  sex: string[];
  age: [number, number] | null;
  minSubjects: number;
  sort: Sort;
}

export const AGE_MAX = 100;

export function emptyFilters(): FilterState {
  return {
    q: '',
    facets: {},
    rules: [],
    lenient: false,
    contrasts: [],
    sex: [],
    age: null,
    minSubjects: 0,
    sort: 'relevance'
  };
}

export function toQuery(f: FilterState): string {
  const p = new URLSearchParams();
  if (f.q) p.set('q', f.q);
  for (const [k, v] of Object.entries(f.facets)) if (v?.length) p.set(k, v.join(','));
  if (f.rules.length) p.set('rules', f.rules.join(','));
  if (f.lenient) p.set('lenient', '1');
  if (f.contrasts.length) p.set('contrasts', f.contrasts.join(','));
  if (f.sex.length) p.set('sex', f.sex.join(','));
  if (f.age) p.set('age', `${f.age[0]}-${f.age[1]}`);
  if (f.minSubjects) p.set('min', String(f.minSubjects));
  if (f.sort !== 'relevance') p.set('sort', f.sort);
  const s = p.toString().replace(/%2C/g, ',');
  return s ? `?${s}` : '';
}

export function fromQuery(search: string): FilterState {
  const p = new URLSearchParams(search);
  const list = (k: string) => (p.get(k) ? p.get(k)!.split(',').filter(Boolean) : []);
  const f = emptyFilters();
  f.q = p.get('q') ?? '';
  for (const facet of FACETS) {
    const v = list(facet.id);
    if (v.length) f.facets[facet.id] = v;
  }
  f.rules = list('rules');
  f.lenient = p.get('lenient') === '1';
  f.contrasts = list('contrasts');
  f.sex = list('sex');
  const age = /^(\d+)-(\d+)$/.exec(p.get('age') ?? '');
  if (age) f.age = [Number(age[1]), Number(age[2])];
  f.minSubjects = Math.max(0, Number(p.get('min')) || 0);
  const sort = p.get('sort') as Sort | null;
  if (sort && ['relevance', 'subjects', 'newest', 'name', 'match'].includes(sort)) f.sort = sort;
  return f;
}

export function activeCount(f: FilterState): number {
  return (
    Object.values(f.facets).reduce((s, v) => s + (v?.length ?? 0), 0) +
    f.rules.length +
    f.contrasts.length +
    f.sex.length +
    (f.age ? 1 : 0) +
    (f.minSubjects ? 1 : 0)
  );
}

export function hasCohort(f: FilterState): boolean {
  return !!(f.contrasts.length || f.sex.length || f.age || f.minSubjects || f.facets.condition?.length);
}

/** Values of a facet for one dataset. */
export function facetValues(d: DatasetSummary, facet: FacetId): string[] {
  switch (facet) {
    case 'access':
      return [d.meta.access.type];
    case 'license':
      return d.licenseIds;
    case 'task':
      return d.meta.tasks ?? [];
    case 'format':
      return d.meta.formats ?? [];
    default:
      return d.facets[facet] ?? [];
  }
}

export function makeSearch(datasets: DatasetSummary[]) {
  const ms = new MiniSearch<{ id: string; name: string; text: string }>({
    fields: ['name', 'text'],
    storeFields: ['id'],
    searchOptions: { boost: { name: 3 }, prefix: true, fuzzy: 0.15, combineWith: 'AND' }
  });
  ms.addAll(datasets.map((d) => ({ id: d.id, name: `${d.meta.name} ${d.meta.full_name ?? ''}`, text: d.searchText })));
  return ms;
}

export interface Result {
  dataset: DatasetSummary;
  score: number;
  /** Matching subjects for the cohort filters, when any are set. */
  match?: Estimate;
}

export function cohortConstraints(f: FilterState, vocab: VocabData): Constraint[] {
  const c: Constraint[] = [];
  if (f.contrasts.length) c.push({ dim: 'contrast', values: f.contrasts });
  if (f.facets.condition?.length)
    c.push({ dim: 'condition', values: f.facets.condition.flatMap((id) => withDescendants(vocab, 'condition', id)) });
  if (f.sex.length) c.push({ dim: 'sex', values: f.sex });
  if (f.age) c.push({ dim: 'age', range: [f.age[0], f.age[1] >= AGE_MAX ? Infinity : f.age[1] + 1] });
  return c;
}

export function dimsInfo(vocab: VocabData): Record<string, DimensionInfo> {
  return Object.fromEntries(vocab.dimensions.map((d) => [d.id, d]));
}

function passesFacets(d: DatasetSummary, f: FilterState, vocab: VocabData, skip?: FacetId): boolean {
  for (const facet of FACETS) {
    if (facet.id === skip) continue;
    const selected = f.facets[facet.id];
    if (!selected?.length) continue;
    const want = ['condition', 'anatomy', 'modality'].includes(facet.id)
      ? selected.flatMap((id) => withDescendants(vocab, facet.id, id))
      : selected;
    const have = facetValues(d, facet.id);
    if (!want.some((v) => have.includes(v))) return false;
  }
  return true;
}

function passesRules(d: DatasetSummary, f: FilterState, vocab: VocabData): boolean {
  for (const id of f.rules) {
    const rule = vocab.licenseRules.rules.find((r) => r.id === id);
    if (!rule) continue;
    const t = tone(d.rules[id], rule.good);
    if (!(t === 'good' || (f.lenient && t === 'mixed'))) return false;
  }
  return true;
}

export function run(
  datasets: DatasetSummary[],
  search: MiniSearch,
  f: FilterState,
  vocab: VocabData
): { results: Result[]; facetCounts: Record<string, Map<string, number>> } {
  let scores: Map<string, number> | null = null;
  if (f.q.trim()) {
    scores = new Map(search.search(f.q.trim()).map((r) => [r.id as string, r.score]));
    if (!scores.size) {
      // Fall back to any-word matching before showing nothing.
      scores = new Map(search.search(f.q.trim(), { combineWith: 'OR' }).map((r) => [r.id as string, r.score]));
    }
  }
  const dims = dimsInfo(vocab);
  const constraints = cohortConstraints(f, vocab);
  const cohort = constraints.length > 0 || f.minSubjects > 0;

  const base = datasets.filter((d) => (!scores || scores.has(d.id)) && passesRules(d, f, vocab));
  const results: Result[] = [];
  for (const d of base) {
    if (!passesFacets(d, f, vocab)) continue;
    let match: Estimate | undefined;
    if (cohort) {
      match = estimate({ rows: d.stats, dims, facets: d.facets }, 'subjects', constraints);
      if (match.hi === 0 && constraints.length) continue;
      if (f.minSubjects && match.hi < f.minSubjects) continue;
    }
    results.push({ dataset: d, score: scores?.get(d.id) ?? 0, match });
  }

  // Counts per facet value ignore that facet's own selection, so options never vanish when picked.
  const facetCounts: Record<string, Map<string, number>> = {};
  for (const facet of FACETS) {
    const counts = new Map<string, number>();
    for (const d of base) {
      if (!passesFacets(d, f, vocab, facet.id)) continue;
      for (const v of new Set(facetValues(d, facet.id))) counts.set(v, (counts.get(v) ?? 0) + 1);
    }
    facetCounts[facet.id] = counts;
  }

  const subjects = (r: Result) => r.dataset.totals.subjects ?? 0;
  const sorters: Record<Sort, (a: Result, b: Result) => number> = {
    relevance: (a, b) => b.score - a.score || subjects(b) - subjects(a),
    subjects: (a, b) => subjects(b) - subjects(a),
    newest: (a, b) => (b.dataset.meta.updated ?? b.dataset.meta.year) - (a.dataset.meta.updated ?? a.dataset.meta.year),
    name: (a, b) => a.dataset.meta.name.localeCompare(b.dataset.meta.name),
    match: (a, b) => (b.match?.lo ?? 0) - (a.match?.lo ?? 0) || finite(b.match?.hi) - finite(a.match?.hi)
  };
  const sort = f.sort === 'relevance' && !scores && cohort ? 'match' : f.sort;
  results.sort(sorters[sort]);
  return { results, facetCounts };
}

const finite = (n: number | undefined) => (n === undefined || !Number.isFinite(n) ? 0 : n);

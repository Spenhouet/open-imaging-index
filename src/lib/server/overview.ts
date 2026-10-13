import { FACETS, facetValues } from '#lib/catalog/filter.js';
import type { DatasetSummary, VocabData } from '#lib/catalog/types.js';

/** Datasets rendered into the catalog HTML. The rest arrive with summaries.json. */
export const INITIAL_CARDS = 12;

/** The dataset count and filter options, so the page is complete before summaries.json loads. */
export function overview(datasets: DatasetSummary[], vocab: VocabData) {
  const contrasts = new Map<string, number>();
  for (const d of datasets) for (const c of d.facets.contrast ?? []) contrasts.set(c, (contrasts.get(c) ?? 0) + 1);
  const order = (vocab.terms.contrast ?? []).map((t) => t.id);

  const facetOptions: Record<string, string[]> = {};
  // Most used first, the same order the filter column uses once counts are in, so nothing reorders on load.
  for (const f of FACETS) {
    const n = new Map<string, number>();
    for (const d of datasets) for (const v of new Set(facetValues(d, f.id))) n.set(v, (n.get(v) ?? 0) + 1);
    facetOptions[f.id] = [...n].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([v]) => v);
  }

  return {
    count: datasets.length,
    contrastOptions: [...contrasts]
      .map(([id, count]) => ({ id, count }))
      .sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id)),
    facetOptions,
    /** For JSON-LD: every dataset, by name. */
    names: datasets.map((d) => ({ id: d.id, name: d.meta.name }))
  };
}

import { FACETS, facetValues } from '#lib/catalog/filter.js';
import type { DatasetSummary, VocabData } from '#lib/catalog/types.js';

/** Datasets rendered into the catalog HTML. The rest arrive with summaries.json. */
export const INITIAL_CARDS = 12;

/** Small catalog-wide numbers and filter options, so the page is complete before summaries.json loads. */
export function overview(datasets: DatasetSummary[], vocab: VocabData) {
  const modality = new Map<string, number>();
  for (const d of datasets) {
    // Narrower modalities (computed radiography) count under their parent (X-ray), once per dataset.
    const top = new Set(
      (d.facets.modality ?? []).map((m) => vocab.terms.modality?.find((t) => t.id === m)?.parent ?? m)
    );
    for (const m of top) modality.set(m, (modality.get(m) ?? 0) + 1);
  }
  const sum = [...modality.values()].reduce((a, b) => a + b, 0) || 1;

  const contrasts = new Map<string, number>();
  for (const d of datasets) for (const c of d.facets.contrast ?? []) contrasts.set(c, (contrasts.get(c) ?? 0) + 1);
  const order = (vocab.terms.contrast ?? []).map((t) => t.id);

  const facetOptions: Record<string, string[]> = {};
  for (const f of FACETS) facetOptions[f.id] = [...new Set(datasets.flatMap((d) => facetValues(d, f.id)))];

  return {
    count: datasets.length,
    subjects: datasets.reduce((s, d) => s + (d.totals.subjects ?? 0), 0),
    conditions: new Set(datasets.flatMap((d) => (d.facets.condition ?? []).filter((c) => c !== 'healthy'))).size,
    countries: new Set(datasets.flatMap((d) => d.facets.country ?? [])).size,
    modalityMix: [...modality]
      .map(([id, count]) => ({ id, count, share: (count / sum) * 100 }))
      .sort((a, b) => b.count - a.count),
    contrastOptions: [...contrasts]
      .map(([id, count]) => ({ id, count }))
      .sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id)),
    facetOptions,
    /** For JSON-LD: every dataset, by name. */
    names: datasets.map((d) => ({ id: d.id, name: d.meta.name }))
  };
}

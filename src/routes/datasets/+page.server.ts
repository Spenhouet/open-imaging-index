import { getCatalog } from '#lib/server/catalog.js';

export function load() {
  const { datasets } = getCatalog();
  return {
    datasets: datasets
      .map((d) => ({
        id: d.id,
        name: d.meta.name,
        full_name: d.meta.full_name,
        modalities: d.facets.modality ?? [],
        anatomy: d.facets.anatomy ?? [],
        subjects: d.totals.subjects,
        year: d.meta.year
      }))
      .sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }))
  };
}

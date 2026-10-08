import { error } from '@sveltejs/kit';
import { getCatalog, getDataset } from '#lib/server/catalog.js';

export function entries() {
  return getCatalog().datasets.map((d) => ({ id: d.id }));
}

export function load({ params }) {
  const dataset = getDataset(params.id);
  if (!dataset) error(404, 'No such dataset');
  const related = (dataset.meta.related ?? [])
    .map((id) => getDataset(id))
    .filter((d) => d !== undefined)
    .map((d) => ({ id: d.id, name: d.meta.name, summary: d.meta.summary }));
  return { dataset, related };
}

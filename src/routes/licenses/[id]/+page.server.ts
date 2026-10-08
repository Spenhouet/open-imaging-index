import { error } from '@sveltejs/kit';
import { getCatalog } from '#lib/server/catalog.js';

export function entries() {
  return getCatalog().licenses.map((l) => ({ id: l.id }));
}

export function load({ params }) {
  const { licenses, datasets } = getCatalog();
  const license = licenses.find((l) => l.id === params.id);
  if (!license) error(404, 'No such license');
  const users = datasets
    .filter((d) => d.licenses.some((l) => l.license.id === license.id))
    .map((d) => ({
      id: d.id,
      name: d.meta.name,
      summary: d.meta.summary,
      applies_to: d.licenses.find((l) => l.license.id === license.id)?.applies_to
    }));
  return { license, users };
}

import { getCatalog } from '#lib/server/catalog.js';

export function load() {
  const { licenses, datasets } = getCatalog();
  const usage = new Map<string, number>();
  for (const d of datasets)
    for (const l of new Set(d.licenses.map((x) => x.license.id))) usage.set(l, (usage.get(l) ?? 0) + 1);
  return { fullLicenses: licenses, usage: Object.fromEntries(usage) };
}

import { dev } from '$app/env';
import { loadCatalog } from '#lib/catalog/load.js';
import type { Catalog, DatasetEntry, DatasetSummary } from '#lib/catalog/types.js';
import { label } from '#lib/catalog/vocab.js';

let cached: Catalog | null = null;

/** The whole catalog. The build fails on any validation error, dev reloads the files on every request. */
export function getCatalog(): Catalog {
  if (cached && !dev) return cached;
  const { catalog, problems } = loadCatalog();
  const errors = problems.filter((p) => p.level === 'error');
  if (errors.length) {
    const list = errors.map((p) => `  ${p.file}${p.line ? `:${p.line}` : ''}  ${p.message}`).join('\n');
    throw new Error(`The catalog has ${errors.length} errors. Run bun run validate.\n${list}`);
  }
  cached = catalog;
  return catalog;
}

export function getDataset(id: string): DatasetEntry | undefined {
  return getCatalog().datasets.find((d) => d.id === id);
}

export function summarize(d: DatasetEntry, catalog: Catalog): DatasetSummary {
  const v = catalog.vocab;
  const words = [
    d.meta.name,
    d.meta.full_name,
    d.meta.summary,
    ...(d.meta.keywords ?? []),
    ...d.meta.creators.map((c) => c.name),
    ...Object.entries(d.facets).flatMap(([dim, vals]) =>
      vals.flatMap((id) => [label(v, dim, id), ...(v.terms[dim]?.find((t) => t.id === id)?.synonyms ?? [])])
    ),
    ...(d.meta.tasks ?? []).map((t) => label(v, 'task', t))
  ];
  return {
    id: d.id,
    meta: d.meta,
    // Only what the estimator and charts need.
    stats: d.stats.map((r) => ({ ...r, source: '', where: '', note: '', line: 0 })),
    facets: d.facets,
    totals: d.totals,
    rules: d.rules,
    purposes: d.purposes,
    licenseIds: d.licenses.map((l) => l.license.id),
    searchText: words.filter(Boolean).join(' ')
  };
}

export function summaries(): DatasetSummary[] {
  const c = getCatalog();
  return c.datasets.map((d) => summarize(d, c));
}

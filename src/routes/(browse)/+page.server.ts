import { getCatalog, summaries } from '#lib/server/catalog.js';
import { INITIAL_CARDS, overview } from '#lib/server/overview.js';

export function load() {
  const all = summaries();
  // Largest datasets first, matching the default sort without a query.
  // Cards only need the total rows. Filters wait for summaries.json, which has everything.
  const initial = [...all]
    .sort((a, b) => (b.totals.subjects ?? 0) - (a.totals.subjects ?? 0))
    .slice(0, INITIAL_CARDS)
    .map((d) => ({ ...d, stats: d.stats.filter((r) => !Object.keys(r.by).length), searchText: '' }));
  return { initial, overview: overview(all, getCatalog().vocab) };
}

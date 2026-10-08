import { getCatalog, summaries } from '#lib/server/catalog.js';
import { overview } from '#lib/server/overview.js';

export function load() {
  // Only the small overview: filter options and counts. The datasets load in the browser.
  return { overview: overview(summaries(), getCatalog().vocab) };
}

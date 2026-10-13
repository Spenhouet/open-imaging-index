import { getCatalog, summaries } from '#lib/server/catalog.js';
import { overview } from '#lib/server/overview.js';

// Filter options and the dataset count, shared by the Datasets and Explore views.
export function load() {
  return { overview: overview(summaries(), getCatalog().vocab) };
}

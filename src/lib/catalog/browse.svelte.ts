import { link } from '#lib/site.js';
import { vocab } from './meta.js';
import { emptyFilters, makeSearch, run, type FilterState } from './filter.js';
import { restoreSummaries } from './summaries.js';
import type { DatasetSummary } from './types.js';

/**
 * State shared by the Datasets and Explore views: the selection (search and filters) and the catalog summaries.
 * It lives for the browser session, so switching views or visiting a dataset page and coming back keeps the
 * selection, and summaries.json is downloaded and parsed once.
 */
class Browse {
  filters = $state<FilterState>(emptyFilters());
  datasets = $state.raw<DatasetSummary[]>([]);
  loaded = $state(false);
  failed = $state(false);
  /** Datasets ticked in Explore for comparison. */
  picked = $state<string[]>([]);
  search = $derived(makeSearch(this.datasets));
  /** Results and facet counts for the current selection, shared by both views and the filter column. */
  outcome = $derived(run(this.datasets, this.search, this.filters, vocab));
  #loading: Promise<void> | undefined;

  load(): Promise<void> {
    this.#loading ??= fetch(link('summaries.json'))
      .then((res) => {
        if (!res.ok) throw new Error(String(res.status));
        return res.json();
      })
      .then((data: DatasetSummary[]) => {
        this.datasets = restoreSummaries(data);
        this.loaded = true;
        this.failed = false;
      })
      .catch(() => {
        this.failed = true;
        this.#loading = undefined;
      });
    return this.#loading;
  }
}

export const browse = new Browse();

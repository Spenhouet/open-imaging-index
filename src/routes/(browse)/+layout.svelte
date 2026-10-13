<script lang="ts">
  import { browser } from '$app/env';
  import { afterNavigate } from '$app/navigation';
  import { page } from '$app/state';
  import ChartColumn from '@lucide/svelte/icons/chart-column';
  import List from '@lucide/svelte/icons/list';
  import Search from '@lucide/svelte/icons/search';
  import SlidersHorizontal from '@lucide/svelte/icons/sliders-horizontal';
  import { browse } from '#lib/catalog/browse.svelte.js';
  import { FACETS, activeCount, emptyFilters, fromQuery, hasCohort, toQuery, type Sort } from '#lib/catalog/filter.js';
  import { licenses, vocab } from '#lib/catalog/meta.js';
  import FilterPanel from '#lib/components/app/FilterPanel.svelte';
  import * as Sheet from '#lib/components/ui/sheet/index.js';
  import { link } from '#lib/site.js';
  import { cn } from '#lib/utils.js';

  // Datasets and Explore are two views of one selection. This layout owns the search and filter column, which stays
  // in place when switching views, and the shared selection lives in `browse` for the whole browser session.
  let { data, children } = $props();
  const ov = $derived(data.overview);
  const licenseNames = new Map(licenses.map((l) => [l.id, l.short_name ?? l.name]));

  // A link with a selection in its query wins. Without one (a plain "Datasets" or "Explore" link), the session's
  // selection is kept and the page writes it back into the URL.
  // The selection is also kept in this tab's session storage, so a reload or a full page load keeps it too.
  const STORE = 'open-imaging-index:selection';
  function readUrl() {
    const query = toQuery(fromQuery(window.location.search));
    if (query) {
      if (query !== toQuery(browse.filters)) browse.filters = fromQuery(window.location.search);
      return;
    }
    let saved = '';
    try {
      saved = sessionStorage.getItem(STORE) ?? '';
    } catch {
      // Storage can be blocked. The selection then only lives in memory.
    }
    if (saved && !activeCount(browse.filters) && !browse.filters.q) browse.filters = fromQuery(saved);
  }
  $effect(() => {
    const query = toQuery(browse.filters);
    try {
      sessionStorage.setItem(STORE, query);
    } catch {
      // See above.
    }
  });
  // Read during setup, before the views below write their own URL from the selection.
  if (browser) {
    readUrl();
    browse.load();
  }
  afterNavigate((nav) => {
    if (nav.type === 'popstate') readUrl();
  });

  const emptyCounts = Object.fromEntries(FACETS.map((f) => [f.id, new Map<string, number>()]));
  const reset = () => (browse.filters = { ...emptyFilters(), q: browse.filters.q });
  let sheetOpen = $state(false);

  const views = [
    { href: '', label: 'Datasets', icon: List },
    { href: 'explore/', label: 'Explore', icon: ChartColumn }
  ];
  const onExplore = $derived(page.url.pathname.startsWith(link('explore/')));

  // Sorting only applies to the card list. Explore's table sorts by its own column headers.
  const sorts: { id: Sort; label: string }[] = [
    { id: 'relevance', label: 'Best match' },
    { id: 'subjects', label: 'Most subjects' },
    { id: 'newest', label: 'Newest' },
    { id: 'name', label: 'Name' }
  ];
  const filtering = $derived(activeCount(browse.filters) > 0 || browse.filters.q.trim() !== '');
  // Until the full catalog is here, a filtered count would be incomplete.
  const waiting = $derived(!browse.loaded && filtering);
  const count = $derived(browse.loaded ? browse.outcome.results.length : ov.count);
</script>

<svelte:head>
  <link rel="preload" href={link('summaries.json')} as="fetch" crossorigin="anonymous" />
</svelte:head>

{#snippet searchBox()}
  <label class="relative block">
    <span class="sr-only">Search datasets</span>
    <Search class="pointer-events-none absolute top-1/2 left-3.5 size-4.5 -translate-y-1/2 text-muted-foreground" />
    <input
      type="search"
      bind:value={browse.filters.q}
      placeholder="BraTS, UK Biobank, k-space..."
      class="h-11 w-full rounded-xl border border-input bg-card pr-3 pl-10 text-sm shadow-sm transition-shadow outline-none placeholder:text-muted-foreground focus:border-primary/50 focus:ring-4 focus:ring-primary/15"
    />
  </label>
{/snippet}

{#snippet sortSelect()}
  <label class="flex items-center justify-between gap-3 text-sm text-muted-foreground">
    Sort
    <select
      class="h-9 min-w-0 flex-1 rounded-lg border border-border bg-card px-2 text-sm text-foreground"
      bind:value={browse.filters.sort}
    >
      {#each sorts as s (s.id)}<option value={s.id}>{s.label}</option>{/each}
      {#if hasCohort(browse.filters)}<option value="match">Most matching subjects</option>{/if}
    </select>
  </label>
{/snippet}

{#snippet filterPanel()}
  <FilterPanel
    bind:filters={browse.filters}
    {vocab}
    facetCounts={browse.loaded ? browse.outcome.facetCounts : emptyCounts}
    countsReady={browse.loaded}
    allFacetValues={ov.facetOptions}
    contrastOptions={ov.contrastOptions}
    {licenseNames}
    onReset={reset}
  />
{/snippet}

<div class="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 pt-8 md:px-6 lg:grid-cols-[18rem_minmax(0,1fr)]">
  <aside class="hidden lg:block">
    <!-- Sticks exactly where it starts (57px header + 32px padding), so it does not move when the page scrolls.
         The side padding keeps borders and focus rings inside the scrolling box, which would clip them. -->
    <div class="sticky top-[89px] -mx-2 max-h-[calc(100vh-89px)] overflow-y-auto px-2 pb-8">
      <p class="text-lg font-semibold tracking-tight" aria-hidden="true">Medical imaging datasets</p>
      <div class="mt-3">{@render searchBox()}</div>
      {#if !onExplore}<div class="mt-3">{@render sortSelect()}</div>{/if}
      <div class="my-5 border-t border-border"></div>
      {@render filterPanel()}
    </div>
  </aside>

  <div class="min-w-0">
    <div class="mb-4 lg:hidden">{@render searchBox()}</div>
    <div class="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2">
      <Sheet.Root bind:open={sheetOpen}>
        <Sheet.Trigger
          class="inline-flex h-9 items-center gap-2 rounded-lg border border-border bg-card px-3 text-sm font-medium lg:hidden"
        >
          <SlidersHorizontal class="size-4" /> Filters
          {#if activeCount(browse.filters)}<span
              class="rounded-full bg-primary px-1.5 text-xs text-primary-foreground tabular"
              >{activeCount(browse.filters)}</span
            >{/if}
        </Sheet.Trigger>
        <Sheet.Content side="left" class="w-[22rem] max-w-[90vw] overflow-y-auto p-5">
          <Sheet.Title class="sr-only">Filters</Sheet.Title>
          {#if !onExplore}
            {@render sortSelect()}
            <div class="my-5 border-t border-border"></div>
          {/if}
          {@render filterPanel()}
        </Sheet.Content>
      </Sheet.Root>

      <!-- Below desktop width the count takes its own line, under the Filters button and the view switch. -->
      <p class="text-sm text-muted-foreground max-lg:order-last max-lg:w-full" aria-live="polite">
        {#if waiting}
          Loading the full catalog...
        {:else}
          <span class="font-semibold text-foreground tabular">{count}</span>
          {count === 1 ? 'dataset' : 'datasets'}
        {/if}
        {#if !onExplore && hasCohort(browse.filters)}<span class="max-sm:hidden"
            >· matching subjects estimated per dataset</span
          >{/if}
      </p>

      <!-- Two views of the same selection. The query carries over, so switching never loses a filter. -->
      <nav class="ml-auto inline-flex rounded-lg bg-muted p-1" aria-label="View">
        {#each views as v (v.href)}
          {@const active = v.href ? onExplore : !onExplore}
          <a
            href={link(v.href) + toQuery(browse.filters)}
            aria-current={active ? 'page' : undefined}
            class={cn(
              'inline-flex h-8 items-center gap-1.5 rounded-md px-2.5 text-sm font-medium transition-colors sm:px-3',
              active ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
            )}><v.icon class="size-4 max-sm:hidden" />{v.label}</a
          >
        {/each}
      </nav>
    </div>
    {@render children()}
  </div>
</div>

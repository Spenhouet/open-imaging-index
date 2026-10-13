<script lang="ts">
  import { datasetCount, licenses, vocab } from '#lib/catalog/meta.js';
  import { onMount, untrack } from 'svelte';
  import { goto } from '$app/navigation';
  import Search from '@lucide/svelte/icons/search';
  import SlidersHorizontal from '@lucide/svelte/icons/sliders-horizontal';
  import X from '@lucide/svelte/icons/x';
  import * as Sheet from '#lib/components/ui/sheet/index.js';
  import Pagination from '#lib/components/app/Pagination.svelte';
  import DatasetCard from '#lib/components/app/DatasetCard.svelte';
  import FilterPanel from '#lib/components/app/FilterPanel.svelte';
  import Seo from '#lib/components/app/Seo.svelte';
  import {
    FACETS,
    RULE_FILTERS,
    activeCount,
    emptyFilters,
    fromQuery,
    hasCohort,
    makeSearch,
    run,
    toQuery,
    type FilterState,
    type Sort
  } from '#lib/catalog/filter.js';
  import { label } from '#lib/catalog/vocab.js';
  import type { DatasetSummary } from '#lib/catalog/types.js';
  import { SITE_NAME, SITE_TAGLINE, SITE_URL, link } from '#lib/site.js';
  import { cn } from '#lib/utils.js';

  let { data } = $props();

  const ov = $derived(data.overview);
  const licenseNames = $derived(new Map(licenses.map((l) => [l.id, l.short_name ?? l.name])));

  // The HTML carries the largest datasets. The full catalog loads right after, so filters see everything.
  let datasets = $state.raw<DatasetSummary[]>(untrack(() => data.initial));
  let loaded = $state(false);
  let loadError = $state(false);
  const search = $derived(makeSearch(datasets));

  let filters = $state<FilterState>(emptyFilters());
  let ready = false;

  onMount(async () => {
    filters = fromQuery(window.location.search);
    pendingPage = Math.max(1, Number(new URLSearchParams(window.location.search).get('page')) || 1);
    ready = true;
    try {
      const res = await fetch(link('summaries.json'));
      if (!res.ok) throw new Error(String(res.status));
      datasets = await res.json();
      loaded = true;
    } catch {
      loadError = true;
    }
  });

  // Keep the URL in sync so every view can be shared and survives a reload.
  $effect(() => {
    // Keep the requested page in the URL while the catalog is still loading.
    const query = withPage(toQuery(filters), loaded ? current : page);
    if (!untrack(() => ready)) return;
    if (query !== window.location.search && !(query === '' && window.location.search === '')) {
      goto(link('') + query, { shallow: true, replace: true, reset: false });
    }
  });

  const outcome = $derived(run(datasets, search, filters, vocab));
  const results = $derived(outcome.results);
  const filtering = $derived(activeCount(filters) > 0 || filters.q.trim() !== '');
  // Until the full catalog is here, filtered results would be incomplete.
  const waiting = $derived(!loaded && filtering);

  // Results come in pages of 30. The page is part of the URL, and changing a filter goes back to page 1.
  const PAGE = 30;
  let page = $state(1);
  // The page from the URL, applied once after the filters from the URL have been read.
  let pendingPage = 1;
  $effect(() => {
    void toQuery(filters);
    page = pendingPage;
    pendingPage = 1;
  });
  const pageCount = $derived(Math.max(1, Math.ceil(results.length / PAGE)));
  // Before the full catalog is loaded only the first page exists.
  const current = $derived(Math.min(page, pageCount));
  const visible = $derived(results.slice((current - 1) * PAGE, current * PAGE));

  function withPage(query: string, p: number) {
    if (p <= 1) return query;
    return `${query}${query ? '&' : '?'}page=${p}`;
  }
  const pageHref = (p: number) => link('') + withPage(toQuery(filters), p);
  let listTop = $state<HTMLElement>();
  function goToPage(p: number) {
    page = p;
    listTop?.scrollIntoView({ block: 'start' });
  }
  const resultCount = $derived(loaded ? results.length : ov.count);

  const emptyCounts = Object.fromEntries(FACETS.map((f) => [f.id, new Map<string, number>()]));

  // Chips that summarize the active filters above the results.
  const chips = $derived.by(() => {
    const out: { key: string; text: string; remove: () => void }[] = [];
    for (const f of FACETS) {
      for (const id of filters.facets[f.id] ?? []) {
        const text =
          f.id === 'license' ? (licenseNames.get(id) ?? id) : label(vocab, f.id === 'access' ? 'access' : f.id, id);
        out.push({
          key: `${f.id}:${id}`,
          text,
          remove: () =>
            (filters.facets = { ...filters.facets, [f.id]: (filters.facets[f.id] ?? []).filter((x) => x !== id) })
        });
      }
    }
    for (const id of filters.rules) {
      out.push({
        key: `rule:${id}`,
        text: RULE_FILTERS.find((r) => r.id === id)?.label ?? id,
        remove: () => (filters.rules = filters.rules.filter((x) => x !== id))
      });
    }
    if (filters.contrasts.length)
      out.push({
        key: 'contrasts',
        text: `Has ${filters.contrasts.join(' + ')}`,
        remove: () => (filters.contrasts = [])
      });
    for (const s of filters.sex)
      out.push({
        key: `sex:${s}`,
        text: label(vocab, 'sex', s),
        remove: () => (filters.sex = filters.sex.filter((x) => x !== s))
      });
    if (filters.age) {
      const [a, b] = filters.age;
      out.push({ key: 'age', text: `Age ${a} to ${b >= 100 ? '100+' : b}`, remove: () => (filters.age = null) });
    }
    if (filters.minSubjects)
      out.push({
        key: 'min',
        text: `At least ${filters.minSubjects} subjects`,
        remove: () => (filters.minSubjects = 0)
      });
    return out;
  });

  const sorts: { id: Sort; label: string }[] = [
    { id: 'relevance', label: 'Best match' },
    { id: 'subjects', label: 'Most subjects' },
    { id: 'newest', label: 'Newest' },
    { id: 'name', label: 'Name' }
  ];

  let sheetOpen = $state(false);
  const reset = () => (filters = { ...emptyFilters(), q: filters.q });
</script>

<Seo
  title={SITE_NAME}
  description="{SITE_TAGLINE}. {datasetCount} datasets with cohort statistics: subjects per contrast, age, sex, condition and scanner."
  path=""
  jsonLd={{
    '@context': 'https://schema.org',
    '@type': 'DataCatalog',
    name: SITE_NAME,
    description: SITE_TAGLINE,
    url: `${SITE_URL}/`,
    dataset: ov.names.map((d) => ({ '@type': 'Dataset', name: d.name, url: `${SITE_URL}/datasets/${d.id}/` }))
  }}
/>

{#snippet searchBox()}
  <label class="relative block">
    <span class="sr-only">Search datasets</span>
    <Search class="pointer-events-none absolute top-1/2 left-3.5 size-4.5 -translate-y-1/2 text-muted-foreground" />
    <input
      type="search"
      bind:value={filters.q}
      placeholder="Glioma, FLAIR, chest x-ray..."
      class="h-11 w-full rounded-xl border border-input bg-card pr-3 pl-10 text-sm shadow-sm transition-shadow outline-none placeholder:text-muted-foreground focus:border-primary/50 focus:ring-4 focus:ring-primary/15"
    />
  </label>
{/snippet}

<div class="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 pt-8 md:px-6 lg:grid-cols-[18rem_minmax(0,1fr)]">
  <!-- The search heads the filter column, which stays in view while the results scroll. -->
  <aside class="hidden lg:block">
    <div class="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2 pb-8">
      <p class="text-lg font-semibold tracking-tight" aria-hidden="true">Medical imaging datasets</p>
      <div class="mt-3">{@render searchBox()}</div>
      <div class="my-5 border-t border-border"></div>
      <FilterPanel
        bind:filters
        {vocab}
        facetCounts={loaded ? outcome.facetCounts : emptyCounts}
        countsReady={loaded}
        allFacetValues={ov.facetOptions}
        contrastOptions={ov.contrastOptions}
        {licenseNames}
        onReset={reset}
      />
    </div>
  </aside>

  <section aria-label="Results" class="min-w-0">
    <!-- One h1 for the page: visible on phones, where the filter column is hidden, and for screen readers on desktop. -->
    <div class="mb-4 lg:mb-0">
      <h1 class="mb-3 text-xl font-semibold tracking-tight lg:sr-only">Medical imaging datasets</h1>
      <div class="lg:hidden">{@render searchBox()}</div>
    </div>
    <div class="flex flex-wrap items-center gap-3">
      <Sheet.Root bind:open={sheetOpen}>
        <Sheet.Trigger
          class="inline-flex h-9 items-center gap-2 rounded-lg border border-border bg-card px-3 text-sm font-medium lg:hidden"
        >
          <SlidersHorizontal class="size-4" /> Filters
          {#if activeCount(filters)}<span class="rounded-full bg-primary px-1.5 text-xs text-primary-foreground tabular"
              >{activeCount(filters)}</span
            >{/if}
        </Sheet.Trigger>
        <Sheet.Content side="left" class="w-[22rem] max-w-[90vw] overflow-y-auto p-5">
          <Sheet.Title class="sr-only">Filters</Sheet.Title>
          <FilterPanel
            bind:filters
            {vocab}
            facetCounts={loaded ? outcome.facetCounts : emptyCounts}
            countsReady={loaded}
            allFacetValues={ov.facetOptions}
            contrastOptions={ov.contrastOptions}
            {licenseNames}
            onReset={reset}
          />
        </Sheet.Content>
      </Sheet.Root>

      <p class="text-sm text-muted-foreground" aria-live="polite">
        {#if waiting}
          Loading the full catalog...
        {:else}
          <span class="font-semibold text-foreground tabular">{resultCount}</span>
          {resultCount === 1 ? 'dataset' : 'datasets'}
        {/if}
        {#if hasCohort(filters)}· matching subjects estimated per dataset{/if}
      </p>

      <a href={link('explore/') + toQuery(filters)} class="text-sm font-medium text-primary hover:underline"
        >Explore this selection</a
      >

      <label class="ml-auto flex items-center gap-2 text-sm text-muted-foreground">
        Sort
        <select
          class="h-9 rounded-lg border border-border bg-card px-2 text-sm text-foreground"
          bind:value={filters.sort}
        >
          {#each sorts as s (s.id)}<option value={s.id}>{s.label}</option>{/each}
          {#if hasCohort(filters)}<option value="match">Most matching subjects</option>{/if}
        </select>
      </label>
    </div>

    {#if chips.length}
      <div class="mt-4 flex flex-wrap gap-2">
        {#each chips as chip (chip.key)}
          <button
            type="button"
            class="inline-flex items-center gap-1 rounded-full bg-accent py-1 pr-2 pl-3 text-xs font-medium text-accent-foreground hover:bg-accent/70"
            onclick={chip.remove}
            aria-label="Remove filter {chip.text}"
          >
            {chip.text}
            <X class="size-3" />
          </button>
        {/each}
      </div>
    {/if}

    {#if loadError}
      <p class="mt-5 rounded-lg bg-accent px-4 py-3 text-sm">
        The full catalog could not be loaded. Showing the {data.initial.length} largest datasets.
        <button type="button" class="font-medium text-primary hover:underline" onclick={() => location.reload()}
          >Retry</button
        >
      </p>
    {/if}
    {#if waiting}
      <div class="mt-5 grid grid-cols-1 gap-4 xl:grid-cols-2" aria-hidden="true">
        {#each { length: 4 } as _, i (i)}
          <div class="h-64 animate-pulse surface"></div>
        {/each}
      </div>
    {:else if results.length}
      <div bind:this={listTop} class="mt-5 grid scroll-mt-24 grid-cols-1 gap-4 xl:grid-cols-2">
        {#each visible as result (result.dataset.id)}
          <DatasetCard {result} {vocab} {licenseNames} />
        {/each}
      </div>
      {#if !loaded && ov.count > results.length}
        <p class="mt-6 text-center text-sm text-muted-foreground">Loading all {ov.count} datasets...</p>
      {:else if pageCount > 1}
        <div class="mt-8 flex flex-col items-center gap-2">
          <Pagination page={current} count={pageCount} href={pageHref} onpage={goToPage} />
          <p class="text-xs text-muted-foreground tabular">
            {(current - 1) * PAGE + 1} to {Math.min(current * PAGE, results.length)} of {results.length}
          </p>
        </div>
      {/if}
    {:else}
      <div class="mt-5 flex flex-col items-center surface px-6 py-16 text-center">
        <p class="text-lg font-semibold">No dataset matches all filters</p>
        <p class="mt-1 max-w-md text-sm text-muted-foreground">
          Remove a filter, or help the index grow: if you know a dataset that fits, add it.
        </p>
        <div class="mt-5 flex gap-2">
          <button
            type="button"
            class={cn('rounded-lg border border-border px-3 py-1.5 text-sm font-medium hover:bg-accent')}
            onclick={reset}>Reset filters</button
          >
          <a
            href={link('contribute/')}
            class="rounded-lg bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground">Add a dataset</a
          >
        </div>
      </div>
    {/if}
  </section>
</div>

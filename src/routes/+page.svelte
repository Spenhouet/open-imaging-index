<script lang="ts">
  import { datasetCount, licenses, vocab } from '#lib/catalog/meta.js';
  import { onMount, untrack } from 'svelte';
  import { goto } from '$app/navigation';
  import Search from '@lucide/svelte/icons/search';
  import SlidersHorizontal from '@lucide/svelte/icons/sliders-horizontal';
  import X from '@lucide/svelte/icons/x';
  import * as Sheet from '#lib/components/ui/sheet/index.js';
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
  import { compact, label, modalityColor } from '#lib/catalog/vocab.js';
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
    const query = toQuery(filters);
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

  // Render results in pages, so thousands of datasets stay fast.
  const PAGE = 30;
  let shown = $state(PAGE);
  $effect(() => {
    void toQuery(filters);
    shown = PAGE;
  });
  const visible = $derived(results.slice(0, shown));
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

  const examples = [
    { text: 'Brain MRI with T1w and FLAIR', query: '?modality=MR&anatomy=brain&contrasts=FLAIR,T1w' },
    { text: "Alzheimer's and dementia", query: '?condition=dementia' },
    { text: 'Children under 18', query: '?age=0-17' },
    { text: 'Chest X-ray', query: '?modality=DX&anatomy=chest' }
  ];
  function applyExample(query: string) {
    filters = fromQuery(query);
  }
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

<section class="border-b border-border bg-[radial-gradient(ellipse_at_top_left,var(--accent),transparent_65%)]">
  <div
    class="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 pt-12 pb-10 md:px-6 md:pt-16 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end"
  >
    <div>
      <h1 class="text-4xl font-semibold tracking-tight text-balance md:text-5xl">
        Find the right medical imaging dataset.
      </h1>
      <p class="mt-4 max-w-2xl text-lg text-pretty text-muted-foreground">
        Search by modality, contrast and condition, then narrow down to the subjects you need: how many have T1w and
        FLAIR, are female, or are between 60 and 80.
      </p>

      <label class="relative mt-8 block max-w-3xl">
        <span class="sr-only">Search datasets</span>
        <Search class="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          bind:value={filters.q}
          placeholder="Search: glioma, chest x-ray, FLAIR, Alzheimer's..."
          class="h-14 w-full rounded-2xl border border-input bg-card pr-4 pl-12 text-base shadow-sm transition-shadow outline-none placeholder:text-muted-foreground focus:border-primary/50 focus:ring-4 focus:ring-primary/15"
        />
      </label>

      <div class="mt-4 flex flex-wrap items-center gap-2 text-sm">
        <span class="text-muted-foreground">Try:</span>
        {#each examples as ex (ex.text)}
          <button
            type="button"
            class="rounded-full border border-border bg-card px-3 py-1 text-foreground/80 transition-colors hover:border-primary/40 hover:text-foreground"
            onclick={() => applyExample(ex.query)}>{ex.text}</button
          >
        {/each}
      </div>
    </div>

    <div class="surface p-5">
      <h2 class="text-xs font-semibold tracking-wide text-muted-foreground uppercase">The index today</h2>
      <dl class="mt-3 grid grid-cols-2 gap-x-4 gap-y-4">
        <div>
          <dt class="text-xs text-muted-foreground">Datasets</dt>
          <dd class="text-2xl font-semibold tracking-tight tabular">{ov.count}</dd>
        </div>
        <div>
          <dt class="text-xs text-muted-foreground">Subjects covered</dt>
          <dd class="text-2xl font-semibold tracking-tight tabular">{compact(ov.subjects)}</dd>
        </div>
        <div>
          <dt class="text-xs text-muted-foreground">Conditions</dt>
          <dd class="text-2xl font-semibold tracking-tight tabular">{ov.conditions}</dd>
        </div>
        <div>
          <dt class="text-xs text-muted-foreground">Countries</dt>
          <dd class="text-2xl font-semibold tracking-tight tabular">{ov.countries}</dd>
        </div>
      </dl>
      <div class="mt-4 border-t border-border pt-4">
        <div class="flex h-2 gap-[2px] overflow-hidden rounded-[4px]" aria-hidden="true">
          {#each ov.modalityMix as m (m.id)}
            <div class="h-full w-(--w) bg-(--c)" style="--w: {m.share}%; --c: {modalityColor(m.id)}"></div>
          {/each}
        </div>
        <ul class="mt-2.5 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
          {#each ov.modalityMix as m (m.id)}
            <li class="flex items-center gap-1.5">
              <span class="size-2 rounded-full bg-(--c)" style="--c: {modalityColor(m.id)}"></span>{label(
                vocab,
                'modality',
                m.id
              )}
              <span class="tabular">{m.count}</span>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</section>

<div class="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 pt-8 md:px-6 lg:grid-cols-[18rem_minmax(0,1fr)]">
  <aside class="hidden lg:block">
    <div class="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2 pb-8">
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
      <div class="mt-5 grid grid-cols-1 gap-4 xl:grid-cols-2">
        {#each visible as result (result.dataset.id)}
          <DatasetCard {result} {vocab} {licenseNames} />
        {/each}
      </div>
      {#if results.length > shown || (!loaded && ov.count > results.length)}
        <div class="mt-6 flex justify-center">
          <button
            type="button"
            disabled={!loaded}
            class="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-accent disabled:opacity-60"
            onclick={() => (shown += PAGE)}
          >
            {#if loaded}Show {Math.min(PAGE, results.length - shown)} more of {results.length - shown}{:else}Loading all {ov.count}
              datasets...{/if}
          </button>
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

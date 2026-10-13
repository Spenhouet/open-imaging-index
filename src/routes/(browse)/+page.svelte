<script lang="ts">
  import { datasetCount, licenses, vocab } from '#lib/catalog/meta.js';
  import { onMount, untrack } from 'svelte';
  import { browse } from '#lib/catalog/browse.svelte.js';
  import { goto } from '$app/navigation';
  import X from '@lucide/svelte/icons/x';
  import Pagination from '#lib/components/app/Pagination.svelte';
  import DatasetCard from '#lib/components/app/DatasetCard.svelte';
  import Seo from '#lib/components/app/Seo.svelte';
  import { FACETS, RULE_FILTERS, activeCount, emptyFilters, makeSearch, run, toQuery } from '#lib/catalog/filter.js';
  import { label } from '#lib/catalog/vocab.js';
  import { SITE_NAME, SITE_TAGLINE, SITE_URL, link } from '#lib/site.js';
  import { cn } from '#lib/utils.js';

  let { data } = $props();

  const ov = $derived(data.overview);
  const licenseNames = $derived(new Map(licenses.map((l) => [l.id, l.short_name ?? l.name])));

  // The HTML carries the largest datasets. The full catalog, shared with Explore, replaces them once loaded.
  const outcome = $derived(
    browse.loaded ? browse.outcome : run(data.initial, makeSearch(data.initial), browse.filters, vocab)
  );
  const loaded = $derived(browse.loaded);
  const loadError = $derived(browse.failed);
  let ready = false;

  onMount(() => {
    pendingPage = Math.max(1, Number(new URLSearchParams(window.location.search).get('page')) || 1);
    ready = true;
  });

  // Keep the URL in sync so every view can be shared and survives a reload.
  $effect(() => {
    // Keep the requested page in the URL while the catalog is still loading.
    const query = withPage(toQuery(browse.filters), loaded ? current : page);
    if (!untrack(() => ready)) return;
    if (query !== window.location.search && !(query === '' && window.location.search === '')) {
      goto(link('') + query, { shallow: true, replace: true, reset: false });
    }
  });

  const results = $derived(outcome.results);
  const filtering = $derived(activeCount(browse.filters) > 0 || browse.filters.q.trim() !== '');
  // Until the full catalog is here, filtered results would be incomplete.
  const waiting = $derived(!loaded && filtering);

  // Results come in pages of 30. The page is part of the URL, and changing a filter goes back to page 1.
  const PAGE = 30;
  let page = $state(1);
  // The page from the URL, applied once after the browse.filters from the URL have been read.
  let pendingPage = 1;
  $effect(() => {
    void toQuery(browse.filters);
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
  const pageHref = (p: number) => link('') + withPage(toQuery(browse.filters), p);
  let listTop = $state<HTMLElement>();
  function goToPage(p: number) {
    page = p;
    listTop?.scrollIntoView({ block: 'start' });
  }

  // Chips that summarize the active browse.filters above the results.
  const chips = $derived.by(() => {
    const out: { key: string; text: string; remove: () => void }[] = [];
    for (const f of FACETS) {
      for (const id of browse.filters.facets[f.id] ?? []) {
        const text =
          f.id === 'license' ? (licenseNames.get(id) ?? id) : label(vocab, f.id === 'access' ? 'access' : f.id, id);
        out.push({
          key: `${f.id}:${id}`,
          text,
          remove: () =>
            (browse.filters.facets = {
              ...browse.filters.facets,
              [f.id]: (browse.filters.facets[f.id] ?? []).filter((x) => x !== id)
            })
        });
      }
    }
    for (const id of browse.filters.rules) {
      out.push({
        key: `rule:${id}`,
        text: RULE_FILTERS.find((r) => r.id === id)?.label ?? id,
        remove: () => (browse.filters.rules = browse.filters.rules.filter((x) => x !== id))
      });
    }
    if (browse.filters.contrasts.length)
      out.push({
        key: 'contrasts',
        text: `Has ${browse.filters.contrasts.join(' + ')}`,
        remove: () => (browse.filters.contrasts = [])
      });
    for (const s of browse.filters.sex)
      out.push({
        key: `sex:${s}`,
        text: label(vocab, 'sex', s),
        remove: () => (browse.filters.sex = browse.filters.sex.filter((x) => x !== s))
      });
    if (browse.filters.age) {
      const [a, b] = browse.filters.age;
      out.push({ key: 'age', text: `Age ${a} to ${b >= 100 ? '100+' : b}`, remove: () => (browse.filters.age = null) });
    }
    if (browse.filters.minSubjects)
      out.push({
        key: 'min',
        text: `At least ${browse.filters.minSubjects} subjects`,
        remove: () => (browse.filters.minSubjects = 0)
      });
    return out;
  });

  const reset = () => (browse.filters = { ...emptyFilters(), q: browse.filters.q });
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

<section aria-label="Results" class="min-w-0">
  <h1 class="sr-only">Medical imaging datasets</h1>
  {#if chips.length}
    <div class="mb-5 flex flex-wrap gap-2">
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
      <p class="text-lg font-semibold">No dataset matches all browse.filters</p>
      <p class="mt-1 max-w-md text-sm text-muted-foreground">
        Remove a filter, or help the index grow: if you know a dataset that fits, add it.
      </p>
      <div class="mt-5 flex gap-2">
        <button
          type="button"
          class={cn('rounded-lg border border-border px-3 py-1.5 text-sm font-medium hover:bg-accent')}
          onclick={reset}>Reset browse.filters</button
        >
        <a
          href={link('contribute/')}
          class="rounded-lg bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground">Add a dataset</a
        >
      </div>
    </div>
  {/if}
</section>

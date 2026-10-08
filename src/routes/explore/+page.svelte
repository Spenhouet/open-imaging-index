<script lang="ts">
  import { onMount, untrack } from 'svelte';
  import { goto } from '$app/navigation';
  import ArrowRight from '@lucide/svelte/icons/arrow-right';
  import Columns3 from '@lucide/svelte/icons/columns-3';
  import RotateCcw from '@lucide/svelte/icons/rotate-ccw';
  import SlidersHorizontal from '@lucide/svelte/icons/sliders-horizontal';
  import { licenses, vocab } from '#lib/catalog/meta.js';
  import * as Sheet from '#lib/components/ui/sheet/index.js';
  import CohortTable from '#lib/components/app/CohortTable.svelte';
  import CopyButton from '#lib/components/app/CopyButton.svelte';
  import CoverageGrid from '#lib/components/app/CoverageGrid.svelte';
  import FilterPanel from '#lib/components/app/FilterPanel.svelte';
  import LegalNote from '#lib/components/app/LegalNote.svelte';
  import Seo from '#lib/components/app/Seo.svelte';
  import FacetBars from '#lib/components/charts/FacetBars.svelte';
  import {
    CHARTS,
    NEEDS,
    breakdown,
    coverage,
    summarize,
    toggle,
    type Bar,
    type ChartDef,
    type Usability
  } from '#lib/catalog/cohort.js';
  import {
    FACETS,
    activeCount,
    emptyFilters,
    fromQuery,
    makeSearch,
    run,
    toQuery,
    type FilterState
  } from '#lib/catalog/filter.js';
  import type { DatasetSummary } from '#lib/catalog/types.js';
  import { compact, formatNumber, label, modalityColor } from '#lib/catalog/vocab.js';
  import { SITE_URL, link } from '#lib/site.js';
  import { cn } from '#lib/utils.js';

  let { data } = $props();
  const ov = $derived(data.overview);
  const licenseNames = new Map(licenses.map((l) => [l.id, l.short_name ?? l.name]));

  let datasets = $state.raw<DatasetSummary[]>([]);
  let loaded = $state(false);
  let filters = $state<FilterState>(emptyFilters());
  // Chosen uses are the license rule filters that NEEDS offers, so the panel and the cohort stay in sync.
  const needs = $derived(filters.rules.filter((r) => NEEDS.some((n) => n.id === r)));
  let picked = $state<string[]>([]);
  let ready = false;

  // The URL carries the same filters as the catalog, plus the chosen uses and the shortlist.
  onMount(async () => {
    const p = new URLSearchParams(window.location.search);
    const f = fromQuery(window.location.search);
    // Links from before uses became filters carry them in `need`.
    const legacy = (p.get('need') ?? '').split(',').filter((n) => NEEDS.some((x) => x.id === n));
    filters = { ...f, rules: [...new Set([...f.rules, ...legacy])] };
    picked = (p.get('pick') ?? '').split(',').filter(Boolean);
    ready = true;
    const res = await fetch(link('summaries.json'));
    if (res.ok) {
      datasets = await res.json();
      loaded = true;
    }
  });

  const extra = $derived(picked.length ? `pick=${picked.join(',')}` : '');
  const query = $derived.by(() => {
    const base = toQuery(filters);
    if (!extra) return base;
    return base ? `${base}&${extra}` : `?${extra}`;
  });
  $effect(() => {
    const q = query;
    if (!untrack(() => ready)) return;
    if (q !== window.location.search && !(q === '' && window.location.search === ''))
      goto(link('explore/') + q, { shallow: true, replace: true, reset: false });
  });

  const search = $derived(makeSearch(datasets));
  const summary = $derived(loaded ? summarize(datasets, search, filters, vocab, needs) : null);
  const facetCounts = $derived(loaded ? run(datasets, search, filters, vocab).facetCounts : {});
  // Charts recompute one at a time between frames, so a click updates the headline at once and the page
  // never freezes, even with thousands of datasets. Older charts stay visible until their update arrives.
  let charts = $state<{ chart: ChartDef; bars: Bar[] }[]>([]);
  let pending = $state(false);
  let run_id = 0;
  $effect(() => {
    if (!loaded) return;
    const f = $state.snapshot(filters) as FilterState;
    const id = ++run_id;
    pending = true;
    (async () => {
      for (const [i, chart] of CHARTS.entries()) {
        await new Promise((r) => setTimeout(r));
        if (id !== run_id) return;
        const bars = breakdown(datasets, search, f, vocab, chart);
        if (id !== run_id) return;
        charts[i] = { chart, bars };
      }
      pending = false;
    })();
  });
  // Coverage ignores the filters, so it is computed once, after the first paint.
  let gaps = $state<ReturnType<typeof coverage> | null>(null);
  $effect(() => {
    if (!loaded || gaps) return;
    const all = datasets;
    setTimeout(() => (gaps = coverage(all, vocab)), 50);
  });
  const emptyCounts = Object.fromEntries(FACETS.map((f) => [f.id, new Map<string, number>()]));

  function keyLabel(chart: ChartDef, key: string) {
    if (chart.kind === 'age') return key === '90' ? '90+' : `${key}-${Number(key) + 9}`;
    if (chart.kind === 'contrast') return `${label(vocab, 'contrast', key)} (${key})`;
    if (chart.kind === 'sex') return label(vocab, 'sex', key);
    return label(vocab, chart.facet === 'access' ? 'access' : chart.id, key);
  }
  function keyColor(chart: ChartDef, key: string) {
    if (chart.id === 'modality') return modalityColor(key);
    if (chart.kind === 'sex') return key === 'female' ? 'var(--series-1)' : 'var(--series-2)';
    return undefined;
  }

  const range = (r: { lo: number; hi: number }) =>
    r.lo === r.hi ? formatNumber(r.lo) : `${compact(r.lo)} to ${compact(r.hi)}`;

  const useInfo: { id: Usability; label: string; color: string; text: string }[] = [
    {
      id: 'usable',
      label: 'Fits your use',
      color: 'var(--good)',
      text: 'Every chosen use is allowed by our reading of the license.'
    },
    {
      id: 'unclear',
      label: 'Check the terms',
      color: 'var(--mixed)',
      text: 'Conditional, or the license is silent on a chosen use.'
    },
    {
      id: 'blocked',
      label: 'Not allowed',
      color: 'var(--bad)',
      text: 'The license rules out at least one chosen use.'
    }
  ];

  function flip(list: string[], id: string) {
    return list.includes(id) ? list.filter((x) => x !== id) : [...list, id];
  }
  const reset = () => (filters = { ...emptyFilters(), q: filters.q });
  let sheetOpen = $state(false);
</script>

<Seo
  title="Explore: build a cohort across medical imaging datasets"
  description="Combine filters across all medical imaging datasets in the index: matching subjects, contrasts, conditions, age, sex, scanners and countries, and which datasets fit your intended use."
  path="explore/"
/>

{#snippet filterPanel()}
  <FilterPanel
    bind:filters
    {vocab}
    facetCounts={loaded ? facetCounts : emptyCounts}
    countsReady={loaded}
    allFacetValues={ov.facetOptions}
    contrastOptions={ov.contrastOptions}
    {licenseNames}
    onReset={reset}
  />
{/snippet}

<div class="mx-auto max-w-7xl px-4 pt-10 md:px-6">
  <div class="max-w-3xl">
    <h1 class="text-3xl font-semibold tracking-tight md:text-4xl">Explore</h1>
    <p class="mt-3 text-lg text-pretty text-muted-foreground">
      Build a cohort across all datasets. Every chart filters the others, and the filters are shared with the catalog.
    </p>
  </div>

  <div class="mt-8 grid gap-8 lg:grid-cols-[18rem_1fr]">
    <aside class="hidden lg:block">
      <div class="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2 pb-8">{@render filterPanel()}</div>
    </aside>

    <div class="min-w-0 space-y-6">
      <div class="flex flex-wrap items-center gap-2 lg:hidden">
        <Sheet.Root bind:open={sheetOpen}>
          <Sheet.Trigger
            class="inline-flex h-9 items-center gap-2 rounded-lg border border-border bg-card px-3 text-sm font-medium"
          >
            <SlidersHorizontal class="size-4" /> Filters
            {#if activeCount(filters)}<span
                class="rounded-full bg-primary px-1.5 text-xs text-primary-foreground tabular"
                >{activeCount(filters)}</span
              >{/if}
          </Sheet.Trigger>
          <Sheet.Content side="left" class="w-[22rem] max-w-[90vw] overflow-y-auto p-5">
            <Sheet.Title class="sr-only">Filters</Sheet.Title>
            {@render filterPanel()}
          </Sheet.Content>
        </Sheet.Root>
      </div>

      {#if !summary}
        <div class="grid gap-5 md:grid-cols-2" aria-label="Loading">
          {#each { length: 4 } as _, i (i)}<div class="h-56 animate-pulse surface"></div>{/each}
        </div>
      {:else}
        <section class="surface p-5 md:p-6" aria-labelledby="cohort-title">
          <div class="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 id="cohort-title" class="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Matching subjects
              </h2>
              <div class="mt-1 text-4xl font-semibold tracking-tight tabular md:text-5xl">{range(summary.total)}</div>
              <p class="mt-2 text-sm text-muted-foreground">
                across <span class="font-medium text-foreground">{summary.datasets.length}</span>
                {summary.datasets.length === 1 ? 'dataset' : 'datasets'}{#if summary.unknown}, plus subjects in
                  {summary.unknown}
                  {summary.unknown === 1 ? 'dataset' : 'datasets'} that report no count{/if}
              </p>
            </div>
            <div class="flex flex-wrap gap-2">
              {#if activeCount(filters)}
                <button
                  type="button"
                  class="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border bg-card px-3 text-sm font-medium hover:bg-accent"
                  onclick={reset}><RotateCcw class="size-3.5" /> Reset</button
                >
              {/if}
              <CopyButton text="{SITE_URL}/explore/{query}" label="Copy link" />
              <a
                href={link('') + toQuery(filters)}
                class="inline-flex h-9 items-center gap-1.5 rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground hover:opacity-90"
                >Show in catalog <ArrowRight class="size-4" /></a
              >
            </div>
          </div>
          <p class="mt-4 text-xs text-muted-foreground">
            A range means some datasets only report totals per attribute, so the exact overlap is unknown. Datasets can
            share subjects, so the sum is an upper view of the pool.
          </p>
        </section>

        <section class="surface p-5 md:p-6" aria-labelledby="use-title">
          <h2 id="use-title" class="text-sm font-semibold">What do you want to do with the data?</h2>
          <div class="mt-3 flex flex-wrap gap-2">
            {#each NEEDS as n (n.id)}
              {@const on = needs.includes(n.id)}
              <button
                type="button"
                aria-pressed={on}
                class={cn(
                  'rounded-full border px-3 py-1 text-sm transition-colors',
                  on
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-card hover:border-primary/40'
                )}
                onclick={() => (filters = { ...filters, rules: flip(filters.rules, n.id) })}>{n.label}</button
              >
            {/each}
          </div>
          {#if needs.length}
            {@const sum = useInfo.reduce((s, u) => s + summary.byUse[u.id].range.hi, 0) || 1}
            <div class="mt-5 flex h-3 gap-[2px] overflow-hidden rounded-[4px]" aria-hidden="true">
              {#each useInfo as u (u.id)}
                {#if summary.byUse[u.id].range.hi}
                  <div
                    class="h-full w-(--w) bg-(--c)"
                    style="--w: {(summary.byUse[u.id].range.hi / sum) * 100}%; --c: {u.color}"
                  ></div>
                {/if}
              {/each}
            </div>
            <dl class="mt-4 grid gap-3 sm:grid-cols-3">
              {#each useInfo as u (u.id)}
                <div>
                  <dt class="flex items-center gap-1.5 text-sm font-medium">
                    <span class="size-2.5 rounded-full bg-(--c)" style="--c: {u.color}"></span>{u.label}
                  </dt>
                  <dd class="mt-0.5 text-lg font-semibold tabular">{range(summary.byUse[u.id].range)}</dd>
                  <dd class="text-xs text-muted-foreground">
                    subjects in {summary.byUse[u.id].datasets}
                    {summary.byUse[u.id].datasets === 1
                      ? 'dataset'
                      : 'datasets'}{#if summary.byUse[u.id].unknown}{` (${summary.byUse[u.id].unknown} without a count)`}{/if}.
                    {u.text}
                  </dd>
                </div>
              {/each}
            </dl>
          {:else}
            <p class="mt-3 text-sm text-muted-foreground">
              Pick one or more uses to keep only datasets whose licenses allow them.
            </p>
          {/if}
          <LegalNote variant="inline" class="mt-4" />
        </section>

        <section aria-label="Breakdowns" aria-busy={pending} class={cn('transition-opacity', pending && 'opacity-80')}>
          <div class="grid gap-5 md:grid-cols-2">
            {#each charts.filter(Boolean) as { chart, bars } (chart.id)}
              {#if bars.length > 0}
                <div class="surface p-4">
                  <div class="flex items-baseline justify-between gap-2 px-2">
                    <h2 class="text-sm font-semibold">{chart.label}</h2>
                    <span class="text-xs text-muted-foreground">subjects, in datasets</span>
                  </div>
                  <div class="mt-3">
                    <FacetBars
                      {bars}
                      labelOf={(k) => keyLabel(chart, k)}
                      colorOf={(k) => keyColor(chart, k)}
                      onToggle={(k) => (filters = toggle(filters, chart, k))}
                      limit={chart.kind === 'age' ? 10 : 7}
                    />
                  </div>
                </div>
              {/if}
            {/each}
          </div>
          <p class="mt-3 text-xs text-muted-foreground">
            Solid bars are certain counts, light bars show how many more subjects there could be. Click a bar to filter
            by it.
          </p>
        </section>

        <section class="surface p-4 md:p-5" aria-labelledby="table-title">
          <div class="flex flex-wrap items-center justify-between gap-3 px-1">
            <h2 id="table-title" class="text-sm font-semibold">Datasets in this cohort</h2>
            <div class="flex items-center gap-2 text-sm">
              {#if picked.length}
                <button type="button" class="text-muted-foreground hover:text-foreground" onclick={() => (picked = [])}
                  >Clear shortlist</button
                >
              {/if}
              <a
                href={link('compare/') + (picked.length ? `?ids=${picked.join(',')}` : '')}
                aria-disabled={picked.length < 2}
                class={cn(
                  'inline-flex h-9 items-center gap-1.5 rounded-lg border border-border bg-card px-3 font-medium hover:bg-accent',
                  picked.length < 2 && 'pointer-events-none opacity-50'
                )}><Columns3 class="size-4" /> Compare {picked.length ? `(${picked.length})` : ''}</a
              >
            </div>
          </div>
          <p class="mt-1 px-1 text-xs text-muted-foreground">
            Tick datasets to put them on a shortlist, then compare them side by side.
          </p>
          <div class="mt-3">
            <CohortTable
              rows={summary.datasets}
              {vocab}
              totalHi={summary.total.hi}
              {picked}
              hasNeeds={needs.length > 0}
              onPick={(id) => (picked = flip(picked, id))}
            />
          </div>
        </section>

        {#if gaps}
          <section class="surface p-4 md:p-5" aria-labelledby="gaps-title">
            <h2 id="gaps-title" class="px-1 text-sm font-semibold">Coverage across the whole index</h2>
            <p class="mt-1 px-1 text-xs text-muted-foreground">
              Which conditions are covered in which modality, regardless of the filters above.
            </p>
            <div class="mt-4"><CoverageGrid data={gaps} {vocab} /></div>
          </section>
        {/if}
      {/if}
    </div>
  </div>
</div>

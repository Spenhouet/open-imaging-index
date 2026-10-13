<script lang="ts">
  import { onMount, untrack } from 'svelte';
  import { browse } from '#lib/catalog/browse.svelte.js';
  import { goto } from '$app/navigation';
  import Columns3 from '@lucide/svelte/icons/columns-3';
  import RotateCcw from '@lucide/svelte/icons/rotate-ccw';
  import { vocab } from '#lib/catalog/meta.js';
  import CohortTable from '#lib/components/app/CohortTable.svelte';
  import CopyButton from '#lib/components/app/CopyButton.svelte';
  import CoverageGrid from '#lib/components/app/CoverageGrid.svelte';
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
  import { activeCount, emptyFilters, toQuery, type FilterState } from '#lib/catalog/filter.js';
  import { compact, formatNumber, label, modalityColor } from '#lib/catalog/vocab.js';
  import { SITE_URL, link } from '#lib/site.js';
  import { cn } from '#lib/utils.js';

  // The selection, the shortlist and the loaded catalog are shared with the Datasets view (browse.svelte.ts).
  const datasets = $derived(browse.datasets);
  const loaded = $derived(browse.loaded);
  const search = $derived(browse.search);
  const filters = $derived(browse.filters);
  const picked = $derived(browse.picked);
  // Chosen uses are the license rule filters that NEEDS offers, so the panel and the cohort stay in sync.
  const needs = $derived(filters.rules.filter((r) => NEEDS.some((n) => n.id === r)));
  let ready = false;

  // Explore adds the shortlist to the shared query. Links from before uses became filters carry them in `need`.
  onMount(() => {
    const p = new URLSearchParams(window.location.search);
    const legacy = (p.get('need') ?? '').split(',').filter((n) => NEEDS.some((x) => x.id === n));
    if (legacy.length) browse.filters.rules = [...new Set([...browse.filters.rules, ...legacy])];
    if (p.get('pick')) browse.picked = p.get('pick')!.split(',').filter(Boolean);
    ready = true;
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

  const summary = $derived(loaded ? summarize(datasets, search, filters, vocab, needs) : null);
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
  const reset = () => (browse.filters = { ...emptyFilters(), q: filters.q });
</script>

<Seo
  title="Explore: build a cohort across medical imaging datasets"
  description="Combine filters across all medical imaging datasets in the index: matching subjects, contrasts, conditions, age, sex, scanners and countries, and which datasets fit your intended use."
  path="explore/"
/>

<h1 class="sr-only">Explore the selection</h1>

<!-- The page is drawn at once. Numbers, bars and the table fill in as they are computed, without the layout jumping. -->
<div class="space-y-6">
  <section class="surface p-5 md:p-6" aria-labelledby="cohort-title">
    <div class="flex flex-wrap items-end justify-between gap-6">
      <div>
        <h2 id="cohort-title" class="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
          Matching subjects
        </h2>
        <div class="mt-1 text-4xl font-semibold tracking-tight tabular md:text-5xl">
          {#if summary}{range(summary.total)}{:else}<span
              class="inline-block h-[0.9em] w-56 animate-pulse rounded-md bg-muted align-middle"
            ></span>{/if}
        </div>
        {#if summary}
          <p class="mt-2 text-sm text-muted-foreground">
            across <span class="font-medium text-foreground">{summary.datasets.length}</span>
            {summary.datasets.length === 1 ? 'dataset' : 'datasets'}{#if summary.unknown}, plus subjects in
              {summary.unknown}
              {summary.unknown === 1 ? 'dataset' : 'datasets'} that report no count{/if}
          </p>
        {:else}
          <p class="mt-2 h-5 w-64 animate-pulse rounded bg-muted"></p>
        {/if}
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
      </div>
    </div>
    <p class="mt-4 text-xs text-muted-foreground">
      A range means some datasets only report totals per attribute, so the exact overlap is unknown. Datasets can share
      subjects, so the sum is an upper view of the pool.
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
            on ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-card hover:border-primary/40'
          )}
          onclick={() => (browse.filters = { ...filters, rules: flip(filters.rules, n.id) })}>{n.label}</button
        >
      {/each}
    </div>
    {#if needs.length && summary}
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
      <dl class="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
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
    {:else if needs.length}
      <div class="mt-5 h-20 animate-pulse rounded-md bg-muted/70"></div>
    {:else}
      <p class="mt-3 text-sm text-muted-foreground">
        Pick one or more uses to keep only datasets whose licenses allow them.
      </p>
    {/if}
    <LegalNote variant="inline" class="mt-4" />
  </section>

  <section aria-label="Breakdowns" aria-busy={pending} class={cn('transition-opacity', pending && 'opacity-80')}>
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
      {#each CHARTS as chart, i (chart.id)}
        {@const bars = charts[i]?.bars}
        {#if !bars}
          <div class="surface p-4" aria-hidden="true">
            <h2 class="px-2 text-sm font-semibold text-muted-foreground">{chart.label}</h2>
            <div class="mt-4 space-y-3 px-2">
              {#each { length: 4 } as _, j (j)}
                <div class="h-4 animate-pulse rounded bg-muted" style:width="{88 - j * 17}%"></div>
              {/each}
            </div>
          </div>
        {:else if bars.length > 0}
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
                onToggle={(k) => (browse.filters = toggle(filters, chart, k))}
                limit={chart.kind === 'age' ? 10 : 7}
              />
            </div>
          </div>
        {/if}
      {/each}
    </div>
    <p class="mt-3 text-xs text-muted-foreground">
      Solid bars are certain counts, light bars show how many more subjects there could be. Click a bar to filter by it.
    </p>
  </section>

  <section class="surface p-4 md:p-5" aria-labelledby="table-title">
    <div class="flex flex-wrap items-center justify-between gap-3 px-1">
      <h2 id="table-title" class="text-sm font-semibold">Datasets in this cohort</h2>
      <div class="flex items-center gap-2 text-sm">
        {#if picked.length}
          <button type="button" class="text-muted-foreground hover:text-foreground" onclick={() => (browse.picked = [])}
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
      {#if summary}
        <CohortTable
          rows={summary.datasets}
          {vocab}
          totalHi={summary.total.hi}
          {picked}
          hasNeeds={needs.length > 0}
          onPick={(id) => (browse.picked = flip(picked, id))}
        />
      {:else}
        <div class="h-64 animate-pulse rounded-lg bg-muted/60"></div>
      {/if}
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
</div>

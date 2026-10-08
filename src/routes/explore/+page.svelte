<script lang="ts">
  import { datasetCount, licenses, vocab } from '#lib/catalog/meta.js';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import ArrowLeftRight from '@lucide/svelte/icons/arrow-left-right';
  import LegalNote from '#lib/components/app/LegalNote.svelte';
  import Seo from '#lib/components/app/Seo.svelte';
  import BarList from '#lib/components/charts/BarList.svelte';
  import Columns from '#lib/components/charts/Columns.svelte';
  import {
    ALL,
    PIVOT_DIMS,
    cellKey,
    cellQuery,
    pivot,
    valueLabel,
    valuesOf,
    type Measure
  } from '#lib/catalog/pivot.js';
  import { tone } from '#lib/catalog/rules.js';
  import { compact, formatNumber, label, modalityColor } from '#lib/catalog/vocab.js';
  import { link } from '#lib/site.js';
  import type { DatasetSummary } from '#lib/catalog/types.js';
  import { cn } from '#lib/utils.js';

  let { data } = $props();
  // Loaded after the first paint, like the catalog. The page itself stays small.
  let datasets = $state<DatasetSummary[]>([]);
  let loaded = $state(false);
  const licenseNames = $derived(new Map(licenses.map((l) => [l.id, l.short_name ?? l.name])));

  let rowDim = $state('contrast');
  let colDim = $state<string>('rule:commercial_use');
  let measure = $state<Measure>('subjects');

  // URL parameters are read before the page writes its own state back to the URL.
  let urlRead = $state(false);
  onMount(async () => {
    const p = new URLSearchParams(window.location.search);
    if (PIVOT_DIMS.some((d) => d.id === p.get('rows'))) rowDim = p.get('rows')!;
    if (p.get('cols') === 'none' || PIVOT_DIMS.some((d) => d.id === p.get('cols'))) colDim = p.get('cols')!;
    if (p.get('measure') === 'datasets') measure = 'datasets';
    urlRead = true;
    const res = await fetch(link('summaries.json'));
    if (res.ok) {
      datasets = await res.json();
      loaded = true;
    }
  });
  $effect(() => {
    const q = `?rows=${rowDim}&cols=${colDim}&measure=${measure}`;
    if (urlRead && window.location.search !== q)
      goto(link('explore/') + q, { shallow: true, replace: true, reset: false });
  });

  const table = $derived(pivot(datasets, rowDim, colDim === 'none' ? null : colDim, vocab));
  const value = (c: { datasets: string[]; subjects: number } | undefined) =>
    c ? (measure === 'datasets' ? c.datasets.length : c.subjects) : 0;
  const max = $derived(Math.max(1, ...[...table.cells.values()].map(value)));

  function cellHref(r: string, c: string): string | null {
    const a = cellQuery(rowDim, r, vocab);
    const b = colDim === 'none' ? {} : cellQuery(colDim, c, vocab);
    if (!a || !b) return null;
    const merged: Record<string, string> = { ...a };
    for (const [k, v] of Object.entries(b)) merged[k] = merged[k] ? `${merged[k]},${v}` : v;
    return link('') + '?' + new URLSearchParams(merged).toString().replace(/%2C/g, ',');
  }

  function swap() {
    if (colDim === 'none') return;
    [rowDim, colDim] = [colDim, rowDim];
  }

  // Overview charts.
  const byModality = $derived.by(() => {
    const m = new Map<string, number>();
    for (const d of datasets) for (const v of d.facets.modality ?? []) m.set(v, (m.get(v) ?? 0) + 1);
    return [...m]
      .map(([k, v]) => ({ key: k, label: label(vocab, 'modality', k), value: v, color: modalityColor(k) }))
      .sort((a, b) => b.value - a.value);
  });
  const subjectsByContrast = $derived.by(() => {
    const m = new Map<string, number>();
    for (const d of datasets)
      for (const [k, v] of valuesOf(d, 'contrast', vocab)) if (v !== undefined) m.set(k, (m.get(k) ?? 0) + v);
    return [...m]
      .map(([k, v]) => ({ key: k, label: `${k}, ${label(vocab, 'contrast', k)}`, value: v }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 12);
  });
  const byYear = $derived.by(() => {
    const years = datasets.map((d) => d.meta.year);
    if (!years.length) return [];
    const lo = Math.min(...years);
    const hi = Math.max(...years);
    const out = [];
    for (let y = lo; y <= hi; y++)
      out.push({ key: String(y), label: `'${String(y).slice(2)}`, value: years.filter((x) => x === y).length });
    return out;
  });
  const ruleSummary = $derived(
    ['commercial_use', 'model_training', 'redistribute_original', 'share_model_weights', 'signed_agreement'].map(
      (id) => {
        const rule = vocab.licenseRules.rules.find((r) => r.id === id)!;
        const counts = { good: 0, mixed: 0, unknown: 0, bad: 0 };
        for (const d of datasets) counts[tone(d.rules[id], rule.good)]++;
        return { rule, counts };
      }
    )
  );
  const toneColor = { good: 'var(--good)', mixed: 'var(--mixed)', unknown: 'var(--unknown)', bad: 'var(--bad)' };
  const toneLabel = { good: 'In your favor', mixed: 'Conditional', unknown: 'Not stated', bad: 'Restricts you' };
  const totalSubjects = $derived(datasets.reduce((s, d) => s + (d.totals.subjects ?? 0), 0));
</script>

<Seo
  title="Explore medical imaging datasets"
  description="Cross-tabulate {datasetCount} medical imaging datasets by contrast, condition, age, sex, scanner and license terms."
  path="explore/"
/>

<div class="mx-auto max-w-7xl px-4 pt-12 md:px-6">
  <div class="max-w-3xl">
    <h1 class="text-3xl font-semibold tracking-tight md:text-4xl">Explore</h1>
    <p class="mt-3 text-lg text-muted-foreground">
      Combine any two attributes to see where the data is. Click a cell to list the datasets behind it.
    </p>
  </div>

  <section class="mt-8 surface p-5 md:p-6" aria-labelledby="pivot-title">
    <h2 id="pivot-title" class="sr-only">Cross table</h2>
    <div class="flex flex-wrap items-end gap-3">
      <label class="text-xs font-medium text-muted-foreground">
        Rows
        <select
          bind:value={rowDim}
          class="mt-1 block h-9 rounded-lg border border-border bg-card px-2 text-sm text-foreground"
        >
          {#each PIVOT_DIMS as d (d.id)}<option value={d.id}>{d.label}</option>{/each}
        </select>
      </label>
      <button
        type="button"
        onclick={swap}
        class="mb-0.5 inline-flex size-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground"
        aria-label="Swap rows and columns"
        title="Swap rows and columns"><ArrowLeftRight class="size-4" /></button
      >
      <label class="text-xs font-medium text-muted-foreground">
        Columns
        <select
          bind:value={colDim}
          class="mt-1 block h-9 rounded-lg border border-border bg-card px-2 text-sm text-foreground"
        >
          <option value="none">Nothing (totals)</option>
          {#each PIVOT_DIMS.filter((d) => d.id !== rowDim) as d (d.id)}<option value={d.id}>{d.label}</option>{/each}
        </select>
      </label>
      <div class="text-xs font-medium text-muted-foreground">
        Count
        <div class="mt-1 inline-flex h-9 rounded-lg bg-muted p-0.5" role="group">
          {#each [['subjects', 'Subjects'], ['datasets', 'Datasets']] as [id, text] (id)}
            <button
              type="button"
              aria-pressed={measure === id}
              class={cn(
                'rounded-md px-3 text-sm font-medium',
                measure === id ? 'bg-card text-foreground shadow-xs' : 'text-muted-foreground'
              )}
              onclick={() => (measure = id as Measure)}>{text}</button
            >
          {/each}
        </div>
      </div>
    </div>

    {#if !loaded}
      <div class="mt-5 h-72 animate-pulse rounded-lg bg-muted" aria-label="Loading"></div>
    {:else}
      <div class="mt-5 overflow-x-auto">
        <table class="w-full border-separate border-spacing-[2px] text-sm">
          <thead>
            <tr>
              <th class="min-w-40 px-2 py-2 text-left text-xs font-medium text-muted-foreground">
                {PIVOT_DIMS.find((d) => d.id === rowDim)?.label}
                {#if colDim !== 'none'}<span class="font-normal">
                    by {PIVOT_DIMS.find((d) => d.id === colDim)?.label}</span
                  >{/if}
              </th>
              {#each table.cols as c (c)}
                <th class="min-w-20 px-2 py-2 text-right text-xs font-medium text-muted-foreground"
                  >{valueLabel(vocab, colDim, c, licenseNames)}</th
                >
              {/each}
            </tr>
          </thead>
          <tbody>
            {#each table.rows as r (r)}
              <tr>
                <th class="px-2 py-1.5 text-left font-medium">
                  {valueLabel(vocab, rowDim, r, licenseNames)}
                  {#if rowDim === 'contrast'}<span class="ml-1 font-mono text-xs font-normal text-muted-foreground"
                      >{r}</span
                    >{/if}
                </th>
                {#each table.cols as c (c)}
                  {@const cell = table.cells.get(cellKey(r, c))}
                  {@const v = value(cell)}
                  {@const href = cell ? cellHref(r, c) : null}
                  <td class="p-0">
                    {#if cell}
                      <svelte:element
                        this={href ? 'a' : 'div'}
                        href={href ?? undefined}
                        class={cn(
                          'block rounded-[4px] bg-[color-mix(in_oklab,var(--series-1)_var(--a),transparent)] px-2 py-1.5 text-right tabular',
                          href && 'transition-shadow hover:ring-2 hover:ring-primary/50',
                          v / max > 0.55 ? 'text-white' : 'text-foreground'
                        )}
                        style="--a: {Math.round(8 + (v / max) * 82)}%"
                        title="{cell.datasets.length} datasets{measure === 'subjects'
                          ? `, ${formatNumber(cell.subjects)} subjects reported`
                          : ''}{cell.unknown ? `, ${cell.unknown} without a count` : ''}"
                      >
                        {#if measure === 'subjects' && cell.subjects === 0 && cell.unknown}<span
                            class="text-muted-foreground">?</span
                          >{:else}{measure === 'datasets'
                            ? v
                            : compact(v)}{#if measure === 'subjects' && cell.unknown}<sup
                              class="ml-0.5 text-[10px] opacity-70">+{cell.unknown}</sup
                            >{/if}{/if}
                      </svelte:element>
                    {:else}
                      <div class="px-2 py-1.5 text-right text-muted-foreground/40">·</div>
                    {/if}
                  </td>
                {/each}
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    {/if}
    <p class="mt-4 max-w-3xl text-xs text-muted-foreground">
      Subject counts add up the numbers each dataset reports. Where datasets have a value but no count for it, the cell
      shows <sup>+n</sup> for them, or <span class="font-medium">?</span> when no dataset reports a count. Subjects can appear
      in several rows of overlapping attributes like contrast or condition, and combinations of two attributes count only
      where a dataset reports them together.
    </p>
  </section>

  <div class="mt-8 grid gap-5 md:grid-cols-2">
    <section class="surface p-5">
      <h2 class="text-sm font-semibold">License terms across datasets</h2>
      <LegalNote variant="inline" class="mt-0.5" />
      <ul class="mt-4 space-y-4">
        {#each ruleSummary as { rule, counts } (rule.id)}
          <li>
            <div class="text-sm">{rule.label}</div>
            <div class="mt-1.5 flex h-3 gap-[2px] overflow-hidden rounded-[4px]">
              {#each Object.entries(counts) as [k, n] (k)}
                {#if n}<div
                    class="h-full w-(--w) bg-(--c)"
                    style="--w: {(n / datasets.length) * 100}%; --c: {toneColor[k as keyof typeof toneColor]}"
                    title="{toneLabel[k as keyof typeof toneLabel]}: {n}"
                  ></div>{/if}
              {/each}
            </div>
          </li>
        {/each}
      </ul>
      <ul class="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
        {#each Object.entries(toneLabel) as [k, l] (k)}
          <li class="flex items-center gap-1.5">
            <span class="size-2.5 rounded-full bg-(--c)" style="--c: {toneColor[k as keyof typeof toneColor]}"
            ></span>{l}
          </li>
        {/each}
      </ul>
    </section>
    <section class="surface p-5">
      <h2 class="text-sm font-semibold">Datasets by modality</h2>
      <div class="mt-4"><BarList items={byModality} unit="datasets" /></div>
    </section>
    <section class="surface p-5">
      <h2 class="text-sm font-semibold">Subjects per contrast</h2>
      <p class="mt-0.5 text-xs text-muted-foreground">
        Summed over all datasets, {compact(totalSubjects)} subjects in total
      </p>
      <div class="mt-4"><BarList items={subjectsByContrast} /></div>
    </section>
    <section class="surface p-5">
      <h2 class="text-sm font-semibold">First release year</h2>
      <div class="mt-4"><Columns items={byYear} unit="datasets" /></div>
    </section>
  </div>
</div>

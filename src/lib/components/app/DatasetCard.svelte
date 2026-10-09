<script lang="ts">
  import type { Result } from '#lib/catalog/filter.js';
  import type { VocabData } from '#lib/catalog/types.js';
  import { compact, formatNumber, label, modalityColor } from '#lib/catalog/vocab.js';
  import { link } from '#lib/site.js';
  import AccessBadge from './AccessBadge.svelte';
  import Answer from './Answer.svelte';

  // Left: a modality band over the description. Right: a facts column with the subject count (or the matching
  // estimate when cohort filters are set), access, three key license answers and the license. On phones the
  // facts sit below as a compact block.
  let { result, vocab, licenseNames }: { result: Result; vocab: VocabData; licenseNames: Map<string, string> } =
    $props();

  const keyRules = [
    ['commercial_use', 'Commercial'],
    ['product_validation', 'Validation'],
    ['model_training', 'Training']
  ] as const;
  const good = (id: string) => vocab.licenseRules.rules.find((r) => r.id === id)?.good ?? 'yes';

  const d = $derived(result.dataset);
  const match = $derived(result.match);
  const licenseText = $derived(
    d.licenseIds.map((id) => licenseNames.get(id) ?? id).join(d.meta.license_combine === 'any' ? ' or ' : ' + ')
  );
  const mods = $derived(d.facets.modality ?? []);
  const modLabels = $derived(mods.map((m) => label(vocab, 'modality', m)).join(' + '));
  const anatomy = $derived((d.facets.anatomy ?? []).map((a) => label(vocab, 'anatomy', a)).join(', '));
  const contrasts = $derived(d.facets.contrast ?? []);

  // The headline count: subjects, or the first other measure the dataset reports.
  const count = $derived.by(() => {
    const m = (['subjects', 'studies', 'scans', 'images', 'slides'] as const).find((m) => d.totals[m] !== undefined);
    if (!m) return null;
    const approx = d.stats.find((r) => r.measure === m && !Object.keys(r.by).length)?.approx;
    return { m, n: d.totals[m]!, approx };
  });

  const matchText = $derived.by(() => {
    if (!match) return '';
    if (match.lo === match.hi) return formatNumber(match.lo);
    if (!Number.isFinite(match.hi)) return match.lo ? `at least ${compact(match.lo)}` : 'not reported';
    if (match.lo === 0) return `up to ${compact(match.hi)}`;
    return `${compact(match.lo)} to ${compact(match.hi)}`;
  });
  // Bar widths relative to the dataset total, or to the upper bound when there is no total.
  const base = $derived(
    !match ? 1 : Number.isFinite(match.total) ? match.total : Number.isFinite(match.hi) ? match.hi : match.lo || 1
  );
  const pct = (n: number) => `${Math.min(100, (Number.isFinite(n) ? n / base : 1) * 100)}%`;
</script>

<article
  class="group relative grid min-w-0 grid-cols-1 overflow-hidden surface transition-shadow hover:shadow-md hover:ring-primary/30 sm:grid-cols-[minmax(0,1fr)_10rem]"
>
  <div class="flex min-w-0 flex-col">
    <div
      class="flex min-w-0 items-center gap-2 border-b border-border bg-[color-mix(in_oklab,var(--c)_12%,transparent)] px-5 py-2.5 text-xs font-medium"
      style:--c={modalityColor(mods[0] ?? '')}
    >
      {#each mods as m (m)}
        <span class="size-2 shrink-0 rounded-full bg-(--d)" style:--d={modalityColor(m)} aria-hidden="true"></span>
      {/each}
      <span class="min-w-0 truncate">
        {modLabels}{#if anatomy}<span class="font-normal text-muted-foreground">&nbsp;· {anatomy}</span>{/if}
      </span>
      <span class="ml-auto shrink-0 text-muted-foreground tabular">{d.meta.updated ?? d.meta.year}</span>
    </div>

    <div class="flex min-w-0 flex-1 flex-col p-5">
      <h3 class="text-lg leading-snug font-semibold tracking-tight">
        <a href={link(`datasets/${d.id}/`)} class="after:absolute after:inset-0 focus-visible:outline-none">
          {d.meta.name}
        </a>
        {#if d.meta.status !== 'active'}
          <span class="ml-1 align-middle text-xs font-medium text-muted-foreground">({d.meta.status})</span>
        {/if}
      </h3>
      {#if d.meta.full_name}
        <p class="truncate text-sm text-muted-foreground">{d.meta.full_name}</p>
      {/if}
      <p class="mt-1.5 line-clamp-3 text-sm text-foreground/80">{d.meta.summary}</p>
      {#if contrasts.length}
        <div class="mt-3 flex flex-wrap gap-1">
          {#each contrasts.slice(0, 6) as c (c)}
            <span class="rounded bg-muted px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground">{c}</span>
          {/each}
          {#if contrasts.length > 6}
            <span class="px-1 text-[11px] text-muted-foreground">+{contrasts.length - 6}</span>
          {/if}
        </div>
      {/if}
    </div>
  </div>

  <aside
    class="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-4 gap-y-3 border-t border-border bg-muted/30 p-4 text-xs sm:flex sm:flex-col sm:items-stretch sm:gap-3 sm:border-t-0 sm:border-l"
    title="Our interpretation of the license, not legal advice. Read the original license before you use the data."
  >
    {#if match}
      <div class="min-w-0">
        <div class="text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">Matching</div>
        <div class="text-lg leading-tight font-semibold tracking-tight tabular">{matchText}</div>
        <div
          class="relative mt-1.5 h-1.5 max-w-48 overflow-hidden rounded-full bg-muted sm:max-w-none"
          aria-hidden="true"
        >
          <div class="absolute inset-y-0 left-0 rounded-full bg-primary/30" style:width={pct(match.hi)}></div>
          <div class="absolute inset-y-0 left-0 rounded-full bg-primary" style:width={pct(match.lo)}></div>
        </div>
        {#if Number.isFinite(match.total)}
          <div class="mt-1 text-muted-foreground tabular">of {compact(match.total)} subjects</div>
        {/if}
      </div>
    {:else if count}
      <div class="min-w-0">
        <div class="text-xl leading-tight font-semibold tracking-tight tabular">
          {count.approx ? '~' : ''}{compact(count.n)}
        </div>
        <div class="text-muted-foreground">{count.m}</div>
      </div>
    {:else}
      <div class="text-muted-foreground">No counts reported</div>
    {/if}
    <AccessBadge type={d.meta.access.type} {vocab} class="justify-self-end sm:self-start" />
    <ul class="col-span-2 flex flex-wrap gap-x-4 gap-y-1.5 sm:flex-col" aria-label="License at a glance">
      {#each keyRules as [id, l] (id)}
        <li><Answer value={d.rules[id]} good={good(id)} label={l} compact /></li>
      {/each}
    </ul>
    <div class="col-span-2 truncate text-muted-foreground sm:mt-auto" title={licenseText}>{licenseText}</div>
  </aside>
</article>

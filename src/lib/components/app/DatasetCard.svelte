<script lang="ts">
  import type { Result } from '#lib/catalog/filter.js';
  import type { VocabData } from '#lib/catalog/types.js';
  import { compact, label } from '#lib/catalog/vocab.js';
  import { link } from '#lib/site.js';
  import AccessBadge from './AccessBadge.svelte';
  import Answer from './Answer.svelte';
  import MatchRange from './MatchRange.svelte';
  import ModalityBadge from './ModalityBadge.svelte';

  let { result, vocab, licenseNames }: { result: Result; vocab: VocabData; licenseNames: Map<string, string> } =
    $props();

  const d = $derived(result.dataset);
  const keyRules = ['commercial_use', 'product_validation', 'model_training'] as const;
  const shortLabels: Record<string, string> = {
    commercial_use: 'Commercial',
    product_validation: 'Validation',
    model_training: 'Training'
  };
  const licenseText = $derived(
    d.licenseIds.map((id) => licenseNames.get(id) ?? id).join(d.meta.license_combine === 'any' ? ' or ' : ' + ')
  );
  const contrasts = $derived(d.facets.contrast ?? []);
  const counts = $derived(
    (['subjects', 'studies', 'scans', 'images', 'slides'] as const)
      .filter((m) => d.totals[m] !== undefined)
      .slice(0, 2)
      .map((m) => ({
        m,
        n: d.totals[m],
        approx: d.stats.find((r) => r.measure === m && !Object.keys(r.by).length)?.approx
      }))
  );
</script>

<article class="group relative min-w-0 surface p-5 transition-shadow hover:shadow-md hover:ring-primary/30">
  <div class="flex flex-wrap items-center gap-1.5">
    {#each d.facets.modality ?? [] as m (m)}
      <ModalityBadge id={m} label={label(vocab, 'modality', m)} />
    {/each}
    <span class="ml-auto text-xs text-muted-foreground tabular">{d.meta.updated ?? d.meta.year}</span>
  </div>

  <h3 class="mt-3 text-lg leading-snug font-semibold tracking-tight">
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
  <p class="mt-2 line-clamp-2 text-sm text-foreground/80">{d.meta.summary}</p>

  <dl class="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm">
    {#each counts as c (c.m)}
      <div class="flex items-baseline gap-1.5">
        <dt class="sr-only">{c.m}</dt>
        <dd class="font-semibold tabular">{c.approx ? '~' : ''}{compact(c.n)}</dd>
        <span class="text-muted-foreground">{c.m}</span>
      </div>
    {/each}
    <div class="flex items-baseline gap-1.5 text-muted-foreground">
      <dt class="sr-only">Anatomy</dt>
      <dd>{(d.facets.anatomy ?? []).map((a) => label(vocab, 'anatomy', a)).join(', ')}</dd>
    </div>
  </dl>

  {#if contrasts.length}
    <div class="mt-3 flex flex-wrap gap-1">
      {#each contrasts.slice(0, 8) as c (c)}
        <span class="rounded bg-muted px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground">{c}</span>
      {/each}
      {#if contrasts.length > 8}<span class="px-1 text-[11px] text-muted-foreground">+{contrasts.length - 8}</span>{/if}
    </div>
  {/if}

  {#if result.match}
    <div class="mt-4 rounded-lg bg-accent/60 px-3 py-2"><MatchRange match={result.match} /></div>
  {/if}

  <div
    class="mt-4 border-t border-border pt-3 text-xs"
    title="Our interpretation of the license, not legal advice. Read the original license before you use the data."
  >
    <!-- Three fixed columns, so the answers line up across cards and never wrap. -->
    <ul class="grid grid-cols-3 gap-2" aria-label="License at a glance">
      {#each keyRules as r (r)}
        {@const rule = vocab.licenseRules.rules.find((x) => x.id === r)}
        {#if rule}
          <li class="min-w-0 overflow-hidden">
            <Answer value={d.rules[r]} good={rule.good} label={shortLabels[r]} compact />
          </li>
        {/if}
      {/each}
    </ul>
    <div class="mt-2.5 flex items-center gap-3">
      <AccessBadge type={d.meta.access.type} {vocab} />
      <span class="min-w-0 flex-1 truncate text-right text-muted-foreground" title={licenseText}>{licenseText}</span>
    </div>
  </div>
</article>

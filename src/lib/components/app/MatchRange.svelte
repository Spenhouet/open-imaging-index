<script lang="ts">
  import type { Estimate } from '#lib/catalog/stats.js';
  import { formatNumber } from '#lib/catalog/vocab.js';

  // How many subjects match the cohort filters: an exact number or a range with a bar.
  let { match }: { match: Estimate } = $props();

  const exact = $derived(match.lo === match.hi);
  const total = $derived(
    Number.isFinite(match.total) ? match.total : Number.isFinite(match.hi) ? match.hi : match.lo || 1
  );
  const lo = $derived(Math.min(100, (match.lo / total) * 100));
  const hi = $derived(Number.isFinite(match.hi) ? Math.min(100, (match.hi / total) * 100) : 100);
</script>

<div class="flex items-center gap-3">
  <div class="relative h-1.5 w-24 shrink-0 overflow-hidden rounded-full bg-muted" aria-hidden="true">
    <div class="absolute inset-y-0 left-0 w-(--hi) rounded-full bg-primary/30" style="--hi: {hi}%"></div>
    <div class="absolute inset-y-0 left-0 w-(--lo) rounded-full bg-primary" style="--lo: {lo}%"></div>
  </div>
  <span class="text-sm tabular">
    {#if exact}
      <span class="font-semibold">{formatNumber(match.lo)}</span>
      <span class="text-muted-foreground">matching subjects</span>
    {:else if match.lo === 0 && !Number.isFinite(match.hi)}
      <span class="text-muted-foreground">No subject counts for these filters</span>
    {:else if !Number.isFinite(match.hi)}
      <span class="font-semibold">at least {formatNumber(match.lo)}</span>
      <span class="text-muted-foreground">matching subjects</span>
    {:else if match.lo === 0}
      <span class="font-semibold">up to {formatNumber(match.hi)}</span>
      <span class="text-muted-foreground">matching subjects</span>
    {:else}
      <span class="font-semibold">{formatNumber(match.lo)} to {formatNumber(match.hi)}</span>
      <span class="text-muted-foreground">matching subjects</span>
    {/if}
  </span>
</div>

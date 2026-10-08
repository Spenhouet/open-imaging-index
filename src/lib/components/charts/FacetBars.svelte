<script lang="ts">
  import Check from '@lucide/svelte/icons/check';
  import type { Bar } from '#lib/catalog/cohort.js';
  import { compact, formatNumber } from '#lib/catalog/vocab.js';
  import { cn } from '#lib/utils.js';

  // Horizontal bars that double as filters. The solid part is the certain number of subjects, the light part
  // how many more there could be where datasets only report totals. Clicking a bar toggles that value.
  let {
    bars,
    labelOf,
    colorOf,
    onToggle,
    limit = 8
  }: {
    bars: Bar[];
    labelOf: (key: string) => string;
    colorOf?: (key: string) => string | undefined;
    onToggle: (key: string) => void;
    limit?: number;
  } = $props();

  let expanded = $state(false);
  const anySelected = $derived(bars.some((b) => b.selected));
  // Scale by certain counts, so a dataset without breakdowns does not flatten every bar. The possible extra
  // shows as a light extension, capped at the full width, and in the text.
  const max = $derived(Math.max(1, ...bars.map((b) => b.range.lo)) || Math.max(1, ...bars.map((b) => b.range.hi)));
  const visible = $derived(expanded ? bars : bars.filter((b, i) => i < limit || b.selected));

  const value = (b: Bar) =>
    b.range.lo === b.range.hi
      ? formatNumber(b.range.lo)
      : b.range.lo === 0
        ? `up to ${compact(b.range.hi)}`
        : `${compact(b.range.lo)}, up to ${compact(b.range.hi)}`;
</script>

{#if bars.length}
  <ul class="space-y-1">
    {#each visible as b (b.key)}
      <li>
        <button
          type="button"
          aria-pressed={b.selected}
          onclick={() => onToggle(b.key)}
          class={cn(
            'group w-full rounded-lg px-2 py-1.5 text-left transition-colors hover:bg-accent/70',
            anySelected && !b.selected && 'opacity-55 hover:opacity-100',
            b.selected && 'bg-accent'
          )}
          title="{labelOf(b.key)}: {value(b)} subjects in {b.datasets} {b.datasets === 1
            ? 'dataset'
            : 'datasets'}{b.unknown ? `, ${b.unknown} without a count` : ''}. Click to {b.selected
            ? 'remove'
            : 'add'} this filter."
        >
          <span class="flex items-baseline justify-between gap-3 text-sm">
            <span class="flex min-w-0 items-center gap-1.5">
              {#if b.selected}<Check class="size-3.5 shrink-0 text-primary" />{/if}
              <span class="truncate">{labelOf(b.key)}</span>
            </span>
            <span class="shrink-0 text-right tabular">
              <span class="font-medium">{value(b)}</span>
              <span class="ml-1 text-xs text-muted-foreground">in {b.datasets}</span>
            </span>
          </span>
          <span class="relative mt-1 block h-2 w-full rounded-r-[4px] bg-muted/70" aria-hidden="true">
            <span
              class="absolute inset-y-0 left-0 w-(--hi) rounded-r-[4px] bg-(--c) opacity-30"
              style="--hi: {Math.min(100, Math.max((b.range.hi / max) * 100, 0.6))}%; --c: {colorOf?.(b.key) ??
                'var(--series-1)'}"
            ></span>
            <span
              class="absolute inset-y-0 left-0 w-(--lo) rounded-r-[4px] bg-(--c)"
              style="--lo: {Math.min(100, (b.range.lo / max) * 100)}%; --c: {colorOf?.(b.key) ?? 'var(--series-1)'}"
            ></span>
          </span>
        </button>
      </li>
    {/each}
  </ul>
  {#if bars.length > limit}
    <button
      type="button"
      class="mt-1 px-2 text-xs font-medium text-primary hover:underline"
      onclick={() => (expanded = !expanded)}
    >
      {expanded ? 'Show fewer' : `Show all ${bars.length}`}
    </button>
  {/if}
{:else}
  <p class="px-2 text-sm text-muted-foreground">No data for this selection.</p>
{/if}

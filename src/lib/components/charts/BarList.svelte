<script lang="ts">
  import { formatNumber } from '#lib/catalog/vocab.js';

  // Horizontal bars with the label and value as text, so the list doubles as its own table.
  let {
    items,
    total,
    unit = 'subjects',
    limit = 8
  }: {
    items: {
      key: string;
      label: string;
      value: number;
      approx?: boolean;
      color?: string;
      hint?: string;
      note?: string;
    }[];
    total?: number;
    unit?: string;
    /** Longer lists show this many bars until expanded. */
    limit?: number;
  } = $props();

  let expanded = $state(false);
  const cut = $derived(items.length > limit + 2 && !expanded);
  const shown = $derived(cut ? items.slice(0, limit) : items);

  const share = (v: number, t: number) => {
    const p = (v / t) * 100;
    return p > 0 && p < 1 ? '<1%' : `${Math.round(p)}%`;
  };
  const max = $derived(Math.max(1, total ?? 0, ...items.map((i) => i.value)));
</script>

<ul class="space-y-2.5">
  {#each shown as item (item.key)}
    {@const pct = (item.value / max) * 100}
    <li
      class="group"
      title="{item.label}: {formatNumber(item.value, item.approx)} {unit}{item.hint ? ` (${item.hint})` : ''}{item.note
        ? `, ${item.note}`
        : ''}"
    >
      <div class="flex items-baseline justify-between gap-3 text-sm">
        <span class="min-w-0 truncate">{item.label}</span>
        <span class="shrink-0 font-medium tabular">
          {formatNumber(item.value, item.approx)}
          {#if total && Number.isFinite(total)}
            <span class="ml-1 text-xs font-normal text-muted-foreground">{share(item.value, total)}</span>
          {/if}
        </span>
      </div>
      <div class="mt-1 h-2 w-full rounded-r-[4px] bg-muted/70">
        <div
          class="h-full w-(--w) rounded-r-[4px] bg-(--c) transition-all group-hover:opacity-80"
          style="--w: {Math.max(pct, 0.6)}%; --c: {item.color ?? 'var(--series-1)'}"
        ></div>
      </div>
      {#if item.note}<div class="mt-1 text-xs text-muted-foreground tabular">{item.note}</div>{/if}
    </li>
  {/each}
</ul>
{#if items.length > limit + 2}
  <button
    type="button"
    class="mt-3 text-xs font-medium text-primary hover:underline"
    aria-expanded={expanded}
    onclick={() => (expanded = !expanded)}>{expanded ? 'Show fewer' : `Show all ${items.length}`}</button
  >
{/if}

<script lang="ts">
  import { formatNumber } from '#lib/catalog/vocab.js';

  // Vertical columns for ordered bins (age). Values show on hover and in the data table below the page.
  let {
    items,
    unit = 'subjects',
    color = 'var(--series-1)'
  }: {
    items: { key: string; label: string; value: number; approx?: boolean }[];
    unit?: string;
    color?: string;
  } = $props();

  const max = $derived(Math.max(1, ...items.map((i) => i.value)));
  const peak = $derived(items.reduce((a, b) => (b.value > a.value ? b : a), items[0]));
  const ticks = $derived(niceTicks(max));

  function niceTicks(m: number) {
    const step = 10 ** Math.floor(Math.log10(m));
    const s = m / step > 5 ? step * 2 : m / step > 2 ? step : step / 2;
    const out = [];
    for (let v = 0; v <= m; v += s) out.push(v);
    return out;
  }
</script>

<div class="relative pl-10">
  <div class="relative h-44">
    {#each ticks as t (t)}
      <div class="absolute inset-x-0 bottom-(--y) border-t border-grid" style="--y: {(t / max) * 100}%">
        <span class="absolute -top-2 -left-10 w-8 text-right text-[10px] text-muted-foreground tabular"
          >{formatNumber(t)}</span
        >
      </div>
    {/each}
    <div class="absolute inset-0 flex items-end justify-around gap-[2px] border-b border-axis">
      {#each items as item (item.key)}
        <div class="group relative flex h-full min-w-0 flex-1 items-end justify-center">
          <div
            class="h-(--h) w-full max-w-6 rounded-t-[4px] bg-(--c) transition-opacity group-hover:opacity-80"
            style="--h: {(item.value / max) * 100}%; --c: {color}"
          ></div>
          <div
            class="pointer-events-none absolute bottom-(--h) z-10 mb-1.5 hidden rounded-md bg-popover px-2 py-1 text-xs whitespace-nowrap shadow-md ring-1 ring-border group-hover:block"
            style="--h: {(item.value / max) * 100}%"
          >
            <span class="font-semibold tabular">{formatNumber(item.value, item.approx)}</span>
            {unit}, age {item.label}
          </div>
          {#if item === peak}
            <span
              class="absolute bottom-(--h) mb-1 text-[10px] font-medium tabular group-hover:invisible"
              style="--h: {(item.value / max) * 100}%">{formatNumber(item.value, item.approx)}</span
            >
          {/if}
        </div>
      {/each}
    </div>
  </div>
  <div class="mt-1.5 flex justify-around gap-[2px]">
    {#each items as item (item.key)}
      <span class="min-w-0 flex-1 truncate text-center text-[10px] text-muted-foreground tabular">{item.label}</span>
    {/each}
  </div>
</div>

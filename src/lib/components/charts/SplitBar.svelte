<script lang="ts">
  import { formatNumber } from '#lib/catalog/vocab.js';

  // A 100% bar for a partition such as sex, with a legend that carries the numbers.
  let { items }: { items: { key: string; label: string; value: number; color: string }[] } = $props();
  const sum = $derived(items.reduce((s, i) => s + i.value, 0) || 1);
</script>

<div>
  <div
    class="flex h-3 w-full gap-[2px] overflow-hidden rounded-[4px]"
    role="img"
    aria-label={items.map((i) => `${i.label} ${i.value}`).join(', ')}
  >
    {#each items as item (item.key)}
      <div
        class="h-full w-(--w) bg-(--c)"
        style="--w: {(item.value / sum) * 100}%; --c: {item.color}"
        title="{item.label}: {formatNumber(item.value)}"
      ></div>
    {/each}
  </div>
  <ul class="mt-2.5 flex flex-wrap gap-x-5 gap-y-1 text-sm">
    {#each items as item (item.key)}
      <li class="flex items-center gap-1.5">
        <span class="size-2.5 rounded-full bg-(--c)" style="--c: {item.color}"></span>
        {item.label}
        <span class="font-medium tabular">{formatNumber(item.value)}</span>
        <span class="text-xs text-muted-foreground tabular">{Math.round((item.value / sum) * 100)}%</span>
      </li>
    {/each}
  </ul>
</div>

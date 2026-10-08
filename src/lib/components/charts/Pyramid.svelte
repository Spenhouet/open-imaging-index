<script lang="ts">
  import { formatNumber } from '#lib/catalog/vocab.js';

  // Age by sex: two series mirrored around the age labels. Only drawn when the dataset reports the cross table.
  let {
    bins,
    left,
    right
  }: {
    bins: string[];
    left: { label: string; color: string; values: Map<string, number> };
    right: { label: string; color: string; values: Map<string, number> };
  } = $props();

  const max = $derived(Math.max(1, ...bins.flatMap((b) => [left.values.get(b) ?? 0, right.values.get(b) ?? 0])));
</script>

<div>
  <div class="mb-2 flex justify-between text-xs">
    <span class="flex items-center gap-1.5"
      ><span class="size-2.5 rounded-full bg-(--c)" style="--c: {left.color}"></span>{left.label}</span
    >
    <span class="flex items-center gap-1.5"
      >{right.label}<span class="size-2.5 rounded-full bg-(--c)" style="--c: {right.color}"></span></span
    >
  </div>
  <ul class="space-y-[3px]">
    {#each [...bins].reverse() as bin (bin)}
      {@const l = left.values.get(bin)}
      {@const r = right.values.get(bin)}
      <li class="grid grid-cols-[1fr_3.5rem_1fr] items-center gap-2 text-xs">
        <div class="flex items-center justify-end gap-1.5">
          <span class="text-muted-foreground tabular">{l === undefined ? 'n/a' : formatNumber(l)}</span>
          {#if l !== undefined}
            <div
              class="h-3 w-(--w) rounded-l-[4px] bg-(--c)"
              style="--w: {(l / max) * 80}%; --c: {left.color}"
              title="{left.label}, {bin}: {l}"
            ></div>
          {/if}
        </div>
        <span class="text-center text-muted-foreground tabular">{bin}</span>
        <div class="flex items-center gap-1.5">
          {#if r !== undefined}
            <div
              class="h-3 w-(--w) rounded-r-[4px] bg-(--c)"
              style="--w: {(r / max) * 80}%; --c: {right.color}"
              title="{right.label}, {bin}: {r}"
            ></div>
          {/if}
          <span class="text-muted-foreground tabular">{r === undefined ? 'n/a' : formatNumber(r)}</span>
        </div>
      </li>
    {/each}
  </ul>
</div>

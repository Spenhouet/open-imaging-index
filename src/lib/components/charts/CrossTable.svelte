<script lang="ts">
  import type { Item } from '#lib/catalog/charts.js';
  import type { StatRow } from '#lib/catalog/stats.js';
  import { formatNumber } from '#lib/catalog/vocab.js';

  // A reported two-way table. Cell shading scales with the value, so the largest groups stand out.
  let {
    rows,
    cols,
    cells,
    unit = 'subjects'
  }: { rows: Item[]; cols: Item[]; cells: Map<string, StatRow>; unit?: string } = $props();

  const cell = (r: string, c: string) => cells.get(`${r}\u0000${c}`);
  const max = $derived(Math.max(1, ...[...cells.values()].map((x) => x.value)));
</script>

<div class="-mx-1 overflow-x-auto px-1">
  <table class="border-separate border-spacing-[2px] text-sm">
    <thead>
      <tr>
        <th class="sticky left-0 bg-card"></th>
        {#each cols as c (c.key)}
          <th class="max-w-32 px-2 pb-1 text-right text-xs font-medium text-muted-foreground" title={c.label}>
            <span class="line-clamp-2">{c.label}</span>
          </th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each rows as r (r.key)}
        <tr>
          <th
            scope="row"
            class="sticky left-0 max-w-48 min-w-28 truncate bg-card pr-4 text-left font-normal tabular"
            title={r.label}>{r.label}</th
          >
          {#each cols as c (c.key)}
            {@const x = cell(r.key, c.key)}
            {#if x}
              <td
                class="min-w-16 rounded-[4px] bg-[color-mix(in_oklab,var(--series-1)_var(--p),transparent)] px-2 py-1 text-right font-medium whitespace-nowrap tabular"
                style:--p="{Math.round(6 + (x.value / max) * 34)}%"
                title="{r.label}, {c.label}: {formatNumber(x.value, x.approx)} {unit}"
                >{formatNumber(x.value, x.approx)}</td
              >
            {:else}
              <td class="px-2 py-1 text-right text-muted-foreground" title="Not reported">·</td>
            {/if}
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>

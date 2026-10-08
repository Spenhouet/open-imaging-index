<script lang="ts">
  import { formatNumber } from '#lib/catalog/vocab.js';

  // UpSet-style view of contrast combinations: one row per exact set, dots mark the contrasts in it.
  let { contrasts, rows }: { contrasts: string[]; rows: { set: string[]; value: number; approx?: boolean }[] } =
    $props();

  const max = $derived(Math.max(1, ...rows.map((r) => r.value)));
</script>

<div class="overflow-x-auto">
  <table class="w-full text-xs">
    <thead>
      <tr>
        {#each contrasts as c (c)}
          <th class="px-1 pb-2 font-mono font-medium text-muted-foreground">{c}</th>
        {/each}
        <th class="w-full pb-2 pl-3 text-left font-medium text-muted-foreground">Subjects with exactly this set</th>
      </tr>
    </thead>
    <tbody>
      {#each rows as row (row.set.join('+'))}
        <tr class="group">
          {#each contrasts as c, i (c)}
            {@const on = row.set.includes(c)}
            {@const prevOn = contrasts.slice(0, i).some((x) => row.set.includes(x))}
            {@const nextOn = contrasts.slice(i + 1).some((x) => row.set.includes(x))}
            <td class="relative px-1 py-1.5 text-center">
              {#if on && prevOn}<span
                  class="absolute top-1/2 right-1/2 left-0 h-[2px] -translate-y-1/2 bg-foreground/70"
                ></span>{/if}
              {#if on && nextOn}<span
                  class="absolute top-1/2 right-0 left-1/2 h-[2px] -translate-y-1/2 bg-foreground/70"
                ></span>{/if}
              {#if !on && prevOn && nextOn}<span
                  class="absolute top-1/2 right-0 left-0 h-[2px] -translate-y-1/2 bg-foreground/70"
                ></span>{/if}
              <span
                class="relative inline-block size-3 rounded-full ring-2 ring-card {on
                  ? 'bg-foreground/80'
                  : 'bg-muted'}"
                aria-label={on ? c : undefined}
              ></span>
            </td>
          {/each}
          <td class="py-1.5 pl-3">
            <div class="flex items-center gap-2">
              <div
                class="h-2.5 w-(--w) rounded-r-[4px] bg-series-1 group-hover:opacity-80"
                style="--w: {(row.value / max) * 70}%"
              ></div>
              <span class="font-medium tabular">{formatNumber(row.value, row.approx)}</span>
            </div>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

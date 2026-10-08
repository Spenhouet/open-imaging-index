<script lang="ts">
  import type { CoverageCell } from '#lib/catalog/cohort.js';
  import type { Term } from '#lib/catalog/schema.js';
  import type { VocabData } from '#lib/catalog/types.js';
  import { compact, label } from '#lib/catalog/vocab.js';
  import { REPO_URL, link } from '#lib/site.js';
  import { cn } from '#lib/utils.js';

  // Conditions by modality over the whole catalog. Empty cells and the list below show where data is missing.
  let {
    data,
    vocab
  }: {
    data: { modalities: string[]; rows: Term[]; missing: Term[]; cells: Map<string, CoverageCell> };
    vocab: VocabData;
  } = $props();

  let expanded = $state(false);
  const LIMIT = 12;
  const visibleRows = $derived(expanded ? data.rows : data.rows.slice(0, LIMIT));
  const max = $derived(Math.max(1, ...[...data.cells.values()].map((c) => c.datasets)));
  const href = (condition: string, modality: string) => link(`?condition=${condition}&modality=${modality}`);
</script>

<div class="overflow-x-auto">
  <table class="w-full border-separate border-spacing-[2px] text-sm">
    <thead>
      <tr>
        <th class="min-w-44 px-2 py-2 text-left text-xs font-medium text-muted-foreground">Condition</th>
        {#each data.modalities as m (m)}
          <th class="min-w-20 px-2 py-2 text-center text-xs font-medium text-muted-foreground"
            >{label(vocab, 'modality', m)}</th
          >
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each visibleRows as t (t.id)}
        <tr>
          <th class="px-2 py-1 text-left font-medium">{t.label}</th>
          {#each data.modalities as m (m)}
            {@const cell = data.cells.get(`${t.id}|${m}`)}
            <td class="p-0">
              {#if cell}
                <a
                  href={href(t.id, m)}
                  class={cn(
                    'block rounded-[4px] bg-[color-mix(in_oklab,var(--series-1)_var(--a),transparent)] px-2 py-1 text-center tabular transition-shadow hover:ring-2 hover:ring-primary/50',
                    cell.datasets / max > 0.6 ? 'text-white' : 'text-foreground'
                  )}
                  style="--a: {Math.round(14 + (cell.datasets / max) * 76)}%"
                  title="{t.label}, {label(vocab, 'modality', m)}: {cell.datasets} {cell.datasets === 1
                    ? 'dataset'
                    : 'datasets'}, up to {compact(cell.range.hi)} subjects"
                >
                  <span class="font-medium">{cell.datasets}</span>
                  <span class="block text-[10px] opacity-75">{compact(cell.range.hi)}</span>
                </a>
              {:else}
                <div class="h-9 rounded-[4px] bg-muted/40" aria-label="No dataset"></div>
              {/if}
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>
{#if data.rows.length > LIMIT}
  <button
    type="button"
    class="mt-2 px-2 text-xs font-medium text-primary hover:underline"
    onclick={() => (expanded = !expanded)}
  >
    {expanded ? 'Show fewer conditions' : `Show all ${data.rows.length} conditions`}
  </button>
{/if}
<p class="mt-2 text-xs text-muted-foreground">
  Each cell: datasets, and up to how many subjects they hold. Click a cell to list them.
</p>

{#if data.missing.length}
  <div class="mt-5 rounded-xl border border-dashed border-border p-4">
    <div class="text-sm font-medium">No dataset yet</div>
    <p class="mt-1 text-sm text-muted-foreground">
      {data.missing.map((t) => t.label).join(', ')}.
    </p>
    <a
      href="{REPO_URL}/issues/new?template=suggest-dataset.yml"
      class="mt-3 inline-block text-sm font-medium text-primary hover:underline"
      >Know a dataset for one of these? Suggest it</a
    >
  </div>
{/if}

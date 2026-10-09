<script lang="ts">
  import {
    createColumnHelper,
    createPaginatedRowModel,
    createSortedRowModel,
    createTable,
    FlexRender,
    renderSnippet,
    rowPaginationFeature,
    rowSortingFeature,
    sortFn_alphanumeric,
    tableFeatures,
    type PaginationState,
    type SortingState
  } from '@tanstack/svelte-table';
  import ArrowUpDown from '@lucide/svelte/icons/arrow-up-down';
  import ArrowDown from '@lucide/svelte/icons/arrow-down';
  import ArrowUp from '@lucide/svelte/icons/arrow-up';
  import * as Table from '#lib/components/ui/table/index.js';
  import AccessBadge from './AccessBadge.svelte';
  import { Checkbox } from '#lib/components/ui/checkbox/index.js';
  import type { Contribution, Usability } from '#lib/catalog/cohort.js';
  import type { VocabData } from '#lib/catalog/types.js';
  import { compact, formatNumber } from '#lib/catalog/vocab.js';
  import { link } from '#lib/site.js';
  import { cn } from '#lib/utils.js';

  // The datasets behind the cohort, sortable, with a checkbox to put them on the shortlist.
  let {
    rows,
    vocab,
    totalHi,
    picked,
    onPick,
    hasNeeds
  }: {
    rows: Contribution[];
    vocab: VocabData;
    totalHi: number;
    picked: string[];
    onPick: (id: string) => void;
    hasNeeds: boolean;
  } = $props();

  const features = tableFeatures({
    rowSortingFeature,
    rowPaginationFeature,
    sortedRowModel: createSortedRowModel(),
    paginatedRowModel: createPaginatedRowModel(),
    sortFns: { alphanumeric: sortFn_alphanumeric }
  });
  const helper = createColumnHelper<typeof features, Contribution>();
  const fin = (n: number) => (Number.isFinite(n) ? n : 0);

  const useLabel: Record<Usability, string> = { usable: 'Fits', unclear: 'Check terms', blocked: 'Not allowed' };
  const useClass: Record<Usability, string> = {
    usable: 'bg-good/12 text-good-ink',
    unclear: 'bg-mixed/15 text-mixed-ink',
    blocked: 'bg-bad/12 text-bad-ink'
  };

  const columns = helper.columns([
    helper.display({ id: 'pick', header: '', cell: ({ row }) => renderSnippet(pickCell, row.original) }),
    helper.accessor((r) => r.dataset.meta.name, {
      id: 'name',
      header: 'Dataset',
      sortFn: 'alphanumeric',
      cell: ({ row }) => renderSnippet(nameCell, row.original)
    }),
    helper.accessor((r) => r.estimate.lo + fin(r.estimate.hi) / 1e9, {
      id: 'subjects',
      header: 'Matching subjects',
      cell: ({ row }) => renderSnippet(subjectsCell, row.original)
    }),
    helper.accessor((r) => (vocab.terms.access ?? []).findIndex((t) => t.id === r.dataset.meta.access.type), {
      id: 'access',
      header: 'Access',
      cell: ({ row }) => renderSnippet(accessCell, row.original)
    }),
    helper.accessor((r) => ['usable', 'unclear', 'blocked'].indexOf(r.usability), {
      id: 'use',
      header: 'Your use',
      cell: ({ row }) => renderSnippet(useCell, row.original)
    })
  ]);

  let sorting = $state<SortingState>([{ id: 'subjects', desc: true }]);
  // Rows render in pages, so a cohort of thousands of datasets stays fast.
  const PAGE = 25;
  let pagination = $state<PaginationState>({ pageIndex: 0, pageSize: PAGE });
  const table = createTable({
    features,
    get data() {
      return rows;
    },
    columns,
    state: {
      get sorting() {
        return sorting;
      },
      get pagination() {
        return pagination;
      }
    },
    onSortingChange: (updater) => {
      sorting = typeof updater === 'function' ? updater(sorting) : updater;
    },
    onPaginationChange: (updater) => {
      pagination = typeof updater === 'function' ? updater(pagination) : updater;
    }
  });
</script>

{#snippet pickCell(r: Contribution)}
  <Checkbox
    checked={picked.includes(r.dataset.id)}
    onCheckedChange={() => onPick(r.dataset.id)}
    aria-label="Add {r.dataset.meta.name} to the shortlist"
  />
{/snippet}

{#snippet nameCell(r: Contribution)}
  <a href={link(`datasets/${r.dataset.id}/`)} class="font-medium hover:underline">{r.dataset.meta.name}</a>
  {#if r.dataset.meta.full_name}
    <div class="max-w-72 truncate text-xs text-muted-foreground">{r.dataset.meta.full_name}</div>
  {/if}
{/snippet}

{#snippet subjectsCell(r: Contribution)}
  {@const e = r.estimate}
  <div class="flex items-center gap-3">
    <span class="relative h-1.5 w-20 shrink-0 rounded-full bg-muted" aria-hidden="true">
      <span
        class="absolute inset-y-0 left-0 w-(--hi) rounded-full bg-primary/30"
        style="--hi: {Math.min(100, (fin(e.hi) / Math.max(totalHi, 1)) * 100)}%"
      ></span>
      <span
        class="absolute inset-y-0 left-0 w-(--lo) rounded-full bg-primary"
        style="--lo: {Math.min(100, (e.lo / Math.max(totalHi, 1)) * 100)}%"
      ></span>
    </span>
    <span class="text-sm whitespace-nowrap tabular">
      {#if e.lo === e.hi}{formatNumber(e.lo)}
      {:else if !Number.isFinite(e.hi)}<span class="text-muted-foreground">not reported</span>
      {:else if e.lo === 0}up to {compact(e.hi)}
      {:else}{compact(e.lo)} to {compact(e.hi)}{/if}
    </span>
  </div>
{/snippet}

{#snippet accessCell(r: Contribution)}
  <AccessBadge type={r.dataset.meta.access.type} {vocab} />
{/snippet}

{#snippet useCell(r: Contribution)}
  {#if hasNeeds}
    <span class={cn('rounded-md px-1.5 py-0.5 text-xs font-medium whitespace-nowrap', useClass[r.usability])}
      >{useLabel[r.usability]}</span
    >
  {:else}
    <span class="text-xs text-muted-foreground">Pick a use above</span>
  {/if}
{/snippet}

<div class="overflow-x-auto">
  <Table.Root>
    <Table.Header>
      {#each table.getHeaderGroups() as group (group.id)}
        <Table.Row>
          {#each group.headers as header (header.id)}
            <Table.Head class={header.id === 'pick' ? 'w-8' : ''}>
              {#if !header.isPlaceholder}
                {#if header.column.getCanSort() && header.id !== 'pick'}
                  <button
                    type="button"
                    class="-ml-1 inline-flex items-center gap-1 rounded px-1 py-0.5 hover:text-foreground"
                    onclick={header.column.getToggleSortingHandler()}
                  >
                    <FlexRender {header} />
                    {#if header.column.getIsSorted() === 'asc'}<ArrowUp class="size-3.5" />
                    {:else if header.column.getIsSorted() === 'desc'}<ArrowDown class="size-3.5" />
                    {:else}<ArrowUpDown class="size-3.5 opacity-40" />{/if}
                  </button>
                {:else}
                  <FlexRender {header} />
                {/if}
              {/if}
            </Table.Head>
          {/each}
        </Table.Row>
      {/each}
    </Table.Header>
    <Table.Body>
      {#each table.getRowModel().rows as row (row.id)}
        <Table.Row data-state={picked.includes(row.original.dataset.id) ? 'selected' : undefined}>
          {#each row.getAllCells() as cell (cell.id)}
            <Table.Cell><FlexRender {cell} /></Table.Cell>
          {/each}
        </Table.Row>
      {:else}
        <Table.Row>
          <Table.Cell colspan={columns.length} class="h-24 text-center text-muted-foreground"
            >No dataset matches.</Table.Cell
          >
        </Table.Row>
      {/each}
    </Table.Body>
  </Table.Root>
</div>
{#if rows.length > pagination.pageSize}
  <div class="mt-3 flex justify-center">
    <button
      type="button"
      class="rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-medium hover:bg-accent"
      onclick={() => (pagination = { pageIndex: 0, pageSize: pagination.pageSize + PAGE })}
    >
      Show {Math.min(PAGE, rows.length - pagination.pageSize)} more of {rows.length - pagination.pageSize}
    </button>
  </div>
{/if}

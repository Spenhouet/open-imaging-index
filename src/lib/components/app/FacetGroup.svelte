<script lang="ts">
  import { untrack } from 'svelte';
  import ChevronDown from '@lucide/svelte/icons/chevron-down';
  import { Checkbox } from '#lib/components/ui/checkbox/index.js';
  import { cn } from '#lib/utils.js';

  // A filter section with checkboxes and counts. Long lists collapse to the most common values.
  let {
    title,
    options,
    selected,
    onToggle,
    initiallyOpen = true,
    limit = 6
  }: {
    title: string;
    options: { id: string; label: string; count?: number; title?: string; depth?: number }[];
    selected: string[];
    onToggle: (id: string) => void;
    initiallyOpen?: boolean;
    limit?: number;
  } = $props();

  let open = $state(untrack(() => initiallyOpen));
  let expanded = $state(false);
  const visible = $derived(expanded ? options : options.filter((o, i) => i < limit || selected.includes(o.id)));
  const id = $derived(`facet-${title.toLowerCase().replace(/\W+/g, '-')}`);
</script>

<section class="border-b border-border py-3 last:border-0">
  <button
    type="button"
    class="flex w-full items-center justify-between py-1 text-sm font-semibold"
    aria-expanded={open}
    aria-controls={id}
    onclick={() => (open = !open)}
  >
    <span>
      {title}
      {#if selected.length}<span class="ml-1 rounded-full bg-primary px-1.5 text-[11px] text-primary-foreground tabular"
          >{selected.length}</span
        >{/if}
    </span>
    <ChevronDown class={cn('size-4 text-muted-foreground transition-transform', !open && '-rotate-90')} />
  </button>
  {#if open}
    <ul {id} class="mt-1.5 space-y-0.5">
      {#each visible as o (o.id)}
        <li>
          <label
            class={cn(
              'flex cursor-pointer items-center gap-2.5 rounded-md px-1.5 py-1 text-sm hover:bg-accent/60',
              o.count === 0 && !selected.includes(o.id) && 'opacity-45'
            )}
            title={o.title}
          >
            <Checkbox checked={selected.includes(o.id)} onCheckedChange={() => onToggle(o.id)} />
            <span
              class={cn('min-w-0 flex-1 truncate', o.depth && 'pl-(--indent)')}
              style="--indent: {(o.depth ?? 0) * 0.75}rem">{o.label}</span
            >
            <span class="text-xs text-muted-foreground tabular">{o.count ?? ''}</span>
          </label>
        </li>
      {/each}
    </ul>
    {#if options.length > limit}
      <button
        type="button"
        class="mt-1 px-1.5 text-xs font-medium text-primary hover:underline"
        onclick={() => (expanded = !expanded)}
      >
        {expanded ? 'Show fewer' : `Show all ${options.length}`}
      </button>
    {/if}
  {/if}
</section>

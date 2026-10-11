<script lang="ts">
  import ChevronLeft from '@lucide/svelte/icons/chevron-left';
  import ChevronRight from '@lucide/svelte/icons/chevron-right';

  // Numbered pages with previous and next. Links carry real hrefs, so they open in a new tab and are crawlable,
  // while a plain click goes through `onpage` without a page load.
  let {
    page,
    count,
    href,
    onpage
  }: { page: number; count: number; href: (page: number) => string; onpage: (page: number) => void } = $props();

  // 1 ... 4 5 6 ... 12: first, last and the neighbours of the current page.
  const items = $derived.by(() => {
    const keep = new Set([1, count, page - 1, page, page + 1].filter((p) => p >= 1 && p <= count));
    // Fill a gap of one page instead of showing an ellipsis for it.
    for (const p of [2, count - 1]) if (keep.has(p - 1) && keep.has(p + 1)) keep.add(p);
    const out: (number | 'gap')[] = [];
    for (const p of [...keep].sort((a, b) => a - b)) {
      if (out.length && p - (out.at(-1) as number) > 1) out.push('gap');
      out.push(p);
    }
    return out;
  });

  function go(e: MouseEvent, p: number) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    onpage(p);
  }
  const base =
    'inline-flex h-9 min-w-9 items-center justify-center gap-1 rounded-md px-2.5 text-sm font-medium tabular transition-colors';
</script>

<nav class="flex items-center justify-center gap-1" aria-label="Pages">
  {#if page > 1}
    <a class="{base} hover:bg-accent" href={href(page - 1)} onclick={(e) => go(e, page - 1)} rel="prev">
      <ChevronLeft class="size-4" /><span class="max-sm:sr-only">Previous</span>
    </a>
  {:else}
    <span class="{base} text-muted-foreground/50" aria-hidden="true">
      <ChevronLeft class="size-4" /><span class="max-sm:sr-only">Previous</span>
    </span>
  {/if}

  <span class="px-2 text-sm text-muted-foreground tabular sm:hidden">Page {page} of {count}</span>
  <ul class="hidden items-center gap-1 sm:flex">
    {#each items as item, i (item === 'gap' ? `gap${i}` : item)}
      <li>
        {#if item === 'gap'}
          <span class="{base} text-muted-foreground" aria-hidden="true">…</span>
        {:else if item === page}
          <span class="{base} bg-primary text-primary-foreground" aria-current="page">{item}</span>
        {:else}
          <a class="{base} hover:bg-accent" href={href(item)} onclick={(e) => go(e, item)} aria-label="Page {item}"
            >{item}</a
          >
        {/if}
      </li>
    {/each}
  </ul>

  {#if page < count}
    <a class="{base} hover:bg-accent" href={href(page + 1)} onclick={(e) => go(e, page + 1)} rel="next">
      <span class="max-sm:sr-only">Next</span><ChevronRight class="size-4" />
    </a>
  {:else}
    <span class="{base} text-muted-foreground/50" aria-hidden="true">
      <span class="max-sm:sr-only">Next</span><ChevronRight class="size-4" />
    </span>
  {/if}
</nav>

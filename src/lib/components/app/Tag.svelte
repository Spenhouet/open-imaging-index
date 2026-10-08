<script lang="ts">
  import type { Snippet } from 'svelte';
  import { cn } from '#lib/utils.js';

  let {
    title,
    href,
    class: className = '',
    children
  }: { title?: string; href?: string; class?: string; children: Snippet } = $props();
  const base = 'inline-flex items-center rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground';
</script>

{#if href}
  <a {href} {title} class={cn(base, 'transition-colors hover:border-primary/40 hover:text-foreground', className)}
    >{@render children()}</a
  >
{:else}
  <span {title} class={cn(base, className)}>{@render children()}</span>
{/if}

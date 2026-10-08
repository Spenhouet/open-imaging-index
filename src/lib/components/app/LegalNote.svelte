<script lang="ts">
  import Scale from '@lucide/svelte/icons/scale';
  import { link } from '#lib/site.js';
  import { cn } from '#lib/utils.js';

  // The license disclaimer in two sizes. The banner goes once above full license breakdowns,
  // the inline note next to compact license answers. Both link to the full disclaimer.
  let { variant = 'banner', class: className = '' }: { variant?: 'banner' | 'inline'; class?: string } = $props();
</script>

{#if variant === 'banner'}
  <div class={cn('flex gap-3 rounded-xl border border-border bg-muted/50 px-4 py-3 text-sm', className)} role="note">
    <Scale class="mt-0.5 size-4 shrink-0 text-muted-foreground" />
    <p class="text-foreground/85">
      <span class="font-medium text-foreground">Our reading of the license, not legal advice.</span>
      Before you use the data, read the original license and confirm that your use is allowed. We take no responsibility for
      how you use a dataset.
      <a href={link('disclaimer/')} class="font-medium text-primary hover:underline">Full disclaimer</a>
    </p>
  </div>
{:else}
  <p class={cn('text-xs text-muted-foreground', className)}>
    Our interpretation, not legal advice.
    <a href={link('disclaimer/')} class="text-primary hover:underline">Disclaimer</a>
  </p>
{/if}

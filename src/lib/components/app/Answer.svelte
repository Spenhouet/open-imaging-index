<script lang="ts">
  import Check from '@lucide/svelte/icons/circle-check';
  import XCircle from '@lucide/svelte/icons/circle-x';
  import Alert from '@lucide/svelte/icons/circle-alert';
  import Help from '@lucide/svelte/icons/circle-question-mark';
  import type { Answer } from '#lib/catalog/schema.js';
  import { tone as toneOf } from '#lib/catalog/rules.js';
  import { cn } from '#lib/utils.js';

  // A license answer: icon plus word, colored by whether it is friendly to the data user.
  let {
    value,
    good,
    label,
    compact = false,
    class: className = ''
  }: { value: Answer; good: 'yes' | 'no'; label?: string; compact?: boolean; class?: string } = $props();

  const t = $derived(toneOf(value, good));
  const words: Record<Answer, string> = { yes: 'Yes', no: 'No', conditional: 'Conditional', unspecified: 'Not stated' };
  const ink = { good: 'text-good-ink', bad: 'text-bad-ink', mixed: 'text-mixed-ink', unknown: 'text-unknown-ink' };
  const icon = { good: 'text-good', bad: 'text-bad', mixed: 'text-mixed', unknown: 'text-unknown' };
</script>

<span
  class={cn('inline-flex max-w-full items-center gap-1.5 whitespace-nowrap', className)}
  title={label ? `${label}: ${words[value]}` : words[value]}
>
  {#if t === 'good'}<Check class={cn('size-4 shrink-0', icon[t])} />
  {:else if t === 'bad'}<XCircle class={cn('size-4 shrink-0', icon[t])} />
  {:else if t === 'mixed'}<Alert class={cn('size-4 shrink-0', icon[t])} />
  {:else}<Help class={cn('size-4 shrink-0', icon[t])} />{/if}
  {#if label}
    <span class="min-w-0 truncate text-foreground/90">{label}</span>
  {/if}
  {#if !compact}
    <span class={cn('font-medium', ink[t])}>{words[value]}</span>
  {/if}
</span>

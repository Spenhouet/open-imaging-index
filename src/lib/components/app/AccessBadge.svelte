<script lang="ts">
  import type { VocabData } from '#lib/catalog/types.js';
  import { cn } from '#lib/utils.js';

  // How easy it is to get the data. Green: anyone can download it. Red: it is not shared at all. Gray: some
  // process in between (agreement, credentials, application, request, payment). The label always carries the meaning.
  let { type, vocab, class: className = '' }: { type: string; vocab: VocabData; class?: string } = $props();

  const term = $derived(vocab.terms.access?.find((t) => t.id === type));
  const tone = $derived(
    type === 'open' || type === 'registration' ? 'good' : type === 'not_shared' ? 'bad' : 'neutral'
  );
  const styles = {
    good: 'bg-good/12 text-good-ink ring-good/25',
    bad: 'bg-bad/10 text-bad-ink ring-bad/25',
    neutral: 'bg-muted text-muted-foreground ring-border'
  };
  const dots = { good: 'bg-good', bad: 'bg-bad', neutral: 'bg-unknown' };
</script>

<span
  class={cn(
    'inline-flex shrink-0 items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium whitespace-nowrap ring-1 ring-inset',
    styles[tone],
    className
  )}
  title={term?.description}
>
  <span class={cn('size-1.5 rounded-full', dots[tone])} aria-hidden="true"></span>
  {term?.label ?? type}
</span>

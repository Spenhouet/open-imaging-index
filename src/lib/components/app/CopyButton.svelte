<script lang="ts">
  import Copy from '@lucide/svelte/icons/copy';
  import Check from '@lucide/svelte/icons/check';

  let { text, label = 'Copy' }: { text: string; label?: string } = $props();
  let done = $state(false);

  async function copy() {
    await navigator.clipboard.writeText(text);
    done = true;
    setTimeout(() => (done = false), 1500);
  }
</script>

<button
  type="button"
  onclick={copy}
  class="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
>
  {#if done}<Check class="size-3.5 text-good" /> Copied{:else}<Copy class="size-3.5" /> {label}{/if}
</button>

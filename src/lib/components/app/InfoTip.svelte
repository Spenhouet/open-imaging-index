<script lang="ts">
  import Info from '@lucide/svelte/icons/info';
  import * as Popover from '#lib/components/ui/popover/index.js';

  // An info icon that explains a term. Opens on hover for mouse users, and on tap or keyboard for everyone.
  let { text, label = 'What this means' }: { text: string; label?: string } = $props();
  let open = $state(false);
  let hoverTimer: ReturnType<typeof setTimeout> | undefined;

  function hover(next: boolean) {
    clearTimeout(hoverTimer);
    hoverTimer = setTimeout(() => (open = next), next ? 120 : 160);
  }
</script>

<Popover.Root bind:open>
  <Popover.Trigger
    class="inline-flex size-6 shrink-0 items-center justify-center rounded-full text-muted-foreground/70 transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
    aria-label={label}
    onpointerenter={(e: PointerEvent) => e.pointerType === 'mouse' && hover(true)}
    onpointerleave={(e: PointerEvent) => e.pointerType === 'mouse' && hover(false)}
  >
    <Info class="size-3.5" />
  </Popover.Trigger>
  <Popover.Content
    side="top"
    class="w-64 text-xs leading-5"
    onpointerenter={() => hover(true)}
    onpointerleave={() => hover(false)}
    onOpenAutoFocus={(e: Event) => e.preventDefault()}
  >
    {text}
  </Popover.Content>
</Popover.Root>

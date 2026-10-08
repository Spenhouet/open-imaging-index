<script lang="ts">
  import { modalityColor } from '#lib/catalog/vocab.js';

  let { id, label }: { id: string; label: string } = $props();
</script>

<span
  class="inline-flex items-center gap-1.5 rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
  title={label}
>
  <span class="size-2 rounded-full bg-(--dot)" style="--dot: {modalityColor(id)}"></span>
  {label}
</span>

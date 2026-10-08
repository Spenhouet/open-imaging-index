<script lang="ts">
  import Answer from './Answer.svelte';
</script>

<div class="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
  <span class="flex items-center gap-1.5"><Answer value="yes" good="yes" compact /> In your favor</span>
  <span class="flex items-center gap-1.5"><Answer value="conditional" good="yes" compact /> With conditions</span>
  <span class="flex items-center gap-1.5"><Answer value="no" good="yes" compact /> Restricts you</span>
  <span class="flex items-center gap-1.5"><Answer value="unspecified" good="yes" compact /> Not stated in the text</span
  >
</div>

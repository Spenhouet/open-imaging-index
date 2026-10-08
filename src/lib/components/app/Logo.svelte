<script lang="ts">
  let { class: className = '' }: { class?: string } = $props();
</script>

<svg viewBox="0 0 32 32" class={className} aria-hidden="true">
  <rect width="32" height="32" rx="8" class="fill-primary" />
  <g class="fill-primary-foreground">
    <rect x="7" y="7" width="8" height="8" rx="2" />
    <rect x="17" y="7" width="8" height="8" rx="2" opacity=".55" />
    <rect x="7" y="17" width="8" height="8" rx="2" opacity=".55" />
    <rect x="17" y="17" width="8" height="8" rx="2" opacity=".85" />
  </g>
</svg>

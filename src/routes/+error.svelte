<script lang="ts">
  import { page } from '$app/state';
  import { link } from '#lib/site.js';
</script>

<svelte:head><title>{page.status === 404 ? 'Not found' : 'Error'}</title></svelte:head>

<div class="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center">
  <div class="text-sm font-semibold text-primary tabular">{page.status}</div>
  <h1 class="mt-2 text-3xl font-semibold tracking-tight">
    {page.status === 404 ? 'This page does not exist' : 'Something went wrong'}
  </h1>
  <p class="mt-3 text-muted-foreground">
    {page.status === 404 ? 'The dataset may have been renamed. Search for it instead.' : page.error?.message}
  </p>
  <a href={link('')} class="mt-6 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
    >Search datasets</a
  >
</div>

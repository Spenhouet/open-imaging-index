<script lang="ts">
  import DocPage from '#lib/components/app/DocPage.svelte';
  import { link } from '#lib/site.js';

  let { data } = $props();
</script>

<DocPage
  doc={data.doc}
  path="standard/"
  description="How datasets, cohort statistics and license breakdowns are stored: file layout, stats.csv format, dimensions, sources policy and vocabularies."
>
  {#snippet lead()}
    <p class="mt-3 text-lg text-muted-foreground">
      The rules every entry follows. Browse the allowed values on the <a
        class="text-primary hover:underline"
        href={link('vocabulary/')}>vocabulary page</a
      >.
    </p>
  {/snippet}
</DocPage>

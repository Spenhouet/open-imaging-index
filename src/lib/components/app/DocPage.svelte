<script lang="ts">
  import type { Snippet } from 'svelte';
  import Seo from './Seo.svelte';

  // A long document with a table of contents on wide screens.
  let {
    doc,
    description,
    path,
    lead,
    after
  }: {
    doc: { html: string; title: string; headings: { id: string; text: string }[] };
    description: string;
    path: string;
    lead?: Snippet;
    after?: Snippet;
  } = $props();
</script>

<Seo title={doc.title} {description} {path} />

<div class="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 pt-12 md:px-6 lg:grid-cols-[14rem_minmax(0,1fr)]">
  <aside class="hidden lg:block">
    <nav class="sticky top-20 space-y-1 text-sm" aria-label="On this page">
      <div class="mb-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">On this page</div>
      {#each doc.headings as h (h.id)}
        <a href="#{h.id}" class="block rounded-md px-2 py-1 text-muted-foreground hover:bg-accent hover:text-foreground"
          >{h.text}</a
        >
      {/each}
    </nav>
  </aside>
  <article class="max-w-3xl min-w-0">
    <h1 class="text-3xl font-semibold tracking-tight md:text-4xl">{doc.title}</h1>
    {@render lead?.()}
    <div class="prose-doc mt-8">{@html doc.html}</div>
    {@render after?.()}
  </article>
</div>

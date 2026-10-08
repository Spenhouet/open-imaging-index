<script lang="ts">
  import { vocab } from '#lib/catalog/meta.js';
  import Seo from '#lib/components/app/Seo.svelte';
  import { compact, label, modalityColor } from '#lib/catalog/vocab.js';
  import { SITE_URL, link } from '#lib/site.js';

  let { data } = $props();

  // Grouped by first letter, so the list doubles as an index for people and crawlers.
  const groups = $derived.by(() => {
    const out = new Map<string, typeof data.datasets>();
    for (const d of data.datasets) {
      const letter = /[a-z]/i.test(d.name[0]) ? d.name[0].toUpperCase() : '#';
      out.set(letter, [...(out.get(letter) ?? []), d]);
    }
    return [...out];
  });
</script>

<Seo
  title="All medical imaging datasets, A to Z"
  description="Alphabetical list of all {data.datasets.length} medical imaging datasets in the Open Imaging Index, with modality, anatomy and number of subjects."
  path="datasets/"
  jsonLd={{
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: data.datasets.map((d, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE_URL}/datasets/${d.id}/`,
      name: d.name
    }))
  }}
/>

<div class="mx-auto max-w-5xl px-4 pt-12 md:px-6">
  <h1 class="text-3xl font-semibold tracking-tight md:text-4xl">All datasets, A to Z</h1>
  <p class="mt-3 text-lg text-muted-foreground">
    {data.datasets.length} datasets. To filter by cohort, contrast or license, use the
    <a class="text-primary hover:underline" href={link('')}>search</a>.
  </p>

  <nav class="mt-6 flex flex-wrap gap-1" aria-label="Letters">
    {#each groups as [letter] (letter)}
      <a href="#letter-{letter}" class="rounded-md px-2 py-1 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
        >{letter}</a
      >
    {/each}
  </nav>

  {#each groups as [letter, items] (letter)}
    <section id="letter-{letter}" class="mt-8 scroll-mt-20">
      <h2 class="border-b border-border pb-2 text-sm font-semibold text-muted-foreground">{letter}</h2>
      <ul class="divide-y divide-border/70">
        {#each items as d (d.id)}
          <li class="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-3">
            <a href={link(`datasets/${d.id}/`)} class="font-medium hover:underline">{d.name}</a>
            {#if d.full_name}<span class="min-w-0 flex-1 truncate text-sm text-muted-foreground">{d.full_name}</span>{/if}
            <span class="ml-auto flex items-center gap-3 text-xs text-muted-foreground">
              {#each d.modalities as m (m)}
                <span class="flex items-center gap-1"
                  ><span class="size-2 rounded-full bg-(--c)" style="--c: {modalityColor(m)}"></span>{label(vocab, 'modality', m)}</span
                >
              {/each}
              <span>{d.anatomy.map((a) => label(vocab, 'anatomy', a)).join(', ')}</span>
              {#if d.subjects}<span class="tabular">{compact(d.subjects)} subjects</span>{/if}
            </span>
          </li>
        {/each}
      </ul>
    </section>
  {/each}
</div>

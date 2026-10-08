<script lang="ts">
  import { vocab } from '#lib/catalog/meta.js';
  import Seo from '#lib/components/app/Seo.svelte';
  import { editUrl, link } from '#lib/site.js';

  let { data } = $props();

  const sources: Record<string, string> = {
    modality: 'DICOM Modality (0008,0060)',
    contrast: 'BIDS suffixes plus local terms',
    anatomy: 'UBERON',
    condition: 'MONDO, HPO for findings',
    sex: 'BIDS participants.tsv',
    vendor: 'Normalized DICOM Manufacturer'
  };
  const files = $derived(
    Object.keys(vocab.terms).sort((a, b) => {
      const order = [
        'modality',
        'contrast',
        'tracer',
        'anatomy',
        'condition',
        'sex',
        'vendor',
        'task',
        'format',
        'access',
        'split',
        'view'
      ];
      return (order.indexOf(a) + 1 || 99) - (order.indexOf(b) + 1 || 99);
    })
  );
  const titles = $derived(Object.fromEntries(vocab.dimensions.map((d) => [d.id, d.label])));
  const extraTitles: Record<string, string> = { task: 'Task', format: 'Format', access: 'Access type' };

  function mappingUrl(kind: string, code: string): string | undefined {
    if (['mondo', 'uberon', 'hp'].includes(kind))
      return `https://www.ebi.ac.uk/ols4/ontologies/${kind}/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252F${code.replace(':', '_')}`;
    return undefined;
  }
</script>

<Seo
  title="Vocabulary"
  description="Controlled vocabulary of the index: imaging modalities, MR contrasts, anatomy, conditions and more, mapped to DICOM, BIDS, UBERON and MONDO."
  path="vocabulary/"
/>

<div class="mx-auto grid max-w-7xl gap-12 px-4 pt-12 md:px-6 lg:grid-cols-[14rem_1fr]">
  <aside class="hidden lg:block">
    <nav class="sticky top-20 space-y-1 text-sm" aria-label="Vocabularies">
      <a
        href="#dimensions"
        class="block rounded-md px-2 py-1 text-muted-foreground hover:bg-accent hover:text-foreground">Dimensions</a
      >
      <a href="#measures" class="block rounded-md px-2 py-1 text-muted-foreground hover:bg-accent hover:text-foreground"
        >Measures</a
      >
      {#each files as f (f)}
        <a
          href="#{f}"
          class="flex justify-between rounded-md px-2 py-1 text-muted-foreground hover:bg-accent hover:text-foreground"
        >
          {titles[f] ?? extraTitles[f] ?? f}<span class="text-xs tabular">{vocab.terms[f].length}</span>
        </a>
      {/each}
    </nav>
  </aside>

  <div class="min-w-0">
    <h1 class="text-3xl font-semibold tracking-tight md:text-4xl">Vocabulary</h1>
    <p class="mt-3 max-w-3xl text-lg text-muted-foreground">
      Every value used in the index, with mappings to existing standards. The files live in <code
        class="font-mono text-base">vocab/</code
      >. The <a class="text-primary hover:underline" href={link('standard/')}>data standard</a> explains how they are used.
    </p>

    <section id="dimensions" class="scroll-mt-20 pt-10">
      <h2 class="text-xl font-semibold tracking-tight">Dimensions</h2>
      <p class="mt-1 text-sm text-muted-foreground">
        Keys of the <code class="font-mono">by</code> column in stats.csv.
      </p>
      <div class="mt-4 overflow-x-auto surface">
        <table class="w-full text-sm">
          <thead class="border-b border-border text-left text-xs text-muted-foreground">
            <tr
              ><th class="px-4 py-2.5 font-medium">Id</th><th class="px-4 py-2.5 font-medium">Meaning</th><th
                class="px-4 py-2.5 font-medium">Combine</th
              ><th class="px-4 py-2.5 font-medium">Partition</th></tr
            >
          </thead>
          <tbody>
            {#each vocab.dimensions as d (d.id)}
              <tr class="border-b border-border/60 align-top last:border-0">
                <td class="px-4 py-2.5 font-mono text-xs">{d.id}</td>
                <td class="px-4 py-2.5"
                  ><div class="font-medium">{d.label}</div>
                  <div class="text-muted-foreground">{d.description}</div></td
                >
                <td class="px-4 py-2.5 text-muted-foreground">{d.combine}</td>
                <td class="px-4 py-2.5 text-muted-foreground">{d.partition ? 'yes' : 'no'}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </section>

    <section id="measures" class="scroll-mt-20 pt-10">
      <h2 class="text-xl font-semibold tracking-tight">Measures</h2>
      <div class="mt-4 overflow-x-auto surface">
        <table class="w-full text-sm">
          <tbody>
            {#each vocab.measures as m (m.id)}
              <tr class="border-b border-border/60 align-top last:border-0">
                <td class="w-40 px-4 py-2.5 font-mono text-xs">{m.id}</td>
                <td class="px-4 py-2.5"
                  ><span class="font-medium">{m.label}</span>{#if m.unit}<span class="text-muted-foreground">
                      ({m.unit})</span
                    >{/if}{#if m.description}<div class="text-muted-foreground">{m.description}</div>{/if}</td
                >
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </section>

    {#each files as f (f)}
      <section id={f} class="scroll-mt-20 pt-10">
        <div class="flex flex-wrap items-baseline justify-between gap-2">
          <h2 class="text-xl font-semibold tracking-tight">{titles[f] ?? extraTitles[f] ?? f}</h2>
          <span class="text-xs text-muted-foreground">
            {#if sources[f]}Based on {sources[f]} ·
            {/if}<a class="text-primary hover:underline" href={editUrl(`vocab/${f}.yaml`)}>vocab/{f}.yaml</a>
          </span>
        </div>
        <div class="mt-4 overflow-x-auto surface">
          <table class="w-full text-sm">
            <thead class="border-b border-border text-left text-xs text-muted-foreground">
              <tr
                ><th class="px-4 py-2.5 font-medium">Id</th><th class="px-4 py-2.5 font-medium">Label</th><th
                  class="px-4 py-2.5 font-medium">Mappings</th
                ></tr
              >
            </thead>
            <tbody>
              {#each vocab.terms[f] as t (t.id)}
                <tr id="{f}-{t.id}" class="border-b border-border/60 align-top last:border-0">
                  <td class="px-4 py-2.5 font-mono text-xs whitespace-nowrap">{t.id}</td>
                  <td class="px-4 py-2.5">
                    <div class="font-medium">
                      {t.label}{#if t.parent}<span class="ml-2 text-xs font-normal text-muted-foreground"
                          >in {vocab.terms[f].find((x) => x.id === t.parent)?.label ?? t.parent}</span
                        >{/if}
                    </div>
                    {#if t.description}<div class="text-muted-foreground">{t.description}</div>{/if}
                    {#if t.synonyms?.length}<div class="text-xs text-muted-foreground">
                        Also: {t.synonyms.join(', ')}
                      </div>{/if}
                  </td>
                  <td class="px-4 py-2.5 text-xs whitespace-nowrap">
                    {#each Object.entries(t.mappings ?? {}) as [kind, code] (kind)}
                      {@const u = mappingUrl(kind, code)}
                      <div>
                        <span class="text-muted-foreground">{kind}</span>
                        {#if u}<a class="font-mono text-primary hover:underline" href={u}>{code}</a>{:else}<span
                            class="font-mono">{code}</span
                          >{/if}
                      </div>
                    {/each}
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </section>
    {/each}
  </div>
</div>

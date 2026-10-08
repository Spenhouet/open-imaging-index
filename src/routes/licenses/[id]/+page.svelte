<script lang="ts">
  import { vocab } from '#lib/catalog/meta.js';
  import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
  import ChevronRight from '@lucide/svelte/icons/chevron-right';
  import Pencil from '@lucide/svelte/icons/pencil';
  import AnswerLegend from '#lib/components/app/AnswerLegend.svelte';
  import Answer from '#lib/components/app/Answer.svelte';
  import LegalNote from '#lib/components/app/LegalNote.svelte';
  import LicenseRules from '#lib/components/app/LicenseRules.svelte';
  import Seo from '#lib/components/app/Seo.svelte';
  import { editUrl, link } from '#lib/site.js';

  let { data } = $props();
  const lic = $derived(data.license);
  const purpose = $derived(vocab.licenseRules.purposes.find((p) => p.id === lic.purpose));
  // Purpose and rules can map to the same DUO code, list each once.
  const duo = $derived(
    [
      ...(purpose?.duo ? [purpose.duo] : []),
      ...vocab.licenseRules.rules.flatMap((r) => (r.duo && lic.rules[r.id]?.value === r.duo.when ? [r.duo] : []))
    ].filter((c, i, all) => all.findIndex((x) => x.code === c.code) === i)
  );
  const custom = $derived(lic.id.startsWith('LicenseRef-'));
</script>

<Seo
  title="{lic.name}: what it allows"
  description="{lic.summary} Broken down into {vocab.licenseRules.rules.length} rules with quotes."
  path="licenses/{lic.id}/"
/>

<div class="mx-auto max-w-5xl px-4 md:px-6">
  <nav class="flex items-center gap-1 pt-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
    <a href={link('licenses/')} class="hover:text-foreground">Licenses</a>
    <ChevronRight class="size-3.5" />
    <span class="text-foreground">{lic.short_name ?? lic.name}</span>
  </nav>

  <header class="mt-5 border-b border-border pb-8">
    <div class="font-mono text-xs text-muted-foreground">{lic.id}{custom ? ' · custom agreement' : ' · SPDX'}</div>
    <h1 class="mt-2 text-3xl font-semibold tracking-tight">{lic.name}</h1>
    <p class="mt-3 max-w-3xl text-lg text-foreground/85">{lic.summary}</p>
    <div class="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
      <a href={lic.url} class="inline-flex items-center gap-1 font-medium text-primary hover:underline"
        >Original license text <ArrowUpRight class="size-4" /></a
      >
      <a
        href={editUrl(`licenses/${lic.id}.yaml`)}
        class="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
        ><Pencil class="size-3.5" /> Edit</a
      >
      <span class="text-muted-foreground"
        >Purpose: <span class="text-foreground">{purpose?.label ?? lic.purpose}</span></span
      >
      {#if lic.version}<span class="text-muted-foreground">Version read: {lic.version}</span>{/if}
      <span class="text-muted-foreground">Checked {lic.verified.date}</span>
    </div>
    {#if duo.length}
      <div class="mt-4 flex flex-wrap items-center gap-2 text-xs">
        <span class="text-muted-foreground">GA4GH DUO:</span>
        {#each duo as code (code.code)}
          <a
            href="https://www.ebi.ac.uk/ols4/ontologies/duo/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252F{code.code.replace(
              ':',
              '_'
            )}"
            class="rounded-md border border-border px-1.5 py-0.5 font-mono hover:border-primary/40"
            title={code.code}>{code.label}</a
          >
        {/each}
      </div>
    {/if}
  </header>

  <LegalNote class="mt-8" />
  <div class="mt-6"><AnswerLegend /></div>
  <div class="mt-5 surface p-6"><LicenseRules license={lic} {vocab} /></div>

  {#if lic.commercial_license}
    <p class="mt-4 text-sm">
      Separate commercial license: <Answer value={lic.commercial_license.available} good="yes" />
      {#if lic.commercial_license.note}<span class="text-muted-foreground">{lic.commercial_license.note}</span>{/if}
      {#if lic.commercial_license.url}<a class="ml-1 text-primary hover:underline" href={lic.commercial_license.url}
          >Details</a
        >{/if}
    </p>
  {/if}

  <section class="mt-12">
    <h2 class="text-xl font-semibold tracking-tight">Datasets under this license</h2>
    {#if data.users.length}
      <ul class="mt-4 grid gap-3 md:grid-cols-2">
        {#each data.users as u (u.id)}
          <li class="surface p-4">
            <a href={link(`datasets/${u.id}/`)} class="font-medium hover:underline">{u.name}</a>
            {#if u.applies_to}<span class="ml-1 text-xs text-muted-foreground">({u.applies_to})</span>{/if}
            <p class="mt-1 line-clamp-2 text-sm text-muted-foreground">{u.summary}</p>
          </li>
        {/each}
      </ul>
    {:else}
      <p class="mt-3 text-sm text-muted-foreground">None in the index yet.</p>
    {/if}
  </section>

</div>

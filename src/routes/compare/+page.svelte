<script lang="ts">
  import { onMount, untrack } from 'svelte';
  import { goto } from '$app/navigation';
  import Download from '@lucide/svelte/icons/download';
  import X from '@lucide/svelte/icons/x';
  import { licenses, vocab } from '#lib/catalog/meta.js';
  import Answer from '#lib/components/app/Answer.svelte';
  import CopyButton from '#lib/components/app/CopyButton.svelte';
  import LegalNote from '#lib/components/app/LegalNote.svelte';
  import ModalityBadge from '#lib/components/app/ModalityBadge.svelte';
  import Seo from '#lib/components/app/Seo.svelte';
  import type { DatasetSummary } from '#lib/catalog/types.js';
  import { countryName, formatNumber, label } from '#lib/catalog/vocab.js';
  import { SITE_URL, link } from '#lib/site.js';

  // Datasets side by side. The list lives in the URL (?ids=a,b,c), so a comparison can be shared.
  let all = $state.raw<DatasetSummary[]>([]);
  let ids = $state<string[]>([]);
  let loaded = $state(false);
  let ready = false;

  onMount(async () => {
    ids = (new URLSearchParams(window.location.search).get('ids') ?? '').split(',').filter(Boolean);
    ready = true;
    const res = await fetch(link('summaries.json'));
    if (res.ok) {
      all = await res.json();
      loaded = true;
    }
  });
  $effect(() => {
    const q = ids.length ? `?ids=${ids.join(',')}` : '';
    if (untrack(() => ready) && q !== window.location.search)
      goto(link('compare/') + q, { shallow: true, replace: true, reset: false });
  });

  const picked = $derived(ids.map((id) => all.find((d) => d.id === id)).filter((d) => d !== undefined));
  const others = $derived(
    all.filter((d) => !ids.includes(d.id)).sort((a, b) => a.meta.name.localeCompare(b.meta.name))
  );

  const total = (d: DatasetSummary, m: string) => d.stats.find((r) => r.measure === m && !Object.keys(r.by).length);
  const num = (d: DatasetSummary, m: string) => {
    const r = total(d, m);
    return r ? formatNumber(r.value, r.approx) : '';
  };
  const list = (d: DatasetSummary, dim: string) => (d.facets[dim] ?? []).map((v) => label(vocab, dim, v)).join(', ');
  function femaleShare(d: DatasetSummary) {
    const rows = d.stats.filter((r) => r.measure === 'subjects' && Object.keys(r.by).length === 1 && 'sex' in r.by);
    const sum = rows.reduce((s, r) => s + r.value, 0);
    const f = rows.find((r) => r.by.sex === 'female')?.value;
    return f !== undefined && sum ? `${Math.round((f / sum) * 100)}%` : '';
  }
  function age(d: DatasetSummary) {
    const mean = total(d, 'age_mean')?.value;
    const min = total(d, 'age_min')?.value;
    const max = total(d, 'age_max')?.value;
    return [mean !== undefined ? `mean ${mean}` : '', min !== undefined && max !== undefined ? `${min} to ${max}` : '']
      .filter(Boolean)
      .join(', ');
  }

  const rows: { group: string; label: string; value: (d: DatasetSummary) => string }[] = [
    { group: 'Data', label: 'Modality', value: (d) => list(d, 'modality') },
    { group: 'Data', label: 'Anatomy', value: (d) => list(d, 'anatomy') },
    { group: 'Data', label: 'Contrasts', value: (d) => (d.facets.contrast ?? []).join(', ') },
    { group: 'Data', label: 'Conditions', value: (d) => list(d, 'condition') },
    {
      group: 'Data',
      label: 'Tasks',
      value: (d) => (d.meta.tasks ?? []).map((t) => label(vocab, 'task', t)).join(', ')
    },
    {
      group: 'Data',
      label: 'Format',
      value: (d) => (d.meta.formats ?? []).map((t) => label(vocab, 'format', t)).join(', ')
    },
    { group: 'Data', label: 'Released', value: (d) => String(d.meta.year) },
    { group: 'Data', label: 'Size', value: (d) => (d.meta.size_gb ? `${d.meta.size_gb} GB` : '') },
    { group: 'Cohort', label: 'Subjects', value: (d) => num(d, 'subjects') },
    { group: 'Cohort', label: 'Studies', value: (d) => num(d, 'studies') },
    { group: 'Cohort', label: 'Scans', value: (d) => num(d, 'scans') },
    { group: 'Cohort', label: 'Images', value: (d) => num(d, 'images') },
    { group: 'Cohort', label: 'Age', value: age },
    { group: 'Cohort', label: 'Female', value: femaleShare },
    { group: 'Cohort', label: 'Countries', value: (d) => (d.facets.country ?? []).map(countryName).join(', ') },
    { group: 'Cohort', label: 'Scanner vendors', value: (d) => list(d, 'vendor') },
    {
      group: 'Access',
      label: 'Access',
      value: (d) => vocab.terms.access?.find((t) => t.id === d.meta.access.type)?.label ?? d.meta.access.type
    },
    {
      group: 'Access',
      label: 'Licenses',
      value: (d) =>
        d.licenseIds
          .map((id) => licenses.find((l) => l.id === id)?.short_name ?? id)
          .join(d.meta.license_combine === 'any' ? ' or ' : ' + ')
    }
  ];
  const groups = ['Data', 'Cohort', 'Access'];

  function csv(): string {
    const esc = (s: string) => (/[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s);
    const header = ['Attribute', ...picked.map((d) => d.meta.name)];
    const body = [
      ...rows.map((r) => [r.label, ...picked.map(r.value)]),
      ...vocab.licenseRules.rules.map((r) => [`${r.label} (our reading)`, ...picked.map((d) => d.rules[r.id])]),
      ['Page', ...picked.map((d) => `${SITE_URL}/datasets/${d.id}/`)],
      ['Homepage', ...picked.map((d) => d.meta.homepage)]
    ];
    return [header, ...body].map((r) => r.map((c) => esc(String(c ?? ''))).join(',')).join('\n') + '\n';
  }
  function bibtex(): string {
    return picked
      .map((d) => d.meta.citation?.bibtex?.trim() ?? `% ${d.meta.name}: ${d.meta.citation?.text ?? d.meta.homepage}`)
      .join('\n\n');
  }
  function download(name: string, content: string, type: string) {
    const url = URL.createObjectURL(new Blob([content], { type }));
    const a = Object.assign(document.createElement('a'), { href: url, download: name });
    a.click();
    URL.revokeObjectURL(url);
  }
</script>

<Seo
  title="Compare medical imaging datasets"
  description="Compare medical imaging datasets side by side: modalities, contrasts, cohort size, age, sex, access and license terms."
  path="compare/"
/>

<div class="mx-auto max-w-7xl px-4 pt-10 md:px-6">
  <div class="flex flex-wrap items-end justify-between gap-4">
    <div class="max-w-3xl">
      <h1 class="text-3xl font-semibold tracking-tight md:text-4xl">Compare</h1>
      <p class="mt-3 text-lg text-muted-foreground">
        Datasets side by side. Build a shortlist on the <a class="text-primary hover:underline" href={link('explore/')}
          >Explore</a
        > page, or add datasets here.
      </p>
    </div>
    {#if picked.length}
      <div class="flex flex-wrap gap-2">
        <CopyButton text="{SITE_URL}/compare/?ids={ids.join(',')}" label="Copy link" />
        <button
          type="button"
          onclick={() => download('datasets.csv', csv(), 'text/csv')}
          class="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1 text-xs font-medium text-muted-foreground hover:text-foreground"
          ><Download class="size-3.5" /> CSV</button
        >
        <button
          type="button"
          onclick={() => download('datasets.bib', bibtex(), 'application/x-bibtex')}
          class="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1 text-xs font-medium text-muted-foreground hover:text-foreground"
          ><Download class="size-3.5" /> BibTeX</button
        >
      </div>
    {/if}
  </div>

  {#if !loaded}
    <div class="mt-8 h-96 animate-pulse surface"></div>
  {:else}
    <label class="mt-8 flex max-w-md items-center gap-2 text-sm">
      <span class="shrink-0 text-muted-foreground">Add a dataset</span>
      <select
        class="h-9 w-full rounded-lg border border-border bg-card px-2 text-sm"
        value=""
        onchange={(e) => {
          if (e.currentTarget.value) ids = [...ids, e.currentTarget.value];
          e.currentTarget.value = '';
        }}
      >
        <option value="">Choose...</option>
        {#each others as d (d.id)}<option value={d.id}>{d.meta.name}</option>{/each}
      </select>
    </label>

    {#if picked.length === 0}
      <p class="mt-8 surface px-6 py-12 text-center text-muted-foreground">
        Nothing to compare yet. Add datasets above, or tick them in the table on the Explore page.
      </p>
    {:else}
      <div class="mt-6 overflow-x-auto surface">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-border">
              <th class="sticky left-0 z-10 w-44 bg-card px-4 py-3"></th>
              {#each picked as d (d.id)}
                <th class="min-w-56 px-4 py-3 text-left align-top">
                  <div class="flex items-start justify-between gap-2">
                    <a href={link(`datasets/${d.id}/`)} class="text-base font-semibold hover:underline">{d.meta.name}</a
                    >
                    <button
                      type="button"
                      class="rounded p-0.5 text-muted-foreground hover:bg-accent hover:text-foreground"
                      aria-label="Remove {d.meta.name}"
                      onclick={() => (ids = ids.filter((x) => x !== d.id))}><X class="size-4" /></button
                    >
                  </div>
                  <div class="mt-2 flex flex-wrap gap-1">
                    {#each d.facets.modality ?? [] as m (m)}<ModalityBadge
                        id={m}
                        label={label(vocab, 'modality', m)}
                      />{/each}
                  </div>
                </th>
              {/each}
            </tr>
          </thead>
          <tbody>
            {#each groups as g (g)}
              <tr>
                <th
                  colspan={picked.length + 1}
                  class="sticky left-0 bg-muted/60 px-4 py-2 text-left text-xs font-semibold tracking-wide text-muted-foreground uppercase"
                  >{g}</th
                >
              </tr>
              {#each rows.filter((r) => r.group === g) as r (r.label)}
                <tr class="border-b border-border/60">
                  <th class="sticky left-0 z-10 bg-card px-4 py-2 text-left font-medium whitespace-nowrap">{r.label}</th
                  >
                  {#each picked as d (d.id)}
                    <td class="px-4 py-2 align-top tabular">{r.value(d) || '·'}</td>
                  {/each}
                </tr>
              {/each}
            {/each}
            <tr>
              <th
                colspan={picked.length + 1}
                class="sticky left-0 bg-muted/60 px-4 py-2 text-left text-xs font-semibold tracking-wide text-muted-foreground uppercase"
                >License, our reading</th
              >
            </tr>
            {#each vocab.licenseRules.rules as rule (rule.id)}
              <tr class="border-b border-border/60 last:border-0">
                <th
                  class="sticky left-0 z-10 bg-card px-4 py-2 text-left font-medium whitespace-nowrap"
                  title={rule.question}>{rule.label}</th
                >
                {#each picked as d (d.id)}
                  <td class="px-4 py-2"><Answer value={d.rules[rule.id]} good={rule.good} /></td>
                {/each}
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
      <LegalNote class="mt-4" />
    {/if}
  {/if}
</div>

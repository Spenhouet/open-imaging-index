<script lang="ts">
  import { vocab } from '#lib/catalog/meta.js';
  import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
  import Pencil from '@lucide/svelte/icons/pencil';
  import Flag from '@lucide/svelte/icons/flag';
  import ChevronRight from '@lucide/svelte/icons/chevron-right';
  import AccessBadge from '#lib/components/app/AccessBadge.svelte';
  import Answer from '#lib/components/app/Answer.svelte';
  import CopyButton from '#lib/components/app/CopyButton.svelte';
  import LegalNote from '#lib/components/app/LegalNote.svelte';
  import LicenseRules from '#lib/components/app/LicenseRules.svelte';
  import ModalityBadge from '#lib/components/app/ModalityBadge.svelte';
  import Seo from '#lib/components/app/Seo.svelte';
  import Tag from '#lib/components/app/Tag.svelte';
  import BarList from '#lib/components/charts/BarList.svelte';
  import Columns from '#lib/components/charts/Columns.svelte';
  import ComboMatrix from '#lib/components/charts/ComboMatrix.svelte';
  import Pyramid from '#lib/components/charts/Pyramid.svelte';
  import SplitBar from '#lib/components/charts/SplitBar.svelte';
  import { contrastSetParts, formatBy, marginal, parseAgeBin, total } from '#lib/catalog/stats.js';
  import { countryName, formatNumber, label, modalityColor } from '#lib/catalog/vocab.js';
  import { SITE_NAME, SITE_URL, editUrl, issueUrl, link } from '#lib/site.js';

  let { data } = $props();

  const d = $derived(data.dataset);
  const meta = $derived(d.meta);
  const rows = $derived(d.stats);
  const t = (m: string) => total(rows, m);

  const counts = $derived(
    (['subjects', 'studies', 'scans', 'images', 'slides'] as const).flatMap((m) => {
      const r = t(m);
      return r ? [{ m, label: vocab.measures.find((x) => x.id === m)?.label ?? m, r }] : [];
    })
  );
  const N = $derived(t('subjects')?.value);

  const ageBins = $derived(
    marginal(rows, 'subjects', 'age')
      .map((r) => ({ r, bin: parseAgeBin(r.by.age) }))
      .filter((x) => x.bin)
      .sort((a, b) => a.bin![0] - b.bin![0])
      .map(({ r }) => ({ key: r.by.age, label: r.by.age, value: r.value, approx: r.approx }))
  );
  const sexRows = $derived(marginal(rows, 'subjects', 'sex'));
  const sexColors: Record<string, string> = {
    female: 'var(--series-1)',
    male: 'var(--series-2)',
    other: 'var(--series-3)',
    unknown: 'var(--series-other)'
  };

  // Age by sex cross table, when reported for at least some bins.
  const pyramid = $derived.by(() => {
    const joint = rows.filter(
      (r) => r.measure === 'subjects' && Object.keys(r.by).length === 2 && 'age' in r.by && 'sex' in r.by
    );
    if (joint.length < 2) return null;
    const bins = [...new Set(joint.map((r) => r.by.age))].sort(
      (a, b) => (parseAgeBin(a)?.[0] ?? 0) - (parseAgeBin(b)?.[0] ?? 0)
    );
    const values = (s: string) => new Map(joint.filter((r) => r.by.sex === s).map((r) => [r.by.age, r.value]));
    return { bins, left: values('female'), right: values('male') };
  });

  const combos = $derived.by(() => {
    const sets = marginal(rows, 'subjects', 'contrast_set');
    if (!sets.length) return null;
    const contrasts = [...new Set(sets.flatMap((r) => contrastSetParts(r.by.contrast_set)))];
    const order = (vocab.terms.contrast ?? []).map((x) => x.id);
    contrasts.sort((a, b) => order.indexOf(a) - order.indexOf(b));
    return {
      contrasts,
      rows: sets
        .map((r) => ({ set: contrastSetParts(r.by.contrast_set), value: r.value, approx: r.approx }))
        .sort((a, b) => b.value - a.value)
    };
  });

  // One bar list per other dimension the dataset reports.
  const otherDims = [
    'modality',
    'contrast',
    'tracer',
    'condition',
    'anatomy',
    'vendor',
    'field_strength',
    'country',
    'split',
    'view'
  ];
  const breakdowns = $derived(
    otherDims.flatMap((dim) => {
      const rs = marginal(rows, 'subjects', dim);
      const measure = rs.length
        ? 'subjects'
        : ['images', 'scans', 'studies', 'slides'].find((m) => marginal(rows, m, dim).length);
      const list = measure ? marginal(rows, measure, dim) : [];
      if (!list.length) return [];
      return [
        {
          dim,
          measure: measure!,
          title: vocab.dimensions.find((x) => x.id === dim)?.label ?? dim,
          total: t(measure!)?.value,
          items: list
            .map((r) => ({
              key: r.by[dim],
              label: label(vocab, dim, r.by[dim]),
              value: r.value,
              approx: r.approx,
              color: dim === 'modality' ? modalityColor(r.by[dim]) : undefined
            }))
            .sort((a, b) => b.value - a.value)
        }
      ];
    })
  );

  const ageSummary = $derived.by(() => {
    const [mean, sd, median, min, max] = ['age_mean', 'age_sd', 'age_median', 'age_min', 'age_max'].map(
      (m) => t(m)?.value
    );
    return { mean, sd, median, min, max };
  });

  const hasCohortStats = $derived(ageBins.length > 0 || sexRows.length > 0 || !!combos || breakdowns.length > 0);
  const access = $derived(vocab.terms.access?.find((a) => a.id === meta.access.type));
  const verifiedAgeDays = $derived(Math.floor((Date.now() - new Date(meta.verified.date).getTime()) / 86_400_000));

  const keyRules = [
    'commercial_use',
    'product_validation',
    'model_training',
    'redistribute_original',
    'share_model_weights',
    'signed_agreement',
    'ethics_approval'
  ];

  const sections = $derived(
    [
      { id: 'overview', label: 'Overview' },
      hasCohortStats && { id: 'cohort', label: 'Cohort' },
      { id: 'license', label: 'License and access' },
      meta.citation && { id: 'citation', label: 'Citation' },
      { id: 'numbers', label: 'All numbers' }
    ].filter((s): s is { id: string; label: string } => !!s)
  );

  const description = $derived(meta.summary);
  const jsonLd = $derived({
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: meta.full_name ? `${meta.name}: ${meta.full_name}` : meta.name,
    alternateName: meta.full_name ? meta.name : undefined,
    description: `${meta.summary} ${d.readmeHtml
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()}`.slice(0, 4900),
    url: `${SITE_URL}/datasets/${d.id}/`,
    sameAs: meta.homepage,
    identifier: meta.doi ? `https://doi.org/${meta.doi}` : undefined,
    creator: meta.creators.map((c) => ({ '@type': 'Organization', name: c.name, url: c.url })),
    license: d.licenses.map((l) => l.url ?? l.license.url),
    isAccessibleForFree: meta.access.type !== 'paid',
    conditionsOfAccess: access ? `${access.label}. ${access.description ?? ''}`.trim() : undefined,
    keywords: [
      ...(d.facets.modality ?? []).map((m) => label(vocab, 'modality', m)),
      ...(d.facets.anatomy ?? []).map((m) => label(vocab, 'anatomy', m)),
      ...(d.facets.condition ?? []).map((m) => label(vocab, 'condition', m)),
      ...(meta.keywords ?? [])
    ],
    datePublished: String(meta.year),
    dateModified: meta.verified.date,
    variableMeasured: counts.map((c) => ({ '@type': 'PropertyValue', name: c.label, value: c.r.value })),
    spatialCoverage: meta.countries?.map((c) => ({ '@type': 'Place', name: countryName(c) })),
    includedInDataCatalog: { '@type': 'DataCatalog', name: SITE_NAME, url: `${SITE_URL}/` }
  });

  const sourceLink = (key: string) => meta.sources[key];

  // Search-friendly title: what people type, e.g. "BraTS 2021: brain MRI dataset, 2,040 subjects".
  const seoTitle = $derived.by(() => {
    const mods = [...new Set((d.facets.modality ?? []).map((m) => label(vocab, 'modality', m).replace(/ \(.*\)$/, '')))];
    const anat = (d.facets.anatomy ?? []).slice(0, 2).map((a) => label(vocab, 'anatomy', a).toLowerCase());
    const n = t('subjects');
    const size = n ? `, ${formatNumber(n.value, n.approx)} subjects` : '';
    return `${meta.name}: ${anat.join(' and ')} ${mods.join(' and ')} dataset${size}`;
  });
  const breadcrumbLd = $derived({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Datasets', item: `${SITE_URL}/datasets/` },
      { '@type': 'ListItem', position: 2, name: meta.name, item: `${SITE_URL}/datasets/${d.id}/` }
    ]
  });
</script>

<Seo title={seoTitle} {description} path="datasets/{d.id}/" jsonLd={[jsonLd, breadcrumbLd]} />

<div class="mx-auto max-w-7xl px-4 md:px-6">
  <nav class="flex items-center gap-1 pt-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
    <a href={link('datasets/')} class="hover:text-foreground">Datasets</a>
    <ChevronRight class="size-3.5" />
    <span class="text-foreground">{meta.name}</span>
  </nav>

  <header class="mt-5 grid grid-cols-1 gap-6 border-b border-border pb-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
    <div class="max-w-3xl">
      <div class="flex flex-wrap items-center gap-1.5">
        {#each d.facets.modality ?? [] as m (m)}<ModalityBadge id={m} label={label(vocab, 'modality', m)} />{/each}
        {#each d.facets.anatomy ?? [] as a (a)}<Tag href={link(`?anatomy=${a}`)}>{label(vocab, 'anatomy', a)}</Tag
          >{/each}
        {#if meta.status !== 'active'}<Tag class="border-mixed text-mixed-ink">{meta.status}</Tag>{/if}
      </div>
      <h1 class="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{meta.name}</h1>
      {#if meta.full_name}<p class="mt-1 text-lg text-muted-foreground">{meta.full_name}</p>{/if}
      <p class="mt-4 text-pretty text-foreground/85">{meta.summary}</p>
    </div>
    <div class="flex flex-wrap gap-2 lg:justify-end">
      <a
        href={meta.homepage}
        class="inline-flex h-10 items-center gap-1.5 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
        >Go to dataset <ArrowUpRight class="size-4" /></a
      >
      <a
        href={editUrl(`datasets/${d.id}/dataset.yaml`)}
        class="inline-flex h-10 items-center gap-1.5 rounded-lg border border-border bg-card px-3 text-sm font-medium hover:bg-accent"
        ><Pencil class="size-4" /> Edit</a
      >
      <a
        href={issueUrl(
          `Correction: ${meta.name}`,
          `Dataset: ${SITE_URL}/datasets/${d.id}/\n\nWhat is wrong and where is the source?\n`
        )}
        class="inline-flex h-10 items-center gap-1.5 rounded-lg border border-border bg-card px-3 text-sm font-medium hover:bg-accent"
        ><Flag class="size-4" /> Report</a
      >
    </div>
  </header>

  <div class="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
    <div class="min-w-0">
      <nav
        class="sticky top-14 z-30 -mx-4 mb-2 flex gap-1 overflow-x-auto border-b border-border bg-background/90 px-4 py-2 backdrop-blur md:-mx-0 md:px-0"
        aria-label="Sections"
      >
        {#each sections as s (s.id)}
          <a
            href="#{s.id}"
            class="shrink-0 rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
            >{s.label}</a
          >
        {/each}
      </nav>

      <section id="overview" class="scroll-mt-28 pt-6">
        <h2 class="sr-only">Overview</h2>
        <div class="prose-doc max-w-3xl">{@html d.readmeHtml}</div>
      </section>

      {#if hasCohortStats}
        <section id="cohort" class="scroll-mt-28 pt-12">
          <h2 class="text-xl font-semibold tracking-tight">Cohort</h2>
          <p class="mt-1 text-sm text-muted-foreground">
            Aggregate numbers from the sources below. Bars are relative to the {N
              ? `${formatNumber(N)} subjects`
              : 'largest value'}.
          </p>
          <div class="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
            {#if sexRows.length}
              <div class="surface p-5">
                <h3 class="text-sm font-semibold">Sex</h3>
                <div class="mt-4">
                  <SplitBar
                    items={sexRows.map((r) => ({
                      key: r.by.sex,
                      label: label(vocab, 'sex', r.by.sex),
                      value: r.value,
                      color: sexColors[r.by.sex] ?? 'var(--series-other)'
                    }))}
                  />
                </div>
                {#if N && sexRows.reduce((s, r) => s + r.value, 0) < N * 0.98}
                  <p class="mt-3 text-xs text-muted-foreground">
                    Covers {formatNumber(sexRows.reduce((s, r) => s + r.value, 0))} of {formatNumber(N)} subjects.
                  </p>
                {/if}
              </div>
            {/if}
            {#if ageBins.length || ageSummary.mean !== undefined}
              <div class="surface p-5">
                <div class="flex items-baseline justify-between gap-2">
                  <h3 class="text-sm font-semibold">Age</h3>
                  <span class="text-xs text-muted-foreground tabular">
                    {#if ageSummary.mean !== undefined}mean {ageSummary.mean}{#if ageSummary.sd !== undefined}
                        ± {ageSummary.sd}{/if}{/if}
                    {#if ageSummary.min !== undefined && ageSummary.max !== undefined}
                      · range {ageSummary.min} to {ageSummary.max}{/if}
                  </span>
                </div>
                {#if ageBins.length}
                  <div class="mt-4"><Columns items={ageBins} /></div>
                {:else}
                  <p class="mt-3 text-sm text-muted-foreground">No age bins reported.</p>
                {/if}
              </div>
            {/if}
            {#if pyramid}
              <div class="surface p-5 md:col-span-2">
                <h3 class="text-sm font-semibold">Age by sex</h3>
                <p class="mt-0.5 text-xs text-muted-foreground">
                  Reported cross table. Missing cells were not published (fewer than 10 subjects or not reported).
                </p>
                <div class="mt-4">
                  <Pyramid
                    bins={pyramid.bins}
                    left={{ label: 'Female', color: sexColors.female, values: pyramid.left }}
                    right={{ label: 'Male', color: sexColors.male, values: pyramid.right }}
                  />
                </div>
              </div>
            {/if}
            {#if combos}
              <div class="surface p-5 md:col-span-2">
                <h3 class="text-sm font-semibold">Contrast combinations</h3>
                <p class="mt-0.5 text-xs text-muted-foreground">
                  How many subjects have exactly each set of contrasts.
                </p>
                <div class="mt-4"><ComboMatrix contrasts={combos.contrasts} rows={combos.rows} /></div>
              </div>
            {/if}
            {#each breakdowns as b (b.dim)}
              <div class="surface p-5">
                <h3 class="text-sm font-semibold">{b.title}</h3>
                <p class="mt-0.5 text-xs text-muted-foreground">
                  {b.measure}{b.dim === 'condition' || b.dim === 'contrast' ? ', values can overlap' : ''}
                </p>
                <div class="mt-4"><BarList items={b.items} total={b.total} unit={b.measure} /></div>
              </div>
            {/each}
          </div>
        </section>
      {/if}

      <section id="license" class="scroll-mt-28 pt-12">
        <h2 class="text-xl font-semibold tracking-tight">License and access</h2>
        <LegalNote class="mt-4" />
        <div class="mt-4 surface p-5">
          <div class="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div class="text-xs font-semibold tracking-wide text-muted-foreground uppercase">Access</div>
              <AccessBadge type={meta.access.type} {vocab} class="mt-2 px-2.5 py-1 text-sm" />
              {#if access?.description}<p class="text-sm text-muted-foreground">{access.description}</p>{/if}
              {#if meta.access.note}<p class="mt-2 max-w-xl text-sm">{meta.access.note}</p>{/if}
            </div>
            <a
              href={meta.access.url}
              class="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >Access page <ArrowUpRight class="size-4" /></a
            >
          </div>
        </div>

        {#if d.licenses.length > 1}
          <p class="mt-4 text-sm text-muted-foreground">
            {#if meta.license_combine === 'any'}
              The same data is offered under {d.licenses.length} alternative licenses. Pick the copy whose terms fit; the
              summary on the right shows the friendliest answer per rule.
            {:else}
              Different parts of the data carry different licenses. The summary on the right shows the most restrictive
              answer per rule.
            {/if}
          </p>
        {/if}
        {#each d.licenses as use (use.license.id + (use.applies_to ?? ''))}
          {@const lic = use.license}
          <div class="mt-5 surface p-5">
            <div class="grid grid-cols-1 gap-4 border-b border-border pb-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-8">
              <div class="max-w-2xl">
                {#if use.applies_to}<div class="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    For {use.applies_to}
                  </div>{/if}
                <h3 class="mt-0.5 text-lg font-semibold">
                  <a href={link(`licenses/${lic.id}/`)} class="hover:underline">{lic.name}</a>
                </h3>
                <p class="mt-1 text-sm text-foreground/85">{lic.summary}</p>
                {#if use.note}<p class="mt-2 text-sm text-muted-foreground">{use.note}</p>{/if}
              </div>
              <div class="flex flex-col gap-1 text-xs text-muted-foreground sm:max-w-56 sm:items-end sm:text-right">
                <a
                  href={use.url ?? lic.url}
                  class="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >Original license text <ArrowUpRight class="size-3.5" /></a
                >
                {#if lic.version}<span>Version read: {lic.version}</span>{/if}
                <span>Checked {lic.verified.date}</span>
              </div>
            </div>
            <div class="mt-5"><LicenseRules license={lic} {vocab} /></div>
            {#if lic.commercial_license && lic.commercial_license.available !== 'no'}
              <p class="mt-5 rounded-lg bg-accent/60 px-3 py-2 text-sm">
                Commercial license:
                <Answer value={lic.commercial_license.available} good="yes" />
                {#if lic.commercial_license.note}<span class="text-muted-foreground">
                    {lic.commercial_license.note}</span
                  >{/if}
                {#if lic.commercial_license.url}<a
                    class="ml-1 font-medium text-primary hover:underline"
                    href={lic.commercial_license.url}>Details</a
                  >{/if}
              </p>
            {/if}
          </div>
        {/each}
      </section>

      {#if meta.citation}
        <section id="citation" class="scroll-mt-28 pt-12">
          <h2 class="text-xl font-semibold tracking-tight">Citation</h2>
          {#if meta.citation.text}
            <div class="mt-4 flex items-start justify-between gap-4 surface p-4">
              <p class="min-w-0 text-sm [overflow-wrap:anywhere]">{meta.citation.text}</p>
              <div class="shrink-0"><CopyButton text={meta.citation.text} /></div>
            </div>
          {/if}
          {#if meta.citation.bibtex}
            <div class="relative mt-3">
              <pre
                class="overflow-x-auto rounded-xl bg-muted p-4 pr-24 font-mono text-xs leading-5">{meta.citation.bibtex.trim()}</pre>
              <div class="absolute top-3 right-3"><CopyButton text={meta.citation.bibtex.trim()} label="BibTeX" /></div>
            </div>
          {/if}
        </section>
      {/if}

      <section id="numbers" class="scroll-mt-28 pt-12">
        <h2 class="text-xl font-semibold tracking-tight">All numbers</h2>
        <p class="mt-1 text-sm text-muted-foreground">
          Every number on this page, as stored in
          <a class="text-primary hover:underline" href={editUrl(`datasets/${d.id}/stats.csv`)}>stats.csv</a>, with its
          source.
        </p>
        {#if rows.length}
          <div class="mt-4 overflow-x-auto surface">
            <table class="w-full text-sm">
              <thead class="border-b border-border text-left text-xs text-muted-foreground">
                <tr>
                  <th class="px-4 py-2.5 font-medium">Measure</th>
                  <th class="px-4 py-2.5 font-medium">Breakdown</th>
                  <th class="px-4 py-2.5 text-right font-medium">Value</th>
                  <th class="px-4 py-2.5 font-medium">Source</th>
                </tr>
              </thead>
              <tbody>
                {#each rows as r (r.line)}
                  {@const s = sourceLink(r.source)}
                  <tr class="border-b border-border/60 last:border-0">
                    <td class="px-4 py-2 whitespace-nowrap"
                      >{vocab.measures.find((m) => m.id === r.measure)?.label ?? r.measure}</td
                    >
                    <td class="px-4 py-2">
                      {#if Object.keys(r.by).length}
                        <span class="font-mono text-xs">{formatBy(r.by)}</span>
                      {:else}<span class="text-muted-foreground">total</span>{/if}
                      {#if r.note}<div class="text-xs text-muted-foreground">{r.note}</div>{/if}
                    </td>
                    <td class="px-4 py-2 text-right font-medium whitespace-nowrap tabular"
                      >{formatNumber(r.value, r.approx)}</td
                    >
                    <td class="px-4 py-2 text-xs">
                      {#if s}<a href={s.url} class="text-primary hover:underline" title={s.title}>{r.source}</a
                        >{:else}{r.source}{/if}
                      {#if r.where}<div class="whitespace-nowrap text-muted-foreground">{r.where}</div>{/if}
                    </td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        {:else}
          <p class="mt-4 text-sm text-muted-foreground">
            No numbers yet. <a class="text-primary hover:underline" href={link('contribute/')}>Add some</a>.
          </p>
        {/if}

        <h3 class="mt-8 text-sm font-semibold">Sources</h3>
        <p class="mt-1 text-xs text-muted-foreground">The keys used in the table above.</p>
        <ul class="mt-2 space-y-1.5 text-sm">
          {#each Object.entries(meta.sources) as [key, s] (key)}
            <li class="flex flex-wrap items-baseline gap-2">
              <span class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">{key}</span>
              <a href={s.url} class="text-primary hover:underline">{s.title}</a>
              <span class="text-xs text-muted-foreground">{s.kind}</span>
            </li>
          {/each}
        </ul>
      </section>
    </div>

    <aside class="order-first lg:order-none lg:pt-6">
      <div class="space-y-5 lg:sticky lg:top-20">
        <div class="surface p-5">
          <h2 class="text-xs font-semibold tracking-wide text-muted-foreground uppercase">At a glance</h2>
          {#if counts.length}
            <dl class="mt-3 grid grid-cols-2 gap-x-4 gap-y-3">
              {#each counts as c (c.m)}
                <div>
                  <dt class="text-xs text-muted-foreground">{c.label}</dt>
                  <dd class="text-2xl font-semibold tracking-tight tabular">{formatNumber(c.r.value, c.r.approx)}</dd>
                </div>
              {/each}
            </dl>
          {/if}
          <dl class="mt-4 space-y-2.5 border-t border-border pt-4 text-sm">
            {#if ageSummary.mean !== undefined || ageSummary.min !== undefined}
              <div class="flex justify-between gap-3">
                <dt class="text-muted-foreground">Age</dt>
                <dd class="text-right tabular">
                  {#if ageSummary.mean !== undefined}{ageSummary.mean} mean{/if}{#if ageSummary.min !== undefined && ageSummary.max !== undefined}{ageSummary.mean !==
                    undefined
                      ? ', '
                      : ''}{ageSummary.min} to {ageSummary.max}{/if}
                </dd>
              </div>
            {/if}
            {#if (d.facets.contrast ?? []).length}
              <div class="flex justify-between gap-3">
                <dt class="text-muted-foreground">Contrasts</dt>
                <dd class="text-right font-mono text-xs leading-5">{(d.facets.contrast ?? []).join(', ')}</dd>
              </div>
            {/if}
            {#if (d.facets.condition ?? []).length}
              <div class="flex justify-between gap-3">
                <dt class="text-muted-foreground">Conditions</dt>
                <dd class="text-right">
                  {(d.facets.condition ?? []).map((c) => label(vocab, 'condition', c)).join(', ')}
                </dd>
              </div>
            {/if}
            {#if meta.tasks?.length}
              <div class="flex justify-between gap-3">
                <dt class="text-muted-foreground">Tasks</dt>
                <dd class="text-right">{meta.tasks.map((x) => label(vocab, 'task', x)).join(', ')}</dd>
              </div>
            {/if}
            <div class="flex justify-between gap-3">
              <dt class="text-muted-foreground">Released</dt>
              <dd class="tabular">
                {meta.year}{meta.updated && meta.updated !== meta.year ? `, updated ${meta.updated}` : ''}
              </dd>
            </div>
            {#if meta.formats?.length}
              <div class="flex justify-between gap-3">
                <dt class="text-muted-foreground">Format</dt>
                <dd class="text-right">{meta.formats.map((f) => label(vocab, 'format', f)).join(', ')}</dd>
              </div>
            {/if}
            {#if meta.size_gb}
              <div class="flex justify-between gap-3">
                <dt class="text-muted-foreground">Size</dt>
                <dd class="tabular">{meta.size_gb} GB</dd>
              </div>
            {/if}
            {#if (d.facets.country ?? []).length}
              <div class="flex justify-between gap-3">
                <dt class="text-muted-foreground">Countries</dt>
                <dd class="text-right">{(d.facets.country ?? []).map(countryName).join(', ')}</dd>
              </div>
            {/if}
            {#if meta.doi}
              <div class="flex justify-between gap-3">
                <dt class="text-muted-foreground">DOI</dt>
                <dd class="min-w-0 truncate">
                  <a class="text-primary hover:underline" href="https://doi.org/{meta.doi}">{meta.doi}</a>
                </dd>
              </div>
            {/if}
            <div class="flex justify-between gap-3">
              <dt class="text-muted-foreground">Creators</dt>
              <dd class="text-right">
                {#each meta.creators as c, i (c.name)}{#if c.url}<a class="hover:underline" href={c.url}>{c.name}</a
                    >{:else}{c.name}{/if}{i < meta.creators.length - 1 ? '; ' : ''}{/each}
              </dd>
            </div>
          </dl>
        </div>

        <div class="surface p-5">
          <h2 class="text-xs font-semibold tracking-wide text-muted-foreground uppercase">License at a glance</h2>
          <ul class="mt-3 space-y-2 text-sm">
            {#each keyRules as id (id)}
              {@const rule = vocab.licenseRules.rules.find((r) => r.id === id)}
              {#if rule}
                <li class="flex items-center justify-between gap-3">
                  <span>{rule.label}</span>
                  <Answer value={d.rules[id]} good={rule.good} class="w-28 shrink-0" />
                </li>
              {/if}
            {/each}
          </ul>
          <a href="#license" class="mt-3 inline-block text-xs font-medium text-primary hover:underline"
            >All {vocab.licenseRules.rules.length} rules with quotes</a
          >
          <LegalNote variant="inline" class="mt-2 border-t border-border pt-2" />
        </div>

        <p class="px-1 text-xs text-muted-foreground">
          Checked against its sources on {meta.verified.date} by {meta.verified.by}.
          {#if verifiedAgeDays > 365}<span class="text-mixed-ink">More than a year ago, details may have changed.</span
            >{/if}
        </p>

        {#if data.related.length}
          <div class="surface p-5">
            <h2 class="text-xs font-semibold tracking-wide text-muted-foreground uppercase">Related</h2>
            <ul class="mt-3 space-y-3">
              {#each data.related as r (r.id)}
                <li>
                  <a href={link(`datasets/${r.id}/`)} class="text-sm font-medium hover:underline">{r.name}</a>
                  <p class="line-clamp-2 text-xs text-muted-foreground">{r.summary}</p>
                </li>
              {/each}
            </ul>
          </div>
        {/if}
      </div>
    </aside>
  </div>
</div>

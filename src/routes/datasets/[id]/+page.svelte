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
  import CrossTable from '#lib/components/charts/CrossTable.svelte';
  import { formatBy, total } from '#lib/catalog/stats.js';
  import { ageNote, datasetCharts, type Breakdown, type Cross, type Variant } from '#lib/catalog/charts.js';
  import { countryName, formatNumber, label } from '#lib/catalog/vocab.js';
  import { SITE_NAME, SITE_URL, editUrl, issueUrl, link } from '#lib/site.js';

  let { data } = $props();

  const d = $derived(data.dataset);
  const meta = $derived(d.meta);
  const rows = $derived(d.stats);
  const t = (m: string) => total(rows, m);

  const counts = $derived(
    (['subjects', 'studies', 'scans', 'images', 'slides'] as const).flatMap((m) => {
      const r = t(m);
      return r ? [{ m, label: measureLabel(m), r }] : [];
    })
  );
  const N = $derived(t('subjects')?.value);
  const measureLabel = (m: string) => vocab.measures.find((x) => x.id === m)?.label ?? m;

  const sexColors: Record<string, string> = {
    female: 'var(--series-1)',
    male: 'var(--series-2)',
    other: 'var(--series-3)',
    unknown: 'var(--series-other)'
  };

  const charts = $derived(datasetCharts(rows, vocab));
  const age = $derived(charts.age);
  const ageText = $derived(ageNote(age));

  // The measure shown per chart, for charts reported in several (subjects, scans, images).
  let picked = $state<Record<string, string>>({});
  const pick = <T,>(key: string, vs: Variant<T>[]) => vs.find((v) => v.measure === picked[key]) ?? vs[0];

  // Cross tables with up to two columns fit in half a row.
  const narrow = (c: Cross) => c.variants[0].data.cols.length <= 2;

  // Half-width cards, split into two columns by estimated height (in pixels).
  type PoolItem = { key: string; kind: 'sex' | 'age' | 'b' | 'c'; est: number; b?: Breakdown; c?: Cross };
  const listHeight = (n: number, notes: boolean) => {
    const shown = n > 10 ? 8 : n;
    return shown * (notes ? 60 : 42) + (n > 10 ? 30 : 0);
  };
  const pool = $derived.by(() => {
    const out: PoolItem[] = [];
    if (charts.sex.length) out.push({ key: 'sex', kind: 'sex', est: 150 + (charts.sexAgeNote ? 30 : 0) });
    if (charts.ageBins.length || ageText) out.push({ key: 'age', kind: 'age', est: charts.ageBins.length ? 330 : 130 });
    for (const b of charts.breakdowns) {
      const items = b.variants[0].data;
      out.push({ key: b.dim, kind: 'b', b, est: 120 + listHeight(items.length, items.some((i) => i.note)) });
    }
    for (const c of charts.crosses.filter(narrow))
      out.push({ key: c.key, kind: 'c', c, est: 160 + c.variants[0].data.rows.length * 26 });
    return out;
  });
  const columns = $derived.by(() => {
    const cols: (PoolItem & { i: number })[][] = [[], []];
    const h = [0, 0];
    pool.forEach((it, i) => {
      const k = h[0] <= h[1] ? 0 : 1;
      cols[k].push({ ...it, i });
      h[k] += it.est + 20;
    });
    return cols;
  });
  const hasCohortStats = $derived(
    !!(
      charts.sex.length ||
      charts.ageBins.length ||
      age.mean ||
      age.median ||
      charts.combos.length ||
      charts.breakdowns.length ||
      charts.crosses.length ||
      charts.other.length
    )
  );
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
      { id: 'sources', label: 'Sources' }
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

  // The documents behind a chart, each with the places in it the numbers come from.
  const citeOf = (rs: { source: string; where?: string }[]) => {
    const by = new Map<string, Set<string>>();
    for (const r of rs) {
      const w = by.get(r.source) ?? new Set<string>();
      if (r.where) w.add(r.where);
      by.set(r.source, w);
    }
    return [...by].map(([key, w]) => ({ key, source: meta.sources[key], where: [...w].join(', ') }));
  };
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

{#snippet head(key: string, title: string, vs: Variant<unknown>[])}
  <div class="flex flex-wrap items-center justify-between gap-2">
    <h3 class="text-sm font-semibold">{title}</h3>
    {#if vs.length > 1}
      <div class="flex rounded-md bg-muted p-0.5 text-xs" role="group" aria-label="{title}: count">
        {#each vs as v (v.measure)}
          <button
            type="button"
            class="rounded px-2 py-0.5 font-medium text-muted-foreground aria-pressed:bg-card aria-pressed:text-foreground aria-pressed:shadow-sm"
            aria-pressed={pick(key, vs).measure === v.measure}
            onclick={() => (picked[key] = v.measure)}>{measureLabel(v.measure)}</button
          >
        {/each}
      </div>
    {:else if vs.length && vs[0].measure !== 'subjects'}
      <span class="text-xs text-muted-foreground">{measureLabel(vs[0].measure)}</span>
    {/if}
  </div>
{/snippet}

{#snippet card(it: PoolItem)}
  {#if it.kind === 'sex'}
              {@const v = pick('sex', charts.sex)}
              {@const sum = v.data.reduce((s, i) => s + i.value, 0)}
              {@const all = t(v.measure)?.value}
              <div class="surface p-5">
                {@render head('sex', 'Sex', charts.sex)}
                <div class="mt-4">
                  <SplitBar
                    items={v.data.map((i) => ({ ...i, color: sexColors[i.key] ?? 'var(--series-other)' }))}
                  />
                </div>
                {#if all && sum < all * 0.98}
                  <p class="mt-3 text-xs text-muted-foreground">
                    Covers {formatNumber(sum)} of {formatNumber(all)} {v.measure}.
                  </p>
                {/if}
                {#if charts.sexAgeNote}
                  <p class="mt-3 text-xs text-muted-foreground tabular">{charts.sexAgeNote.text}.</p>
                {/if}
                {@render cite([...v.rows, ...(charts.sexAgeNote?.rows ?? [])])}
              </div>
  {:else if it.kind === 'age'}
              {@const v = charts.ageBins.length ? pick('age', charts.ageBins) : null}
              <div class="surface p-5">
                {@render head('age', 'Age', charts.ageBins)}
                {#if ageText}<p class="mt-0.5 text-xs text-muted-foreground tabular">{ageText}</p>{/if}
                {#if v}
                  <div class="mt-4"><Columns items={v.data} unit={v.measure} /></div>
                {:else}
                  <p class="mt-3 text-sm text-muted-foreground">No age bins reported.</p>
                {/if}
                {@render cite([...(v?.rows ?? []), ...Object.values(age).filter((r) => !!r)])}
              </div>
  {:else if it.b}
    {@const b = it.b}
              {@const v = pick(b.dim, b.variants)}
              <div class="surface p-5">
                {@render head(b.dim, b.title, b.variants)}
                {#if b.dim === 'condition' || b.dim === 'contrast'}
                  <p class="mt-0.5 text-xs text-muted-foreground">Groups can overlap</p>
                {/if}
                <div class="mt-4"><BarList items={v.data} total={t(v.measure)?.value} unit={v.measure} /></div>
                {@render cite(v.rows)}
              </div>
  {:else if it.c}
    {@const c = it.c}
              {@const v = pick(c.key, c.variants)}
              <div class="min-w-0 surface p-5">
                {@render head(c.key, c.title, c.variants)}
                <p class="mt-0.5 text-xs text-muted-foreground">
                  Reported cross table. A dot marks a cell the source does not give.
                </p>
                <div class="mt-4">
                  <CrossTable rows={v.data.rows} cols={v.data.cols} cells={v.data.cells} unit={v.measure} />
                </div>
                {@render cite(v.rows)}
              </div>
  {/if}
{/snippet}

{#snippet cite(rs: { source: string; where?: string }[])}
  {@const list = citeOf(rs)}
  {#if list.length}
    <p
      class="mt-4 truncate border-t border-border pt-3 text-xs text-muted-foreground"
      title={list.map((c) => `${c.where ? `${c.where} in ` : ''}${c.source?.title ?? c.key}`).join('; ')}
    >
      {#each list as c, i (c.key)}{i ? '; ' : ''}{c.where ? `${c.where} in ` : 'From '}{#if c.source}<a
            href={c.source.url}
            class="text-primary hover:underline">{c.source.title}</a
          >{:else}{c.key}{/if}{/each}
    </p>
  {/if}
{/snippet}

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
          <!-- Half-width cards go to whichever of two columns is shorter, so a long list leaves no hole next to it.
               On phones the columns dissolve and the cards keep their order. -->
          <div class="mt-6 flex flex-col gap-5 md:flex-row md:items-start">
            {#each columns as col, k (k)}
              <div class="contents md:flex md:min-w-0 md:flex-1 md:flex-col md:gap-5">
                {#each col as it (it.key)}
                  <div class="min-w-0" style:order={it.i}>{@render card(it)}</div>
                {/each}
              </div>
            {/each}
          </div>
          <div class="mt-5 space-y-5 empty:hidden">
            {#if charts.pyramid.length}
              {@const v = pick('pyramid', charts.pyramid)}
              <div class="surface p-5">
                {@render head('pyramid', 'Age by sex', charts.pyramid)}
                <p class="mt-0.5 text-xs text-muted-foreground">
                  Reported cross table. Missing cells were not published (fewer than 10 or not reported).
                </p>
                <div class="mt-4">
                  <Pyramid
                    bins={v.data.bins}
                    left={{ label: 'Female', color: sexColors.female, values: v.data.left }}
                    right={{ label: 'Male', color: sexColors.male, values: v.data.right }}
                  />
                </div>
                {@render cite(v.rows)}
              </div>
            {/if}
            {#if charts.combos.length}
              {@const v = pick('combos', charts.combos)}
              <div class="surface p-5">
                {@render head('combos', 'Contrast combinations', charts.combos)}
                <p class="mt-0.5 text-xs text-muted-foreground">
                  How many {v.measure} have exactly each set of contrasts.
                </p>
                <div class="mt-4"><ComboMatrix contrasts={v.data.contrasts} rows={v.data.rows} /></div>
                {@render cite(v.rows)}
              </div>
            {/if}
            {#each charts.crosses.filter((c) => !narrow(c)) as c (c.key)}
              {@const v = pick(c.key, c.variants)}
              <div class="min-w-0 surface p-5">
                {@render head(c.key, c.title, c.variants)}
                <p class="mt-0.5 text-xs text-muted-foreground">
                  Reported cross table. A dot marks a cell the source does not give.
                </p>
                <div class="mt-4">
                  <CrossTable rows={v.data.rows} cols={v.data.cols} cells={v.data.cells} unit={v.measure} />
                </div>
                {@render cite(v.rows)}
              </div>
            {/each}
          </div>
          {#if charts.other.length}
            <details class="group/other mt-5 surface">
              <summary class="flex cursor-pointer items-center justify-between gap-3 p-5 text-sm font-semibold">
                <span>
                  Other reported numbers
                  <span class="ml-1 font-normal text-muted-foreground tabular">{charts.other.length}</span>
                </span>
                <ChevronRight class="size-4 text-muted-foreground transition-transform group-open/other:rotate-90" />
              </summary>
              <div class="overflow-x-auto border-t border-border">
                <table class="w-full text-sm">
                  <tbody>
                    {#each charts.other as r (r.line)}
                      {@const s = meta.sources[r.source]}
                      <tr class="border-b border-border/60 last:border-0">
                        <td class="px-5 py-2">
                          {measureLabel(r.measure)}
                          {#if Object.keys(r.by).length}
                            <span class="text-muted-foreground"
                              >· {Object.entries(r.by)
                                .map(([k, x]) => label(vocab, k, x))
                                .join(', ')}</span
                            >
                          {/if}
                          {#if r.note}<div class="text-xs text-muted-foreground">{r.note}</div>{/if}
                        </td>
                        <td class="px-3 py-2 text-right font-medium whitespace-nowrap tabular"
                          >{formatNumber(r.value, r.approx)}</td
                        >
                        <td class="px-5 py-2 text-xs text-muted-foreground" title={formatBy(r.by)}>
                          {r.where}{r.where ? ' in ' : ''}{#if s}<a href={s.url} class="text-primary hover:underline"
                              >{s.title}</a
                            >{:else}{r.source}{/if}
                        </td>
                      </tr>
                    {/each}
                  </tbody>
                </table>
              </div>
            </details>
          {/if}
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

      <section id="sources" class="scroll-mt-28 pt-12">
        <h2 class="text-xl font-semibold tracking-tight">Sources</h2>
        <p class="mt-1 text-sm text-muted-foreground">
          Every number on this page comes from one of these documents. Each chart names the table or page it is taken
          from. The raw numbers are in
          <a class="text-primary hover:underline" href={editUrl(`datasets/${d.id}/stats.csv`)}>stats.csv</a>.
        </p>
        <ul class="mt-4 space-y-1.5 text-sm">
          {#each Object.entries(meta.sources) as [key, s] (key)}
            <li class="flex flex-wrap items-baseline gap-2">
              <a href={s.url} class="text-primary hover:underline">{s.title}</a>
              <span class="text-xs text-muted-foreground">{s.kind}</span>
            </li>
          {/each}
        </ul>
        {#if !rows.length}
          <p class="mt-4 text-sm text-muted-foreground">
            No numbers yet. <a class="text-primary hover:underline" href={link('contribute/')}>Add some</a>.
          </p>
        {/if}
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
            {#if ageText}
              <div class="flex justify-between gap-3">
                <dt class="text-muted-foreground">Age</dt>
                <dd class="text-right tabular">{ageText}</dd>
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

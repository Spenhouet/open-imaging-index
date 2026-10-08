<script lang="ts">
  import { vocab } from '#lib/catalog/meta.js';
  import Answer from '#lib/components/app/Answer.svelte';
  import AnswerLegend from '#lib/components/app/AnswerLegend.svelte';
  import LegalNote from '#lib/components/app/LegalNote.svelte';
  import Seo from '#lib/components/app/Seo.svelte';
  import { link } from '#lib/site.js';

  let { data } = $props();
  const rules = $derived(vocab.licenseRules.rules);
  const keyRules = ['commercial_use', 'model_training', 'redistribute_original', 'share_model_weights', 'signed_agreement', 'ethics_approval'];
  const purposes = $derived(new Map(vocab.licenseRules.purposes.map((p) => [p.id, p.label])));
  // Open licenses first, then by how many datasets use them.
  const sortedLicenses = $derived(
    [...data.fullLicenses].sort(
      (a, b) =>
        Number(a.id.startsWith('LicenseRef')) - Number(b.id.startsWith('LicenseRef')) ||
        (data.usage[b.id] ?? 0) - (data.usage[a.id] ?? 0)
    )
  );
</script>

<Seo
  title="Medical imaging dataset licenses compared"
  description="Creative Commons licenses and custom data use agreements of medical imaging datasets, broken down into {rules.length} yes/no questions with quotes."
  path="licenses/"
/>

<div class="mx-auto max-w-7xl px-4 pt-12 md:px-6">
  <div class="max-w-3xl">
    <h1 class="text-3xl font-semibold tracking-tight md:text-4xl">Licenses, compared</h1>
    <p class="mt-3 text-lg text-muted-foreground">
      Medical imaging data often comes with custom agreements. Each license here answers the same {rules.length}
      questions, and every answer links to the sentence it is based on.
    </p>
  </div>

  <LegalNote class="mt-8" />
  <div class="mt-6"><AnswerLegend /></div>

  <!-- Phones and tablets: one card per license with the answers people ask about most. -->
  <ul class="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 lg:hidden">
    {#each sortedLicenses as lic (lic.id)}
      <li class="surface p-4">
        <div class="flex items-start justify-between gap-3">
          <div class="min-w-0">
            <a href={link(`licenses/${lic.id}/`)} class="font-semibold hover:underline">{lic.short_name ?? lic.name}</a>
            {#if lic.short_name}<div class="truncate text-xs text-muted-foreground">{lic.name}</div>{/if}
          </div>
          {#if data.usage[lic.id]}
            <a class="shrink-0 text-xs font-medium text-primary hover:underline" href={link(`?license=${lic.id}`)}
              >{data.usage[lic.id]} {data.usage[lic.id] === 1 ? 'dataset' : 'datasets'}</a
            >
          {/if}
        </div>
        <div class="mt-1 text-xs text-muted-foreground">{purposes.get(lic.purpose) ?? lic.purpose}</div>
        <ul class="mt-3 grid grid-cols-1 gap-1.5 text-sm">
          {#each keyRules as id (id)}
            {@const rule = rules.find((r) => r.id === id)}
            {#if rule && lic.rules[id]}
              <li class="flex items-center justify-between gap-3">
                <span class="min-w-0 truncate">{rule.label}</span>
                <Answer value={lic.rules[id].value} good={rule.good} class="w-28 shrink-0" />
              </li>
            {/if}
          {/each}
        </ul>
        <a href={link(`licenses/${lic.id}/`)} class="mt-3 inline-block text-xs font-medium text-primary hover:underline"
          >All {rules.length} rules with quotes</a
        >
      </li>
    {/each}
  </ul>

  <div class="mt-4 hidden overflow-x-auto surface lg:block">
    <table class="w-full text-sm">
      <thead>
        <tr class="border-b border-border">
          <th class="sticky left-0 z-10 w-full min-w-56 bg-card px-4 py-3 text-left align-bottom font-semibold">License</th>
          {#each rules as r (r.id)}
            <th class="h-36 w-9 px-1 align-bottom">
              <span
                class="block w-6 rotate-180 text-left text-xs font-medium whitespace-nowrap text-muted-foreground [writing-mode:vertical-rl]"
                title={r.question}>{r.label}</span
              >
            </th>
          {/each}
          <th class="w-16 px-3 py-3 text-right align-bottom text-xs font-medium whitespace-nowrap text-muted-foreground">Datasets</th>
        </tr>
      </thead>
      <tbody>
        {#each sortedLicenses as lic (lic.id)}
          <tr class="border-b border-border/60 last:border-0 hover:bg-accent/40">
            <!-- The name column takes all spare width, so the answers sit together on the right, next to Datasets. -->
            <td class="sticky left-0 z-10 bg-card px-4 py-2">
              <a href={link(`licenses/${lic.id}/`)} class="font-medium hover:underline" title={lic.name}
                >{lic.short_name ?? lic.name}</a
              >
              {#if lic.short_name}<div class="max-w-60 truncate text-xs text-muted-foreground xl:max-w-[26rem]" title={lic.name}>
                  {lic.name}
                </div>{/if}
              <div class="text-xs text-muted-foreground">{purposes.get(lic.purpose) ?? lic.purpose}</div>
            </td>
            {#each rules as r (r.id)}
              <td class="px-1 py-2.5 text-center">
                {#if lic.rules[r.id]}<Answer
                    value={lic.rules[r.id].value}
                    good={r.good}
                    label={undefined}
                    compact
                    class="justify-center"
                  />{/if}
              </td>
            {/each}
            <td class="px-3 py-2.5 text-right tabular">
              {#if data.usage[lic.id]}<a class="text-primary hover:underline" href={link(`?license=${lic.id}`)}
                  >{data.usage[lic.id]}</a
                >{:else}<span class="text-muted-foreground">0</span>{/if}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <div class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
    {#each vocab.licenseRules.groups as g (g.id)}
      <div>
        <h2 class="text-sm font-semibold">{g.label}</h2>
        <dl class="mt-2 space-y-2 text-sm">
          {#each rules.filter((r) => r.group === g.id) as r (r.id)}
            <div>
              <dt class="font-medium">
                {r.label}{#if r.duo}<span
                    class="ml-2 font-mono text-xs text-muted-foreground"
                    title="GA4GH Data Use Ontology code when the answer is {r.duo.when}">{r.duo.label}</span
                  >{/if}
              </dt>
              <dd class="text-muted-foreground">{r.question}</dd>
            </div>
          {/each}
        </dl>
      </div>
    {/each}
  </div>
</div>

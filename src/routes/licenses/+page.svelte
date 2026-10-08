<script lang="ts">
  import { vocab } from '#lib/catalog/meta.js';
  import Answer from '#lib/components/app/Answer.svelte';
  import AnswerLegend from '#lib/components/app/AnswerLegend.svelte';
  import Seo from '#lib/components/app/Seo.svelte';
  import { link } from '#lib/site.js';

  let { data } = $props();
  const rules = $derived(vocab.licenseRules.rules);
  const purposes = $derived(new Map(vocab.licenseRules.purposes.map((p) => [p.id, p.label])));
  // Open licenses first, then by how many datasets use them.
  const licenses = $derived(
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

  <div class="mt-8"><AnswerLegend /></div>

  <div class="mt-4 overflow-x-auto surface">
    <table class="w-full text-sm">
      <thead>
        <tr class="border-b border-border">
          <th class="sticky left-0 z-10 bg-card px-4 py-3 text-left font-semibold">License</th>
          <th class="px-2 py-3 text-left text-xs font-medium text-muted-foreground">Purpose</th>
          {#each rules as r (r.id)}
            <th class="h-36 w-9 px-1 align-bottom">
              <span
                class="block w-6 rotate-180 text-left text-xs font-medium whitespace-nowrap text-muted-foreground [writing-mode:vertical-rl]"
                title={r.question}>{r.label}</span
              >
            </th>
          {/each}
          <th class="px-3 py-3 text-right text-xs font-medium text-muted-foreground">Datasets</th>
        </tr>
      </thead>
      <tbody>
        {#each licenses as lic (lic.id)}
          <tr class="border-b border-border/60 last:border-0 hover:bg-accent/40">
            <td class="sticky left-0 z-10 bg-card px-4 py-2.5">
              <a href={link(`licenses/${lic.id}/`)} class="font-medium hover:underline">{lic.short_name ?? lic.name}</a>
              {#if lic.short_name}<div class="max-w-56 truncate text-xs text-muted-foreground">{lic.name}</div>{/if}
            </td>
            <td class="px-2 py-2.5 text-xs whitespace-nowrap text-muted-foreground"
              >{purposes.get(lic.purpose) ?? lic.purpose}</td
            >
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

  <div class="mt-10 grid gap-6 md:grid-cols-2">
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

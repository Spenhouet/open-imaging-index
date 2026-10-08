<script lang="ts">
  import RotateCcw from '@lucide/svelte/icons/rotate-ccw';
  import Info from '@lucide/svelte/icons/info';
  import { Slider } from '#lib/components/ui/slider/index.js';
  import { Switch } from '#lib/components/ui/switch/index.js';
  import { AGE_MAX, FACETS, RULE_FILTERS, activeCount, type FilterState } from '#lib/catalog/filter.js';
  import type { VocabData } from '#lib/catalog/types.js';
  import { label } from '#lib/catalog/vocab.js';
  import { cn } from '#lib/utils.js';
  import FacetGroup from './FacetGroup.svelte';

  let {
    filters = $bindable(),
    vocab,
    facetCounts,
    allFacetValues,
    contrastOptions,
    licenseNames,
    countsReady = true,
    onReset
  }: {
    filters: FilterState;
    vocab: VocabData;
    facetCounts: Record<string, Map<string, number>>;
    allFacetValues: Record<string, string[]>;
    contrastOptions: { id: string; count: number }[];
    licenseNames: Map<string, string>;
    countsReady?: boolean;
    onReset: () => void;
  } = $props();

  function toggle(list: string[], id: string) {
    return list.includes(id) ? list.filter((x) => x !== id) : [...list, id];
  }

  function facetLabel(facet: string, id: string) {
    if (facet === 'access') return label(vocab, 'access', id);
    if (facet === 'license') return licenseNames.get(id) ?? id;
    return label(vocab, facet, id);
  }

  function options(facet: string) {
    const counts = facetCounts[facet] ?? new Map();
    const ids = allFacetValues[facet] ?? [];
    const opts = ids.map((id) => ({
      id,
      label: facetLabel(facet, id),
      count: countsReady ? (counts.get(id) ?? 0) : undefined,
      title: vocab.terms[facet]?.find((t) => t.id === id)?.description
    }));
    if (facet === 'access') {
      const order = (vocab.terms.access ?? []).map((t) => t.id);
      return opts.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
    }
    if (facet === 'field_strength') return opts.sort((a, b) => Number(a.id) - Number(b.id));
    return opts.sort((a, b) => (b.count ?? 0) - (a.count ?? 0) || a.label.localeCompare(b.label));
  }

  let age = $state<number[]>([0, AGE_MAX]);
  $effect(() => {
    age = filters.age ? [...filters.age] : [0, AGE_MAX];
  });
  function commitAge(v: number[]) {
    filters.age = v[0] === 0 && v[1] === AGE_MAX ? null : [v[0], v[1]];
  }

  const sexes = ['female', 'male'];
  const active = $derived(activeCount(filters));
</script>

<div class="space-y-1">
  <div class="flex items-center justify-between pb-2">
    <h2 class="text-sm font-semibold">Filters</h2>
    {#if active}
      <button
        type="button"
        class="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
        onclick={onReset}
      >
        <RotateCcw class="size-3" /> Reset {active}
      </button>
    {/if}
  </div>

  <section class="rounded-xl bg-accent/50 p-3.5 ring-1 ring-primary/15">
    <h3 class="flex items-center gap-1.5 text-sm font-semibold">
      Cohort
      <span
        class="text-muted-foreground"
        title="Counts subjects inside each dataset that match all of these at once. With only per-attribute totals the result is a range."
      >
        <Info class="size-3.5" />
      </span>
    </h3>
    <p class="mt-0.5 text-xs text-muted-foreground">Subjects that match all of these at once</p>

    <div class="mt-3">
      <div class="mb-1.5 text-xs font-medium">Has all contrasts</div>
      <div class="flex flex-wrap gap-1">
        {#each contrastOptions as c (c.id)}
          {@const on = filters.contrasts.includes(c.id)}
          <button
            type="button"
            aria-pressed={on}
            title={label(vocab, 'contrast', c.id)}
            class={cn(
              'rounded-md border px-1.5 py-0.5 font-mono text-[11px] transition-colors',
              on
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground'
            )}
            onclick={() => (filters.contrasts = toggle(filters.contrasts, c.id))}>{c.id}</button
          >
        {/each}
      </div>
    </div>

    <div class="mt-4">
      <div class="mb-1.5 text-xs font-medium">Sex</div>
      <div class="inline-flex rounded-lg bg-card p-0.5 ring-1 ring-border">
        {#each sexes as s (s)}
          {@const on = filters.sex.includes(s)}
          <button
            type="button"
            aria-pressed={on}
            class={cn(
              'rounded-md px-3 py-1 text-xs font-medium transition-colors',
              on ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
            )}
            onclick={() => (filters.sex = toggle(filters.sex, s))}>{label(vocab, 'sex', s)}</button
          >
        {/each}
      </div>
    </div>

    <div class="mt-4">
      <div class="mb-2 flex items-center justify-between text-xs">
        <span class="font-medium">Age</span>
        <span class="text-muted-foreground tabular">
          {#if age[0] === 0 && age[1] === AGE_MAX}any{:else}{age[0]} to {age[1] >= AGE_MAX ? `${AGE_MAX}+` : age[1]} years{/if}
        </span>
      </div>
      <Slider
        type="multiple"
        bind:value={age}
        min={0}
        max={AGE_MAX}
        step={1}
        onValueCommit={commitAge}
        aria-label="Age range"
      />
    </div>

    <div class="mt-4">
      <label class="flex items-center justify-between gap-2 text-xs font-medium" for="min-subjects">
        At least
        <span class="flex items-center gap-1.5">
          <input
            id="min-subjects"
            type="number"
            min="0"
            step="50"
            inputmode="numeric"
            class="h-7 w-20 rounded-md border border-input bg-card px-2 text-right text-xs tabular focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none"
            value={filters.minSubjects || ''}
            placeholder="0"
            onchange={(e) => (filters.minSubjects = Math.max(0, Number(e.currentTarget.value) || 0))}
          />
          <span class="text-muted-foreground">subjects</span>
        </span>
      </label>
    </div>
  </section>

  {#each FACETS as facet (facet.id)}
    {#if (allFacetValues[facet.id] ?? []).length}
      <FacetGroup
        title={facet.label}
        options={options(facet.id)}
        selected={filters.facets[facet.id] ?? []}
        initiallyOpen={['modality', 'anatomy', 'condition', 'access'].includes(facet.id)}
        onToggle={(id) =>
          (filters.facets = { ...filters.facets, [facet.id]: toggle(filters.facets[facet.id] ?? [], id) })}
      />
    {/if}
  {/each}

  <section class="py-3">
    <h3 class="py-1 text-sm font-semibold">License</h3>
    <ul class="mt-1 space-y-0.5">
      {#each RULE_FILTERS as r (r.id)}
        {@const rule = vocab.licenseRules.rules.find((x) => x.id === r.id)}
        <li>
          <label
            class="flex cursor-pointer items-center justify-between gap-2 rounded-md px-1.5 py-1 text-sm hover:bg-accent/60"
            title={rule?.question}
          >
            <span>{r.label}</span>
            <Switch
              checked={filters.rules.includes(r.id)}
              onCheckedChange={() => (filters.rules = toggle(filters.rules, r.id))}
            />
          </label>
        </li>
      {/each}
    </ul>
    <label class="mt-2 flex cursor-pointer items-center gap-2 px-1.5 text-xs text-muted-foreground">
      <input type="checkbox" bind:checked={filters.lenient} class="accent-(--primary)" />
      Also count "conditional" answers as allowed
    </label>
  </section>
</div>

<script lang="ts">
  import { SvelteSet } from 'svelte/reactivity';
  import ChevronRight from '@lucide/svelte/icons/chevron-right';
  import type { LicenseFile } from '#lib/catalog/schema.js';
  import type { VocabData } from '#lib/catalog/types.js';
  import { cn } from '#lib/utils.js';
  import Answer from './Answer.svelte';
  import InfoTip from './InfoTip.svelte';

  // Every rule of one license, grouped. The question behind a rule sits in an info tip,
  // the quote and note behind an answer open below the row.
  let { license, vocab }: { license: LicenseFile; vocab: VocabData } = $props();

  const open = new SvelteSet<string>();
  const toggle = (id: string) => (open.has(id) ? open.delete(id) : open.add(id));
  const uid = $props.id();
</script>

<div class="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
  {#each vocab.licenseRules.groups as group (group.id)}
    <div>
      <h4 class="mb-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">{group.label}</h4>
      <ul class="divide-y divide-border/70">
        {#each vocab.licenseRules.rules.filter((r) => r.group === group.id) as rule (rule.id)}
          {@const a = license.rules[rule.id]}
          {#if a}
            {@const detail = !!(a.quote || a.note)}
            {@const panel = `${uid}-${rule.id}`}
            <li>
              <div class="flex items-center gap-2 py-1.5 text-sm">
                {#if detail}
                  <button
                    type="button"
                    class="flex min-w-0 flex-1 items-center gap-1.5 rounded-md py-0.5 text-left hover:text-foreground"
                    aria-expanded={open.has(rule.id)}
                    aria-controls={panel}
                    onclick={() => toggle(rule.id)}
                  >
                    <ChevronRight
                      class={cn(
                        'size-3.5 shrink-0 text-muted-foreground transition-transform',
                        open.has(rule.id) && 'rotate-90'
                      )}
                    />
                    <span class="truncate">{rule.label}</span>
                  </button>
                {:else}
                  <span class="min-w-0 flex-1 truncate py-0.5 pl-5">{rule.label}</span>
                {/if}
                <InfoTip text={rule.question} label="What {rule.label} means" />
                <Answer value={a.value} good={rule.good} class="w-28 shrink-0" />
              </div>
              {#if detail && open.has(rule.id)}
                <div id={panel} class="mb-3 ml-5 space-y-2 text-sm">
                  {#if a.note}<p class="text-foreground/85">{a.note}</p>{/if}
                  {#if a.quote}
                    <blockquote class="border-l-2 border-primary/40 pl-3 text-muted-foreground italic">
                      "{a.quote}"
                    </blockquote>
                  {/if}
                  {#if a.source}<a href={a.source} class="text-xs text-primary hover:underline">Source of this quote</a
                    >{/if}
                </div>
              {/if}
            </li>
          {/if}
        {/each}
      </ul>
    </div>
  {/each}
</div>

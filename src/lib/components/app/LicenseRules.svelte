<script lang="ts">
  import ChevronRight from '@lucide/svelte/icons/chevron-right';
  import type { LicenseFile } from '#lib/catalog/schema.js';
  import type { VocabData } from '#lib/catalog/types.js';
  import Answer from './Answer.svelte';

  // Every rule of one license, grouped, with the quote behind each answer one click away.
  let { license, vocab }: { license: LicenseFile; vocab: VocabData } = $props();
</script>

<div class="grid gap-x-8 gap-y-6 md:grid-cols-2">
  {#each vocab.licenseRules.groups as group (group.id)}
    <div>
      <h4 class="mb-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">{group.label}</h4>
      <ul class="divide-y divide-border/70">
        {#each vocab.licenseRules.rules.filter((r) => r.group === group.id) as rule (rule.id)}
          {@const a = license.rules[rule.id]}
          {#if a}
            <li>
              {#if a.quote || a.note}
                <details class="group py-2">
                  <summary
                    class="flex cursor-pointer list-none items-center justify-between gap-3 text-sm [&::-webkit-details-marker]:hidden"
                  >
                    <span class="flex items-center gap-1.5">
                      <ChevronRight class="size-3.5 text-muted-foreground transition-transform group-open:rotate-90" />
                      <span title={rule.question}>{rule.label}</span>
                    </span>
                    <Answer value={a.value} good={rule.good} class="w-28 shrink-0" />
                  </summary>
                  <div class="mt-2 ml-5 space-y-2 text-sm">
                    {#if a.note}<p class="text-foreground/85">{a.note}</p>{/if}
                    {#if a.quote}
                      <blockquote class="border-l-2 border-primary/40 pl-3 text-muted-foreground italic">
                        "{a.quote}"
                      </blockquote>
                    {/if}
                    {#if a.source}<a href={a.source} class="text-xs text-primary hover:underline"
                        >Source of this quote</a
                      >{/if}
                    <p class="text-xs text-muted-foreground">{rule.question}</p>
                  </div>
                </details>
              {:else}
                <div class="flex items-center justify-between gap-3 py-2 pl-5 text-sm">
                  <span title={rule.question}>{rule.label}</span>
                  <Answer value={a.value} good={rule.good} class="w-28 shrink-0" />
                </div>
              {/if}
            </li>
          {/if}
        {/each}
      </ul>
    </div>
  {/each}
</div>

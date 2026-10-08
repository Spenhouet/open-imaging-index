<script lang="ts">
  import ChevronRight from '@lucide/svelte/icons/chevron-right';
  import Download from '@lucide/svelte/icons/download';
  import Search from '@lucide/svelte/icons/search';
  import GitPullRequest from '@lucide/svelte/icons/git-pull-request';
  import CopyButton from '#lib/components/app/CopyButton.svelte';
  import Seo from '#lib/components/app/Seo.svelte';
  import { REPO, REPO_URL, link } from '#lib/site.js';
  import { cn } from '#lib/utils.js';

  let { data } = $props();

  const about: Record<string, { title: string; icon: typeof Search; text: string; prompts: string[]; needs: string }> =
    {
      'find-imaging-datasets': {
        title: 'Find datasets',
        icon: Search,
        text: 'Turns a need into a ranked shortlist: matching datasets, subject counts for your cohort, access and the license terms that matter for your use, checked against the official pages.',
        prompts: [
          'Which brain MRI datasets have T1w and FLAIR for at least 500 subjects?',
          'Find chest X-ray datasets I may use to train a commercial model.',
          'How many women aged 60 to 80 with FLAIR scans are in open datasets?'
        ],
        needs: 'Works anywhere the agent can fetch a web page.'
      },
      'contribute-imaging-dataset': {
        title: 'Add or correct a dataset',
        icon: GitPullRequest,
        text: 'Adds a missing dataset, or fixes an entry, as a pull request. Strict rules: every fact verified online in a public source, nothing computed from gated data, license answers quoted, and the validator must pass.',
        prompts: [
          'Add BraTS 2023 to the Open Imaging Index.',
          'The subject count of IXI looks wrong. Check it and open a correction.',
          'Break down the license of the KiTS23 dataset.'
        ],
        needs: 'Needs a shell with git, gh and Bun, e.g. Claude Code or Codex.'
      }
    };

  const tools = [
    { id: 'claude-code', label: 'Claude Code' },
    { id: 'claude-app', label: 'Claude app' },
    { id: 'others', label: 'Codex, Cursor, Gemini CLI and more' },
    { id: 'manual', label: 'Manual' }
  ] as const;
  let tool = $state<(typeof tools)[number]['id']>('claude-code');

  const cc = `/plugin marketplace add ${REPO}\n/plugin install open-imaging-index@open-imaging-index`;
  const ccShell = `claude plugin marketplace add ${REPO}\nclaude plugin install open-imaging-index@open-imaging-index`;
  const npx = `npx skills add ${REPO}`;
  const npxOne = `npx skills add ${REPO} --skill find-imaging-datasets -a codex`;
</script>

<Seo
  title="Agent skills for finding medical imaging datasets"
  description="Install two agent skills for Claude, Codex, Cursor and other AI agents: find medical imaging datasets by cohort and license terms, and contribute verified dataset entries."
  path="skills/"
/>

<div class="mx-auto max-w-5xl px-4 pt-12 md:px-6">
  <div class="max-w-3xl">
    <h1 class="text-3xl font-semibold tracking-tight md:text-4xl">Agent skills</h1>
    <p class="mt-3 text-lg text-pretty text-muted-foreground">
      Let your AI assistant search the index for you, or add a dataset it is missing. Two skills in one plugin, in the
      open SKILL.md format that Claude and most other agent tools read.
    </p>
  </div>

  <div class="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
    {#each data.skills as skill (skill.name)}
      {@const a = about[skill.name]}
      <article class="flex flex-col surface p-5">
        <div class="flex items-center gap-2.5">
          {#if a}<a.icon class="size-5 text-primary" />{/if}
          <h2 class="text-lg font-semibold">{a?.title ?? skill.name}</h2>
        </div>
        <code class="mt-1 font-mono text-xs text-muted-foreground">{skill.name}</code>
        <p class="mt-3 text-sm text-foreground/85">{a?.text ?? skill.description}</p>
        {#if a}
          <div class="mt-4 text-xs font-semibold tracking-wide text-muted-foreground uppercase">Try asking</div>
          <ul class="mt-2 space-y-1.5 text-sm">
            {#each a.prompts as p (p)}
              <li class="rounded-lg bg-muted px-3 py-2">{p}</li>
            {/each}
          </ul>
          <p class="mt-3 text-xs text-muted-foreground">{a.needs}</p>
        {/if}
        <div class="mt-auto flex flex-wrap items-center gap-3 pt-5">
          <a
            href={link(`skills/${skill.name}.zip`)}
            download
            class="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border bg-card px-3 text-sm font-medium hover:bg-accent"
            ><Download class="size-4" /> Download .zip</a
          >
          <a href="#{skill.name}" class="text-sm font-medium text-primary hover:underline">Read the skill</a>
        </div>
      </article>
    {/each}
  </div>

  <section class="mt-14" aria-labelledby="install">
    <h2 id="install" class="text-xl font-semibold tracking-tight">Install</h2>
    <div class="mt-4 flex flex-wrap gap-1 rounded-xl bg-muted p-1" role="tablist" aria-label="Tool">
      {#each tools as t (t.id)}
        <button
          type="button"
          role="tab"
          id="tab-{t.id}"
          aria-selected={tool === t.id}
          aria-controls="panel-{t.id}"
          class={cn(
            'rounded-lg px-3 py-1.5 text-sm font-medium transition-colors',
            tool === t.id ? 'bg-card text-foreground shadow-xs' : 'text-muted-foreground hover:text-foreground'
          )}
          onclick={() => (tool = t.id)}>{t.label}</button
        >
      {/each}
    </div>

    <div class="mt-4 surface p-5 md:p-6">
      <div id="panel-claude-code" role="tabpanel" aria-labelledby="tab-claude-code" hidden={tool !== 'claude-code'}>
        <p class="text-sm">Add the marketplace and install the plugin. Run this inside Claude Code:</p>
        {@render code(cc)}
        <p class="mt-4 text-sm">Or from your shell:</p>
        {@render code(ccShell)}
        <p class="mt-4 text-sm text-muted-foreground">
          Claude picks the right skill from your request. You can also call one directly with
          <code class="font-mono text-xs">/open-imaging-index:find-imaging-datasets</code> or
          <code class="font-mono text-xs">/open-imaging-index:contribute-imaging-dataset</code>. Updates arrive with
          <code class="font-mono text-xs">/plugin marketplace update open-imaging-index</code>.
        </p>
      </div>

      <div id="panel-claude-app" role="tabpanel" aria-labelledby="tab-claude-app" hidden={tool !== 'claude-app'}>
        <ol class="list-decimal space-y-2 pl-5 text-sm">
          <li>
            Download
            <a class="font-medium text-primary hover:underline" href={link('skills/find-imaging-datasets.zip')} download
              >find-imaging-datasets.zip</a
            >.
          </li>
          <li>In claude.ai or Claude Desktop, open <span class="font-medium">Customize &rsaquo; Skills</span>.</li>
          <li>
            Click <span class="font-medium">+</span>, then <span class="font-medium">Create skill</span> and
            <span class="font-medium">Upload a skill</span>, and choose the zip.
          </li>
        </ol>
        <p class="mt-4 text-sm text-muted-foreground">
          Skills need code execution to be turned on. The contribution skill works best in Claude Code, because it
          clones the repository, runs the validator and opens a pull request.
        </p>
      </div>

      <div id="panel-others" role="tabpanel" aria-labelledby="tab-others" hidden={tool !== 'others'}>
        <p class="text-sm">
          The <a class="font-medium text-primary hover:underline" href="https://github.com/vercel-labs/skills"
            >skills CLI</a
          >
          installs into Codex, Cursor, Gemini CLI, GitHub Copilot, Windsurf, OpenCode and many more. It asks which agents
          to set up:
        </p>
        {@render code(npx)}
        <p class="mt-4 text-sm">Or pick one skill and one agent directly:</p>
        {@render code(npxOne)}
      </div>

      <div id="panel-manual" role="tabpanel" aria-labelledby="tab-manual" hidden={tool !== 'manual'}>
        <p class="text-sm">
          Each skill is one folder with a <code class="font-mono text-xs">SKILL.md</code>. Copy the folders from
          <a
            class="font-medium text-primary hover:underline"
            href="{REPO_URL}/tree/main/plugins/open-imaging-index/skills">plugins/open-imaging-index/skills</a
          >
          into your agent's skills directory, for example <code class="font-mono text-xs">~/.claude/skills/</code> or
          <code class="font-mono text-xs">.agents/skills/</code>, or download both at once:
        </p>
        <a
          href={link('skills/open-imaging-index-skills.zip')}
          download
          class="mt-4 inline-flex h-9 items-center gap-1.5 rounded-lg border border-border bg-card px-3 text-sm font-medium hover:bg-accent"
          ><Download class="size-4" /> open-imaging-index-skills.zip</a
        >
      </div>
    </div>
    <p class="mt-3 text-xs text-muted-foreground">
      Agents without skills can read <a class="text-primary hover:underline" href={link('llms.txt')}>llms.txt</a> and
      the full catalog at <a class="text-primary hover:underline" href={link('catalog.json')}>catalog.json</a>.
    </p>
  </section>

  {#each data.skills as skill (skill.name)}
    <section id={skill.name} class="mt-14 scroll-mt-20">
      <details class="group surface">
        <summary
          class="flex cursor-pointer list-none items-center justify-between gap-3 p-5 [&::-webkit-details-marker]:hidden"
        >
          <span>
            <span class="block text-xs font-semibold tracking-wide text-muted-foreground uppercase">Full skill</span>
            <span class="font-mono text-sm font-medium">{skill.name}/SKILL.md</span>
          </span>
          <ChevronRight class="size-5 text-muted-foreground transition-transform group-open:rotate-90" />
        </summary>
        <div class="prose-doc border-t border-border p-5 md:p-6">{@html skill.html}</div>
      </details>
    </section>
  {/each}
</div>

{#snippet code(text: string)}
  <div class="relative mt-2">
    <pre class="overflow-x-auto rounded-lg bg-muted p-4 pr-24 font-mono text-sm leading-6">{text}</pre>
    <div class="absolute top-2.5 right-2.5"><CopyButton {text} /></div>
  </div>
{/snippet}

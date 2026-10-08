<script lang="ts">
  import Lightbulb from '@lucide/svelte/icons/sparkles';
  import Pencil from '@lucide/svelte/icons/pencil';
  import GitPullRequest from '@lucide/svelte/icons/git-pull-request';
  import DocPage from '#lib/components/app/DocPage.svelte';
  import { REPO_URL } from '#lib/site.js';

  let { data } = $props();
  const ways = [
    {
      icon: Lightbulb,
      title: 'Suggest a dataset',
      text: 'Paste a link. Takes a minute, someone else writes the entry.',
      href: `${REPO_URL}/issues/new?template=suggest-dataset.yml`,
      cta: 'Open the form'
    },
    {
      icon: Pencil,
      title: 'Fix an entry',
      text: 'Every dataset page has an Edit button that opens the file on GitHub.',
      href: REPO_URL,
      cta: 'Browse the repository'
    },
    {
      icon: GitPullRequest,
      title: 'Add a dataset',
      text: 'Three files in one folder. The checker tells you what is missing.',
      href: '#add-a-dataset',
      cta: 'Read the steps'
    }
  ];
</script>

<DocPage
  doc={data.doc}
  path="contribute/"
  description="Add a medical imaging dataset to the index, fix an entry or suggest a dataset. Three files per dataset, checked automatically."
>
  {#snippet lead()}
    <div class="mt-8 grid gap-3 sm:grid-cols-3">
      {#each ways as w (w.title)}
        <a
          href={w.href}
          class="group flex flex-col surface p-4 transition-shadow hover:shadow-md hover:ring-primary/30"
        >
          <w.icon class="size-5 text-primary" />
          <div class="mt-3 font-semibold">{w.title}</div>
          <p class="mt-1 flex-1 text-sm text-muted-foreground">{w.text}</p>
          <span class="mt-3 text-sm font-medium text-primary group-hover:underline">{w.cta}</span>
        </a>
      {/each}
    </div>
  {/snippet}
</DocPage>

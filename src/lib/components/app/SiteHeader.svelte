<script lang="ts">
  import { page } from '$app/state';
  import { toggleMode } from 'mode-watcher';
  import Menu from '@lucide/svelte/icons/menu';
  import X from '@lucide/svelte/icons/x';
  import Moon from '@lucide/svelte/icons/moon';
  import Sun from '@lucide/svelte/icons/sun';
  import Logo from './Logo.svelte';
  import GithubIcon from './GithubIcon.svelte';
  import { REPO_URL, SITE_NAME, link } from '#lib/site.js';
  import { cn } from '#lib/utils.js';

  const links = [
    { href: link(''), label: 'Datasets', match: (p: string) => p === link('') || p.startsWith(link('datasets/')) },
    { href: link('explore/'), label: 'Explore', match: (p: string) => p.startsWith(link('explore/')) },
    { href: link('licenses/'), label: 'Licenses', match: (p: string) => p.startsWith(link('licenses/')) },
    {
      href: link('standard/'),
      label: 'Standard',
      match: (p: string) => p.startsWith(link('standard/')) || p.startsWith(link('vocabulary/'))
    },
    { href: link('contribute/'), label: 'Contribute', match: (p: string) => p.startsWith(link('contribute/')) },
    { href: link('skills/'), label: 'Agent skills', match: (p: string) => p.startsWith(link('skills/')) }
  ];

  let open = $state(false);
  $effect(() => {
    void page.url.pathname;
    open = false;
  });
</script>

<header class="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
  <div class="mx-auto flex h-14 max-w-7xl items-center gap-6 px-4 md:px-6">
    <a href={link('')} class="flex items-center gap-2.5 font-semibold tracking-tight">
      <Logo class="size-7" />
      <span>{SITE_NAME}</span>
    </a>
    <nav class="hidden items-center gap-1 lg:flex" aria-label="Main">
      {#each links as link (link.href)}
        <a
          href={link.href}
          aria-current={link.match(page.url.pathname) ? 'page' : undefined}
          class={cn(
            'rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground',
            link.match(page.url.pathname) && 'bg-accent text-accent-foreground'
          )}>{link.label}</a
        >
      {/each}
    </nav>
    <div class="ml-auto flex items-center gap-1">
      <a
        href={REPO_URL}
        class="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        aria-label="Source on GitHub"
      >
        <GithubIcon class="size-[18px]" />
      </a>
      <button
        type="button"
        onclick={toggleMode}
        class="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        aria-label="Toggle dark mode"
      >
        <Sun class="size-[18px] dark:hidden" />
        <Moon class="hidden size-[18px] dark:block" />
      </button>
      <button
        type="button"
        class="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground hover:bg-accent lg:hidden"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onclick={() => (open = !open)}
      >
        {#if open}<X class="size-5" />{:else}<Menu class="size-5" />{/if}
      </button>
    </div>
  </div>
  {#if open}
    <nav class="border-t border-border px-4 py-2 lg:hidden" aria-label="Main">
      {#each links as link (link.href)}
        <a
          href={link.href}
          class={cn(
            'block rounded-md px-3 py-2.5 text-sm font-medium',
            link.match(page.url.pathname) ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'
          )}>{link.label}</a
        >
      {/each}
    </nav>
  {/if}
</header>

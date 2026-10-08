<script lang="ts">
  import '../app.css';
  import { ModeWatcher } from 'mode-watcher';
  import SiteHeader from '#lib/components/app/SiteHeader.svelte';
  import SiteFooter from '#lib/components/app/SiteFooter.svelte';

  let { children } = $props();
</script>

<ModeWatcher />
<a
  href="#main"
  class="sr-only z-50 rounded-md bg-primary px-3 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
  >Skip to content</a
>
<SiteHeader />
<main id="main" class="min-h-[60vh]">
  {@render children()}
</main>
<SiteFooter />

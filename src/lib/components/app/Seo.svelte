<script lang="ts">
  import { SITE_NAME, SITE_URL } from '#lib/site.js';

  let { title, description, path, jsonLd }: { title: string; description: string; path: string; jsonLd?: object } =
    $props();

  const full = $derived(title === SITE_NAME ? title : `${title} | ${SITE_NAME}`);
  const canonical = $derived(`${SITE_URL}/${path}`);
  // JSON-LD goes into a script tag, so "<" must not close it early.
  const ld = $derived(jsonLd ? JSON.stringify(jsonLd).replace(/</g, '\\u003c') : '');
</script>

<svelte:head>
  <title>{full}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonical} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={SITE_NAME} />
  <meta property="og:title" content={full} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonical} />
  <meta name="twitter:card" content="summary" />
  {#if ld}
    {@html `<script type="application/ld+json">${ld}</` + 'script>'}
  {/if}
</svelte:head>

<script lang="ts">
  import { SITE_NAME, SITE_URL } from '#lib/site.js';

  let {
    title,
    description,
    path,
    jsonLd
  }: { title: string; description: string; path: string; jsonLd?: object | object[] } = $props();

  const full = $derived(title === SITE_NAME ? title : `${title} | ${SITE_NAME}`);
  const canonical = $derived(`${SITE_URL}/${path}`);
  // JSON-LD goes into a script tag, so "<" must not close it early.
  const lds = $derived(
    (Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : []).map((x) => JSON.stringify(x).replace(/</g, '\\u003c'))
  );
  const image = `${SITE_URL}/og.png`;
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
  <meta property="og:image" content={image} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="{SITE_NAME}: an open index of medical imaging datasets" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content={image} />
  {#each lds as ld, i (i)}
    {@html `<script type="application/ld+json">${ld}</` + 'script>'}
  {/each}
</svelte:head>

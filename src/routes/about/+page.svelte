<script lang="ts">
  import Seo from '#lib/components/app/Seo.svelte';
  import { REPO_URL, SITE_NAME, link } from '#lib/site.js';
</script>

<Seo
  title="About"
  description="Why {SITE_NAME} exists, what it publishes and what it does not, and how license summaries should be read."
  path="about/"
/>

<article class="mx-auto max-w-3xl px-4 pt-12 md:px-6">
  <h1 class="text-3xl font-semibold tracking-tight md:text-4xl">About</h1>
  <div class="prose-doc mt-8">
    <p>
      Finding a medical imaging dataset usually means reading papers, websites and data use agreements one by one. Lists
      of links exist, but they rarely say how many subjects have the contrasts you need, or whether you may train a
      commercial model on the data. {SITE_NAME} collects that information in one place, in a form that can be searched and
      combined.
    </p>
    <h2>What the index publishes</h2>
    <ul>
      <li>A description of each dataset in our own words, with a link to its home.</li>
      <li>
        Aggregate numbers about the cohort: counts per contrast, sex, age bin, condition and more. Never data about
        individual subjects.
      </li>
      <li>A breakdown of each license into the same set of questions, with the sentence each answer is based on.</li>
    </ul>
    <h2>Where the numbers come from</h2>
    <p>
      Numbers come from the dataset's own documentation and papers, or are counted from metadata that is itself openly
      licensed. Nothing is computed from data that was obtained under a data use agreement. Small counts for
      combinations of attributes that we compute ourselves are not published, because they could identify people. The
      <a href={link('standard/')}>data standard</a> has the details.
    </p>
    <h2>Reading the license summaries</h2>
    <p>
      The summaries help you compare datasets and find candidates. They are not legal advice. Licenses change, and a
      summary can be wrong. Before you use a dataset, read its license or agreement: that text is what counts. Each
      entry shows the date it was last checked. If you find a mistake, use the Report button on the page. The
      <a href={link('disclaimer/')}>disclaimer</a> has the details.
    </p>
    <h2>Open source</h2>
    <p>
      The code is MIT licensed (<a href="{REPO_URL}/blob/main/LICENSE">LICENSE</a>). The data, meaning dataset entries,
      license breakdowns, vocabularies and docs, is CC0 (<a href="{REPO_URL}/blob/main/LICENSE-DATA">LICENSE-DATA</a>).
      Everything lives in <a href={REPO_URL}>one GitHub repository</a>, and the whole catalog is available as
      <a href={link('catalog.json')}>catalog.json</a> for scripts and other tools.
    </p>
  </div>
</article>

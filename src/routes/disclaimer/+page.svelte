<script lang="ts">
  import Seo from '#lib/components/app/Seo.svelte';
  import { REPO_URL, SITE_NAME, link } from '#lib/site.js';
</script>

<Seo
  title="Disclaimer"
  description="The license breakdowns on {SITE_NAME} are interpretations, not legal advice. Read the original license before you use a dataset."
  path="disclaimer/"
/>

<article class="mx-auto max-w-3xl px-4 pt-12 md:px-6">
  <h1 class="text-3xl font-semibold tracking-tight md:text-4xl">Disclaimer</h1>
  <div class="prose-doc mt-8">
    <h2 id="not-legal-advice">License summaries are not legal advice</h2>
    <p>
      Every license on this site is broken down into the same set of questions, such as "commercial use?" or "may
      trained models be shared?". These answers are interpretations. Contributors, some of them working with AI agents,
      read the license and agreement texts and condensed them into fixed answers. Condensing a legal text always loses
      detail, and an answer can be incomplete, outdated or wrong.
    </p>
    <p>
      Nothing on this site is legal advice, and using it creates no lawyer-client relationship. A "Yes" means that we
      read the license that way. It does not grant you any right, and it does not mean that your intended use is
      allowed.
    </p>

    <h2 id="your-responsibility">What you need to do</h2>
    <ul>
      <li>
        Read the original license or data use agreement in full before you use a dataset. Each license page links to it.
      </li>
      <li>
        Confirm yourself that your intended use is allowed, including any conditions such as attribution, ethics
        approval or limits on sharing.
      </li>
      <li>
        For commercial use, distributing trained models, or any decision with legal or financial consequences, ask the
        data provider or a qualified lawyer.
      </li>
      <li>
        Check that the license is still current. Each breakdown shows the version that was read and the date it was
        checked.
      </li>
    </ul>
    <p>The license or agreement of each dataset is the only text that governs its use.</p>

    <h2 id="no-liability">No warranty, no liability</h2>
    <p>
      The content of this site is provided as is, without any warranty of correctness, completeness or currency. The
      data is dedicated to the public domain under CC0 1.0 and the code is published under the MIT License, both of
      which exclude warranties. To the extent permitted by law, the maintainers and contributors accept no liability for
      any decision made or action taken on the basis of this site, including the use of a dataset in a way its license
      does not permit.
    </p>

    <h2 id="numbers">Numbers and descriptions</h2>
    <p>
      Cohort numbers and descriptions are taken from public sources and can contain errors. Every number links to its
      source. Check the original before you rely on it.
    </p>

    <h2 id="report">Found a mistake?</h2>
    <p>
      Use the Report button on the dataset page, or
      <a href="{REPO_URL}/issues/new?template=correction.yml">open a correction</a> on GitHub with a link to the source.
      See also <a href={link('about/')}>About</a>.
    </p>
  </div>
</article>

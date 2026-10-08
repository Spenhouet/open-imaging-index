<script lang="ts">
  import { REPO_URL, SITE_NAME, link } from '#lib/site.js';
  import Logo from './Logo.svelte';
</script>

<footer class="mt-24 border-t border-border">
  <div class="mx-auto grid max-w-7xl gap-8 px-4 py-10 text-sm md:grid-cols-[2fr_1fr_1fr_1fr] md:px-6">
    <div class="max-w-sm space-y-3">
      <div class="flex items-center gap-2 font-semibold"><Logo class="size-6" />{SITE_NAME}</div>
      <p class="text-muted-foreground">
        A community index of medical imaging datasets. Aggregate statistics only. License summaries are informational
        and not legal advice: the dataset's own license or agreement is what counts.
      </p>
    </div>
    <div class="space-y-2">
      <div class="font-medium">Browse</div>
      <a class="block text-muted-foreground hover:text-foreground" href={link('')}>Datasets</a>
      <a class="block text-muted-foreground hover:text-foreground" href={link('explore/')}>Explore</a>
      <a class="block text-muted-foreground hover:text-foreground" href={link('licenses/')}>Licenses</a>
    </div>
    <div class="space-y-2">
      <div class="font-medium">Contribute</div>
      <a class="block text-muted-foreground hover:text-foreground" href={link('contribute/')}>Add a dataset</a>
      <a class="block text-muted-foreground hover:text-foreground" href={link('standard/')}>Data standard</a>
      <a class="block text-muted-foreground hover:text-foreground" href={link('vocabulary/')}>Vocabulary</a>
      <a class="block text-muted-foreground hover:text-foreground" href={link('skills/')}>Agent skills</a>
    </div>
    <div class="space-y-2">
      <div class="font-medium">Project</div>
      <a class="block text-muted-foreground hover:text-foreground" href={link('about/')}>About</a>
      <a class="block text-muted-foreground hover:text-foreground" href={REPO_URL}>GitHub</a>
      <a class="block text-muted-foreground hover:text-foreground" href={link('catalog.json')}>catalog.json</a>
    </div>
  </div>
  <div class="mx-auto max-w-7xl px-4 pb-10 text-xs text-muted-foreground md:px-6">
    Code <a class="underline-offset-2 hover:underline" href="{REPO_URL}/blob/main/LICENSE">MIT</a>. Data
    <a class="underline-offset-2 hover:underline" href="{REPO_URL}/blob/main/LICENSE-DATA">CC0 1.0</a>. Quoted license
    texts and citations belong to their authors.
  </div>
</footer>

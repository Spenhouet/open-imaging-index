# Open Imaging Index

Static SvelteKit 3 site (adapter-static, every page prerendered) deployed to GitHub Pages. The content is plain files: `datasets/<id>/{dataset.yaml,README.md,stats.csv}`, `licenses/*.yaml`, `vocab/*.yaml`.

## Commands

- `bun run validate`: checks all data files. The build fails on the same errors.
- `bun run dev`, `bun run build`: need Node 22+ on PATH (Bun crashes in SvelteKit 3's route analysis).
- `bun run check`, `bun run lint`, `bunx vitest --run`, `bunx playwright test`
- `bun run schema` after changing `src/lib/catalog/schema.ts`.

## Layout

- `src/lib/catalog/schema.ts`: zod schemas for every data file. Source of the JSON Schemas in `schema/`.
- `src/lib/catalog/validate.ts`: cross-file checks (vocabulary membership, stats consistency, small cells).
- `src/lib/catalog/load.ts`: reads and validates everything from disk (server and scripts only).
- `src/lib/catalog/stats.ts`: stats.csv parser and `estimate`, which bounds matching subjects for cohort filters (exact rows where reported, Fréchet bounds otherwise). Unit tested.
- `src/lib/catalog/charts.ts`: turns a dataset's stats rows into the charts on its page. Each row lands in exactly one chart or in the "Other reported numbers" list, which a unit test checks for every dataset.
- `src/lib/catalog/filter.ts`: catalog filtering, URL query state, facet counts.
- `src/lib/catalog/cohort.ts`: the Explore page: pooled cohort, intended-use split, linked breakdowns (each chart ignores its own selection), coverage grid. Unit tested. `bun scripts/profile-explore.ts <summaries.json>` times it.
- Loaded catalog data is kept in `$state.raw`: deep proxies over thousands of datasets made Explore 4 to 7 times slower.
- `src/lib/server/`: catalog cache, docs rendering and the catalog overview for page loads.
- `vite.catalog.ts`: serves the vocabulary and license list as `virtual:catalog-meta` (re-exported by `src/lib/catalog/meta.ts`), so it is bundled once instead of copied into every page.
- Datasets (`/`) and Explore (`/explore/`) are two views of one selection, under the route group `src/routes/(browse)/`. Its layout owns the search and filter column and the view switch. The selection, the shortlist and the loaded catalog live in `src/lib/catalog/browse.svelte.ts` for the browser session (also in session storage), so switching views or visiting a dataset page keeps them. `summaries.json` is preloaded and fetched once. It leaves out empty stats fields, which `restoreSummaries` (`summaries.ts`) puts back. The catalog page prerenders the largest datasets, and results show in pages of 30 with the page in the URL (`?page=2`). The search index is built on the first query.
- `src/routes/`: `(browse)` with the catalog (`/`) and `explore`, `datasets/[id]`, `licenses`, `licenses/[id]`, `standard` and `contribute` (rendered from `docs/*.md`), `vocabulary`, `about`, `compare` (shortlist side by side), `disclaimer`, `skills`, `datasets` (A to Z), plus `catalog.json`, `sitemap.xml`, `robots.txt`.

## Conventions

- Imports use `#lib/...` with explicit `.js` extensions (SvelteKit 3 subpath imports).
- Internal links go through `link('path/')` from `#lib/site.js`. Pages end with `/`.
- Numbers in stats.csv come from public sources only, never from data under an agreement. See docs/standard.md.
- Read DESIGN.md before touching UI.

## Agent skills

`plugins/open-imaging-index/` is a Claude Code plugin with two skills, listed by `.claude-plugin/marketplace.json`. The site's `/skills/` page renders them and serves a zip per skill. Run `claude plugin validate .` after editing either manifest. Data contributions follow `contribute-imaging-dataset/SKILL.md` (see AGENTS.md).

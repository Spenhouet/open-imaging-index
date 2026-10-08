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
- `src/lib/catalog/filter.ts`: catalog filtering, URL query state, facet counts.
- `src/lib/catalog/cohort.ts`: the Explore page: pooled cohort, intended-use split, linked breakdowns (each chart ignores its own selection), coverage grid. Unit tested. `bun scripts/profile-explore.ts <summaries.json>` times it.
- Loaded catalog data is kept in `$state.raw`: deep proxies over thousands of datasets made Explore 4 to 7 times slower.
- `src/lib/server/`: catalog cache, docs rendering and the catalog overview for page loads.
- `vite.catalog.ts`: serves the vocabulary and license list as `virtual:catalog-meta` (re-exported by `src/lib/catalog/meta.ts`), so it is bundled once instead of copied into every page.
- Catalog data flow: the catalog page prerenders only the largest datasets plus an overview. The browser then loads `summaries.json` (all datasets, prerendered) for filtering, and Explore does the same. Results render 30 at a time.
- `src/routes/`: catalog (`/`), `datasets/[id]`, `explore`, `licenses`, `licenses/[id]`, `standard` and `contribute` (rendered from `docs/*.md`), `vocabulary`, `about`, `compare` (shortlist side by side), `disclaimer`, `skills`, `datasets` (A to Z), plus `catalog.json`, `sitemap.xml`, `robots.txt`.

## Conventions

- Imports use `#lib/...` with explicit `.js` extensions (SvelteKit 3 subpath imports).
- Internal links go through `link('path/')` from `#lib/site.js`. Pages end with `/`.
- Numbers in stats.csv come from public sources only, never from data under an agreement. See docs/standard.md.
- Read DESIGN.md before touching UI.

## Agent skills

`plugins/open-imaging-index/` is a Claude Code plugin with two skills, listed by `.claude-plugin/marketplace.json`. The site's `/skills/` page renders them and serves a zip per skill. Run `claude plugin validate .` after editing either manifest. Data contributions follow `contribute-imaging-dataset/SKILL.md` (see AGENTS.md).

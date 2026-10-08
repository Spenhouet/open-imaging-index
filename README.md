# Open Imaging Index

An open, community-built index of medical imaging datasets. Search by modality, contrast, condition and cohort, and see what each license allows, broken down into the same questions for every dataset, with the sentence each answer comes from.

**Site:** https://spenhouet.github.io/open-imaging-index/

## What is in it

- One folder per dataset in [`datasets/`](datasets): a description, metadata and aggregate cohort numbers (subjects per contrast, sex, age bins, conditions, scanners). Never data about individual subjects.
- One file per license in [`licenses/`](licenses), answering 17 questions such as "commercial use?", "train ML models?", "share trained models?", "sign an agreement?", each with a quote.
- Controlled vocabularies in [`vocab/`](vocab), mapped to DICOM, BIDS, UBERON, MONDO and GA4GH DUO.
- The whole catalog as [`catalog.json`](https://spenhouet.github.io/open-imaging-index/catalog.json).

## Contribute

Read [docs/contributing.md](docs/contributing.md) and [docs/standard.md](docs/standard.md). In short:

```sh
bun install
bun run new-dataset my-dataset-2024   # copies datasets/_template
bun run validate                      # checks every file, runs in CI
bun run dev                           # preview the site
```

`bun run lookup "glioma" mondo` finds ontology ids for new vocabulary terms.

Not a git user? [Suggest a dataset](https://github.com/Spenhouet/open-imaging-index/issues/new?template=suggest-dataset.yml) with a link and someone else writes the entry.

## Development

Requires [Bun](https://bun.sh) and Node 22 or newer (SvelteKit 3 runs its build in Node).

| Command                |                                                              |
| ---------------------- | ------------------------------------------------------------ |
| `bun run dev`          | Dev server                                                   |
| `bun run build`        | Static site in `build/`                                      |
| `bun run check`        | svelte-check                                                 |
| `bun run lint`         | Prettier                                                     |
| `bunx vitest --run`    | Unit tests                                                   |
| `bunx playwright test` | End-to-end tests against the built site                      |
| `bun run schema`       | Regenerates `schema/*.json` from `src/lib/catalog/schema.ts` |

Stack: SvelteKit 3 with adapter-static, Svelte 5, Tailwind 4, shadcn-svelte, MiniSearch, deployed to GitHub Pages by `.github/workflows/deploy.yml`.

## Licenses

- Code: [MIT](LICENSE).
- Dataset metadata, descriptions, vocabularies and license breakdowns: [CC0 1.0](DATA-LICENSE). Quotes from license texts and dataset citations belong to their authors.

License summaries are informational and not legal advice. The license or agreement of each dataset is what counts.

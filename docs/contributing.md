# Contributing

There are three ways to help, from least to most effort.

1. **Suggest a dataset.** Open an issue with the "Suggest a dataset" form and paste the link. Someone else writes the entry.
2. **Fix an entry.** Every dataset page has an "Edit on GitHub" link. Change the file in the browser and open a pull request.
3. **Add a dataset.** Follow the steps below.

## Add a dataset

1. Fork the repository and install [Bun](https://bun.sh).
2. Run `bun install`, then `bun run new-dataset my-dataset-2024`. This copies `datasets/_template/` to `datasets/my-dataset-2024/`.
3. Fill in `dataset.yaml`. Editors with the YAML extension (VS Code: Red Hat YAML) autocomplete every field from the schema.
4. Write `README.md` in your own words. Do not copy the provider's text.
5. Add the numbers you can find to `stats.csv`. A single total row is fine to start. See [the data standard](standard.md) for what may go in.
6. If the dataset uses a license that has no file in `licenses/` yet, add one and answer every rule with a quote.
7. Run `bun run validate` and fix what it reports. `bun run dev` shows the site with your entry.
8. Open a pull request. The checklist in the template covers what reviewers look at.

## What reviewers check

- Every number has a source, and the source is public. Numbers computed from data held under a data use agreement are not accepted.
- License answers quote the license text. Silence stays `unspecified`.
- The README is original text, not copied from the dataset website or paper.
- `verified.date` is the day you checked the sources.

## Licenses of this repository

- Code: MIT.
- Metadata, descriptions and license breakdowns: CC0 1.0. Quotes from license texts and dataset citations belong to their authors.

The license summaries on this site help people find datasets. They are not legal advice. The license or agreement of each dataset is what counts.

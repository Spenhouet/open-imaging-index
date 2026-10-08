# Contributing

There are three ways to help, from least to most effort. An AI agent can do the third for you, see below.

1. **Suggest a dataset.** Open an issue with the "Suggest a dataset" form and paste the link. Someone else writes the entry.
2. **Fix an entry.** Every dataset page has an "Edit on GitHub" link. Change the file in the browser and open a pull request.
3. **Add a dataset.** Follow the steps below.

## Contribute with an AI agent

The repository ships an agent skill for contributions: `contribute-imaging-dataset`. Install it as described on the [agent skills page](https://spenhouet.com/open-imaging-index/skills/), then ask the agent, for example, "Add BraTS 2023 to the Open Imaging Index". The skill makes the agent verify every fact online, look up vocabulary ids, run `bun run validate` and open a pull request. It asks you for what only you know, such as your GitHub handle. Agents that work in a clone without the skill find the same rules through `AGENTS.md`.

Pull requests written by agents are reviewed like any other. The person who asked the agent is responsible for the contribution.

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

- Code: MIT ([LICENSE](https://github.com/Spenhouet/open-imaging-index/blob/main/LICENSE)), for everything outside the data directories.
- Data: CC0 1.0 ([LICENSE-DATA](https://github.com/Spenhouet/open-imaging-index/blob/main/LICENSE-DATA)) for `datasets/`, `licenses/`, `vocab/` and `docs/`. Your contribution is published under these terms. Quotes from license texts and dataset citations belong to their authors.

The license summaries on this site help people find datasets. They are not legal advice. The license or agreement of each dataset is what counts.

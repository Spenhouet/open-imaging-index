# Instructions for AI agents

This repository is an index of medical imaging datasets. Most contributions are data: `datasets/`, `licenses/`, `vocab/`.

- Adding or correcting a dataset, license or vocabulary term: follow `plugins/open-imaging-index/skills/contribute-imaging-dataset/SKILL.md` exactly. Its hard rules are mandatory: verify every fact online in a public source during the task, never compute anything from data behind an agreement, quote license texts, answer every license rule including `product_validation` (judged on its own: a non-commercial clause alone is not a "no"), look up ontology ids with `bun run lookup`, and run `bun run validate` until it reports 0 errors.
- Answering "which dataset should I use": follow `plugins/open-imaging-index/skills/find-imaging-datasets/SKILL.md`.
- Changing the site code: read `CLAUDE.md` and `DESIGN.md`, then run `bun run check`, `bun run lint`, `bunx vitest --run` and `bunx playwright test` (the last two need a build: `bun run build` with Node 22+ on PATH).

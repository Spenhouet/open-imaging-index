---
name: contribute-imaging-dataset
description: Add a medical imaging dataset that the Open Imaging Index does not track yet, or edit and correct an existing entry, as a pull request to github.com/Spenhouet/open-imaging-index. Use when someone wants to contribute a dataset, fix a number, update a license breakdown or add a vocabulary term. Every fact must be verified online from public sources, and the repository's validator must pass.
---

# Contribute a dataset to the Open Imaging Index

The index lives in https://github.com/Spenhouet/open-imaging-index. Each dataset is one folder `datasets/<id>/` with `dataset.yaml`, `README.md` and `stats.csv`. Licenses live in `licenses/`, allowed values in `vocab/`. The site is built from these files, and `bun run validate` checks them in CI.

People rely on these entries to choose datasets and to judge what they may legally do with them. A wrong number or a wrong license answer does real damage. Accuracy beats completeness every time.

## Hard rules

You must follow every rule. If a rule cannot be met, stop and tell the person why, instead of working around it.

1. **Verify everything online, in this session.** Every number, date, license answer and description detail must come from a public source you opened during this task: the dataset's paper or data descriptor, its official website, its license text, or an openly downloadable metadata file. Your memory, other catalogs, blog posts and earlier versions of this index are not sources. When a source cannot be fetched, the fact stays out.
2. **Never invent or estimate.** No number unless a source states it, or it is counted from an open file. Write approximate values exactly as the source does (`~600` for "nearly 600"). Sum parts into a total only when the parts are disjoint and complete, and say so in the note.
3. **Every stats row names its source and where in it.** The `source` column is a key under `sources` in `dataset.yaml`. The key names one document (`baid2021`, `tcia-brats2021`), never a kind (`paper`, `website`). The `where` column gives the table, figure, page or section, e.g. `Table 2` or `p. 4`.
4. **Never compute from data behind a gate.** Counting from files is allowed only when anyone can download them without an account, registration or agreement. Never use data the person or you obtained under a data use agreement, credentialed access (PhysioNet, ADNI, UK Biobank) or competition rules, not even for counts. For counts you compute, leave out every cell that combines two or more dimensions and is below 10. The validator enforces this for `computed` sources.
5. **Write the README in your own words.** Do not copy sentences from the website or paper.
6. **License answers quote the license.** Every answer in a `licenses/*.yaml` file other than a plain "no duty" quotes the exact sentence it rests on (`quote`), with `source` if the quote is not from the license text itself. If the text is silent on a permission, the answer is `unspecified`, never `yes` or `no`. A duty or limit is `no` only when nothing in the text asks for it. Any clause that restricts purpose, users, location or time, or requires an action, makes that rule `yes` or `conditional` with the quote.
   - **`product_validation` is judged on its own.** It asks whether the data may be used to test or validate a product, for example a performance study for regulatory clearance, when the data does not become part of the product. A "non-commercial" or "research only" clause alone does not answer it: the answer is then `unspecified`. Use `yes` when commercial use is allowed or the text permits evaluation, and `no` only with a quote that rules out testing, validation, regulatory use or use by companies. The checker rejects a `no` that reuses the commercial-use quote.
7. **Vocabulary ids are looked up, never guessed.** Run `bun run lookup "<term>" mondo` (or `uberon`, `hp`) and copy the id. Add a term only when no existing term fits. Never rename or delete existing terms.
8. **Run the checks yourself and read the output.** `bun run validate` must report 0 errors before you open a pull request. Fix warnings about your files where a source allows it. If you changed anything outside `datasets/`, `licenses/` and `vocab/`, also run `bun run check`, `bun run lint` and `bunx vitest --run`.
9. **Do not guess the person's details.** Ask for anything only they can provide, and wait for the answer.
10. **One dataset per pull request.** Keep the diff to what the task needs.

## Ask the person

Before writing files, get these from the person if they are not already clear:

- Which dataset, and which release or version. If the name is ambiguous (BraTS 2021 vs 2023, MIMIC-CXR vs MIMIC-CXR-JPG), confirm.
- Their GitHub handle, for `verified.by`. If they prefer, use `<handle>-agent`.
- Whether they hold access under an agreement. If yes, remind them that nothing derived from that access may go into the index.
- For corrections: what is wrong, and the source that shows the right value, if they have one.
- Permission to fork the repository, push a branch and open a pull request in their name.

## Set up

```sh
gh repo fork Spenhouet/open-imaging-index --clone   # or: git clone https://github.com/Spenhouet/open-imaging-index
cd open-imaging-index
bun install                                         # needs Bun, and Node 22+ for building the site
git switch -c add-<dataset-id>                      # or fix-<dataset-id>-<topic>
```

Read these files completely before you change anything:

- `docs/standard.md`: the data standard. It is the reference for every field.
- `datasets/_template/`: the starting point.
- One finished entry close to your dataset, e.g. `datasets/ixi/` (open data with computed counts), `datasets/brats-2021/` (two alternative licenses) or `datasets/nih-chestxray14/` (computed cross tables).
- `vocab/license-rules.yaml` and one custom license file such as `licenses/LicenseRef-OASIS-DUA.yaml`, if a license file is involved.

## Add a dataset

1. **Check it is not already tracked.** Search `datasets/*/dataset.yaml` for the name, full name, DOI and homepage domain (`grep -ril "<term>" datasets`). Also look at https://spenhouet.com/open-imaging-index/?q=<name>. If it exists, switch to "Edit an entry".
2. **Collect sources.** Find the data descriptor paper (DOI), the official website, the download or access page and the license or agreement text. Prefer the paper for numbers and the provider's own page for access and license.
3. **Scaffold:** `bun run new-dataset <id>` with a lowercase id like `brats-2021`.
4. **Fill `dataset.yaml`.** Use only vocabulary ids (`vocab/*.yaml`). `summary` is 50 to 320 characters. `year` is the first public release. `access.type` is one of `open`, `registration`, `signed_agreement`, `credentialed`, `application`, `paid`. With several licenses, give each an `applies_to`, and set `license_combine: any` only when the same data is offered under alternative licenses. Set `verified.date` to today's date (`date +%F`).
5. **Licenses.** If the dataset uses a license that already has a file in `licenses/`, reference it. Otherwise create `licenses/<SPDX id>.yaml`, or `licenses/LicenseRef-<Name>.yaml` for a custom agreement, answering every rule in `vocab/license-rules.yaml` under the hard rules above. Record the `version` or date of the text you read, and `commercial_license` if the provider sells one.
6. **Write `stats.csv`.** Header: `measure,by,value,source,where,note`. Add every number the sources give: totals, per contrast, the exact contrast combinations (`contrast_set`), sex, age bins (completed years, `60-69`), conditions, scanners, field strengths, countries, splits, and cross tables where reported. Use the right measure: `subjects` for people, `studies` for sessions, `scans` for volumes, `images` for 2D images, `slides` for whole-slide images.
7. **Write `README.md`.** 150 to 400 words in your own words: one overview paragraph, then `## Composition`, `## Acquisition`, `## Annotations` (if any) and `## Known limitations`. Facts only.
8. **Validate:** `bun run validate`. Fix every error and re-run until it reports 0 errors. Then look at the page: `bun run dev` and open `/datasets/<id>/`.
9. **Open the pull request** (see below).

## Edit an entry

1. Open the files of the entry and find the claim in question.
2. Verify the correct value online, in a source you open now. If the source agrees with the index, report that and stop.
3. Change only what the source supports. Update `source` and `where` for every row you touch. Keep notes accurate.
4. Update `verified.date` and `verified.by` only if you re-checked the whole entry against its sources. Otherwise leave them and say in the pull request what you checked.
5. Run `bun run validate` until it reports 0 errors.

For a license change, edit the file in `licenses/` and update `version` and `verified`. Every dataset that uses it changes with it, so name them in the pull request (`grep -rl "license: <id>" datasets`).

## Open the pull request

Commit with a message that names the dataset and what changed, push, and open the pull request with `gh pr create`. Fill in the checklist from `.github/pull_request_template.md` honestly. In the description, list:

- The sources you used, with links.
- Anything you could not verify and therefore left out.
- Any judgment call (an ambiguous license sentence, a total you summed, a value where sources disagree).

## Report back

Tell the person what you added or changed, the pull request link, what you left out and why, and the validator result. Never claim a check passed unless you ran it and saw it pass.

# Data standard

Every dataset is one folder in `datasets/`. The folder name is the dataset id.

```
datasets/brats-2021/
  dataset.yaml   what the dataset is, where to get it, which license applies
  README.md      the description, in your own words
  stats.csv      numbers about the cohort, one per row
```

Licenses live in `licenses/`, one file per license, so that many datasets can share one breakdown. Allowed values for every field live in `vocab/`. The site, the checker (`bun run validate`) and the JSON Schemas in `schema/` all read these same files.

## dataset.yaml

| Field                                       | Required | Notes                                                                                                                                                                                                                           |
| ------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                        | yes      | Lowercase letters, digits and dashes. Equals the folder name.                                                                                                                                                                   |
| `name`                                      | yes      | Short name, at most 60 characters.                                                                                                                                                                                              |
| `full_name`                                 |          | The long name, if there is one.                                                                                                                                                                                                 |
| `summary`                                   | yes      | 50 to 320 characters. Shown in search results and search engines.                                                                                                                                                               |
| `homepage`                                  | yes      | The official page of the dataset.                                                                                                                                                                                               |
| `doi`                                       |          | Bare DOI, e.g. `10.7937/K9/TCIA.2015.LO9QL9SX`.                                                                                                                                                                                 |
| `year`                                      | yes      | Year of the first public release. `updated` holds the year of the latest release.                                                                                                                                               |
| `version`, `status`                         |          | `status` is `active`, `superseded` or `retired`.                                                                                                                                                                                |
| `creators`                                  | yes      | Groups or people who made the dataset.                                                                                                                                                                                          |
| `species`                                   |          | Defaults to `human`.                                                                                                                                                                                                            |
| `modalities`                                | yes      | `vocab/modality.yaml` (DICOM modality codes).                                                                                                                                                                                   |
| `contrasts`, `tracers`                      |          | `vocab/contrast.yaml`, `vocab/tracer.yaml`.                                                                                                                                                                                     |
| `anatomy`                                   | yes      | `vocab/anatomy.yaml`.                                                                                                                                                                                                           |
| `conditions`, `tasks`, `formats`, `vendors` |          | `vocab/condition.yaml`, `vocab/task.yaml`, `vocab/format.yaml`, `vocab/vendor.yaml`.                                                                                                                                            |
| `countries`                                 |          | ISO 3166-1 alpha-2 codes.                                                                                                                                                                                                       |
| `field_strengths`                           |          | Tesla, e.g. `[1.5, 3]`.                                                                                                                                                                                                         |
| `size_gb`                                   |          | Download size.                                                                                                                                                                                                                  |
| `access`                                    | yes      | `type` from `vocab/access.yaml` and the `url` where access starts.                                                                                                                                                              |
| `licenses`                                  | yes      | One entry per license. With several licenses, `applies_to` says which part of the data each covers.                                                                                                                             |
| `license_combine`                           |          | `all` (default) when each license covers a different part of the data, `any` when the same data is offered under alternative licenses. The site combines answers with the most restrictive or the friendliest rule accordingly. |
| `citation`                                  |          | `text` and/or `bibtex`, as the creators ask to be cited.                                                                                                                                                                        |
| `sources`                                   | yes      | One entry per document that `stats.csv` rows point to. The key names the document, e.g. `baid2021` or `tcia-brats2021`, never its kind like `paper`. `kind` is `paper`, `website`, `data` or `computed`.                        |
| `related`                                   |          | Ids of related datasets in this index.                                                                                                                                                                                          |
| `verified`                                  | yes      | The `date` someone last checked the entry against its sources, and their GitHub handle in `by`.                                                                                                                                 |

Values in the vocabulary lists (`contrasts`, `conditions`, ...) are filled in automatically from `stats.csv`, so a value that appears there does not have to be repeated in `dataset.yaml`.

## stats.csv

A table with six columns. Each row is one number.

```csv
measure,by,value,source,where,note
subjects,,1251,baid2021,Table 1,
subjects,sex=female,512,baid2021,Table 2,
subjects,contrast=FLAIR,1251,baid2021,Section 2.1,
subjects,sex=female;age=60-69,118,baid2021,Table 2,
age_mean,,58.9,baid2021,p. 4,
```

| Column    | Meaning                                                                                                                                                |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `measure` | What is counted or summarized, from `vocab/measures.yaml`: `subjects`, `studies`, `scans`, `images`, `slides`, or an age statistic such as `age_mean`. |
| `by`      | The breakdown. Empty means the whole dataset. Otherwise `dimension=value` pairs joined with `;`. Dimensions are listed in `vocab/dimensions.yaml`.     |
| `value`   | The number. Write `~600` when the source only gives an approximate number.                                                                             |
| `source`  | The key of one document under `sources` in `dataset.yaml`.                                                                                             |
| `where`   | Where in that document the number is: `Table 2`, `Figure 3`, `p. 4`, `Section 2.1`. Empty only when the document is a short web page.                  |
| `note`    | Optional. Quote the column in CSV if it contains a comma.                                                                                              |

### Dimensions

| Dimension                                | Values                                                                | How several values combine in a filter    |
| ---------------------------------------- | --------------------------------------------------------------------- | ----------------------------------------- |
| `modality`                               | `vocab/modality.yaml`                                                 | all (subject has every selected modality) |
| `contrast`                               | `vocab/contrast.yaml`                                                 | all                                       |
| `contrast_set`                           | contrasts joined with `+` in alphabetical order, e.g. `FLAIR+T1w+T2w` | the exact set a subject has               |
| `tracer`                                 | `vocab/tracer.yaml`                                                   | all                                       |
| `anatomy`, `condition`, `vendor`, `view` | their vocabulary files                                                | any                                       |
| `sex`                                    | `female`, `male`, `other`, `unknown`                                  | any                                       |
| `age`                                    | bins in completed years: `60-69`, `90+`, `0-0.5`                      | any                                       |
| `field_strength`                         | tesla, e.g. `3`                                                       | any                                       |
| `country`                                | ISO 3166-1 alpha-2                                                    | any                                       |
| `split`                                  | `train`, `validation`, `test`                                         | any                                       |

`sex`, `age`, `contrast_set`, `country` and `split` are partitions: every subject has exactly one value, so their counts add up to at most the total. The other dimensions can overlap. A subject can have several contrasts or conditions.

### Three levels of detail

The site answers questions like "datasets with at least 500 subjects that have both T1w and FLAIR and are aged 60 to 80". How exact the answer is depends on what `stats.csv` contains.

1. **Totals per value.** `subjects,contrast=T1w,...` and `subjects,contrast=FLAIR,...`. The site can only give a range for subjects with both, using the Fréchet bounds: at least `T1w + FLAIR − total`, at most the smaller of the two.
2. **Contrast combinations.** `subjects,contrast_set=FLAIR+T1w,...` for every combination that occurs. Answers about contrasts become exact. This is the most useful extra for machine learning and usually easy to get.
3. **Cross tables.** Rows with several dimensions, like `sex=female;age=60-69`. Answers for those combinations become exact.

Add whatever the sources report. Every row narrows the range shown to users.

### Checks

`bun run validate` runs on every pull request. It checks that:

- every value is in its vocabulary, every source key exists and no row is repeated
- source keys name a document rather than a kind (`paper`, `website` are rejected) and no two keys share a url
- no count is larger than its total, partition counts do not add up to more than the total
- no cross-table row is larger than one of its single-dimension rows
- a contrast count is at least the sum of the contrast sets that contain it
- age statistics are in order (minimum ≤ median ≤ maximum)

## Where numbers may come from

The index publishes aggregate numbers only, never data about individual subjects. A number may come from:

- the dataset's own documentation, website or data descriptor paper (`kind: paper` or `website`)
- metadata files that anyone can download under a public license without registering or signing anything, e.g. a `participants.tsv` under CC0, CC BY or CC BY-NC (`kind: computed`, with the file in `url` and the columns used in `where`)

A number may **not** be computed from data you received under a data use agreement, registration terms or any other contract. Most of those agreements forbid passing on information derived from the data, even counts.

Counts that you compute yourself for a combination of two or more dimensions are left out when they are below 10, because small cells can identify people. The checker enforces this for `computed` sources. Numbers copied from a publication stay as published.

## licenses/*.yaml

Each license file answers the same questions, listed in `vocab/license-rules.yaml`. Every answer is `yes`, `no`, `conditional` (yes, with a condition stated in the note) or `unspecified` (the text is silent).

```yaml
id: LicenseRef-Example-DUA # SPDX id, or LicenseRef-<name> for a custom agreement
name: Example Data Use Agreement
url: https://example.org/dua.pdf
version: 'v2, March 2024'
summary: Plain-language summary in one to three sentences.
purpose: research # any | research | noncommercial | noncommercial_research | health_research | approved_project
rules:
  commercial_use:
    value: 'no'
    quote: The data may be used for non-commercial research purposes only.
  model_training:
    value: unspecified
  # ... every rule from vocab/license-rules.yaml
commercial_license:
  available: 'yes'
  url: https://example.org/commercial
verified:
  date: '2026-01-31'
  by: your-github-handle
```

Rules of thumb:

- Quote the sentence an answer is based on. If a quote comes from somewhere else than the license text, add its `source` url.
- `unspecified` is a real answer. Do not turn silence into `yes` or `no`.
- A "no" for a duty (no signed agreement, no ethics approval) needs no quote. The evidence is that the text does not ask for it.
- Where the provider sells a commercial license, record it under `commercial_license`.

The site combines the answers of all licenses of a dataset: the most restrictive one per rule when every license applies to some part, the friendliest one when they are alternatives (`license_combine: any`). Rules map to [GA4GH Data Use Ontology](https://github.com/EBISPOT/DUO) codes where one exists.

## Vocabularies

Every file in `vocab/` lists terms with an `id`, a `label` and optional `description`, `synonyms`, `parent` (a broader term in the same file) and `mappings` to other vocabularies.

| File             | Based on                                                                     |
| ---------------- | ---------------------------------------------------------------------------- |
| `modality.yaml`  | DICOM Modality (0008,0060)                                                   |
| `contrast.yaml`  | BIDS suffixes for MR, local terms for CT phases, stains and ultrasound modes |
| `anatomy.yaml`   | UBERON                                                                       |
| `condition.yaml` | MONDO, HPO for findings                                                      |
| `sex.yaml`       | BIDS `participants.tsv` levels                                               |
| `vendor.yaml`    | normalized names, raw DICOM Manufacturer strings as synonyms                 |

SNOMED CT and ICD-O terms are not embedded, because their licenses restrict redistribution.

To add a term, prefer the upstream code: if BIDS, MONDO or UBERON has the concept, use it and add the mapping. Look up ids with `bun run lookup "glioma" mondo`. Term ids are never deleted. A replaced term keeps its id and gets a description that points to the new one.

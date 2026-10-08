---
name: find-imaging-datasets
description: Find medical imaging datasets (MRI, CT, PET, X-ray, mammography, ultrasound, pathology, fundus and more) that fit a research or product need, using the Open Imaging Index. Use when someone asks which datasets exist for a modality, contrast, body part or disease, how many subjects match a cohort (e.g. T1w and FLAIR, female, aged 60 to 80), or which datasets allow commercial use, model training or sharing trained models.
---

# Find medical imaging datasets

The Open Imaging Index (https://spenhouet.com/open-imaging-index/) lists medical imaging datasets with aggregate cohort numbers and a license breakdown into the same yes/no rules for every dataset. This skill turns a person's need into a ranked, verified shortlist.

## Rules

1. Work from the published catalog, then verify. The catalog says what the index recorded on its `verified.date`. Before you recommend a dataset for a decision (a grant, a product, a training run), open its homepage and license page and confirm the facts that decision depends on. Say which facts you confirmed online and which you only took from the index.
2. Never present a license summary as legal advice. Whenever your answer mentions what a license allows, include this sentence: "License answers are the Open Imaging Index's interpretation, not legal advice. Read the original license and confirm your use yourself (https://spenhouet.com/open-imaging-index/disclaimer/)." Every answer in the index links to the license text. For commercial use or model sharing, quote the license sentence and tell the person to read the full license.
3. Never invent numbers. Use the numbers in the catalog or numbers you read in a source in this session. If a count is a range (see "Cohort numbers"), give the range, not a guess inside it.
4. Never download data that needs registration or an agreement on the person's behalf, and never ask them for credentials.
5. If nothing fits, say so. Do not stretch a weak match into a recommendation.

## Steps

### 1. Pin down the need

Ask only for what is missing and matters. Typical questions:

- Modality and contrasts, e.g. MRI with T1w and FLAIR, contrast CT, chest X-ray.
- Anatomy and condition, e.g. brain, glioma; chest, pneumothorax.
- Cohort: minimum subjects, age range, sex, healthy controls needed.
- Labels or task: segmentation masks, classification labels, reports.
- Use of the data: commercial product, training models, publishing model weights, re-sharing data.
- Access the person can handle: open download, free registration, signed agreement, credentialed access (e.g. PhysioNet with CITI training), application review, paid.

If the person gives a broad request ("brain MRI datasets"), proceed with sensible defaults and state them.

### 2. Load the catalog

Download the full catalog (CC0, about 250 KB):

```sh
curl -sL https://spenhouet.com/open-imaging-index/catalog.json -o catalog.json
```

If you cannot run shell commands, fetch the same URL with your web tool. Structure:

- `datasets[]`: one object per dataset.
  - `id`: page at `https://spenhouet.com/open-imaging-index/datasets/<id>/`.
  - `meta`: the dataset.yaml content: `name`, `full_name`, `summary`, `homepage`, `doi`, `year`, `modalities`, `contrasts`, `anatomy`, `conditions`, `tasks`, `formats`, `countries`, `access.type`, `access.url`, `citation`, `sources`, `verified.date`.
  - `facets`: values per dimension (`modality`, `contrast`, `anatomy`, `condition`, `vendor`, `field_strength`, `country`, ...), merged from metadata and stats.
  - `totals`: totals per measure (`subjects`, `studies`, `scans`, `images`, `slides`).
  - `stats[]`: every number, as `{measure, by, value, approx}`. `by` maps dimensions to values, e.g. `{"sex": "female", "age": "60-69"}`. An empty `by` is the total.
  - `rules`: the combined license answer per rule (`yes`, `no`, `conditional`, `unspecified`).
  - `licenses[]`: license ids with `applies_to` when a dataset mixes licenses.
- `licenses[]`: each license file with `rules.<rule>.value`, `quote`, `note`, `url`, `summary`.
- `vocab`: vocabularies with labels, synonyms and parent terms (`condition` glioblastoma has parent glioma).

Vocabulary values are ids, not free text: modalities are DICOM codes (`MR`, `CT`, `PT`, `DX` for X-ray, `MG`, `US`, `SM` for pathology slides, `OP` for fundus), MR contrasts are BIDS suffixes (`T1w`, `T1w_ce`, `T2w`, `FLAIR`, `dwi`, `bold`). Map the person's words to ids with `vocab.terms.<dimension>` labels and synonyms, and include child terms of a condition.

### 3. Filter and count

Match on `facets`, `rules` and `meta.access.type`. For license needs, check `rules`:

| Need                           | Rule                    | Acceptable answer                                |
| ------------------------------ | ----------------------- | ------------------------------------------------ |
| Commercial use                 | `commercial_use`        | `yes` (report `conditional` separately)          |
| Train models                   | `model_training`        | `yes` or `conditional` with the condition stated |
| Publish or sell trained models | `share_model_weights`   | `yes`                                            |
| Re-host or share the data      | `redistribute_original` | `yes`                                            |
| No agreement to sign           | `signed_agreement`      | `no`                                             |
| No ethics approval needed      | `ethics_approval`       | `no`                                             |

`unspecified` means the license text is silent. Treat it as "ask the provider", never as yes.

#### Cohort numbers

For cohort questions, count from `stats` with measure `subjects`:

- A row whose `by` matches the question exactly gives an exact count.
- `contrast_set` rows give exact counts per combination of contrasts. Subjects with both T1w and FLAIR are the sum of all sets that contain both.
- With only single-dimension rows, give bounds. At least `max(0, a + b - N)` and at most `min(a, b)`, where `a` and `b` are the two counts and `N` is the total.
- Age bins use completed years: `60-69` covers ages 60 up to the 70th birthday. A bin that only partly overlaps the requested range adds to the upper bound only.
- Values written with `approx: true` are approximate in the source.

The website does the same arithmetic. Give the person a link that reproduces the filter, for example:

```
https://spenhouet.com/open-imaging-index/?contrasts=FLAIR,T1w&sex=female&age=60-80&min=200&rules=commercial_use
```

Query parameters: `q` (search), `modality`, `anatomy`, `condition`, `task`, `access`, `license`, `format`, `vendor`, `field_strength`, `country` (comma-separated ids), `contrasts` (all required), `sex`, `age` (`from-to` in years, `100` means no upper limit), `min` (minimum matching subjects), `rules` (comma-separated rule ids that must be in the user's favor), `lenient=1` (count conditional answers as allowed).

### 4. Verify online

For each dataset you put on the shortlist:

1. Open `meta.homepage` and confirm the dataset still exists and how to get it.
2. If the person's use depends on a license rule, open the license `url`, find the sentence in the `quote`, and confirm it still says that.
3. If `verified.date` is more than a year old, or what you read differs from the index, say so plainly and suggest a correction (see below).

### 5. Answer

Give a ranked shortlist, best fit first. For each dataset:

- Name, linked to its page in the index, plus the official homepage.
- Why it fits, with the numbers that matter (subjects, matching subjects or bounds, contrasts, labels).
- Access type and the key license answers for this person's use, with the deciding quote where it matters.
- What you verified online and what you did not.

End with the gaps: requirements no dataset meets, and anything the person must check themselves (license text, data quality, ethics).

## When the index is missing something

If you know or find a dataset that fits but is not in the index, or an entry is wrong:

- Offer to add or correct it with the `contribute-imaging-dataset` skill (needs a clone of https://github.com/Spenhouet/open-imaging-index).
- Or point the person to the issue forms: suggest a dataset at https://github.com/Spenhouet/open-imaging-index/issues/new?template=suggest-dataset.yml, report a mistake at https://github.com/Spenhouet/open-imaging-index/issues/new?template=correction.yml.

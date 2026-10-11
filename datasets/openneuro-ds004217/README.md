This OpenNeuro dataset was shared by the Tamir Lab at Princeton University under the title
"Interacting representations of mental states and traits". It holds raw functional and structural brain MRI from a
study of how people's neural representations of others' passing mental states relate to representations of their
lasting traits. Snapshot 1.0.0 (July 2022) is released under a CC0 waiver. The dataset page lists an OSF project as
its reference; no README or linked article is included in the snapshot, so the task design is known only from the
event files.

## Composition

There are 67 participants, 44 female and 23 male, aged 18 to 35 (mean 20.4, median 20) per participants.tsv. Most are
18 to 23 years old. The table has no diagnosis, handedness or other phenotype columns. Subject numbers run to 097 with
gaps, so the released set is a subset of those enrolled.

## Acquisition

All data come from one session per participant on a 3 T Siemens Skyra at the Princeton Neuroscience Institute. Each session has one 1 mm MPRAGE
T1-weighted scan, a pair of opposite phase-encoding spin-echo EPI fieldmaps and up to eight runs of the task
"mentalstates" (gradient-echo EPI, TR 1.5 s, TE 32 ms, multiband slice timing). 62 participants have all eight runs;
the other five have five to seven, giving 526 BOLD runs in total.

## Annotations

There are no image annotations. Each BOLD run has an events file with trial onsets, durations, response times and a
trial type naming one of a set of mental states (for example affection, dominance, embarrassment, peacefulness,
self-pity), ten trials per state in the run we
checked.

## Known limitations

- No README, task description or participant exclusion criteria are shared with the data.
- The sample is mostly university-age adults from a single site and scanner.
- No paper describing this exact dataset was found linked from the dataset page.

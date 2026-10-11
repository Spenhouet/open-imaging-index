This dataset holds the MRI data of a preregistered replication by Julie Van, Sam Nielsen and C. Brock Kirwan at
Brigham Young University. They repeated the word recognition memory design of two 2006 papers by Daselaar, Fleck and
Cabeza, which had reported that separate parts of the medial temporal lobe track recollection, familiarity and novelty,
and that the hippocampus follows the subjective sense of oldness. Using regions of interest taken from the original
papers, the replication found evidence for a single dissociation rather than a triple one. Data were collected in 2020
and 2021 and published on OpenNeuro under CC0; the current snapshot is 1.2.0.

## Composition

The study enrolled 60 healthy young adults; the paper reports 38 women and a mean age of 21.3 years for that group.
Seven were left out of the analyses (one left-handed, two who did not follow the task, three for head motion and one
for equipment error), leaving 53, of whom 33 were women. The snapshot contains 58 subjects: sub-001 and sub-056 are not
released, while the other five excluded subjects are. No participants.tsv is included, so age and sex of the released
subjects are not given per subject.

## Acquisition

Scans were done on a Siemens Trio at 3 T with a 12-channel head coil. Each subject has one sagittal T1-weighted
MP-RAGE (TR 1.9 s, TE 2.26 ms, 1 mm slices), four task runs of EPI BOLD (TR 1.8 s, TE 31 ms, 34 slices
of 3.8 mm, 64 x 64 matrix) and a pair of EPI field maps with opposite phase encoding. Before scanning, participants
judged 120 real words and 80 pseudo words as an incidental study list. In the scanner, each run showed 60 words, half
studied and half new, and participants answered old or new and then rated their confidence on a four-point scale.

## Annotations

There are no image annotations. The events files give trial onsets and durations, the old or new response, the
correct answer and the reaction time.

## Known limitations

- Structural scans were defaced with in-house scripts before upload.
- Sex and age are only reported for the enrolled and the analysed groups, not for the released set of 58.
- Five released subjects were excluded from the published analyses; the README names them.

This dataset holds task fMRI and structural brain MRI from Chinese-English bilingual young adults studied at Beijing
Normal University. The authors built it to let researchers compare language control, the ability to switch between
two languages, with domain-general cognitive control, the ability to switch between response rules. Both tasks were
designed to share the same cue colors, trial timing and run structure so that the two can be compared directly. The
data are on OpenNeuro in BIDS format and are described in a 2025 Scientific Data paper.

## Composition

77 right-handed, healthy native Chinese speakers took part. The paper gives an age range of 19 to 30 years (mean
22.2) and reports 34 females, while the shared participants.tsv codes 43 subjects as female and 34 as male and lists
one subject aged 18. All had passed the College English Test Band 4 and started learning English at about age 9.
participants.tsv also holds Raven matrices scores, self-rated proficiency in both languages and reaction times and
error rates from a repeat of the language task outside the scanner.

## Acquisition

Scans were done on a 3 T Siemens Trio. Each subject did two runs of a picture naming task, where a red or blue frame
cued naming in Chinese or English, and two runs of an arrow task, where the arrow color cued pressing the same or
the opposite side. Task order was counterbalanced. Each run has 164 echo-planar volumes (TR 2 s, 33 slices). A
T1-weighted anatomical scan followed and was defaced before release.

## Annotations

There are no image labels. Event files give trial onsets and conditions. Derivatives include MRIQC quality metrics,
temporal signal-to-noise maps and single-trial BOLD estimates from a least-squares-separate model.

## Known limitations

- Spoken responses were not recorded in the scanner, so naming accuracy and speed come from a later lab session.
- Head motion is higher in the naming task than in the arrow task.
- Sex counts and the minimum age differ between the paper and participants.tsv.
- OpenNeuro releases the data under CC0, but the authors ask users to follow CC BY-NC-ND terms and not use the data
  commercially.

This OpenNeuro dataset comes from a Ghent study that compared brain structure and language-related brain activity
between young adults with dyslexia and typical readers. Each participant was scanned once at Ghent University
Hospital between November 2021 and May 2022. Snapshot 1.0.0 was published in December 2024 under a CC0 waiver. The
work was funded by the Flemish Research Fund (FWO, grant 1217621N).

## Composition

The release holds 70 participants: 35 with a dyslexia diagnosis made by a trained professional and 35 without any
diagnosed language or reading impairment. All were right-handed native Dutch speakers without brain injury or
neurological disease. Ages range from 17 to 37 years and the participants file lists 43 women and 27 men. Every
participant has a T1-weighted scan, a diffusion series and three task fMRI runs, plus field maps.

## Acquisition

All images come from a single Siemens Prisma Fit 3T scanner. The structural scan is an MPRAGE with 1 mm slices.
Diffusion was acquired with multiband echo-planar imaging at 2 mm slices with anterior-posterior phase encoding, plus
one reverse phase-encoded b0 image for distortion correction. The functional runs (TR 1.07 s, multiband factor 4,
2.5 mm slices) cover three block-design tasks: covert letter fluency, visual rhyme decision and lexical decision. A
phase-difference field map with two magnitude images is included for the functional data. Task scripts and stimuli
are hosted separately on OSF.

## Annotations

There are no image annotations. Each task has one top-level events file that describes the block design for all
participants. The participants file gives group, age, sex and writing hand.

## Known limitations

- No paper describing the cohort is linked from the dataset, and several metadata fields still hold template text.
- The README lists diffusion shells of 0, 1200 and 3000 s/mm², while the shipped b-value file of the inspected
  subject lists 0, 1000 and 3000.
- One participant is 17, although the README gives 18 to 40 years as the inclusion range.
- The structural images are not labelled as defaced.
- No reading or cognitive test scores are shared.

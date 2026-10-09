The Queensland Twin Adolescent Brain (QTAB) project followed same-age twins from the Brisbane region through early
adolescence to study genetic and environmental effects on brain development, puberty, cognition and mood. Its imaging
data were released on OpenNeuro as ds004146 in June 2022 under a CC0 waiver, organised in BIDS. The twin design, with a
shared family identifier, suits heritability analyses and longitudinal work on the developing brain.

## Composition

The project recruited 422 twins from 211 families (206 twin pairs and 5 triplet sets, two of each trio taking part).
Five did not enter the scanner, so the first session holds 417 participants aged 9 to 14, scanned between June 2017
and October 2019. A second session from November 2019 to January 2021 rescanned 304 of them (152 pairs) after 13 to 30
months. Children with serious medical, neurological or psychiatric conditions, including autism and ADHD, were
excluded. The public participants table gives age in whole years, sex, handedness, family and protocol code.

## Acquisition

All scans come from one 3T Siemens Prisma with a 64-channel coil at the University of Queensland Centre for Advanced
Imaging. Each session included an MP2RAGE T1w (0.8 mm, with inversion images and a denoised uniform image), 3D T2w and
FLAIR, two or three T2w TSE slabs over the hippocampus, SWI, four runs of multi-shell diffusion (b = 1000 and 3000),
two resting-state fMRI runs and pseudo-continuous ASL. Session 2 added an emotional conflict task and a passive
movie-watching task. Faces were removed from the 3D whole-brain images, and the defacing masks are included.

## Annotations

There are no image labels. Derivatives hold visual quality ratings (pass, warn, fail) for the structural and TSE scans,
diffusion motion and outlier estimates from MRtrix3, MRIQC metrics for fMRI and background-cleaned UNIT1 images.

## Known limitations

- Zygosity, exact age, cognition, mental health and other phenotypes are in a separate dataset that needs a signed data
  usage agreement; the open release has no zygosity labels.
- Twins are not independent observations; analyses need to account for family structure.
- T2w and FLAIR were skipped for some participants because of time limits. ASL and SWI were not quality checked.
- The MP2RAGE sequence was reissued during session 2, which changes the background noise of the uniform image.
- participants.tsv lists two participants aged 8 at session 1, while the paper gives a minimum age of 9.0.

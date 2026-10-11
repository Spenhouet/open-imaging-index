NIMF1 is the first and largest of four studies in the Moral Foundations MRI Collection (MOFOMIC), a set of task fMRI
datasets in which healthy adults judge how morally wrong short scenarios are. "NIMF" stands for Neuroimaging Moral
Foundations. NIMF1 was scanned in 2016 at the Brain Imaging Center of the University of California Santa Barbara and
was released on OpenNeuro as ds007391 under a CC0 waiver in February 2026, with a preprint describing all four studies.
The sister studies NIMF2 to NIMF4 come from UCSB, Duke University and the University of Amsterdam and are published as
separate OpenNeuro datasets.

## Composition

The release holds 64 healthy volunteers, 33 male and 31 female, aged 18 to 33 with a mean of 20.78 years. Recruitment
came from UCSB communication participant pools and the local community and aimed at balanced cells of sex by political
affiliation. Each subject has a T1-weighted scan, a T2-weighted scan and three task fMRI runs, except one subject who
lacks the third run. The participants table adds ethnicity, handedness, political affiliation and orientation, item
and subscale scores of the Moral Foundations Questionnaire and the Interpersonal Reactivity Index.

## Acquisition

All data come from one 3T Siemens Magnetom Prisma with a 64-channel head and neck coil. Anatomical scans are 0.9 mm
isotropic MPRAGE and 3D T2-weighted SPACE. Functional runs use a multiband EPI sequence with acceleration factor 8,
TR 720 ms and 2 mm isotropic voxels. During the runs, subjects rated 120 validated moral foundations vignettes on a
four-point wrongness scale. Event files hold onsets and vignette categories, and per-run behavioral files hold ratings and response times. Anatomical scans
were defaced with pydeface. Derivatives from fMRIPrep, FreeSurfer statistics and MRIQC ship with the raw data.

## Annotations

There are no manual image annotations. The labels are per-trial moral wrongness ratings and per-subject
questionnaire scores.

## Known limitations

- Single site and scanner, with a young, mostly student sample.
- Functional files still contain 11 dummy volumes, which the providers say to remove before modelling.
- One subject misses the third run, and one subject's first-run ratings are set to missing because of a keyboard fault.

This OpenNeuro dataset comes from a University of Oregon study of how ageing changes concept learning. Young and older
adults first learned two categories of cartoon animals outside the scanner, then sorted old and new animals without
feedback during fMRI. The authors fitted prototype and exemplar models to the choices and the brain signal to ask
whether older adults rely more on abstracted category centres than on memory for single examples. The first snapshot
appeared in September 2025; snapshot 1.0.3 (March 2026) adds the linked paper and is released under a CC0 waiver.

## Composition

The release holds 64 participants with one session each: 36 young adults aged 18 to 27 and 28 older adults aged 62 to
86. These are the participants retained for analysis in the paper; it reports recruiting 42 young and 40 older adults
and excluding the rest for scan problems or highly correlated model regressors. Every participant has a T1-weighted
image, a T2-weighted image, one resting-state run and four category-learning runs. The participants file gives age,
age group, sex, race and ethnicity.

## Acquisition

All scans were acquired on one Siemens MAGNETOM Skyra 3T scanner with a 32-channel head coil at the Lewis Center for
Neuroimaging. The structural scan is a 1 mm isotropic MPRAGE. The T2-weighted image is a coronal acquisition at 0.4 x
0.4 x 2 mm, angled perpendicular to the long axis of the hippocampus. Functional runs use a multiband (factor 3)
gradient-echo EPI sequence with TR 2 s, TE 25 ms and 2 mm slices. The resting-state run lasted 6 minutes with eyes
open on a fixation cross. Images were defaced.

## Annotations

There are no image annotations. Each task run has an events file with trial-level stimulus features, distance from
the prototype, old or new status, responses and reaction times. A code folder holds the behavioural model fitting
and FSL analysis scripts.

## Known limitations

- Participants are healthy and screened; there is no clinical group.
- The age distribution is bimodal, with no participants between 28 and 61.
- The paper excluded some individual task runs for correlated regressors or head motion; all runs are shared, so
  users must apply their own quality control.

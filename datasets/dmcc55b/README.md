DMCC55B is the first public release of the Dual Mechanisms of Cognitive Control (DMCC) project at Washington
University in St. Louis. The project scans each participant while they perform a battery of four established
cognitive control tasks, aiming at enough data per person to study individual differences in proactive and reactive
control. This release covers the baseline scanning session of 55 unrelated participants and is meant for individual
difference analyses and for benchmarking analysis methods. It is shared on OpenNeuro as ds003465 under a CC0 waiver.

## Composition

The 55 participants (34 female, mean age 31.7 years) were selected from a pool of 97, about two thirds of them twins, by keeping
one member per twin pair and only people with complete, good quality baseline data. Recruitment required an age of
18 to 45 and no severe mental illness or neurological trauma. Of the 55, 31 also took part in the Human Connectome
Project Young Adult study; the key that links both ID sets sits in the HCP restricted data. Each subject has one
T1-weighted and one T2-weighted scan and eight task BOLD runs: two each of AX-CPT, cued task-switching, Sternberg
working memory and Stroop. Events files with trial-level responses, cardiac and respiratory recordings, E-Prime
output, 28 questionnaire measures and fMRIPrep 1.3.2 outputs are included.

## Acquisition

All data come from one 3T Siemens Prisma with a 32-channel head coil. BOLD runs used CMRR multiband EPI with factor
4, 2.4 mm isotropic voxels and a TR of 1.2 s; each task was run once with anterior-to-posterior and once with
posterior-to-anterior phase encoding. A single-band reference precedes every run, and spin echo fieldmap pairs were
acquired. The T1-weighted and T2-weighted structural scans have 0.8 mm isotropic voxels.

## Annotations

There are no image annotations. Task events, responses and reaction times are given per run.

## Known limitations

- Baseline session only; the proactive and reactive sessions and the resting state runs are not in this release.
- The paper states that 12 participants have structural scans from a later session, used when the baseline anatomy failed
  quality review.
- Participants were chosen for data quality, which may bias motion and performance measures.
- Demographics are minimal: `participants.tsv` has age and sex for only part of the subjects.
- Physiological recordings are missing for some runs and vary in quality.

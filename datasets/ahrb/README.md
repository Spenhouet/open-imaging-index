This release holds the monetary incentive delay (MID) task scans from the neuroimaging phase of the Adolescent Health
Risk Behavior (AHRB) study, a longitudinal NICHD-funded study run by Daniel Keating at the University of Michigan.
Students from public school districts in Southeast Michigan were first surveyed in grades 10 and 12; a subsample rated
as high or average/low risk was later invited for MRI. Michael Demidenko converted the scans to BIDS and published them
on OpenNeuro in March 2024 under CC0 for a multiverse study of test-retest reliability of task fMRI (Imaging
Neuroscience 2024). The current snapshot is 1.0.3 from August 2024.

## Composition

The snapshot has 60 subjects (35 female, 25 male), each scanned in two sessions roughly a year apart (352 to 692
days). Age at the first session ranges from 17.2 to 21.4 years. The 2021 Brain and Behavior paper reports that 108
participants completed the first MRI visit, and the 2024 paper describes about 66 at the second year; only those with
both sessions appear here. participants.tsv also records self-reported race/ethnicity in four groups. Further
phenotype and behavioral data are not part of the release.

## Acquisition

All scans come from a GE Discovery MR750 3 T scanner with a 32-channel head coil, collected between 2017 and 2021.
Each session has a 3D T1-weighted SPGR scan with 1 mm slices, a 2D inplane T1-weighted scan, a pair of spin-echo EPI
fieldmaps with opposite phase encoding, and two MID runs of multiband EPI BOLD (multiband factor 6, TR 0.8 s, TE 30
ms, 2.4 mm slices, 407 volumes after calibration volumes were removed). Cardiac and respiratory recordings accompany
most runs. Derivatives include fMRIPrep 23.1.4 and MRIQC 23.1.0 outputs and per-run task performance summaries.

## Annotations

There are no image annotations. Event files give the cue type (large or small reward, large or small loss avoidance,
neutral), timing, response and outcome for each trial.

## Known limitations

- The README mentions T2w structural scans, but the raw folders hold only T1w, inplane T1, fieldmap and BOLD images.
- One session (sub-66, session 1) lacks its fieldmap, and some runs lack physiological recordings.
- The OpenNeuro snapshot summary lists a resting-state task, but no resting-state BOLD files are included.
- The age column gives age at the first session only.

HRV-ER is the shared data of a randomized clinical trial at the University of Southern California (NCT03458910) that
asked whether training people to raise their heart rate oscillations changes how the brain handles emotion. Healthy
younger and older adults practiced heart rate variability biofeedback twice a day for five weeks, either with slow
paced breathing to increase oscillations or with individual strategies to decrease them. Brain MRI was taken before
and after the training. The release on OpenNeuro is in BIDS under CC0 and is described in a data paper in Scientific
Data (2023).

## Composition

The paper reports 121 younger (18 to 35 years) and 72 older (55 to 80 years) participants, recruited between 2018 and
2020. participants.tsv lists all 193 with sex, handedness, age group and trial arm, plus flags for which measures
exist and which ones the authors recommend excluding. Image files exist for 176 participants: 176 have a
pre-intervention session and 151 a post-intervention session. Besides imaging, the dataset holds mood and anxiety
questionnaires, cognitive tests, a stress task with physiological recordings, home and lab biofeedback recordings,
wristband sleep estimates and, for a subset, plasma amyloid and tau.

## Acquisition

All scans come from one 3 T Siemens MAGNETOM Trio with a 32-channel head coil. Each session has a 1 mm MPRAGE, a
multi-echo BOLD resting-state run and an emotion regulation task run, a pCASL resting scan with an M0 image, a
high-resolution turbo spin echo scan of 11 axial slices for locus coeruleus contrast, and single-voxel MR spectroscopy
of the anterior cingulate cortex. The post session adds an ultimatum game run and BOLD and pCASL runs while
participants repeated their training. Physiological signals were recorded during scanning. MRS raw data are shared as
Siemens IMA files with a table of metabolite levels.

## Annotations

There are no image annotations. Task events, MRIQC and FreeSurfer quality metrics, and per-scan exclusion
recommendations are included.

## Known limitations

- 17 of the 193 listed participants have no image files.
- T1-weighted scans are defaced.
- 25 of the 176 imaged participants have no post-intervention session.
- The locus coeruleus turbo spin echo scans are stored with the BIDS suffix T1w (acq-lc), next to the whole-brain
  MPRAGE (acq-wholebrain).

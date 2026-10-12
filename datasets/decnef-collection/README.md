The DecNef data collection gathers the imaging data of five published decoded neurofeedback (DecNef) experiments run at
ATR in Kyoto. In DecNef, a machine learning decoder trained on a person's own fMRI patterns scores each trial in real
time, and the score is shown as a feedback disc tied to a money reward. Participants are not told which brain state is
being rewarded. The collection was released so that others can study why and how this kind of reinforcement changes
brain activity.

## Composition

The five studies targeted face preference in cingulate cortex, a colour and orientation association and fear
reduction in early visual cortex, perceptual confidence in parietal and prefrontal cortex, and reduction of common
fears in ventral temporal cortex. The release holds 67 young adults (15 women, 52 men; study mean ages between 21 and
25 years). In two studies only part of the original sample agreed to sharing (9 of 17 and 12 of 17). Each participant
has one decoder construction session and three to five neurofeedback days.

## Acquisition

All scans were acquired at 3T on Siemens Verio, Trio or Prisma systems with 12 or 20 channel head coils. Functional
runs used 33 interleaved slices at TR 2 s, 3 x 3 x 3.5 mm voxels and TE of 26 or 30 ms depending on the study. A 1 mm
isotropic MP-RAGE was acquired per participant and defaced with FreeSurfer tools after SPM bias correction. Data are
shared as NIfTI per study, with participant folders split into anatomy, per-session functional runs and a pattern
folder.

## Annotations

The pattern folder holds preprocessed trial-wise voxel patterns of the targeted region, decoder voxel weights and
coordinates, motion parameters and the feedback likelihood of each trial. A participants file gives age, sex and the
training group.

## Known limitations

- The sample is small per study, mostly male, and limited to one site.
- The studies differ in task, target region, scanner and number of training days.
- Physiological signals were not recorded.
- A 2020 G-Node record of the collection lists six datasets and 90 subjects under CC BY-NC-SA 4.0, but its download is
  disabled. The release that can be requested today is the five-study set described in the data descriptor, under ATR's
  data use terms.

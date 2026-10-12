This OpenNeuro dataset holds the neuroimaging part of a Leiden University study on how people learn the bargaining
norms of groups they do not know. Participants acted as proposers in repeated ultimatum games. In the social
condition each offer went to a responder from one of three groups, each marked only by a neutral symbol and each
with its own hidden acceptance threshold; in the non-social condition the same choices were framed without a human
partner. The study, published in PNAS in 2023, models proposers as Bayesian learners who dislike unequal splits.
Snapshot 1.0.1 (April 2023) is the current version and is released under a CC0 waiver. Behavioral data and analysis
code are kept separately on the Open Science Framework (osf.io/rkbev).

## Composition

The repository has 50 subject folders (sub-003 to sub-052). Every subject has one T1-weighted scan and BOLD runs of
the task: 49 have four runs (two social, two non-social) and one has three. The paper reports 49 fMRI participants,
35 of them female. No participants.tsv is shared, so age and sex per subject are not available, and the paper does
not report the age of the fMRI sample in the main text.

## Acquisition

All scans come from a 3 T Philips Achieva with a standard head coil at Leiden University Medical Center. Each
functional run has 400 echo-planar volumes with a TR of 2.2 s, TE of 30 ms, 38 slices and 2.75 mm voxels. A B0 field
map was recorded after each run and is included. The anatomical scan is a 3D T1-weighted image with roughly 1.2 mm
voxels.

## Annotations

There are no image labels. Events files give the trial timing of the offer task. The code folder holds the fMRIPrep
scripts used for preprocessing.

## Known limitations

- The release has one more subject folder (50) than the paper's fMRI sample (49), and the paper does not say which
  subject was excluded.
- No demographic file is included.
- Single site, single scanner and a modest sample size.

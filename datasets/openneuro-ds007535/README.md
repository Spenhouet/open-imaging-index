The human brain imaging group of the Combinatorial NeuroImaging core facility at the Leibniz Institute for
Neurobiology in Magdeburg, Germany, shares functional MRI from a language task that is meant to show which hemisphere
handles speech in a given person. The paradigm follows Bethmann et al. (Brain Research, 2007,
doi:10.1016/j.brainres.2006.11.057), which the README cites for the method; it does not say whether that paper
analysed these participants. The release is OpenNeuro ds007535 under a CC0 waiver and holds only preprocessed data.

## Composition

Snapshot 1.0.0 (March 2026) has 56 subject folders, each with one preprocessed functional run, its JSON sidecar and an
fMRIPrep confounds table. The participants table lists age, sex and handedness: 33 men and 23 women aged 18 to 39
(mean 24.5), and 52 right-handed, 3 left-handed and 1 ambidextrous participant by the Oldfield inventory. The remarks
column is empty for everyone, and the README does not state inclusion criteria or health status.

## Acquisition

In the semantic condition, two words appeared on screen and the participant decided whether they meant the same. In
the control condition, the participant judged whether two unpronounceable letter strings were identical. Nine blocks
of each condition alternated, with 24 s of rest between blocks and eight pairs of 2.5 s per block. Images were
acquired at 2 mm isotropic resolution with a repetition time of 2 s over 900 s. Preprocessing with fMRIPrep covered
head motion correction, slice timing correction and normalization to the MNI152NLin2009cAsym template; the images
are skull stripped. Scanner model and field strength are not given.

## Annotations

A shared events file gives the onset and duration of the task blocks. There are no image annotations.

## Known limitations

- Only normalized, preprocessed functional images are public. Raw functional data, T1- and T2-weighted anatomical
  scans and DTI exist but are available only on request from the authors.
- The README names fMRIPrep 25.1.3 while dataset_description.json names 25.2.1.
- Scanner, field strength and echo time are not documented.

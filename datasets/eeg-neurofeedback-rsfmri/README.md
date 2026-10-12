This OpenNeuro release holds brain MRI from a randomized, blinded study of a single session of infra-low frequency EEG neurofeedback in healthy adults. Each volunteer was scanned at rest, then received 30 minutes of either real or sham neurofeedback outside the scanner with a bipolar T4-P4 electrode montage, and was scanned again straight afterwards. The authors used the pre and post scans to test whether one session changes intrinsic functional connectivity. The study ran in Moscow, and the data are shared in BIDS under CC0.

## Composition

The release has 52 participants, 26 in the neurofeedback group and 26 in the sham group. The paper enrolled 53 and excluded one neurofeedback participant for head motion. Inclusion required right-handedness, an age of 18 to 44 and no neurological or psychiatric history; most were students or graduates of Moscow universities. participants.tsv lists 22 men and 30 women, with age recorded for 42 of them (18 to 44 years). Every subject has two sessions, before and after the EEG session, each with one T1-weighted image and one resting-state BOLD run, for 208 NIfTI volumes in total.

## Acquisition

All scans were made on a GE Discovery MR750 at 3 T with a 16-channel head, neck and spine coil at the Federal Center of Treatment and Rehabilitation. The T1-weighted image is a sagittal 3D FSPGR with 1 mm slices. The resting-state run lasted about 10 minutes with eyes closed, using gradient-echo EPI with 3 mm isotropic voxels, 42 slices, TR 2 s, TE 30 ms and flip angle 77 degrees; the scanner discarded four initial volumes.

## Known limitations

- The EEG neurofeedback recordings are not part of the release; only MRI is shared.
- Group assignment (real or sham) is given in participants.tsv, but no clinical or behavioural scores are included.
- Age is missing for 10 participants.
- The cohort is small and young, and all participants are healthy.

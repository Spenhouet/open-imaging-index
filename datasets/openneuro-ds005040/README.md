This dataset holds the MRI data of a University of Chicago study by Michael S. Cohen, Qiongwen (Jovie) Cao and Jean
Decety that combined two fMRI tasks in one scan session. In the political moralization task, participants picked which
of two protest causes they supported more. In the clip task, they watched short ISIS propaganda videos of two kinds,
Heroic and Social, and later rated how well each video would help the group recruit. A preprint on the clip task
relates intersubject correlations in reward and mentalizing regions to rated persuasiveness. The data were released on
OpenNeuro in March 2024; snapshot 1.2.0 from December 2024 updated the README.

## Composition

According to the preprint, 49 people from the university and the surrounding community completed the study. The
release has 50 subject folders, because one participant is split into sub-023 (political moralization runs) and
sub-023part2 (clip runs). Each participant has a T1-weighted scan, five political moralization runs, four clip runs and
a pair of reversed phase-encoding EPI fieldmaps. The preprint describes 46 analysed participants: 27 female, 18 male and
1 non-binary, aged 18 to 48. Two were excluded for head motion and one for a medication exclusion criterion. The
release has no participants.tsv, so age and sex are not available per subject. fMRIPrep outputs are included as
derivatives.

## Acquisition

All scans come from one Philips Achieva dStream at 3 T at the University of Chicago MRI Research Center. The T1-weighted
image is a 3D turbo field echo scan with 0.85 mm isotropic voxels (TR 8 ms, TE 3.5 ms, flip angle 8 degrees).
Functional runs are echo-planar BOLD with TR 2 s, TE 28 ms, flip angle 80 degrees and 40 slices of 3 mm with a 0.3 mm
gap. Per the preprint, clip runs of the first 10 participants were shorter (63 instead of 74 volumes) because of a
different timing setup.

## Annotations

There are no image annotations, and the snapshot has no events files for either task.

## Known limitations

- Without events files, the task runs cannot be modelled from the release alone.
- Sex and age are only reported in aggregate for the 46 analysed participants, not for the 3 excluded ones.
- The README defers documentation of the political moralization task until its paper is submitted.

This dataset contains the MRI data behind a registered report by Celia Goffin, H. Moriah Sokolowski, Michael Slipenkyj
and Daniel Ansari on whether writing hand relates to where the brain processes number symbols. Right-handed and
left-handed adults watched a stream of Arabic digits in an fMRI adaptation design: one digit repeated, and now and then
a different digit appeared. The paper reports the known left-lateralized effect in the intraparietal sulcus for
right-handers, weak signs of the reverse pattern in left-handers, and no significant difference between the groups. The
data were released on OpenNeuro in April 2019; snapshot 1.0.1 added the DOI.

## Composition

The snapshot holds 53 subjects aged 18 to 35 (26 female, 27 male), one of whom has no recorded age. By the group
column of participants.tsv, 25 are right-handed (IDs 1 to 27) and 28 are left-handed (IDs 101 to 128). The
participants file also records handedness from the Edinburgh inventory and from a performance measure, eligibility on a
neurological questionnaire, and which runs and subjects entered the published analyses. Each subject has a single
session with one T1-weighted scan and four functional runs, except sub-12, which has three.

## Acquisition

All scans come from one Siemens Prisma fit at 3 T at the Robarts Research Institute in London, Ontario, with a 32-channel
head coil. The T1-weighted scan is a sagittal 3D MP-RAGE (TR 2.3 s, TE 2.98 ms, TI 0.9 s, flip angle 9 degrees, 1 mm
slices). The functional runs use a multiband echo-planar BOLD sequence (multiband factor 4, TR 1 s, TE 30 ms, flip
angle 40 degrees, 2.5 mm slices).

## Annotations

There are no image annotations. Events files give the onset, duration and condition of each trial (deviant digit,
catch or null trial); three subjects have no events files.

## Known limitations

- participants.tsv lists 55 participants, but sub-3 and sub-6 have no imaging data in the release.
- Three released subjects were excluded from the published analyses, and some runs of included subjects were dropped;
  the reasons are not given in the dataset.
- One subject in the left-handed group is right-handed by the Edinburgh inventory.
- The dataset has no README, and the "CCO" license string in dataset_description.json is read as CC0.

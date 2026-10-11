This OpenNeuro dataset is one of the task fMRI releases of SKIP (SoCal Kinesia and Incentivization for Parkinson's
Disease), a project at the University of California, Santa Barbara on how incentives shape movement. Participants made
fast, precise reaches to spatial targets while monetary stakes changed between trials. Most trials were standard; about
one in five carried a high incentive, framed either as winning a large reward (jackpot) or as avoiding a large loss
(robber), so the design contrasts positive and negative incentive valence. The first snapshot appeared in June 2024,
and snapshot 1.0.1 (May 2026) replaced the anatomical images. The data are released under a CC0 waiver.

## Composition

The release holds 68 right-handed healthy young adults aged 18 to 26: 49 women and 19 men in participants.tsv (the
preprint reports 50 and 18). All 68 have a T1-weighted image, and 67 have three runs of the reaching task with event
files. One participant has event files but no functional images. Although the project targets Parkinson's disease,
this version contains no patients; the README says patient data and further assays will follow.

## Acquisition

All scans come from one Siemens Prisma 3T scanner with a 64-channel head and neck coil at the UCSB Brain Imaging
Center. The structural image is an MPRAGE with about 0.94 mm voxels. Task runs use multiband echo-planar imaging at
2.5 mm isotropic resolution with a TR of 1.9 s. Gradient-echo field maps (magnitude and phase difference) are included
for distortion correction. Images are stored as uncompressed NIfTI in BIDS.

## Annotations

There are no image annotations. Each run has an events file with trial timing and condition labels.

## Known limitations

- Healthy controls only, mostly students in a narrow age band, with about three women for every man.
- For two participants the T1-weighted image sits in a nested anat/anat folder, and a third has a duplicate copy there.
- Sex counts in participants.tsv differ by one from the preprint.
- The linked paper is a preprint at the time of checking.

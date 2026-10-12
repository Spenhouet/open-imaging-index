This OpenNeuro dataset is one of the task fMRI releases of SKIP (SoCal Kinesia and Incentivization for Parkinson's
Disease), a project at the University of California, Santa Barbara that studies movement and how incentives modulate
it. In this approach-avoid task, participants saw pictures with positive or negative valence and had to pull a joystick
toward themselves (approach) or push it away (avoid) within a time limit. Crossing picture valence with movement
direction gives congruent trials (positive-approach, negative-avoid) and incongruent ones. Snapshot 1.0.0 appeared on
20 June 2024 under a CC0 waiver. Sibling releases from the same project are
[SKIP: Incentivized Reaching](../skip-incentivized-reaching/) and [SKIP Active Escape](../openneuro-ds005266/).

## Composition

The release holds 78 right-handed healthy young adults, 58 women and 20 men by participants.tsv, aged 18 to 26 (one
age is missing). Every participant has one T1-weighted image and the approach-avoid task in eight runs, except one
participant with seven runs. Although the project targets Parkinson's disease, this version has healthy controls only;
the README says patient data and further measures such as cardiac-autonomic and pupillometry recordings will follow.

## Acquisition

All images come from a Siemens Prisma fit 3T scanner with a 64-channel head and neck coil at the UCSB Brain Imaging
Center. The structural image is an MPRAGE with 0.94 mm slices. Task runs use echo-planar imaging with 2.5 mm slices, a
TR of 1.9 s, a TE of 30 ms and multiband factor 2. Images are stored as compressed NIfTI in BIDS without field maps.

## Annotations

There are no image annotations. Each run has an events file with trial timing and conditions.

## Known limitations

- Healthy controls only, in a narrow young age band, with about three women for every man.
- No field maps are included, so distortion correction has to rely on other methods.
- The README header names version 1.0.1, but OpenNeuro lists only snapshot 1.0.0.
- The cited paper is a bioRxiv preprint that the dataset names for citation; it was not checked for task-specific
  numbers.

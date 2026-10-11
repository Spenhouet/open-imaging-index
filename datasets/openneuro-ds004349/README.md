This OpenNeuro release holds the raw MRI from a University of Oregon study on background connectivity, meaning
functional connectivity estimated from task fMRI after the task-evoked signal has been removed. Participants first
lay at rest and then passively watched blended face images in a slow event-related design. The authors compared two
ways of removing task activity, low-pass filtering and residuals of a finite impulse response model, against the
resting-state scan and found that both kept the known network structure and individual connectivity profiles, with
the residual method closer to rest. The data are shared under CC0, with funding from the National Institute of
Neurological Disorders and Stroke.

## Composition

The participants file lists 62 young adults who were scanned, of whom 57 have a subject folder. Their self-reported
gender is 34 female, 22 male and 1 other, and their ages run from 18 to 28. Fifty-six subjects have a T1-weighted
and a T2-weighted image, one resting-state run and four face-viewing runs with event files; sub-16 has the two
structural images only. The participants file marks which subjects entered the published analysis and gives the
reason for each exclusion, such as falling asleep.

## Acquisition

Scanning took place on one Siemens Skyra 3T with a 32-channel head coil at the Lewis Center for Neuroimaging in
Eugene, Oregon. Functional runs used multiband echo-planar imaging with 2 mm isotropic voxels (TR 2 s, TE 25 ms,
multiband factor 3). The resting-state run lasts 8 minutes with eyes open, and each face-viewing run lasts about
3.7 minutes with one face every 12 seconds. Structural scans are a 1 mm MPRAGE and a coronal T2-weighted turbo spin
echo image with 0.4 x 0.4 x 2 mm voxels, angled perpendicular to the hippocampus.

## Annotations

There are no image annotations. Event files give stimulus onsets and the faces blended in each trial.

## Known limitations

- Five subjects in the participants file, all marked as included in the analysis, have no imaging data in
  the release, so the shared set does not match the 56 analysed participants exactly.
- An unscanned category-learning task took place between the second and third viewing runs, so later runs follow
  learning.
- No field maps are included, and the sample is small and limited to young adults.

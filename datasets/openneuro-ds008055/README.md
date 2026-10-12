Simone Luchini, Roger Beaty and colleagues at Pennsylvania State University scanned adults while they generated
scientific hypotheses, produced diverse ideas and completed verbal creativity tasks, alongside a resting-state run.
The project released a defaced BIDS copy on OpenNeuro as ds008055 under a CC0 waiver, with an earlier source copy on
OSF. Three journal articles on scientific creativity, category switching in creative association and task complexity
draw on these scans.

## Composition

Snapshot 1.0.4 (June 2026) holds 108 participants, each with one T1-weighted anatomical scan, one resting-state fMRI
run and a pair of spin-echo field maps with opposite phase-encoding directions. Task fMRI covers subsets of the
sample: the Scientific Creativity Task (hypothesis generation against a matched control condition) for 54 people with
two runs each, the Idea Diversity task for 25 people with six runs each, and the Taxonomy of Verbal Creativity task
for 35 people with two runs each. The 35 verbal creativity participants all also did the scientific task, as did
19 of the Idea Diversity participants, while 48 people have only the resting-state run. Most functional runs come with a single-band reference image. The release has no
participants table, so age and sex are not available.

## Acquisition

All scans were acquired on a 3T Siemens Prisma Fit at the Penn State imaging center (SLEIC in the sidecars). The
T1-weighted images are sagittal MPRAGE with 1 mm isotropic voxels. The functional runs use a multiband factor of 5
with a TR of 0.9 s and 2.4 mm slices. Faces were removed from the T1-weighted images with pydeface.

## Annotations

There are no image annotations. Event files with trial timing accompany most task runs.

## Known limitations

- Event timing is missing for some runs: only 19 of the 25 Idea Diversity participants and 107 of 108 Scientific
  Creativity runs have event files, because source timing tables were unavailable.
- No demographics or behavioural creativity scores are included in the release.
- No participant has all three tasks, and 48 participants have resting-state fMRI only.

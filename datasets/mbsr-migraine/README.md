This OpenNeuro dataset holds the MRI data of a randomized clinical trial at the University of Maryland Baltimore and
Johns Hopkins that tested an enhanced form of mindfulness-based stress reduction (MBSR+) against stress management
for headache (SMH) in adults with episodic migraine. Patients were recruited from 2014 to 2017. The trial reported fewer headache days
with MBSR+ at 20 weeks, but no group difference in its primary MRI outcomes. David Seminowicz and colleagues released
the images in March 2024 as ds005016 under CC0; the current snapshot is 1.1.3 from September 2025.

## Composition

The release has 147 participants: 112 patients with episodic migraine and 35 matched healthy controls, separated by
participant number. The trial paper randomized 98 patients (50 MBSR+, 48 SMH), so the release also contains patients
outside the randomized sample. The participants table lists sex (128 female, 18 male, one missing) and the
treatment arm, which is filled for 90 patients and empty for the rest. Age is not included. Each person has up to
three sessions; 93 have all three. A session holds a T1-weighted scan, a resting-state fMRI run, up to two runs of
fMRI during painful heat on the forearm, up to two runs of the multi-source interference task (MSIT) and, for 145
people, a diffusion scan.

## Acquisition

Sessions took place at baseline, week 10 and week 20. Scans ran on a Siemens Tim Trio 3 T with a 32-channel head
coil until March 2017 and on a Siemens Prisma Fit 3 T with a 64-channel coil afterwards. The T1-weighted image is a 1
mm isotropic MPRAGE. Resting-state fMRI lasted 10 minutes with TR 2 s and 3.4 x 3.4 x 4 mm voxels; the pain and MSIT
runs used TR 2.5 s and 3 mm isotropic voxels. The paper also mentions a resting arterial spin labeling scan, which
is not part of the release.

## Annotations

There are no image annotations.

## Known limitations

- Not every participant completed every session or every run, as the dataset README states.
- The scanner change in 2017 affects the last trial cohort, which has scans on both systems.
- Clinical outcomes such as headache days are not part of the release.
- The trial paper excluded several subjects from its MRI analyses for missing sessions, motion or an incidental
  brain lesion, so not every released scan is of analysis quality.

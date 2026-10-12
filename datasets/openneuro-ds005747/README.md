This OpenNeuro dataset holds ultra-high field brain MRI from healthy young adults, recorded at 7 tesla to trace the
network of cortical and brainstem regions that help the brain regulate and sense the body (allostasis and
interoception). A team from Northeastern University and the Martinos Center at Massachusetts General Hospital
shared it under CC0 in four snapshots between December 2024 and April 2025. The analysis appeared in Nature
Neuroscience in 2025.

## Composition

90 adults (40 women, 50 men) aged 18 to 40, mean age 26.9, all native English speakers without a history of
neurological or psychiatric illness. Of 140 people recruited, 50 were left out after withdrawal, incomplete scans,
sequence errors or corrupted data. Each subject has one T1-weighted image and three resting-state BOLD runs of 10 minutes with eyes
open. A derivatives folder adds one preprocessed BOLD series per subject in MNI305 space, with the three runs joined.
participants.tsv gives age, sex, race and Hispanic or Latino ethnicity.

## Acquisition

All scans come from a Siemens 7 T system at the MGH Martinos Center in Charlestown, Massachusetts, with a
32-channel head coil. The structural image is an inversion-recovery EPI at 1.1 mm isotropic resolution. The
resting-state runs use a multiband (factor 3) gradient-echo EPI with FLEET autocalibration, 1.1 mm isotropic voxels,
TR 2.34 s and TE 28 ms. The same sessions also included three diffusion-weighted scans and other tasks, which are
not part of this release.

## Known limitations

- Only resting-state fMRI and one structural image per subject are shared; diffusion and task data from the same
  sessions are not.
- The structural image is an inversion-recovery EPI (1.1 mm), not a standard MPRAGE.
- Preprocessed data are a single concatenated series per subject in volume space; the preprocessing steps are
  described in the paper rather than in the dataset.
- The sample is young, healthy and recruited at one site.

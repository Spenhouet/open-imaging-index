MICA-MICs is an openly shared 3T brain MRI dataset of healthy adults from the Multimodal Imaging and Connectome Analysis
Lab at the Montreal Neurological Institute, McGill University. It was built to support research on how the human brain
is organized across spatial scales, by pairing a myelin-sensitive quantitative T1 scan with diffusion and resting-state
functional imaging in the same people. Besides the raw BIDS images it ships processed connectivity matrices and
connectivity gradients from the micapipe pipeline. It is hosted on the Canadian Open Neuroscience Platform (CONP) and
on OSF under a CC0 waiver, and is described in a 2022 Scientific Data paper.

## Composition

The release covers 50 healthy volunteers (23 women, 27 men) with a mean age of 29.5 years (SD 5.6); 47 are
right-handed. Each person had one session with two T1-weighted MP-RAGE runs (one subject has only one), an MP2RAGE
acquisition stored as two inversion images, a synthetic uniform image and a T1 map, three diffusion shells with a
reverse phase-encoded b0, and one resting-state fMRI run with a pair of spin-echo images for distortion correction.
Derivatives include structural, functional, microstructural profile covariance and geodesic distance matrices in 18
parcellations, group and subject-level gradients, and MRIQC reports. Age is shared in 5-year bands and sex as F or M.

## Acquisition

All scans were acquired between April 2018 and February 2021 on one Siemens Magnetom Prisma-Fit at 3T with a 64-channel
head coil, in about 45 minutes. T1-weighted images are 0.8 mm isotropic, the MP2RAGE is 0.8 mm isotropic, diffusion is
1.6 mm isotropic with b-values of 300, 700 and 2000 s/mm² (10, 40 and 90 directions), and resting-state fMRI is a
multiband EPI at 3 mm isotropic with a 600 ms repetition time. Faces were removed by masking.

## Annotations

There are no manual labels. Automated surface reconstructions, parcellations and connectomes come from micapipe.

## Known limitations

The sample is small, young and from a single scanner and site, so it does not cover ageing or disease. Only one
resting-state run of about 7 minutes is available per person, and the first four subjects have 800 instead of 700
timepoints. Age is coarsened to 5-year bands.

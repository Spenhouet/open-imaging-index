fastMRI is a joint project of NYU Langone Health and Facebook AI Research (now Meta AI) that released one of the first
large collections of raw MRI scanner data. It was built to train and compare machine-learning methods that reconstruct
images from undersampled k-space, so that MRI exams can be made faster, and it powered the fastMRI reconstruction
challenges.

## Composition

The knee part holds fully sampled multi-coil k-space from 1,594 clinical knee scans, each a coronal proton-density
volume with or without fat suppression, plus an emulated single-coil version. It is split into 973 training, 199
validation and 118 multi-coil test volumes, with further single-coil test and held-back challenge volumes; test and
challenge volumes come undersampled and without ground truth. A separate DICOM collection adds 10,012 consecutive
clinical knee exams from 9,290 patients with up to five standard sequences (coronal PD with and without fat
suppression, sagittal PD, sagittal and axial fat-suppressed T2). The brain part holds raw k-space for 6,970 axial
scans: T1-weighted with and without contrast agent, T2-weighted and FLAIR. Not every brain exam has every contrast.
Prostate and breast sets released later are not covered here.

## Acquisition

All raw data come from Siemens scanners at NYU: for the knee three 3 T systems (Skyra, Prisma, Biograph mMR) and a
1.5 T Aera with a 15-channel knee coil and a clinical 2D turbo spin echo protocol; for the brain 11 magnets at five
locations, at 1.5 T (Avanto, Aera) and 3 T (Prisma, Skyra, Biograph, Tim Trio). Raw data were converted to the
vendor-neutral ISMRMRD format and shipped as one HDF5 file per volume. The DICOM images come from a wider range of
scanners and are mostly reconstructions of accelerated acquisitions.

## Annotations

No clinical labels are included. The reconstruction targets are root-sum-of-squares images of the fully sampled data.

## Known limitations

- Brain k-space slices near and below the orbits were zeroed for de-identification, and only axial 2D brain data were
  released.
- All raw data come from one vendor and one health system.
- No age, sex or diagnosis information is published for the cohort.
- Counts differ slightly between the paper and the website (for example 6,970 vs 7,002 brain scans).

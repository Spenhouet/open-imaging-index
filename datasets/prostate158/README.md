Prostate158 is a public benchmark for segmenting prostate anatomy and suspected cancer on biparametric MRI. Radiologists
at Charité - Universitätsmedizin Berlin assembled it together with collaborators from Radboud University Medical
Center, and released it with baseline U-Net models and training code.

## Composition

The collection holds 158 examinations of men with suspected prostate cancer: 139 for training and 19 for testing.
Cancer was confirmed by histology in 102 patients (83 training, 19 test); the other 56 served as controls. Every case
has an axial T2-weighted image, a high b-value diffusion image and an ADC map. The data descriptor reports a mean age
of 69 years (SD 9, range 35 to 84), PI-RADS 4 in 55 and PI-RADS 5 in 47 patients, and Gleason grade groups 1 to 5
in 11, 37, 24, 21 and 9 patients. The training archive ships `train.csv` and `valid.csv` that split it further.

## Acquisition

Patients were scanned between February 2016 and January 2020 on two Siemens 3 T systems (VIDA and Skyra) with a
protocol following PI-RADS v2.1. T2w images have 3 mm slices with 0.47 mm in-plane resolution. DWI used b-values up
to 1000 s/mm², and the scanner software computed the ADC map. Only the b = 1000 image was kept. All sequences were
resampled onto the T2w grid, center-cropped by removing 25% of the margins, N4-corrected (T2w) and stored as NIfTI.

## Annotations

Segmentations were drawn in ITK-SNAP. One board-certified radiologist outlined the central gland and peripheral zone
on T2w, and a second reviewed them. Both readers independently segmented PI-RADS 4 and 5 lesions on the ADC map,
adjusted against T2w and DWI. Reader 1 also segmented lesions on T2w. The test cases carry anatomy and lesion
labels from both readers.

## Known limitations

- Single center, single vendor and one field strength.
- The data descriptor states an inclusion age over 50, yet reports a minimum age of 35.
- Lesions below PI-RADS 4 are not segmented.
- Resampling and cropping discard the original resolution of the DWI and ADC series.
- The challenge page describes the test set as hidden, while a Zenodo record now offers it for download.

PROSTATEx is a retrospective collection of multiparametric prostate MRI from Radboud University Medical Center in
Nijmegen, the Netherlands, curated for computer-aided diagnosis research and hosted by The Cancer Imaging
Archive. It was the data of two challenges: PROSTATEx (SPIE Medical Imaging 2017), which asked whether a marked lesion
is clinically significant cancer, and PROSTATEx-2 (AAPM 2017), which asked for the Gleason Grade Group of a lesion.
TCIA marks the collection as superseded by PI-CAI, whose public training set contains all PROSTATEx cases.

## Composition

The collection holds 346 subjects with 349 studies, 18,321 DICOM series and 309,251 images, about 16.7 GB in total.
The PROSTATEx challenge split 204 subjects into a training cohort and 140 into a test cohort. The PROSTATEx-2 subset
has 112 training and 70 test findings. Besides the DICOM images, each case has a Ktrans map in MetaImage format,
derived from the DCE series, plus thumbnails of the marked lesions. In the findings tables, the training cohort lists
330 findings, 76 of them clinically significant, and the test reference standard lists 208 findings, 48 of them
clinically significant.

## Acquisition

All studies include T2-weighted turbo spin echo images (about 0.5 mm in plane, 3.6 mm slices), a proton density
weighted image, a 3D turbo FLASH DCE series (about 1.5 mm in plane, 4 mm slices, 3.5 s temporal resolution) and
single-shot echo planar DWI with b-values 50, 400 and 800 in three directions, with an ADC map from the scanner
software. Two Siemens 3T scanners were used, the MAGNETOM Trio and the Skyra, without an endorectal coil.

## Annotations

Each finding is given as a point in scanner coordinates with its prostate zone. For PROSTATEx, a finding is
clinically significant when the biopsy Gleason score was 7 or higher; PI-RADS 2 findings were not biopsied and count
as not significant. PROSTATEx-2 labels each finding with its Gleason Grade Group. There are no voxel segmentations in
the collection itself.

## Known limitations

- All data come from one center and one vendor.
- Labels are lesion points, not outlines, and unbiopsied PI-RADS 2 findings are assumed benign.
- No age or other clinical variables are released.

BraTS 2021 was the tenth edition of the Brain Tumor Segmentation challenge and the first organized jointly by
RSNA, ASNR and MICCAI. It grew the benchmark from 660 cases in 2020 to 2,040 adult glioma patients and added a
second task: predicting MGMT promoter methylation from imaging. Its training and validation data were later reused
unchanged in BraTS 2022 and as the BraTS 2023 Adult Glioma set.

## Composition

Every case has four structural MRI volumes acquired before surgery: native T1, gadolinium-enhanced T1, T2 and
T2-FLAIR. The challenge split the 2,040 patients into 1,251 training, 219 validation and 570 test cases. Labels
were released for training cases only; the test set stays hidden. Inclusion required a pathologically confirmed
diagnosis and a known MGMT status. TCIA hosts 1,480 of the subjects (training and validation of both tasks) together
with a crosswalk to the source TCIA collections.

## Acquisition

Scans are routine clinical exams from many institutions in North America, Europe and India, with different scanners
and protocols, so image quality varies widely. Part of the cohort comes from TCIA collections (TCGA-GBM, TCGA-LGG,
IvyGAP, CPTAC-GBM, ACRIN-FMISO-Brain); the rest from institutional contributions. For the segmentation task all
volumes were converted to NIfTI, registered to the SRI24 template, resampled to 1 mm isotropic and skull-stripped.
For the classification task, skull-stripped volumes were mapped back to patient space and saved as DICOM.

## Annotations

Initial segmentations came from a STAPLE fusion of earlier top BraTS methods (nnU-Net, DeepScan, DeepMedic). Volunteer
neuroradiologists refined them in ITK-SNAP, and senior board-certified neuroradiologists approved them, returning
cases for correction where needed. Labels mark necrotic core (1), edema/infiltrated tissue (2) and enhancing tumor
(4). MGMT status is a binary label from laboratory assays of the resected tissue.

## Known limitations

- Each case was refined by a single annotator, so inter-rater agreement cannot be measured.
- MGMT status was measured with different assays and thresholds at each site and is only given as binary.
- Other abnormalities, such as white matter hyperintensities, were not labelled.
- Age, sex and scanner details are not published per case.
- The same images carry CC BY 4.0 on TCIA but CC BY-NC terms on Synapse; check which copy you use.

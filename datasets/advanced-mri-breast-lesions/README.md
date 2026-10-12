Advanced-MRI-Breast-Lesions (AMBL) is a TCIA collection of breast MRI from a single institution, gathered
retrospectively to support deep learning work on telling malignant from benign breast lesions. Besides the standard
clinical protocol it contains late post-contrast images and treatment response assessment maps (TRAMs), which the
contributing group uses to improve diagnostic specificity. Version 1 was released in February 2024 and version 2 in
April 2024, both under CC BY 4.0.

## Composition

The collection holds 632 imaging sessions from 632 women, with 6,811 DICOM series and about 1.26 million images
(645.62 GB). Ages in the open metadata digest range from 19 to 86 years (median 52). A clinical spreadsheet covers 200
patients with age, lesion position, malignant or benign outcome, pathology, grade, receptor status and Ki-67 where
applicable.

BreastDCEDL_AMBL (Fridman and Goldstein, 2025) is a NIfTI repackaging of 88 AMBL patients that have all five DCE time
points and lesion masks. It reports 133 lesions (89 benign, 44 malignant) and gives each patient one mask with every
lesion and one with malignant lesions only, plus train, validation and test splits. It adds no new images or
annotations. The Zenodo record lists 132 lesions (78 malignant, 54 benign), which disagrees with the paper.

## Acquisition

All sessions were acquired on a 1.5 T GE Signa HDxt between 2018 and 2021. The protocol has an axial T1-weighted DCE
series with one pre-contrast and four post-contrast time points, axial T2-weighted FSE and sagittal T2 with and without
fat suppression. Delayed T1-weighted images were taken 20 to 28 minutes after contrast. TRAMs subtract the 5-minute
from the roughly 22-minute post-contrast image. Registered copies of the series are included.

## Annotations

A radiologist with 23 years of experience outlined every enhancing or suspicious region named in the radiology
report. The outlines were then restricted to pixels above an intensity of 75 in the first or second subtraction image.
The metadata digest lists DICOM SEG objects for 99 patients.

## Known limitations

- Single site and single scanner model.
- Clinical and pathology data exist for 200 of the 632 patients only.
- The collection page lists breast cancer as the cancer type, but the cohort also includes patients whose lesions are benign.

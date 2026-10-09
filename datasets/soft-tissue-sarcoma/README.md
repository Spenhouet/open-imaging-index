Soft-tissue-Sarcoma is a radiomics collection from McGill University, published by The Cancer Imaging Archive in 2015
together with the study by Vallières and colleagues in Physics in Medicine and Biology. It pairs pre-treatment FDG
PET/CT and MRI of patients with soft-tissue sarcoma of the arms and legs with manual tumor contours and follow-up data,
and was assembled to test whether texture features from fused PET and MRI predict which patients later develop lung
metastases.

## Composition

The Data Access table lists 51 subjects, 102 studies, 612 DICOM series and 38,283 images (9.87 GB). Every patient has
one PET/CT study and one MR study. The cohort was imaged between November 2004 and November 2011, before treatment,
and patients who already had metastatic or recurrent disease at presentation were excluded. Nineteen patients
developed lung metastases during follow-up. In the open clinical spreadsheet, the thigh is the most frequent primary
site (28 patients), the most frequent histology groups are malignant fibrous histiocytoma (17), liposarcoma (11) and
leiomyosarcoma (10), and 28 tumors are high grade. It also
records treatment, outcome and follow-up times.

## Acquisition

All PET/CT scans come from one GE Discovery ST at the McGill University Health Centre, acquired about an hour after
FDG injection. MRI was clinical routine with protocols that
varied between patients: 12 exams were done at the same centre and 39 elsewhere, on GE, Philips and Siemens scanners.
Each patient has an axial T1-weighted series and one fat-suppressed fluid-sensitive series, either T2-weighted fat
saturated (26 patients) or STIR (25 patients). Copies of both MR series registered and resampled to the PET grid are
included.

## Annotations

A radiation oncologist drew 3D tumor contours slice by slice on the fat-suppressed MR series. For the 32 patients with
visible edema there are two contours, one for the mass alone and one that includes the edema. The contours were
transferred to the PET, CT and T1-weighted series by rigid registration and are stored as RTSTRUCT objects for every
series. The binary lung metastasis label is given per patient.

## Known limitations

- Small single-centre cohort with 19 positive cases for the main outcome.
- MRI protocols, planes and scanners are not uniform, and the T2-weighted and STIR series are pooled as one category.
- Dates in the images were shifted for de-identification.
- Contours on PET, CT and T1-weighted images are propagated by registration, not drawn on those images.

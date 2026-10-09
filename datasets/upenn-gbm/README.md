UPENN-GBM is a single-center collection of brain MRI from 630 adults with newly diagnosed (de novo) glioblastoma,
treated at the University of Pennsylvania Health System between 2006 and 2018. It was assembled by the Penn imaging
group behind CaPTk and BraTS and is hosted by The Cancer Imaging Archive. Besides the scans it ships clinical,
molecular and radiomic tables, which makes it a common source for tumor segmentation, survival prediction and
radiogenomic studies.

## Composition

There are 671 scan sessions: 611 pre-operative baseline sessions and 60 sessions acquired before a second resection
for suspected progression. For 19 of those 60 patients only the follow-up session is included. Every session has
native T1, contrast-enhanced T1, T2 and FLAIR; 592 sessions also have DTI and 534 have DSC perfusion. Patients are
60% male and aged 18 to 89. The clinical table gives sex, age, overall survival (452 patients), extent of resection,
IDH1 status (16 mutated, 499 wildtype, 96 not otherwise specified among baseline cases), MGMT promoter methylation
(317 baseline cases) and, for follow-up cases, a pathology score of tumor progression versus treatment effect.
Version 2 added 71 H&E whole-slide images from 34 patients, with a mapping to the radiology IDs.

## Acquisition

Scans come from routine clinical exams, mostly on Siemens 3 T systems; a minority were acquired at 1.5 T and eight
sessions on GE scanners. The original DICOM series are defaced. A NIfTI release is also provided in which all
structural scans are rigidly registered to the SRI atlas, resampled to 1 mm isotropic voxels and skull-stripped,
together with DTI maps (trace, axial and radial diffusivity, fractional anisotropy) and DSC maps (peak height,
percentage signal recovery, an rCBV proxy).

## Annotations

Enhancing tumor, necrotic core and peritumoral edema were segmented on every baseline session by fusing three
BraTS-ranked networks with STAPLE. For 232 subjects the labels were reviewed and corrected by two experts. CaPTk
radiomic features (145 per sub-region and sequence) are provided for the baseline sessions.

## Known limitations

- Single institution and mostly one scanner vendor, so external validity is limited.
- Most segmentations are automatic and unreviewed; only 232 were manually corrected.
- MGMT and IDH status are missing for many patients and were not re-validated beyond the medical records.
- The NIfTI images are in atlas space and do not align with the DICOM images.

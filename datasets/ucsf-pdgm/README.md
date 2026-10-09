UCSF-PDGM is a single-center collection of preoperative brain MRI from patients with diffuse gliomas, released by
the Center for Intelligent Imaging at UCSF and hosted by The Cancer Imaging Archive. Unlike most public glioma sets,
which stop at four structural contrasts acquired on mixed scanners, every exam here follows one standardized 3 T
protocol and adds susceptibility, perfusion and multi-direction diffusion imaging. It is used for tumor
segmentation, prediction of molecular markers from imaging and survival modeling.

## Composition

The release holds 501 exams of 495 patients. Six exam IDs turned out to be repeat scans of other patients taken 1
to 175 days later; version 3 renamed them with a `_FU` suffix. Patients had histologically confirmed WHO grade 2 to 4
diffuse gliomas, imaged before their first resection between 2015 and 2021, with no prior tumor treatment other
than biopsy. By the WHO 2021 diagnosis in the clinical table, 368 patients have IDH-wildtype glioblastoma. The table
also lists sex, age at MRI, grade, IDH, MGMT and 1p/19q status, extent of resection, survival status and overall
survival in days, plus the matching BraTS 2021 ID where a case was part of that challenge.

## Acquisition

All scans come from one GE Discovery 750 3 T scanner with an 8-channel head coil. The protocol covers 3D T2, FLAIR,
pre- and post-contrast T1, SWI, DWI, 3D ASL perfusion and 2D HARDI with 55 directions. HARDI data were eddy-current
corrected and fitted with FSL to give mean, axial and radial diffusivity and fractional anisotropy maps. Every
contrast was non-linearly registered to the 1 mm isotropic FLAIR space, skull-stripped with a deep-learning tool and
shared as NIfTI. No DICOM data are released.

## Annotations

Tumor segmentations were made within BraTS 2021: an ensemble of earlier challenge models produced a draft, which
trained radiologists corrected and two expert reviewers approved. Labels separate enhancing tumor, non-enhancing or
necrotic core and the surrounding FLAIR abnormality.

## Known limitations

- One center and one scanner, so models trained on it may not transfer to other sites.
- Only preprocessed, co-registered images are provided; the raw acquisitions are not available.
- MGMT status is missing for most lower-grade tumors, and 1p/19q status is often unknown.
- Race and ethnicity were not available to the creators.
- The 2021 preprint counts 500 patients and the release first listed 501; the follow-up duplicates were found later.

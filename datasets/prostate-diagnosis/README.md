PROSTATE-DIAGNOSIS is a collection of diagnostic prostate MRI from patients with prostate cancer, contributed by
B. Nicolas Bloch, Ashali Jain and C. Carl Jaffe and hosted by The Cancer Imaging Archive. Images were released in
January 2013 and received a DOI in 2015. Besides the DICOM images, the collection offers free-text pathology and
radiology reports and three small sets of manual segmentations, one of which served as training data for the NCI-ISBI
2013 prostate segmentation challenge. It is used for prostate gland and zonal segmentation and for work on lesion
detection with multiparametric MRI.

## Composition

The collection snapshot lists 92 subjects and 5.67 GB of MR images. The public series metadata hold one study per
patient with 368 series and 32,537 images. Every patient has axial and coronal T2-weighted turbo spin echo series
and a dynamic contrast-enhanced series. Eighty patients also have an axial T1-weighted series without contrast, and
seven have a contrast-enhanced axial T1-weighted series instead. A clinical spreadsheet covers 54 subjects with
biopsy and prostatectomy pathology reports and the MRI radiology report, as unstructured text.

## Acquisition

All scans come from a 1.5 T Philips Achieva with a combined surface and endorectal coil. Dynamic contrast-enhanced
images were taken before, during and after intravenous injection of 0.1 mmol/kg gadolinium-DTPA. Study dates range
from 2005 to 2010.

## Annotations

- Multi-component 3D Slicer label maps for 5 cases on the axial T2-weighted series, outlining the gland, central gland,
  peripheral zone, seminal vesicles, urethra, dominant cancer nodule, neurovascular bundles, penile bulb, ejaculatory
  duct, verumontanum and rectum.
- Central gland and peripheral zone label maps for 30 subjects from the NCI-ISBI 2013 challenge, in NRRD.
- Seminal vesicle and neurovascular bundle masks for 15 subjects in MHA, prepared for a follow-up challenge that did
  not take place.

## Known limitations

- The Data Access table (87 subjects, 87 studies, 348 series, 30,903 images) disagrees with the collection snapshot
  and the series metadata (92 subjects, 368 series).
- No demographics or structured clinical variables; the reports are free text and cover only part of the cohort.
- Single scanner at a single field strength, without diffusion-weighted imaging.
- Manual segmentations exist for at most 30 subjects.

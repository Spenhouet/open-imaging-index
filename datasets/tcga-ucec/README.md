TCGA-UCEC is the radiology part of The Cancer Genome Atlas uterine corpus endometrial carcinoma project. The Cancer
Imaging Archive hosts clinical CT, MRI, PET and radiographs of TCGA patients, while their clinical, pathology and
genomic data sit in the NCI Genomic Data Commons. Both use the same TCGA patient id, so imaging features can be linked
to tumor genotype and patient outcome. The first version appeared in 2015, and version 4 followed in 2020.

## Composition

Version 4 holds 65 patients, all women, with 226 studies, 912 DICOM series and 77,214 images (37.85 GB). Counted from
the open TCIA series metadata, every patient has CT, 8 have MRI, 5 have PET and one has computed radiographs. Age at
the earliest archived study ranges from 30 to 90 years, with a median of 64, for the 64 patients whose first study
records an age. Most patients have repeated imaging: 41 of the 65 have more than one study. The collection page also
offers a snapshot of the TCGA clinical data from January 2016, plus the TCGA case forms that explain its fields.

## Acquisition

Images come from routine care rather than a research protocol, contributed by Mayo Clinic, Washington University in
St. Louis and MD Anderson Cancer Center. Scanners are from Siemens, GE, Toshiba and Philips, and the radiographs from a
Fujifilm system. CT mostly covers the abdomen and pelvis, or the chest, abdomen and pelvis. The MRI
studies cover the pelvis with T1-weighted and T2-weighted series and dynamic gadolinium-enhanced acquisitions, and
PET is FDG PET/CT of the torso. The baseline studies of each case were acquired before surgery. DICOM dates are
shifted by a random per-site offset, which keeps intervals between studies intact.

## Annotations

The collection itself contains no image labels. Segmentations and reader annotations made later by other groups are
published as separate analysis datasets.

## Known limitations

- Scanner types, protocols and series naming vary widely, and no harmonized sequence labels are provided.
- Only 65 of the TCGA endometrial cancer patients have imaging, so the imaged subset may not represent the full TCGA
  cohort.
- MRI and PET exist for few patients, so most multimodal analyses are limited to CT.
- TCIA and TCGA use different date conventions that are not reconciled.
- Some PET series of three patients have no manufacturer value.

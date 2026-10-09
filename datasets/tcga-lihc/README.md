TCGA-LIHC is the radiology part of The Cancer Genome Atlas liver hepatocellular carcinoma project. The Cancer Imaging
Archive hosts clinical CT, MRI and PET of TCGA patients, while their clinical, pathology and genomic data sit in the
NCI Genomic Data Commons. Both use the same TCGA patient id, so imaging features can be linked to tumor genotype and
patient outcome. The first version appeared in 2014, and version 5 followed in 2020.

## Composition

Version 5 holds 97 patients with 237 studies, 1,688 DICOM series and 125,397 images (56.38 GB). Counted from the open
TCIA series metadata, 75 patients have CT, 40 have MRI and one has a single whole-body PET series. There are 66 men and
31 women. Age at the earliest archived study ranges from 20 to 85 years, with a median of 64. Many patients have
several studies: 56 of the 97 have more than one. The collection page also offers a snapshot of the TCGA clinical data
from January 2016, plus the TCGA case forms that explain its fields.

## Acquisition

Images come from routine care rather than a research protocol, contributed by Mayo Clinic, the University of North
Carolina, Alberta Health Services and Lahey Hospital & Medical Center. Scanners are from Siemens, GE, Philips and
Toshiba. Protocols differ between sites and studies: CT includes non-contrast and contrast-enhanced abdominal scans,
and liver MRI series include T1-weighted gradient-echo before and after gadolinium, T2-weighted fast spin-echo, in- and
opposed-phase imaging and, for a few patients, MR elastography. The baseline studies of each case were acquired before
surgery. DICOM dates are shifted by a random per-site offset, which keeps intervals between studies intact.

## Annotations

The collection itself contains no image labels. Tumor and organ segmentations made later by other groups are published
as separate analysis datasets.

## Known limitations

- Scanner types, protocols and series naming vary widely, and no harmonized sequence labels are provided.
- Only 97 of the TCGA liver cancer patients have imaging, so the imaged subset may not represent the full TCGA cohort.
- TCIA and TCGA use different date conventions that are not reconciled.
- Two patients have series without a manufacturer value.

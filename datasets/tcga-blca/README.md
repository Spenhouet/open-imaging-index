TCGA-BLCA is the imaging arm of The Cancer Genome Atlas project on urothelial bladder carcinoma, hosted by The Cancer
Imaging Archive. It gathers clinical radiology of TCGA patients whose tumor tissue was profiled by TCGA. The patient
IDs on the images match those in TCGA, so the scans can be joined with the clinical, genomic and histopathology data
in the NCI Genomic Data Commons. This makes the collection a resource for radiogenomics, where imaging phenotypes are
related to tumor genotype and patient outcome.

## Composition

Version 8 holds 120 patients with 192 imaging studies, 1,051 DICOM series and 111,781 images (58.03 GB). CT dominates:
107 patients have CT, 20 have MRI, and 7 each have PET, computed radiography or digital radiography. Of the 120
patients, 32 have more than one study. By the DICOM headers, 71 patients are male, 18 female and 31 have no sex
recorded. The 88 patients with a recorded age were 43 to 88 years old at their earliest archived study (median 68).
The collection page links a TCGA clinical data snapshot from January 2016, and newer clinical and biomedical
spreadsheets come from the Genomic Data Commons.

## Acquisition

The images come from routine care at several institutions, not from a research protocol, so scanners, protocols and
modalities vary widely. For each TCGA case the baseline imaging studies were taken before surgery. Most series cover
the bladder region, with some labeled as abdomen or chest. The series were acquired on GE, Siemens, Philips and
Toshiba scanners, and radiographs on Fujifilm and Agfa systems. Dates in the DICOM headers are shifted by a random
offset that is fixed per site, which keeps intervals between a patient's studies.

## Annotations

No image annotations or segmentations are part of the collection.

## Known limitations

- Imaging protocols are heterogeneous across sites, scanners and modalities.
- Sex is missing for 31 patients and age for 32 patients in the DICOM headers.
- Only a minority of patients have MRI, PET or radiographs.
- TCIA and TCGA use different date schemes that are not reconciled.

TCGA-KIRP is the radiology part of The Cancer Genome Atlas project on papillary renal cell carcinoma. The Cancer
Imaging Archive hosts clinical CT, MRI and PET-CT scans of TCGA patients, and each patient keeps the same identifier
as in TCGA, so the images can be linked to the clinical, genomic and histopathology records in the NCI Genomic Data
Commons. The collection is meant for radiogenomics work that relates imaging features of the tumor to its molecular
profile and to patient outcome. The collection page title contains the word "Cervical" by mistake; the data concern
kidney cancer only.

## Composition

Version 4 holds 33 patients with 47 imaging studies, 376 DICOM series and 26,667 images, about 10.3 GB. Counted from
the open series metadata file, 23 patients have CT, 17 have MRI and 2 have PET-CT. By DICOM header, 28 patients are
male and 5 female. A clinical data snapshot from January 2016 (patient, follow-up, drug, radiation and new tumor
event tables) is linked from the collection page, and the current clinical and genomic records live in the GDC.

## Acquisition

For each TCGA case, the baseline imaging is from before surgery. The scans were taken in routine care, not under a
research protocol, so scanners, protocols and series vary between patients. Contributing sites are the National
Cancer Institute, the University of North Carolina, Roswell Park Cancer Institute and Lahey Hospital & Medical Center.
CT and MRI cover the abdomen and pelvis, mostly with and without contrast; MRI series include T1-weighted pre- and
post-contrast, T2-weighted and diffusion-weighted images. Scanners are from GE, Siemens, Philips and Toshiba. DICOM
dates are shifted per site by a fixed offset, which keeps the intervals between a patient's studies.

## Known limitations

- No image annotations or segmentations are distributed with the collection.
- The cohort is small and mostly male, and protocols differ across sites and patients.
- Field strengths, contrast agents and PET tracers are not documented on the collection page.
- Clinical dates in TCGA are counted from the diagnosis date, while DICOM dates use a different offset, so the two
  timelines are not aligned.

TCGA-OV is the radiology part of The Cancer Genome Atlas project on ovarian serous cystadenocarcinoma. The Cancer
Imaging Archive hosts the clinical scans of TCGA patients under the same patient identifiers used in TCGA, so the images
can be linked to the clinical, genomic and histopathology records in the NCI Genomic Data Commons. The collection
supports radiogenomics studies that relate tumor appearance on imaging to molecular subtype and outcome.

## Composition

Version 4 holds 143 patients with 322 imaging studies, 844 DICOM series and 53,662 images, about 28.3 GB. Counted from
the open series metadata file, every patient has CT and a single patient also has one MRI study; one further series
is a non-image summary series (modality OT). All patients are female. Most patients have one study, while some have a
longer series of scans over time. The collection page links a shared list of cases with both a pre-operative and an
early post-operative CT, aimed at judging how complete the surgical debulking was. A clinical data snapshot from
January 2016 is linked from the collection page, and current clinical and genomic records live in the GDC.

## Acquisition

For each TCGA case, the baseline imaging on TCIA is pre-surgical. Scans come from routine care rather than a research
protocol, so scanners, protocols and series differ between patients. Eight US sites contributed, among them the
University of Pittsburgh, Washington University, MD Anderson, Memorial Sloan-Kettering and Mayo Clinic. Most CT
studies cover the abdomen and pelvis, some also the chest. Scanners are mostly GE and Siemens, with a few Philips,
Toshiba and Imatron systems. The one MRI study includes T1-weighted pre- and post-contrast, T2-weighted and
diffusion-weighted series. DICOM dates are shifted by a fixed offset per site, which keeps intervals between a
patient's studies.

## Known limitations

- No image annotations or segmentations are distributed with the collection itself.
- MRI covers a single patient, so the collection is in practice a CT dataset.
- Contrast phases, slice thickness and scanner settings vary and are not documented on the collection page.
- Clinical dates in TCGA count from the diagnosis date, while DICOM dates use a different offset, so the two
  timelines are not aligned.
- Age is read from DICOM headers and is missing for two patients.

TCGA-KICH is the imaging arm of The Cancer Genome Atlas project on chromophobe renal cell carcinoma, hosted by The
Cancer Imaging Archive. It holds the clinical CT and MR scans of TCGA patients whose tumor tissue was profiled by
TCGA. Because the patient IDs on the images are the same as in TCGA, the scans can be linked to the clinical,
genomic and histopathology data in the NCI Genomic Data Commons. That link makes the collection a resource for
radiogenomics, where imaging features are related to tumor genotype and outcome.

## Composition

The collection has 15 patients with one imaging study each: 12 CT studies and 3 MR studies, together 109 DICOM
series and 9,221 images (4.56 GB). By the DICOM headers, 11 patients are male and 4 female, aged 27 to 74 at the
scan (median 47). A snapshot of TCGA clinical data from January 2016 is linked on the collection page, and newer
clinical and biomedical spreadsheets come from the Genomic Data Commons.

## Acquisition

The images come from routine care rather than a research protocol, so scanners, sequences and contrast phases vary.
The baseline studies were taken before surgery. The CT studies were acquired on Siemens, GE and Toshiba scanners and
include non-contrast, arterial, venous and delayed phase series. The MR studies come from GE and Siemens systems and
include T1-weighted, T2-weighted, diffusion-weighted and contrast-enhanced series. Data were contributed by the NCI
Urologic Oncology Branch and Brigham and Women's Hospital. Dates in the DICOM headers are shifted by a random offset
per site, which keeps intervals between studies.

## Annotations

No image annotations or segmentations are distributed.

## Known limitations

- With 15 patients the cohort is small, and only 3 patients have MRI.
- Imaging protocols are heterogeneous across sites and scanners.
- TCIA and TCGA use different date schemes that are not reconciled.
- Field strengths and acquisition parameters are not summarized by the provider.

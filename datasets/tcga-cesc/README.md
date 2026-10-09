TCGA-CESC is the imaging arm of The Cancer Genome Atlas project on cervical squamous cell carcinoma and endocervical
adenocarcinoma, hosted by The Cancer Imaging Archive. It contains clinical MR scans of TCGA patients whose tumor
tissue was profiled by TCGA. The patient IDs on the images match those in TCGA, so each scan can be joined with the
clinical, genomic and histopathology records held in the NCI Genomic Data Commons. This makes the collection usable
for radiogenomic work that relates imaging appearance to tumor genotype and outcome.

## Composition

The collection holds 54 patients with 57 MR studies (three patients have two studies), 488 DICOM series and 19,135
images, about 9.5 GB in total. In the DICOM headers 53 patients are recorded as female and one as male, which
conflicts with the diagnosis and is likely a header error. Only 32 patients have an age in the header; they were 26
to 79 years old at the scan, with a median of 51. A January 2016 snapshot of TCGA clinical data is linked from the
collection page, and the current release adds newer clinical and biomedical spreadsheets from the Genomic Data
Commons.

## Acquisition

All images were contributed by Barretos Cancer Hospital in Brazil and come from routine care, not from a research
protocol. The scanners are Philips Achieva, GE Signa HDxt and Signa Excite, and Siemens Symphony systems. Series
descriptions, partly in Portuguese, show T2-weighted and T1-weighted pelvic series in several planes, diffusion
weighted imaging with ADC maps, and dynamic contrast-enhanced series in some studies. The baseline studies were
acquired before surgery. DICOM dates are shifted by a random offset that is fixed per site, so intervals between
studies stay correct.

## Annotations

No image annotations or segmentations are distributed.

## Known limitations

- Single-site cohort of 54 patients, with protocols that vary by scanner.
- Patient age is missing from the DICOM headers of 22 patients, and one patient's sex field reads male.
- Field strengths and acquisition parameters are not summarized by the provider.
- TCIA and TCGA use different date schemes that are not reconciled.

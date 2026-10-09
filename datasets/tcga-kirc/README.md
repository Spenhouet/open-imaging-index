TCGA-KIRC is the radiology part of The Cancer Genome Atlas project on kidney renal clear cell carcinoma, hosted by The
Cancer Imaging Archive. Its patient IDs are identical to those in the NCI Genomic Data Commons, which holds the
clinical, genomic and histopathology data of the same patients. This link lets researchers relate imaging features
of the tumor to its genotype and to patient outcome. TCIA released the first series in 2012, and the current version
3 dates from May 2020.

## Composition

The collection holds 267 patients with 439 imaging studies, 2,654 DICOM series and 192,581 images, about 92 GB in
total. CT dominates: 237 patients have CT, 62 have MRI and one has radiographs. Of these, 32 patients have
both CT and MRI. The DICOM headers list 178 patients as male and 89 as female. For each case, the baseline studies
were taken before surgery. A snapshot of the TCGA clinical data and the case report forms that explain it can be
downloaded from the collection page.

## Acquisition

Seven US institutions contributed images, among them Memorial Sloan-Kettering Cancer Center, Mayo Clinic, MD
Anderson Cancer Center and the National Cancer Institute. Scans come from routine clinical care, not from a research
protocol, so scanners and parameters vary widely. GE scanners appear for 212 patients and Siemens for 62, with a few
Philips and Toshiba systems. Dates in the DICOM headers are shifted back by a random offset per site, which keeps the
intervals between a patient's studies intact.

## Annotations

The collection itself contains no image labels. Tumor annotations and radiogenomic features made by other groups are
published as separate TCIA analysis results, such as TCGA-KIRC-Radiogenomics.

## Known limitations

- Protocols, contrast phases and scanners differ between sites and patients, and no acquisition details are curated.
- Only 62 patients have MRI, so most work uses the CT subset.
- TCIA and TCGA handle dates differently, so imaging dates cannot be aligned directly with clinical event dates.
- The modality, vendor and sex counts here were counted from the public TCIA metadata API, not from a publication.

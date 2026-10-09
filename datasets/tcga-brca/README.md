TCGA-BRCA is the radiology part of The Cancer Genome Atlas project on breast invasive carcinoma, hosted by The Cancer
Imaging Archive. Patient IDs match those in the NCI Genomic Data Commons, which holds the clinical, genomic and
histopathology data of the same women. Researchers use this link to relate the imaging appearance of a breast tumor
to its genotype and to patient outcome. The first series went public in 2011, and the current
version 3 dates from May 2020.

## Composition

The collection holds 139 patients with 164 imaging studies, 1,877 DICOM series and 230,167 images, about 88 GB.
Nearly all of it is breast MRI: 137 patients have MR, five have mammography, and three of those five have both.
All patients are recorded as female in the DICOM headers. The baseline studies of each case were taken before
surgery. The collection page offers a 2016 snapshot of the TCGA clinical data together with the case report forms
that define its fields.

## Acquisition

Seven US institutions supplied images: Mayo Clinic, University of Pittsburgh/UPMC, Roswell Park, University of
Miami, Memorial Sloan-Kettering Cancer Center, University of North Carolina and University of Chicago. Exams come
from routine clinical care rather than a research protocol, so scanners, sequences and contrast timing vary. GE
systems appear for 108 patients, Siemens for 16 and Philips for 15; the mammograms come from GE and LORAD units.
Some series are derived images from the Confirma CADstream software. DICOM dates are shifted back by a random
offset that is fixed per site, so intervals between a patient's studies are kept.

## Annotations

The image collection carries no labels of its own. Data derived from it by other groups are published as separate
TCIA analysis results, among them TCGA-Breast-Radiogenomics, LuminalB-Breast-MR-Enhancement and
DICOM-SR-Breast-Clinical.

## Known limitations

- Sequences, contrast phases and scanners differ between sites and patients, and no acquisition details are curated.
- Only five patients have mammography, so the collection is in practice an MRI cohort.
- TCIA and TCGA store dates differently, so imaging dates cannot be aligned directly with clinical event dates.
- The modality, vendor and sex counts here were counted from the public TCIA metadata API, not from a publication.

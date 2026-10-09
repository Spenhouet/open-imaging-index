CPTAC-PDA is the imaging arm of the pancreatic ductal adenocarcinoma cohort of the National Cancer Institute's
Clinical Proteomic Tumor Analysis Consortium. The Cancer Imaging Archive gathers radiology and pathology images of
CPTAC patients so that image phenotypes can be studied alongside the proteomic, genomic and clinical data of the same
people, which are held in the Proteomic Data Commons and Genomic Data Commons under matching patient IDs. The
collection was first released in January 2018 and reached version 15 in February 2025.

## Composition

The collection covers 168 subjects. All 168 have pathology, with 557 whole-slide images in SVS format. Radiology is
available for 110 of them: 134 studies, 1,133 DICOM series and 132,852 images. In the radiology metadata, 99 subjects
have CT, 17 MRI, 3 ultrasound and 2 PET. The radiology subjects are 59 male, 50 female and 1 recorded as other. A
"Discovery Cohort" subset, tied to the consortium's proteogenomic study of the disease, can be downloaded on its own.
Total download size is 155.24 GB.

## Acquisition

Radiology comes from routine clinical care shortly before the pathological diagnosis, with follow-up scans where
available, so scanners and protocols vary. The radiology metadata lists GE, Siemens, Toshiba and Philips systems;
body regions range from the pancreas alone to chest, abdomen and pelvis. Slides come from the CPTAC tissue
qualification workflow. Contributing sites include hospitals and biobanks in the United States, Canada and Poland.
DICOM dates are shifted, and DICOM tag (0012,0050) stores each scan's offset in days from the pathological diagnosis.

## Annotations

The collection has no image labels. Tumor annotations are published separately as the TCIA analysis result
CPTAC-PDA-Tumor-Annotations, and the collection is also used by the Crowds-Cure-2018 and SAROS analysis results.

## Known limitations

- About a third of the subjects have pathology slides only and no radiology.
- Imaging is heterogeneous in modality, vendor, protocol and number of follow-up scans per patient.
- Clinical and molecular data are not part of the TCIA download and must be exported from the data commons.
- The collection page labels version 15 CC BY 4.0, while earlier versions and the radiology metadata file name
  CC BY 3.0.

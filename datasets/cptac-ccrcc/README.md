CPTAC-CCRCC is the imaging arm of the clear cell renal cell carcinoma cohort of the National Cancer Institute's
Clinical Proteomic Tumor Analysis Consortium. The Cancer Imaging Archive collects the radiology and pathology images of
CPTAC patients so that imaging features can be studied next to the proteomic, genomic and clinical data of the same
people. Patient IDs match those used in the Proteomic Data Commons and Genomic Data Commons. The collection was first
released in January 2018 and has grown over 14 versions, the latest in July 2025.

## Composition

The collection page lists 262 subjects across radiology and pathology. The ccRCC radiology set holds 65 subjects with
85 studies, 727 DICOM series and 99,098 images. The ccRCC pathology set holds 783 whole-slide images in SVS format from
222 subjects. A separate group of non-ccRCC and rare kidney tumors adds radiology for 6 subjects (12 studies, 139
series) and 128 slides from 39 subjects. In the ccRCC radiology metadata, 59 subjects have CT and 10 have MRI. A
subset of 32 patients forms the radiology "Discovery Cohort" linked to the consortium's proteogenomic publication.
Total download size is 280.22 GB.

## Acquisition

Radiology is routine clinical imaging taken shortly before the pathological diagnosis, plus follow-up scans where
they exist. Scanners, vendors and protocols therefore vary: the ccRCC radiology metadata lists GE, Siemens, Philips and
Toshiba systems, mostly abdominal CT. Slides come from the CPTAC tissue qualification workflow. Contributing sites
include hospitals and biobanks in the United States and Poland. DICOM dates are shifted, and a DICOM tag gives each
scan's offset in days from the pathological diagnosis.

## Annotations

The collection itself has no image labels. Tumor annotations made later are published as the separate TCIA analysis
result CPTAC-CCRCC-Tumor-Annotations.

## Known limitations

- Only a minority of the 262 subjects have radiology; most contribute pathology slides only.
- Imaging is heterogeneous in modality, scanner and protocol, and the number of follow-up scans differs by patient.
- Clinical and molecular data are not part of the TCIA download and must be exported from the data commons.
- The collection page labels the current release CC BY 4.0, while earlier versions and the metadata files name
  CC BY 3.0.

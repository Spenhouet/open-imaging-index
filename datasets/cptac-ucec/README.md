CPTAC-UCEC is the imaging arm of the uterine corpus endometrial carcinoma cohort of the National Cancer Institute's
Clinical Proteomic Tumor Analysis Consortium. The Cancer Imaging Archive gathers radiology and pathology images of
CPTAC patients so that imaging can be studied alongside the proteomic, genomic and clinical data of the same people.
Patient IDs are the same as in the Proteomic Data Commons and Genomic Data Commons. The first version appeared in
January 2018; version 13, from April 2025, is the current one.

## Composition

The collection lists 250 subjects. All 250 have tissue slides, 887 SVS whole-slide images in total. Radiology covers
90 of them, with 146 studies, 1,959 DICOM series and 187,026 images. Counted from the public TCIA metadata, 75 of the
radiology subjects have CT, 36 MRI, 3 PET and 2 ultrasound. The consortium also released a "Discovery Cohort" subset
with its own radiology and pathology download links. Total download size is 234.24 GB.

## Acquisition

Radiology comes from routine clinical care shortly before the pathological diagnosis, plus follow-up scans where
available, so modality, scanner and protocol vary. The series metadata names Siemens, GE and Toshiba systems, and many
series carry no manufacturer. Slides come from the CPTAC tissue qualification workflow. Contributing sites include
hospitals and biobanks in the United States and Poland. DICOM dates are shifted per site and collection, and a DICOM
tag stores the days between each scan and the pathological diagnosis.

## Annotations

The image collection has no labels. Tumor annotations are published separately as the TCIA analysis result
CPTAC-UCEC-Tumor-Annotations, and some cases were used in Crowds-Cure-2018.

## Known limitations

- Only 90 of the 250 subjects have radiology; the rest contribute pathology slides only.
- Modalities, scanners, protocols and the number of follow-up scans differ between patients.
- Clinical and molecular data are not part of the TCIA download and must be exported from the data commons.
- Version 13 is labeled CC BY 4.0, while earlier versions were released under CC BY 3.0.
- Radiology subject counts per modality were computed from the TCIA API, which still lists RTSTRUCT series that the
  version 13 table no longer includes; those were left out of the counts.

CPTAC-SAR is the imaging arm of the sarcoma cohort of the National Cancer Institute's Clinical Proteomic Tumor
Analysis Consortium. The Cancer Imaging Archive gathers the radiology and pathology images of CPTAC patients so that
imaging features can be studied alongside the proteomic, genomic and clinical data of the same people. Patient IDs are
shared with the other CPTAC databases. The first version appeared in March 2019; the current version 10 dates from May
2023.

## Composition

The collection snapshot lists 88 subjects and 87.2 GB. The radiology set covers 24 subjects with 33 studies, 265 DICOM
series and 29,595 images (15.2 GB). The pathology set holds 300 whole-slide images in SVS format from 88 subjects
(72 GB). In the series metadata, 18 radiology subjects have CT, 11 have MRI and 2 have PET. The listed body regions
range from the limbs, chest and abdomen to the retroperitoneum, bladder, uterus, head and neck, reflecting where the
sarcomas arose.

## Acquisition

Radiology is routine clinical imaging taken shortly before the pathological diagnosis, plus follow-up scans where
available, so scanners and protocols vary. The series metadata names GE, Siemens and Philips systems. Slides come from
the CPTAC tissue qualification workflow. Contributing sites include Cureline, BioPartners and the University of
Pittsburgh Medical Center. DICOM dates are shifted by a random offset, and DICOM tag (0012,0050) gives each scan's
distance in days from the pathological diagnosis.

## Known limitations

- Only 24 of the 88 subjects have radiology; the rest contribute pathology slides only.
- Imaging differs in modality, scanner and protocol, and follow-up coverage differs per patient.
- The collection has no image annotations.
- Clinical and molecular data are not part of the TCIA download and must be obtained from the NCI data commons.
- Versions up to 4 were released under CC BY 3.0; the current release is labeled CC BY 4.0.

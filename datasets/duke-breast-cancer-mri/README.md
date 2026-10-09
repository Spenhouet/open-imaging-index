Duke-Breast-Cancer-MRI is a retrospective, single-center collection of pre-operative breast MRI from 922 women with
biopsy-confirmed invasive breast cancer, seen at Duke Hospital between January 2000 and March 2014. The Mazurowski
lab at Duke University School of Medicine assembled it for radiogenomics and outcome prediction work, and The Cancer
Imaging Archive hosts it. The images come with a large table of clinical, pathology, treatment and follow-up
variables, so the set is used for tumor detection, molecular subtype and receptor status prediction, response to
neoadjuvant therapy and recurrence modelling.

## Composition

Each patient has one MRI study with four to six MR series: a T1-weighted series without fat suppression, a
fat-suppressed gradient echo T1-weighted pre-contrast series and, in most cases, three or four post-contrast phases.
Patients were aged 21 to 89 at diagnosis, with a median of 52. The clinical table covers demographics, ER, PR and
HER2 status, surrogate molecular subtype, TNM stage, grade and histology, MRI, mammography and ultrasound report
findings, surgery, radiation, chemotherapy, endocrine and anti-HER2 therapy, pathologic response, recurrence and
follow-up times. A second table holds 529 computer-extracted features of the tumor and fibroglandular tissue.

## Acquisition

Axial scans were acquired in the prone position on GE and Siemens scanners at 1.5 T or 3 T. Contrast agents were
gadopentetate dimeglumine for most patients, gadobenate dimeglumine for about 29% and gadobutrol for two, with
the agent unrecorded for the rest. A table lists the scanner model and acquisition parameters per patient.

## Annotations

Eight fellowship-trained breast radiologists drew a 3D bounding box around the biopsied tumor for every patient,
working on the pre-contrast, first post-contrast and subtraction images. The 271 earlier cases followed a slightly
different procedure from the remaining 651. Later versions added manual breast and fibroglandular tissue masks:
DICOM SEG masks for 127 patients, and NRRD breast, fibroglandular tissue and vessel masks for 100 patients that breast
radiologists reviewed.

## Known limitations

- Single institution, so external validity is limited.
- Tumor annotations are bounding boxes only; voxel-level tumor masks are not included.
- Acquisition parameters vary widely across scanners and years.
- The Frame of Reference UID was replaced during de-identification and may not be reliable for aligning series.

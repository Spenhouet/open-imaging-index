KiTS23 is the third Kidney Tumor Segmentation challenge from the University of Minnesota group, held at MICCAI 2023.
It extends the earlier KiTS19 and KiTS21 collections with more patients and with scans in a second contrast phase,
and is one of the largest openly available sets of annotated kidney tumor CT.

## Composition

The challenge has 599 patients, each represented by the most recent contrast-enhanced CT taken before surgery. 489
cases with labels form the training set; the remaining 110 were held out as the test set. Every training case is
labelled for kidney, tumor and cyst. A JSON file adds clinical data for the training cases, among them age at
surgery, sex, BMI, comorbidities, surgical details, pathology (histologic subtype, ISUP grade, TNM stage) and
survival. Most training cases had a malignant tumor; a minority were benign.

## Acquisition

All patients underwent cryoablation, partial nephrectomy or radical nephrectomy for a suspected renal malignancy at
an M Health Fairview medical center in Minnesota between 2010 and 2022. Unlike previous editions, which used only the
late arterial (corticomedullary) phase, KiTS23 also includes nephrogenic-phase scans. Many scans were referred from
outside hospitals, so scanners and protocols vary. Images are distributed as NIfTI through a Hugging Face repository
and a download script.

## Annotations

Trainees (residents, medical students and pre-medical undergraduates) delineated each region, guided by bounding
boxes and with expert radiologists and urologic oncologists available for consultation. Unlike KiTS21, which had
three independent delineations per region, KiTS23 has a single delineation. Evaluation uses three nested regions:
kidney and masses, masses (tumor plus cyst) and tumor alone.

## Known limitations

- All patients come from a single US health system.
- Single annotations mean no inter-rater variability estimate.
- Ages are recorded at nephrectomy; the oldest recorded age is 90 and a few training cases are children.
- Scanner and protocol details are not published per case.
- The CC BY-NC-SA license rules out commercial use without separate permission.

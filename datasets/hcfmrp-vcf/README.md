A retrospective single-centre cohort of adults with lumbar vertebral compression fractures, assembled at the
University Hospital of the Ribeirão Preto Medical School (HCFMRP), University of São Paulo, Brazil. The study behind
it trained an artificial neural network on three-dimensional radiomic features to separate benign fractures caused by
osteoporosis from malignant fractures caused by tumour infiltration of the vertebra. The images, segmentations and a
per-patient table were released on Zenodo in August 2024 under CC BY 4.0.

## Composition

91 patients (55 women, 36 men) diagnosed between 2010 and 2019, mean age about 64 years. 47 have benign and 44 have
malignant fractures. Together they have 146 fractured lumbar vertebrae. Each patient contributes one examination, the
earliest one in the hospital archive. The paper held out the last 15 benign and last 15 malignant patients retrieved
from the archive as a test set, with 61 patients for training.

Excluded were patients treated with chemotherapy, radiotherapy or surgery before the scan, traumatic and old
fractures, patients under 18, and malignant cases without a biopsy.

## Acquisition

Routine clinical sagittal T1-weighted lumbar spine MRI on Philips Achieva scanners at 1.5 T and 3 T. Slice thickness
is 3 to 5 mm with 12 to 15 slices per series. Images are shared as anonymized DICOM and as NRRD volumes rescaled to
256 grey levels after histogram equalization.

## Annotations

Each fractured vertebral body was segmented in 3D with threshold and erosion tools in 3D Slicer by a trained
investigator and reviewed by a musculoskeletal radiologist with 20 years of experience. Labels come from spine biopsy
for malignant fractures and from DEXA, imaging reread and two years of follow-up for benign ones. The spreadsheet
lists class, sex, age and the segmented vertebral levels per patient.

## Known limitations

- Single centre, single vendor and one contrast only, so no T2-weighted, STIR or contrast-enhanced series.
- The malignant group is not broken down by tumour type in the public description.
- The Zenodo description gives a mean age of 64.24 years and the paper 64.75 years for the same patients.
- Field strength per patient is not reported in the description or paper text.

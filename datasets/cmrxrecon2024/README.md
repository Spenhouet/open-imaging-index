CMRxRecon2024, also called CMRxUniversalRecon, is the dataset of the second Cardiac MRI Reconstruction Challenge,
held at MICCAI 2024. A team led from Fudan University in Shanghai scanned healthy adult volunteers with a broad
clinical cardiac protocol and released the raw multi-coil k-space so that methods can be trained to reconstruct
images from undersampled data across many sequences, views and sampling patterns with one model. The volunteers do
not overlap with those of the 2023 CMRxRecon dataset, and the organizers state that the yearly CMRxRecon releases
share no cases.

## Composition

The paper reports 330 volunteers (156 female, 174 male) aged 20 to 60 years, mean 36 years. They are split into
200 training, 60 validation and 70 test cases. Every volunteer has cine imaging in long-axis (2, 3 and 4 chamber),
short-axis and left ventricular outflow tract views, cine of the aorta in transversal and sagittal views, T1 and T2
mapping, tagging, two-dimensional phase-contrast flow and black-blood imaging. The Synapse download holds the
training and validation phases as one archive of about 835 GB split into 210 parts. Training cases carry fully
sampled k-space; validation cases carry undersampled k-space, masks and calibration lines.

## Acquisition

All scans come from one 3 T Siemens MAGNETOM Vida with multi-channel cardiac coils, acquired between June 2023 and
February 2024 with ECG triggering. Cine, tagging and flow use TrueFISP-type sequences, T1 mapping MOLLI, T2 mapping
T2-prepared FLASH and black-blood imaging turbo spin echo. Raw TWIX data were converted to MATLAB files. Masks for
uniform, Gaussian and pseudo-radial undersampling with acceleration from 4 to 24 are provided.

## Annotations

None. The fully sampled k-space serves as the reference for reconstruction.

## Known limitations

Single center, single vendor and only healthy Asian volunteers. The organizers withdrew a few training and
validation files as abnormal and list them on the download page. In the released undersampled data, files under one
case number can come from different volunteers. The download page covers training and validation; whether test
cases are downloadable is not stated there. Commercial use of the data is not allowed.

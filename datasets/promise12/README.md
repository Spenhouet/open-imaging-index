PROMISE12 is the data of the Prostate MR Image Segmentation challenge, run at MICCAI 2012 in Nice by groups from
Radboud University Nijmegen Medical Centre, Rutgers University and University College London. It was built to compare
interactive, semi-automatic and automatic methods for delineating the whole prostate on MRI across centres, scanner
vendors and protocols, and it has since served as a common benchmark for prostate segmentation.

## Composition

The set holds 100 transverse T2-weighted MR scans of the prostate, 25 from each of four centres. The organisers split
them at random, stratified by centre, into 50 training cases, 30 test cases and 20 cases for the live challenge held
at the workshop. Only the training masks were released during the challenge. Since 2023 all three parts, each case
with its reference mask, can be downloaded from Zenodo as MetaImage (MHD/RAW) files.

## Acquisition

The scans come from Haukeland University Hospital (Norway), Beth Israel Deaconess Medical Center (USA), University
College London (UK) and Radboud University Nijmegen Medical Centre (Netherlands). Field strength was 1.5 T at
Haukeland, 3 T at Beth Israel and Radboud, and both at UCL. Beth Israel used GE scanners, the other centres Siemens.
The two centres with an endorectal coil are Haukeland and Beth Israel. In-plane resolution ranges from 0.25 to 0.75
mm and slice thickness from 2.2 to 4 mm. The scans were made for prostate cancer detection or staging.

## Annotations

Each centre supplied a slice-by-slice outline of the prostate capsule drawn by an experienced reader in 3D Slicer
or MeVisLab. One expert who had read more than 1000 prostate MRIs then checked all outlines for consistency and
corrected them where needed; these form the reference standard. For the test and live challenge cases, a second,
less experienced observer segmented the prostate blind to the reference, and the challenge score is scaled against
that observer.

## Known limitations

- Small cohort, one sequence, and a single label for the whole gland; zones and lesions are not marked.
- Clinical stage, cancer presence and lesion location are unknown to the organisers, and no age or other patient
  data are included. The challenge site states that the cases include both benign disease, such as benign prostatic
  hyperplasia, and prostate cancer.
- Coil use, resolution and contrast differ strongly between centres.
- The second observer's segmentations are not part of the download.

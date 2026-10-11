This OpenNeuro release from the Federal Center of Neurosurgery in Novosibirsk follows patients with olfactory groove
meningioma through surgery. Elena Filimonova, Anton Pashkov and colleagues scanned each patient before the operation
with a fixed multimodal protocol and, where possible, again afterwards, and paired the images with clinical and
cognitive scores. The authors aim it at studies of how the tumor and its peritumoral edema change the brain, at
diffusion methods and tractography near mass lesions, and at imaging biomarkers of recovery. Data are in BIDS under
CC0.

## Composition

37 patients, 29 women and 8 men, aged 37 to 73 (mean about 59). Every patient has a preoperative folder; 23 also have a
postoperative folder (suffix `fu`), giving 60 sessions. Most sessions hold a 3D T1-weighted image without and with
contrast, a 3D T2-weighted image, four diffusion runs and one resting-state BOLD run. A few sessions lack the BOLD and
diffusion runs or one of the T1-weighted images. The participants table gives age, sex, histological subtype
(meningothelial, transitional or atypical), WHO grade, tumor and edema volume, MoCA, visual acuity, Karnofsky score,
Simpson resection grade and whether follow-up imaging exists. Grade 2 (atypical) tumors make up 8 of 37.

## Acquisition

Image sidecars name a Philips Ingenia 3 T scanner for nearly all series, with 1 mm 3D T1 and T2 images. Diffusion uses
64 directions at b = 1500 s/mm² plus b = 0 volumes with reversed phase encoding. The resting-state run was acquired
with eyes closed at TR 3 s. One T1-weighted series of one patient comes from a Siemens Avanto at 1.5 T. Structural
images were defaced.

## Annotations

The derivatives folder holds a tumor mask and an edema mask for each of the 37 preoperative sessions, but the release
does not say who drew them or how. It also contains topup and eddy corrected diffusion data, FA, MD, RD and axial
diffusivity maps, CSD fiber orientation maps and tractography from ExploreDTI, and MRIQC reports.

## Known limitations

- Single centre, small sample, mostly women.
- No accompanying paper was found, so there are no published cohort tables; counts here come from the released files.
- Follow-up sessions have no segmentation masks.
- Session timing relative to surgery is not given in the release.
- The Siemens T1 series of one patient is not labelled as pre- or post-contrast.

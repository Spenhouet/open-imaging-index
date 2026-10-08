This dataset was collected by the Medical Imaging Laboratory (MILAB) at Yonsei University together with Gachon
University Gil Medical Center in South Korea to train and test a two-stage cerebral microbleed detector (a YOLO
candidate detector followed by a 3D CNN that removes false positives). The paper announced that images and labels
would be shared through the project's GitHub repository, which linked to a download page on the lab website. In June
2021 that link was replaced by a note that the data can no longer be provided because of a patent transfer. Only the
code remains available.

## Composition

179 subjects in two groups that differ in in-plane resolution: 72 high-resolution subjects (0.50 x 0.50 mm) with 188
microbleeds and 107 low-resolution subjects (0.80 x 0.80 mm) with 572 microbleeds, 760 microbleeds in total. Each
subject has magnitude, phase and SWI images. The paper split the subjects into five folds for cross-validation, with
14 to 16 high-resolution and 21 to 23 low-resolution subjects per fold.

## Acquisition

All scans were acquired on 3 T Siemens Verio and Skyra systems with 2 mm slices and 72 slices per volume. The
high-resolution protocol used TR 27 ms, TE 20 ms and a 512 x 448 matrix; the low-resolution protocol used TR 40 ms,
TE 13.7 ms and a 288 x 252 matrix. The institutional review board of Gachon University Gil Medical Center approved
the study, and participants gave written consent.

## Annotations

A neuroradiologist and a neurologist read the SWI and phase images side by side and agreed on each microbleed, using
the Greenberg et al. 2009 criteria (up to 10 mm, calcifications excluded by phase). Labels are microbleed centre
points: per subject, a spreadsheet lists slice number and x and y pixel position. The paper describes no voxel masks.

## Known limitations

- The data are no longer distributed, and no license or data use terms were published while they were.
- The paper gives no age, sex or diagnosis information for the subjects, so the clinical population is unknown.
- Labels are centre points only, which supports detection but not segmentation.

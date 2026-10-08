The Medical Segmentation Decathlon is a benchmark of ten 3D segmentation tasks, first run as a challenge at
MICCAI 2018 to test whether one method can solve very different problems without manual tuning per task. It
remains a common test bed for general-purpose segmentation methods.

## Composition

| Task              | Target                                     | Modality                                | Volumes (train + test) |
| ----------------- | ------------------------------------------ | --------------------------------------- | ---------------------- |
| 01 Brain tumour   | Oedema, enhancing and non-enhancing tumour | MRI: T1w, T1w post-contrast, T2w, FLAIR | 484 + 266              |
| 02 Heart          | Left atrium                                | MRI                                     | 20 + 10                |
| 03 Liver          | Liver and tumour                           | Contrast CT                             | 131 + 70               |
| 04 Hippocampus    | Hippocampus head and body                  | T1w MRI                                 | 263 + 131              |
| 05 Prostate       | Central gland and peripheral zone          | MRI: T2w, ADC                           | 32 + 16                |
| 06 Lung           | Lung tumour                                | CT                                      | 64 + 32                |
| 07 Pancreas       | Pancreas and mass                          | Portal venous CT                        | 282 + 139              |
| 08 Hepatic vessel | Vessels and tumour                         | Portal venous CT                        | 303 + 140              |
| 09 Spleen         | Spleen                                     | Portal venous CT                        | 41 + 20                |
| 10 Colon          | Colon cancer primaries                     | Portal venous CT                        | 126 + 64               |

Each task is a TAR file with a JSON descriptor, labelled training images and unlabelled test images, all
converted to NIfTI in a common RAS orientation.

## Acquisition

Sources include BraTS 2016/2017, the Left Atrial Segmentation Challenge (King's College London), LiTS, Vanderbilt
University Medical Center, Radboud University Medical Center, Stanford lung cancer data on TCIA, and Memorial
Sloan Kettering Cancer Center (pancreas, hepatic vessel, spleen, colon). Protocols vary within and across tasks.

## Annotations

Experts drew or corrected labels, manually (e.g. hippocampus, colon) or semi-automatically with manual
correction (hepatic vessels, spleen). The hippocampus cohort has 90 healthy adults and 105 with a psychotic
disorder.

## Known limitations

- Subject counts and demographics are missing for most tasks; volumes are not patients.
- The website lists 282 + 139 pancreas volumes but 420 in total, as does the paper.
- Brain tumour data overlap with BraTS releases.

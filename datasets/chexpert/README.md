CheXpert is a chest radiograph collection from Stanford Hospital released by the Stanford Machine Learning Group
and distributed by the Stanford AIMI Center. Its main contribution is a rule-based labeler that reads radiology
reports and marks each of 14 observations as positive, negative or uncertain. It is one of the standard
benchmarks for multi-label chest X-ray classification.

## Composition

The dataset holds 224,316 radiographs of 65,240 patients, taken between October 2002 and July 2017 in inpatient
and outpatient settings. Each patient appears in only one split:

| Split      | Patients | Studies | Images  |
| ---------- | -------- | ------- | ------- |
| Training   | 64,540   | 187,641 | 223,414 |
| Validation | 200      | 200     | 234     |
| Test       | 500      | 500     | 668     |

Each image is a frontal (AP or PA) or lateral view. Age in years, biological sex and the view are given per
image. Images are distributed as 8-bit JPEG files, in a full-resolution and a downsampled version. The datasheet
reports that the X-ray device is not recorded.

## Annotations

The 14 observations are No Finding, Enlarged Cardiomediastinum, Cardiomegaly, Lung Opacity, Lung Lesion, Edema,
Consolidation, Pneumonia, Atelectasis, Pneumothorax, Pleural Effusion, Pleural Other, Fracture and Support
Devices. Training labels come from the automatic labeler run on the reports. Validation labels are the majority
vote of three board-certified radiologists looking at the images, and test labels the majority vote of five.
This index maps the findings that have a vocabulary term; condition counts in the statistics include positive
labels only.

## Known limitations

- Training labels are extracted from text and contain errors; uncertain labels are frequent for some findings
  (e.g. consolidation).
- Single institution; about half of the images come from 15% of the patients.
- Very few children are included.
- The research use agreement forbids commercial use, redistribution and derivative works. A paid commercial
  license is offered separately.

APTOS 2019 Blindness Detection was a Kaggle competition run from June to September 2019 for Aravind Eye Hospital in
Madurai, India, together with the Asia Pacific Tele-Ophthalmology Society. Its fundus photographs come from eye
screening in rural areas, where technicians capture images that doctors later review. The labelled training images
are widely used to train and compare models that grade diabetic retinopathy.

## Composition

Each image shows the retina of one eye and carries a single severity grade from 0 (no diabetic retinopathy) through
mild, moderate and severe to 4 (proliferative). The download contains a training set with labels and a public test
set without them. Winning models were scored on a hidden private test set of roughly 13,000 images, which was never
released. The number of training images and of patients is not stated on the readable competition pages, and no
patient identifiers, ages or sex are provided.

## Acquisition

According to the organisers, images were collected at several clinics with different cameras over a long period.
Quality varies: some images are out of focus, under- or overexposed or contain artifacts.

## Annotations

A clinician assigned each image one diabetic retinopathy grade. The organisers warn that labels contain noise. The
competition metric was quadratic weighted kappa between predicted and clinician grades.

## Known limitations

- Use is restricted to non-commercial purposes, and the data may not be shared with anyone who has not accepted the
  competition rules.
- Label noise and varying image quality, with no information on graders, cameras or clinics per image.
- The private test set is not available, so published results on it cannot be reproduced.

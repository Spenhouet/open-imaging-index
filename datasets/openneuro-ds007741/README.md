SCAN is the structural MRI release of a King's College London study on how women with anorexia nervosa react to
emotional films. Jenni Leppanen, Steve Williams and colleagues recorded facial expressions and brain responses while
participants watched positive, neutral and negative clips, and found reduced positive facial affect and lower mood in
the anorexia group. The OpenNeuro snapshot holds only the T1-weighted anatomical image of each participant, plus a
phenotype table with group, age, BMI and questionnaire scores, all under CC0. It fits work on brain structure in
eating disorders, such as morphometry in low body weight.

## Composition

141 right-handed women took part: 71 with anorexia nervosa and 70 healthy comparison participants. The anorexia group
mixes currently underweight women (47 had BMI under 18.5 at the visit) and weight-restored women who did not consider
themselves recovered. Each subject has one T1w volume. The phenotype table lists 142 participants, one more healthy
comparison participant than the image folders. Ages in the table run from 18 to 27, with a mean of about 21. The table
also carries eating disorder, anxiety, depression, emotion regulation and attachment scores.

## Acquisition

All scans were made on one GE Discovery MR750 at 3 T at the King's College London Centre for Neuroimaging Sciences,
using a 12-channel head coil. The T1w images are MPRAGE with a 256 by 256 matrix, 270 mm field of view and 1.2 mm
slices. The paper also describes a task fMRI run with 491 volumes per participant, but the functional data are not
part of this release. Data are organized in BIDS.

## Annotations

There are no image labels. Group membership comes from a structured clinical interview (SCID-5-RV).

## Known limitations

- Only T1w images are shared; the fMRI data and facial video recordings analysed in the paper are not.
- Women only, right-handed only, from a single scanner.
- The anorexia group was not split by subtype or illness duration; the paper did not assess either.
- No JSON sidecars accompany the images, and the dataset README is empty.

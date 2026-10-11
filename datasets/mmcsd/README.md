MMCSD pairs preoperative cervical spine MRI and CT with neck pain outcomes for patients operated on for cervical
spondylosis at the First Medical Center of the Chinese PLA General Hospital. The authors built it so that deep learning
models can be trained to predict whether neck pain persists after surgery, and they suggest it for self-supervised
pretraining and MRI-to-CT synthesis as well. A baseline 3D DenseNet121 trained per sequence reached an accuracy of 0.74
on sagittal T2-weighted images.

## Composition

The cohort is 250 patients treated between January 2019 and December 2022. Inclusion required a diagnosis of
cervical spondylotic myelopathy (108) or radiculopathy (122), with 20 of mixed type, anterior cervical discectomy and
fusion or corpectomy and fusion, and a neck pain score of at least 3 on the visual analogue scale. Mean age is 54.8
years (SD 10.7). Each patient has five image volumes: axial CT in bone window and in soft tissue window, sagittal
T1-weighted and T2-weighted MRI, and axial T2-weighted MRI. The Synapse page counts 3,289 image slices in total. A
spreadsheet holds sex, age, diagnosis, surgical approach and levels, and the pain score before surgery and one year
after. A fixed split assigns 200 patients to training and 50 to testing.

## Acquisition

MRI came from 13 scanners by United Imaging, GE, Philips, Siemens and Alltech, at 3 T for 143 patients and 1.5 T for
107. CT came from five scanners by Philips, GE, United Imaging and NMS, most often a Philips iCT 256. The paper lists
sequence and CT parameters per vendor. Volumes were cropped to the cervical spine: MRI keeps 8 to 12 slices per
sequence, and CT was subsampled at 1:10 to 1:20 to 10 to 20 slices. Files are NIfTI with identifying header fields
removed.

## Annotations

There are no segmentations. The label is the postoperative pain outcome; the baseline treats any neck pain score
above 0 at one year as persistent pain.

## Known limitations

- One hospital and only surgical patients with neck pain, so the cohort does not represent cervical spondylosis in
  general.
- CT is heavily subsampled and MRI is cropped, so the volumes are not full diagnostic series.
- The sex counts in the paper's text and Table 5 are swapped (134 female or 134 male), so they are left out here.

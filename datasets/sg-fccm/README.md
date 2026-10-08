SG-FCCM is a set of susceptibility-weighted brain MRI scans of patients with familial cerebral cavernous
malformation, a hereditary disease that produces many small, blood-filled vascular lesions in the brain. A group from
Fuzhou University and the First Affiliated Hospital of Fujian Medical University in China built it to develop a
pipeline that annotates, segments, counts and measures the lesions and compares them between two examinations of the
same patient. The code and trained U-Net weights are on GitHub; the images and masks are not, and the preprint
contains no data availability statement.

## Composition

101 SWI volumes from 73 patients, of whom 26 have a scan at enrolment and another one year later. The volumes were cut
into 4,089 2D images of 768 x 768 pixels. The paper split these images at random into 3,289 for training, 400
for validation and 400 for testing, and does not say whether the split kept each
patient in one set. Age, sex and genotype
are not reported.

## Acquisition

All volumes come from one SWI protocol: TR 31 ms, TE 7.2 ms with an echo spacing of 6.2 ms, field of view 200 x 230
mm, matrix 384 x 332, 130 slices of 2 mm. The preprint names neither the scanner nor the field strength.

## Annotations

Lesions were segmented as 2D masks per slice. For 1,579 images from 39 volumes, annotators drew boxes around lesions
and turned them into masks with the Segment Anything Model or a threshold inside each box; physicians accepted 1,378
of these. The rest were labelled by repeatedly training a segmentation network and keeping the predictions that passed
screening. Doctors corrected the 561 masks that stayed unsatisfactory by hand.

## Known limitations

- The data are not shared and no terms exist; access, if any, is at the authors' discretion.
- Counts come from the arXiv preprint (v1). The journal version reports a different Dice score in its abstract and
  may describe the data differently; its full text was not checked.
- Masks are partly model-generated, and a random slice-level split can place slices of one patient in both training and
  test sets.
- Scanner, field strength and demographics are unknown.

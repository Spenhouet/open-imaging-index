The Southwest University Adult Lifespan Dataset (SALD) is a cross-sectional sample of healthy adults covering ages
19 to 80, collected by Jiang Qiu's group at the Brain Imaging Center of Southwest University in Chongqing, China,
between 2010 and 2015. It was released through the International Neuroimaging Data-sharing Initiative (INDI) and
described in a Scientific Data paper in 2018. Its purpose is to chart how brain structure and resting-state function
change across adulthood in a non-Western sample and to give an independent set for replicating ageing findings.

## Composition

The release holds 494 participants. Every participant has a T1-weighted anatomical image, and 493 of them also have
an eight-minute resting-state fMRI run. Young adults were drawn from the university's student body, many middle-aged
participants from its staff and the rest from nearby communities, so women in their twenties are overrepresented.
A spreadsheet gives age, sex and Edinburgh handedness scores plus quality measures from the Preprocessed Connectomes
Project QA protocol for each scan. Data are in BIDS on a public S3 bucket and as ten compressed archives of about
23.5 GB in total.

## Acquisition

All scans come from one 3 T Siemens Trio. The sagittal MPRAGE has 176 slices of 1 mm isotropic voxels, TR 1900 ms,
TE 2.52 ms and TI 900 ms. The resting-state run has 242 gradient-echo EPI volumes of 32 axial slices, TR 2000 ms,
TE 30 ms and 3.4 x 3.4 mm in-plane voxels. Participants kept their eyes closed. Anatomical images were defaced with
pydeface.

## Annotations

There are no image labels. Phenotypes are limited to age, sex and handedness, with automated QA metrics.

## Known limitations

- Single site and single scanner, so it offers no scanner variability.
- The age and sex distribution is uneven: few participants in their thirties and only one above 79.
- The paper gives 308 females and 187 males, one more than the 494 participants. The released spreadsheet lists 307
  females.
- The paper reports a 90 degree flip angle for the MPRAGE, while the scanner protocol sheet on the release page shows
  9 degrees.
- All scans were released regardless of quality. Users choose their own exclusion criteria from the QA metrics.
- Task fMRI was acquired for subgroups but is not part of the release.

This OpenNeuro release holds the raw MRI behind a study from the University of North Carolina at Greensboro on
mnemonic discrimination, the ability to tell a remembered object apart from a similar but new one. The authors used
connectome-based predictive modeling to relate resting-state connectivity in the default mode network, including
hippocampal subregions, to performance on the Mnemonic Similarity Task measured outside the scanner. They report
that this connectivity predicted discrimination, and more strongly in younger than in older adults. The data are
shared under CC0 and were funded through the NIA Scientific Research Network on Decision Neuroscience and Aging.

## Composition

62 cognitively healthy, right-handed adults took part: 34 younger adults aged 18 to 32 (mean 22.2) and 28 older
adults aged 61 to 80 (mean 69.8). Each group has 20 women. Subject ids starting with 10 mark younger and ids
starting with 20 mark older participants. Every participant has one T1-weighted image and one resting-state run,
with no session folders.

## Acquisition

All scans were acquired on one Siemens Trio 3T scanner at the Joint School of Nanoscience and Nanoengineering in
Greensboro. The structural image is a sagittal MPRAGE with isotropic voxels (TR 2.3 s, TI 0.9 s). The
resting-state run lasts about ten minutes and uses 2D echo-planar imaging with 32 slices of 4 mm (TR 2 s, TE 30
ms), phase encoded anterior to posterior.

## Annotations

There are no image annotations.

## Known limitations

- No participants.tsv is shared, so age, sex and cognitive scores are available only as group summaries in the
  README; individual group membership follows from the subject id.
- The README lists connectivity matrices, behavioral scores and scripts, but the OpenNeuro repository contains only
  the raw T1w and resting-state images. The authors point to OSF (osf.io/f6vg8) for the other material.
- No field maps are included, and the sample is small for age-group comparisons.

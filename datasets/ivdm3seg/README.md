IVDM3Seg is the dataset of the MICCAI 2018 challenge on automatic localization and segmentation of intervertebral discs
from 3D multi-modality MR images, held on 16 September 2018 in Granada together with the workshop on Computational
Methods and Clinical Applications for Spine Imaging. Guoyan Zheng (University of Bern), Daniel Belavy (Deakin
University) and Shuo Li (University of Western Ontario) organized it, and SpineWeb lists it as Dataset 14. The challenge
paper by Zeng et al. compares 8 submitted methods, run as Docker containers by the organizers.

## Composition

12 subjects, each scanned at two stages of a study on the effect of prolonged bed rest (a spaceflight simulation) on the
lumbar discs. This gives 24 multi-modality data sets. Each data set has four aligned 3D volumes, for 96 volumes in
total, and covers at least 7 discs of the lower spine. The agreement form places the discs between T11 and L5. Images
and masks are NIfTI files. The training part, released on 15 March 2018, holds 16 data sets from 8 subjects with their
masks. The remaining data served as the hidden test set for the on-site competition. No age, sex or health status is
given.

## Acquisition

All scans were made on a 1.5 T Siemens scanner with a Dixon protocol, which reconstructs in-phase, opposed-phase, fat
and water volumes from one acquisition. Sequence parameters, voxel size and site are not stated on the challenge pages.

## Annotations

Every disc has a manual reference segmentation, stored as one binary mask volume per data set. The challenge asks for
the centre of each of the 7 discs (localization) and a disc versus background labelling (segmentation), ranked by Dice,
average surface distance and localization distance. The pages do not say who drew the masks.

## Known limitations

- Small: 12 subjects from one scanner type and one protocol, and only 8 subjects are released.
- Test masks are held by the organizers and are not distributed.
- No demographics, acquisition parameters or annotation protocol are published on the challenge pages.
- The SpineWeb host no longer resolved when this entry was checked on 2026-10-09; its Dataset 14 entry was read from an
  Internet Archive copy of June 2024.

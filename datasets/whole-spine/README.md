This OpenNeuro dataset (ds005616) pairs large field-of-view anatomical MRI, reaching from the head down to the torso,
with tissue segmentations and simulated B0 field maps. Groups at Polytechnique Montreal and Aix-Marseille Universite
assembled it so that shim coils for brain and spinal cord imaging can be designed and tested against realistic
susceptibility-induced field variation across many body shapes. The first snapshot appeared in November 2024; this
entry describes snapshot 1.1.4 from June 2026.

## Composition

participants.tsv lists 62 healthy volunteers, 32 men, 18 women and 12 without recorded sex, aged 21 to 56 years
(mean 27.1). The README and the ISMRM 2025 abstract describe 60 participants. In the file tree, 59 subject folders
hold raw images: 55 have a T1-weighted and a T2-weighted scan, 3 only a T1-weighted scan and 1 only a T2-weighted
scan. Simulated field maps and susceptibility maps exist for 60 subjects, including 3 whose raw images are not in the
release.

## Acquisition

Volunteers were scanned at 3 T on two Siemens systems, a MAGNETOM Tim Trio in Montreal and a Verio in Marseille,
with head, neck and spine coils. The T1-weighted scan is an MPRAGE at 1 mm isotropic resolution covering the head,
neck and torso including the lateral parts of both lungs.

## Annotations

The derivatives hold automatic segmentations of body, brain, skull, eyes, sinuses, ear canals, trachea and lungs
(TotalSegmentator MRI and SAMSEG), and of spinal cord, spinal canal, vertebrae and discs (TotalSpineSeg), merged into
a single label map after cleanup. Spinal cord segmentations on the T2-weighted scans were updated with a newer model
and corrected by hand in version 1.1.0, and manual disc labels are included. Each label was given a magnetic
susceptibility value, and the field map was simulated by dipole convolution in the Fourier domain. A stenosis column
in participants.tsv lists the levels of spinal canal narrowing noted by one rater.

## Known limitations

- Participants are mostly in their twenties, and sex and age are missing for 12.
- Subject counts differ between the README (60), participants.tsv (62) and the image folders (59).
- Segmentations are automatic and field maps are simulated, not measured.

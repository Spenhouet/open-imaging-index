A set of brain templates built from portable ultra-low-field MRI at 64 mT, made at Monash Biomedical Imaging in
Melbourne. Templates in common use, such as MNI152, come from 1.5 T and 3 T scans, and their contrast and resolution
differ from what a 64 mT point-of-care scanner produces. The authors scanned 100 healthy adults, registered the scans
to one another and averaged them into T1- and T2-weighted reference spaces for three age groups. The templates,
SynthSeg label maps of each template and a table of regional volumes are on Zenodo under CC BY 4.0, and the pipeline
code is on GitHub under the MIT License. The individual scans are not released.

## Composition

100 adults without known neurological or psychiatric disorders, 44 men and 56 women, each with a T1- and a
T2-weighted scan. They are split into a young group aged 18 to 40 (47 people), a middle group aged 41 to 60 (27) and
an older group aged 61 to 81 (26); the older group was stretched by one year to keep a single 81-year-old
participant. The Zenodo record contains six template volumes (two contrasts by three age groups), a segmentation of
each with 33 regions and a merged version with 18 bilateral regions, and one CSV with the regional volumes of all six templates.

## Acquisition

All scans come from a Hyperfine Swoop 64 mT permanent-magnet scanner with an 8-channel head coil, across vendor
software versions 8.4.1, 8.5.1 and 8.6.0. T1-weighted images used an axial inversion recovery spin-echo sequence
(TR 1500 ms, TE 6 ms, TI 300 ms) and T2-weighted images an axial spin-echo sequence (TR 2000 ms, TE 203.6 ms), both
with 5 mm slices and the vendor's deep learning reconstruction. Processing used FSL FAST bias correction, FSL BET
skull stripping, resampling to 1 mm isotropic voxels, ANTs affine registration and five rounds of SyN nonlinear
registration with averaging.

## Annotations

The template label maps were produced automatically with SynthSeg+. There are no manual annotations.

## Known limitations

- Only group averages are shared; subject-level images, ages and sexes are not available.
- Single scanner model and site, so the templates fit Hyperfine Swoop data best.
- 5 mm slices make the source data strongly anisotropic, which resampling does not undo.
- The age groups are uneven, with fewer people in the middle and older groups.

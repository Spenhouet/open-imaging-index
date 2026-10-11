This OpenNeuro release holds the raw imaging of the verb generation project within the Oxford BOLD study (Brain
Organisation in Language Development) at the University of Oxford. Children lay in the scanner, saw pictures of
objects and said aloud an action that goes with each object. The study was a registered report testing whether
children with developmental language disorder (DLD) show weaker or less left-lateralised activity in frontal language
areas and the striatum than typically developing children. It was funded by the UK Medical Research Council and shared
in September 2020 under a CC0 waiver.

## Composition

The release has 147 subject folders, each with one T1-weighted scan, one verb generation BOLD run, its single-band
reference image and a fieldmap. No participants table is included, so group, sex and age are not attached to the
images. The paper reports an analysed sample of 143 children aged 10 to 15: 50 with DLD, 67 typically developing and 26
with a history of speech and language problems who did not meet the DLD criteria. Group-level statistical maps from
the paper are shipped as derivatives. Neuropsychological scores are on the Open Science Framework, not in this release.

## Acquisition

All scans come from one 3T Siemens Prisma with a 32-channel head coil. The functional run follows the ABCD study
parameters: multiband factor 6, TR 800 ms, 2.4 mm isotropic voxels, 325 volumes in about 4.5 minutes, with active
noise cancellation so that spoken responses could be recorded. A 1 mm MPRAGE and a B0 fieldmap were acquired in the
same session. The dataset README states that the group maps were computed from the original scans, which
implies the shared images are defaced.

## Annotations

There are no image annotations. Derivatives contain group z-statistic maps for each group, the group contrasts and two
neuropsychological factors.

## Known limitations

- No participant metadata ships with the images, so diagnosis, sex and age cannot be linked to subjects from this
  release alone.
- Single site and scanner, one short task run per child.
- The released subject count (147) differs from the analysed sample (143); the paper does not map the extra folders.
- Other scans from the same sessions (resting state, diffusion, multi-parameter mapping) are not part of this release.

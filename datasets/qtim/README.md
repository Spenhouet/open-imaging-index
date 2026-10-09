The Queensland Twin IMaging study scanned twins and their non-twin siblings in Queensland to measure how strongly genes
shape brain structure, function and connectivity. The study was run by QIMR Berghofer and the University of
Queensland. The data were released on OpenNeuro as ds004169 in 2022
under a CC0 waiver, with diffusion scans of the young adults added in snapshot 1.0.8 (July 2026). It suits
heritability, test-retest and normative studies of the young brain.

## Composition

Snapshot 1.0.8 holds 1,202 participants from 682 families (732 female, 470 male), aged 12 to 30 at the first scan.
According to the dataset README, 1,026 are young adults aged 18 to 30; the others are adolescents scanned at about 12
or 16 years. Every participant has a T1-weighted scan, 1,195 have n-back and/or resting-state fMRI and 697 have
diffusion imaging. A second session exists for 141 participants. The participants table flags 78 young adults rescanned after about
3.5 months for test-retest reliability and 62 adolescents rescanned about four years later. Derivatives
include FreeSurfer 5.3 measures, hippocampal subfield volumes and MRIQC and DSI Studio quality metrics.

## Acquisition

All scans come from one 4 T Bruker Medspec whole-body scanner; the image headers list Siemens as manufacturer. The T1w
image is a 3D MPRAGE at 0.9 mm isotropic resolution. Resting-state fMRI uses gradient-echo EPI with a 2.1 s TR. The diffusion protocol of the young adults used 94 gradient directions at b = 1159 s/mm² plus 11 b0
images. Faces were removed from the T1w images, and the data are organized in BIDS.

## Annotations

There are no image annotations. The participants table lists age, sex, handedness, a family identifier, the T1w
orientation per session, the n-back timing version and the test-retest or longitudinal group.

## Known limitations

- Zygosity and other phenotypes are not in the open release. They need a data transfer agreement and ethics approval.
- A scanner software upgrade changed the T1w protocol mid-study from coronal to sagittal acquisition with fewer slices.
  A vascular pulsation artefact varies with that orientation.
- The first five n-back volumes precede the task and should be dropped; adolescents at 12 years had two n-back
  stimulus timings.
- Twins and siblings are not independent samples; the family identifier must be used in any split.
- All participants are right-handed, and the sample is about 61% female.

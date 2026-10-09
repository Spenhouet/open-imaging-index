The Beijing Enhanced sample is a retrospective release of the International Neuroimaging Data-sharing Initiative
(INDI). It was contributed by Yu-Feng Zang's group at the State Key Laboratory of Cognitive Neuroscience and Learning,
Beijing Normal University, and announced in December 2010. It revisits the Beijing_Zang site of the 1000 Functional
Connectomes Project and adds diffusion imaging and IQ, which makes it useful for relating resting-state function to
white-matter structure and cognition in young adults.

## Composition

The release holds 180 healthy participants drawn from a student community sample. Each has one resting-state fMRI
run of about 8 minutes, a defaced MPRAGE anatomical image and a diffusion tensor scan with 64 directions. Demographic
data come with every participant. Verbal, performance and full-scale IQ, measured with the Chinese revision of the
Wechsler Adult Intelligence Scale, are given for 55 of them. The data are distributed as NIfTI archives in four parts
plus an update package.

## Acquisition

The sequence sheet gives the protocol. Resting-state echo-planar images have 33 axial slices of 3 mm with a 0.6 mm
gap, a 64 x 64 matrix, TR 2000 ms and TE 30 ms. The sagittal MPRAGE has 128 slices of 1.33 mm, TR 2530 ms, TE 3.39
ms and TI 1100 ms. Diffusion images use single-shot EPI with 49 axial slices of 2.5 mm, b = 1000 s/mm² over 64
directions plus one b = 0 image. Scanner model and field strength are not stated on the release page or the sheet.

## Annotations

There are no image labels. Phenotypic data are demographics and, for a subset, IQ scores.

## Known limitations

- Part of the participants were already released in the Beijing_Zang sample of the 1000 Functional Connectomes
  Project, and the providers warn not to combine the two.
- In the first release, seven resting-state scans lacked time points and five DTI scans lacked directions, and two
  subjects carried a spurious second session. An 11-subject update replaced these and added a recovered anatomical
  scan.
- Sex and age counts are not published on the public pages.

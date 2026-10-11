This OpenNeuro dataset is the first-language (L1) adult part of the Reading Brain Project, run by Ping Li's Brain,
Language, and Computation Lab at Penn State. It holds brain MRI, eye tracking and behavioral data from 52 adult native
English speakers, collected to study how readers understand science texts. Snapshot 3.0.0 was published in January
2022 under CC0; the CHANGES file lists versions 1.0.0 to 3.0.0 as re-uploads within three days. The same data are
mirrored on brainlife.io as "The Reading Brain Project L1 Adults Version2", an import of snapshot 2.0.0.

The second-language counterpart is tracked as
[Reading Brain Project L2 Adults](https://spenhouet.com/open-imaging-index/datasets/reading-brain-l2-adults/)
(`reading-brain-l2-adults`).

## Composition

All 52 participants have a T1-weighted image, a multiband diffusion series, a resting-state BOLD run, five BOLD runs
recorded while reading expository texts with simultaneous eye tracking, and reverse phase-encoded field maps. The
demographics table lists 27 women and 25 men aged 18 to 40 years (median 22) and their field of study. A second
session two to three days later added five standardized cognitive and reading tests and a reading background
questionnaire; the questionnaire table, the eye tracking data and the reading texts are included.

## Acquisition

The paper describing the reading study reports a 3 T Siemens Magnetom Prisma Fit with a 64-channel coil, and thanks
the Center for NMR Research at Penn State Hershey Medical Center for data collection. The T1-weighted image is a
sagittal MPRAGE with 1 mm isotropic voxels. The reading runs used a multiband factor 6 EPI with TR 0.4 s, which lets
the BOLD signal be aligned to individual eye fixations. The resting-state run used an EPI with TR 2 s.

## Known limitations

- There is no data descriptor paper; the OpenNeuro README is short and refers to a methodology document on the lab
  website.
- The top-level JSON sidecars name Peking University as the institution, which conflicts with the Hershey site given
  in the acknowledgements; the L2 release sidecars carry the same institution.
- The study paper recruited 62 people and analysed 51; the release has 52 subjects, and which exclusions apply to the
  shared data is not stated.
- Field maps and physiological recordings are not counted in the scan totals.

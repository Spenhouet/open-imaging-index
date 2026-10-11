This OpenNeuro dataset is the second-language (L2) adult part of the Reading Brain Project, run by Ping Li's Brain,
Language, and Computation Lab at Penn State. It holds brain MRI, eye tracking and behavioral data from 56 adults whose
native language is Mandarin Chinese, collected to study how people understand science texts they read in English as a
second language. The snapshot 1.0.0 was published in November 2021 under CC0. The OpenNeuro curators note that the
same data were earlier shared as ds002317 and were uploaded again for privacy reasons.

Other releases of the Reading Brain Project tracked in the index requests:

- L1 Adults on OpenNeuro, ds003974 ([#746](https://github.com/Spenhouet/open-imaging-index/issues/746))
- L1 Adults Version2 on brainlife.io ([#739](https://github.com/Spenhouet/open-imaging-index/issues/739))

## Composition

Each of the 56 participants has a T1-weighted image, a multiband diffusion series, a resting-state BOLD run, five
BOLD runs recorded while reading texts with simultaneous eye tracking, and reverse phase-encoded field maps. Half of
the participants lived in the United States and were scanned in Hershey, Pennsylvania; the other half lived in China
and were scanned in Beijing. The demographics table lists 30 women and 26 men aged 19 to 38 years (median 24) and
their field of study. A second session two to three days later added five standardized cognitive and reading tests and questionnaires; these tables, the eye tracking data and the reading texts are included.

## Acquisition

The top-level JSON sidecars describe a 3 T Siemens Prisma with a 64-channel head and neck coil. The T1-weighted image
is a sagittal 3D MPRAGE with 1 mm slices. Diffusion used a multiband 2D EPI with 2 mm slices. The resting-state run
used an EPI with TR 2 s, and the reading runs used a multiband factor 6 EPI with TR 0.4 s and 4 mm slices.

## Known limitations

- There is no data descriptor paper; the OpenNeuro README is short and refers to a methodology document on the lab
  website.
- The README places subjects 1 to 28 in Hershey and 29 to 56 in Beijing, but the demographics table labels subjects 1
  to 28 as Beijing and 29 to 56 as Penn State, so the site of each subject is ambiguous.
- The shared sidecars name Peking University as the institution and are not split by site, so the scanner used in
  Hershey is not documented separately.
- Health status of participants is not stated.

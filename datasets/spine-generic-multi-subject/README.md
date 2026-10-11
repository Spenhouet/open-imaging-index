The Spine Generic multi-subject database collects cervical spinal cord MRI from healthy volunteers, scanned at
centers around the world with one consensus protocol for quantitative spinal cord imaging. The project, led from
Polytechnique Montreal, measured how much cord metrics vary within and across sites and manufacturers, and
published normative values. The data first appeared as OpenNeuro ds001919 in 2019 and is now maintained as a
git-annex repository on GitHub with versioned releases archived on Zenodo; release r20250314 is described here.

## Composition

Release r20250314 lists 267 participants, 125 women and 142 men, aged 19 to 56 years (median 29). The 2021 data
descriptor analysed 260 of them from 42 centers, with a median age of 28. Most sites scanned six participants,
three men and three women. Every participant has a T1-weighted MPRAGE-type scan, a T2-weighted 3D fast spin echo
scan, a multi-echo gradient echo (T2\*-weighted) scan and a diffusion-weighted scan of the cervical cord. 259 also
have the magnetization transfer series (MT on, MT off and a T1-weighted gradient echo) used to compute MT ratio and
MT saturation. A later radiological review of the T2-weighted scans labelled 62 participants as having asymptomatic
mild cord compression and 2 as having degenerative cervical myelopathy.

## Acquisition

All sites used the spine generic protocol at 3 T, built from product sequences on GE, Philips and Siemens systems.
According to participants.tsv, 180 participants were scanned on Siemens, 50 on Philips and 37 on GE scanners. T1-weighted and
T2-weighted scans are defaced.

## Annotations

The derivatives folder holds spinal cord segmentations for every contrast (produced with the Spinal Cord Toolbox), manually placed intervertebral disc labels on the T1w and T2w scans, soft
segmentations, and smaller sets of gray matter, cerebrospinal fluid, spinal canal and nerve rootlet labels.

## Known limitations

- Participants are mostly young adults; older ages are sparse.
- A few sites deviated from the protocol (for example a longer repetition time for the MT scans), and some scans
  have motion or repositioning artifacts; the repository tracks these as data-quality issues.
- Centers with several scanners could rescan the same people on each, so site ids are not always independent.
- The license field in dataset_description.json (CC0) disagrees with the repository LICENSE and Zenodo record
  (CC BY 4.0).

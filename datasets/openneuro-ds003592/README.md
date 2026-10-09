This release comes from a two-site cross-sectional study of cognitive aging led by R. Nathan Spreng and Gary Turner.
Healthy younger and older adults were tested on a large battery of cognitive, socioemotional and personality measures
and then scanned with structural MRI and multi-echo resting-state fMRI. The imaging data sit on OpenNeuro as ds003592
under CC0, and demographic and behavioral scores are on OSF (osf.io/yhzxe). The study suits work on age differences in
brain networks, multi-echo denoising, brain-behavior associations and white matter hyperintensities in older adults.

## Composition

301 participants passed quality control: 181 younger adults aged 18 to 34 and 120 older adults aged 60 to 89. 238
were scanned at Cornell University in Ithaca, New York, and 63 at York University in Toronto. Every participant has a
T1-weighted MPRAGE and two 10-minute multi-echo resting-state runs on separate sessions. T2-FLAIR is present for 251
participants in the current snapshot. Pulse and respiration recordings exist for a subset scanned at Cornell. 283
participants completed the in-lab NIH Toolbox and auxiliary cognitive tests, and 253 completed the online
questionnaires.

## Acquisition

Cornell used a 3T GE Discovery MR750 and York a 3T Siemens TimTrio, both with 32-channel head coils. Resting-state
runs are three-echo EPI with TR 3 s and about 3 mm voxels; T1w images are 1 mm isotropic. FLAIR slices are 3 mm thick.
Structural images were defaced. Data are organized in BIDS.

## Annotations

There are no image labels. The paper reports FreeSurfer volumes, white matter hyperintensity estimates from the LST
lesion prediction algorithm for 105 older adults and fMRI quality metrics as technical validation, but these
derivatives are not part of the OpenNeuro release.

## Known limitations

- Participants were screened for health and cognition and all are right-handed, so the sample is not population-based.
- Sources disagree on the FLAIR count: 258 in the paper, 246 in the OpenNeuro README and 251 subjects with FLAIR files.
- Each site used one scanner from a different vendor, so site and vendor effects are confounded.
- Twelve FLAIR scans and one resting-state run have a non-standard number of slices or volumes, flagged in participants.tsv.
- Some participants also appear in the earlier OpenNeuro dataset ds000210.
- A 2024 author correction fixed descriptive statistics for one cognitive test (Trails B minus A).

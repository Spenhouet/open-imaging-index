The Human Connectome Project Young Adult study, run by the WU-Minn consortium with data collection from 2012 to 2015, mapped brain structure
and connectivity in healthy adults aged 22 to 35 with imaging protocols that pushed resolution and speed well beyond
standard practice. Its 1200 Subjects Release (S1200, March 2017) is the final release of new participants and remains
a reference dataset for connectivity, cortical parcellation, brain-behavior and heritability research.

## Composition

The release covers 1,206 participants with behavioral and demographic data, 1,113 of them with 3T MRI. Participants
come from families with twins and non-twin siblings: 168 monozygotic and 103 dizygotic twin pairs by the manual's count.
Subsets were also scanned at 7T (184 people, mostly same-sex twin pairs) and with MEG (95), and 46 people repeated the
full protocol as a retest set. Each 3T session set includes T1w and T2w structural scans, resting-state and task fMRI
and multi-shell diffusion MRI. Genotypes for 1,142 participants are on dbGaP. The 2025 reprocessing provides
processed data for 1,071 participants and unprocessed data for all 1,113.

## Acquisition

All 3T data were acquired at Washington University on one customised Siemens "Connectome Skyra" with a stronger
gradient insert and a 32-channel head coil, using the same protocol for everyone. Diffusion used three shells (b=1000,
2000 and 3000 s/mm2). The 7T data were acquired on a Siemens Magnetom 7T at the University of Minnesota. Data are
shared unprocessed and after the HCP minimal preprocessing pipelines, in NIfTI and CIFTI grayordinate formats.

## Annotations

No manual labels. Derived products include FreeSurfer-based surfaces, MSMAll cortical alignment, ICA-FIX cleaned
resting-state data, group-average connectivity and parcellations. A quality-control flag marks participants with
notable anatomical or data issues.

## Access tiers

Imaging data and most behavioral data are open access after accepting the Open Access Data Use Terms on ConnectomeDB.
Sensitive items such as family structure, exact age and handedness are restricted data and require a separate
application and the Restricted Data Use Terms, which limit how those items may appear in publications.

## Known limitations

- Twins and siblings are not independent samples; family structure is needed for correct statistics and is restricted.
- Only healthy young adults are included.
- Diffusion data from releases before S1200 should not be mixed with the reprocessed S1200 diffusion data.

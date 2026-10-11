This OpenNeuro dataset shares the perfusion and blood-brain barrier (BBB) maps behind a lifespan study from the
Laboratory of FMRI Technology at the University of Southern California. Shao and colleagues used diffusion-prepared
pseudo-continuous arterial spin labeling (DP-pCASL), a contrast-free MRI method, to measure cerebral blood flow (CBF),
arterial transit time (ATT) and the water exchange rate across the BBB (kw) in cognitively normal people. They report
that kw declines with age in a region-dependent way and that the decline in parietal and temporal regions is steeper
in men than in women. The data are released under a CC0 waiver.

## Composition

There are 186 participants aged 8 to 92 years: 97 women and 89 men. The paper describes 65 white, 27 Latinx, 47
African American and 47 Asian participants. Of 207 people recruited, 21 were dropped for missing demographic data or
severe image artifacts. Each subject folder holds a T1-weighted volume and, under a separate folder, CBF, ATT and kw
maps, an M0 image, and MATLAB files with age, sex, race and intracranial volume.

## Acquisition

Participants came from several cohorts: the USC MarkVCID study (older Latinx adults), a USC sickle cell trait study
(African American adults) and groups at the University of Maryland, the University of Kentucky and USC. All were
scanned on 3 T Siemens Prisma systems with 32- or 64-channel head coils. DP-pCASL used 3.5 x 3.5 x 8 mm voxels, 12
slices, a 1.5 s labeling duration and two post-labeling delays (0.9 s and 1.8 s) with two diffusion weightings each,
taking about 10 minutes. A 1 mm isotropic MPRAGE was acquired for segmentation and registration; its parameters varied
slightly between sites. Maps were computed with the group's LOFT BBB toolbox.

## Known limitations

Only derived maps and the M0 image are shared, not the raw label and control ASL series, so the quantification cannot
be redone with other methods. The toolbox that produced the maps is distributed on request under a material transfer
agreement. The study is cross-sectional, and the recruitment cohorts differ in age and ethnicity, so age and
ethnicity are partly confounded. There is no participants.tsv; demographics sit in per-subject MAT files.

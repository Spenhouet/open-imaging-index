This OpenNeuro dataset holds brain MRI of 64 bilingual adults scanned at the University of Reading. It was shared by
Vincent DeLuca and Christos Pliatsikas to study how differences in second-language experience, such as age of
acquisition, length of immersion and how much the second language is used at home and socially, relate to brain
structure and function. The first snapshot appeared in March 2019; the current snapshot 1.7.0 dates from June 2022
and is released under CC0.

## Composition

All 64 participants have a T1-weighted MPRAGE, one diffusion series, a resting-state BOLD run, a BOLD run during a
flanker task and a gradient echo field map. The participants table lists 49 women and 15 men, all right-handed,
aged 18 to 52 years (median 30). It also carries a score on the Oxford Quick Placement Test of English and several
log-transformed measures of second-language exposure and use. A folder excluded from BIDS validation holds reverse
phase-encoded diffusion scans for distortion correction, an extended demographics table, flanker reaction time data
and extra timing files.

## Acquisition

Every subject was scanned on the same 3 T Siemens Prisma (Prisma fit) with a 32-channel head coil, according to the
JSON sidecars. The T1-weighted image is a sagittal 3D MPRAGE with 0.7 mm slices, released twice per subject, once as
acquired and once as a second reconstruction labelled NORM. Diffusion used a multiband 2D EPI with 2 mm slices and
b-values of 0 and 1000 s/mm². Both BOLD runs used a multiband EPI with TR 1.5 s and 2 mm slices.

## Known limitations

- There is no data descriptor paper, so the OpenNeuro README is brief and the study design, inclusion criteria and
  flanker task details are not documented beyond the shared files.
- Health status of participants is not stated.
- Second-language measures are released already log-transformed for several variables.
- The sample is mostly female (49 of 64).

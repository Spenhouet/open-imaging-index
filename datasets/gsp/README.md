The Brain Genomics Superstruct Project collected a short structural and resting-state MRI protocol, saliva for DNA
and online behavioral tests from healthy volunteers who were already taking part in other studies on matched scanners
in the Boston area. Its first open data release, from Harvard University and Massachusetts General Hospital, covers
1,570 young adults scanned between 2008 and 2012 and is meant for large-sample work on normal brain structure,
functional networks and their relation to personality and cognition. It is hosted on Harvard Dataverse.

## Composition

All 1,570 participants are 18 to 35 years old (mean 21.5), and about 58% are women. Each has one T1-weighted scan and
at least one resting-state BOLD run; 1,139 have a second run. A separate archive holds 69 people scanned a second time
within six months for test-retest work. Spreadsheets give demographics, fMRI quality metrics and FreeSurfer
morphometrics computed before face blurring. Self-report measures exist for 926 people and cognitive tasks for 892. A
set of more sensitive phenotypes sits on the LONI archive under stricter terms. Genotypes were planned but are not part
of this release.

## Acquisition

Scans came from Siemens 3T Tim Trio scanners at Harvard and MGH, all with the 12-channel head coil. The T1w image is
the root mean square of a four-echo MPRAGE at 1.2 mm isotropic, taking about two minutes. Each BOLD run lasts about
six minutes at 3 mm isotropic with a 3 s TR, eyes open. Images are NIfTI, and anatomical scans were defaced by face
blurring.

## Annotations

There are no manual labels. FreeSurfer 4.5.0 outputs were produced automatically and only checked visually.

## Known limitations

- A convenience sample: many are college students, education and estimated IQ are above the population average, and
  about 62% are white non-Hispanic.
- Sessions with artifacts, low signal-to-noise or a large shift in head size after face blurring were dropped, so the
  sample is filtered on data quality.
- The scanner software version changed during collection (B13, B15, B17); it is recorded per session.
- Face blurring changes some regional morphometric estimates.

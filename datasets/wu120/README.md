The Washington University 120 (WU120) set holds resting-state fMRI and a T1-weighted anatomical scan from 120
healthy young adults scanned by the Petersen/Schlaggar group in Saint Louis. Jonathan Power and colleagues released
it alongside their 2017 PLoS One paper on how slice-timing correction (temporal interpolation) changes head-motion
estimates and the detection of motion artifacts. It was first shared through OpenfMRI and is now OpenNeuro
ds000243, organized in BIDS under a CC0 waiver.

## Composition

All 120 participants were right-handed, reported English as their first language and had no significant
neurological or psychiatric history. The participants table lists 61 women and 59 men aged about 18 to 32 (mean
24.7 years). Every subject has one MP-RAGE and one or two eyes-open resting-state runs (fixating a crosshair), 203
BOLD runs in total. The paper reports 346 ± 136 volumes per subject on average, about 14 minutes of rest data.

## Acquisition

Scans were collected on a Siemens MAGNETOM Tim Trio 3T scanner with a 12-channel head matrix coil. The BOLD runs
used an interleaved ascending echo-planar sequence with a repetition time of 2.5 s, an echo time of 27 ms and 4 mm
isotropic voxels in 32 slices. The MP-RAGE sidecar gives a repetition time of 2.4 s and a flip angle of 8 degrees.
The OpenfMRI curators defaced all anatomical images with pydeface; snapshot 1.0.0 (August 2025) re-defaced one
subject's T1w. MRIQC quality metrics are included as derivatives.

## Known limitations

- The 120 subjects were selected from about 200 Washington University scans because each keeps at least 120
  low-motion volumes, so the set under-represents high-motion people.
- Rest duration differs between subjects (7.5 to 30 minutes in the participants table), since the scans were pooled from several studies.
- The cohort is narrow: young, right-handed, English-speaking adults without patients.
- There are no image annotations beyond the MRIQC outputs.
- The curators note that a paper describing the data mentions two subjects with a different TR, but the submitter
  confirmed that all shared runs use the same TR.

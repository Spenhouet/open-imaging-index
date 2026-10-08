The Dallas Lifespan Brain Study follows cognitively healthy adults from their twenties to their late eighties to
study how brain structure, function and Alzheimer's disease pathology relate to cognition across adulthood, with deliberate
sampling of middle age. It was run by Denise Park's group at the University of Texas at Dallas with imaging at UT
Southwestern Medical Center. The complete three-wave data set is on OpenNeuro as ds004856 under a CC0 waiver; an
earlier subset of wave 1 had been shared through INDI under a non-commercial Creative Commons license.

## Composition

464 adults aged 21 to 89 entered the study from 2008; 338 came back for a second wave and 224 for a third, roughly
four to five years apart. About two thirds are women. The BIDS tree holds 969 imaging sessions. Each participant has
an MPRAGE T1w, FLAIR, 30-direction DTI, pseudo-continuous ASL and BOLD runs for a scene encoding task, a semantic
judgement task, a passive viewing task, rest and an optional hypercapnia challenge. 295 people have florbetapir
amyloid PET and 154 have flortaucipir tau PET (tau from wave 2 on). The phenotype folder adds cognitive scores,
surveys, APOE and other genotypes, FreeSurfer regional measures and PET SUVRs.

## Acquisition

Waves 1 and 2 used one Philips Achieva 3T scanner and wave 3 a newer Achieva 3T with the same 8-channel head coil and
protocol. Amyloid PET ran on a Siemens ECAT HR, tau PET at wave 2 on an ECAT HR+ PET/CT, and wave 3 PET partly or
fully on a Siemens Biograph mCT. Images are raw conversions to NIfTI, defaced with PyDeface or mri_deface.

## Annotations

There are no image labels. FreeSurfer 5.3 parcellations were manually edited and checked by a second team before the
regional values were extracted; only those values are shared, not the full FreeSurfer outputs.

## Known limitations

- Participants were screened for good health, right-handedness and an MMSE of at least 26. The sample is moderately
  well educated and 85% white at wave 1.
- A second cohort of 149 people aged 50 or older was added at wave 1 with different inclusion criteria.
- PET scanner changes between waves 2 and 3 led the authors to process SUVRs cross-sectionally.
- Subject-specific event timings of the words task were inaccurate; a study-wide timing file replaces them.

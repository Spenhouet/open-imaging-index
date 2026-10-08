The Consortium for Neuropsychiatric Phenomics (CNP) at UCLA studied memory and response inhibition across healthy
adults and several psychiatric diagnoses. Its imaging arm, the LA5c study, was released on OpenfMRI in 2016 and now
lives on OpenNeuro as ds000030 under a CC0 waiver. It is a common benchmark for transdiagnostic psychiatry, fMRI
preprocessing pipelines and MRI quality control.

## Composition

The current snapshot (1.0.0, April 2020) holds 272 participants aged 21 to 50: 130 healthy controls, 50 people with
schizophrenia, 49 with bipolar disorder and 43 with adult ADHD. Each person was scanned in two one-hour sessions.
One session included an MPRAGE T1-weighted scan, 64-direction diffusion imaging, a balloon analog risk task and a
paired-associate memory task; the other included resting-state fMRI, breath holding, stop-signal, spatial working
memory and task-switching runs. Not every participant completed every scan; the participants table flags which
ones are present. Extensive neuropsychological test results are in the phenotype folder.

## Acquisition

All data come from two 3T Siemens Trio scanners at UCLA (Ahmanson-Lovelace Brain Mapping Center and Staglin Center).
Functional runs used a 2 s TR echo-planar sequence with 4 mm slices. A matched-bandwidth T2-weighted scan was
collected but is not part of the release. Anatomical images were defaced with mri_deface before sharing, and the
data are organized in BIDS.

## Annotations

Diagnoses were made with the SCID for DSM-IV and an adult ADHD interview. There are no image annotations. The release
includes MRIQC quality metrics, diffusion quality ratings and a flag for a ghosting artifact; FreeSurfer and fMRIPrep
derivatives were published separately (Gorgolewski et al. 2017).

## Known limitations

- Inclusion was restricted by ethnicity (White non-Hispanic, or Hispanic/Latino) and to right-handed adults.
- The OpenNeuro description text gives older group sizes (138, 58, 49, 45) than the participants table and paper.
- The diffusion data of many subjects are affected by a vibration artifact of the Trio scanners of that era.
- Patients could stay on stable medication, which confounds group comparisons.

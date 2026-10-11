This dataset comes from a study at the FIDMAG Hermanas Hospitalarias Research Foundation in Barcelona that asked
whether patients with schizophrenia who hear voices respond differently to real speech in the auditory cortex. Patients
with frequent auditory verbal hallucinations, patients who had been free of them for at least six months and healthy
controls listened to spoken material during fMRI. The images are on OpenNeuro as ds004302 under CC0 and suit work on
speech and language networks, auditory cortex function and psychosis.

## Composition

71 adults are included: 25 healthy controls and 46 patients with a DSM-5 diagnosis of schizophrenia or schizoaffective
disorder, split evenly into 23 with hallucinations (AVH+) and 23 without (AVH-). AVH+ patients reported hearing voices
at least daily. 17 participants are female, and ages run from 19 to 66. All were right-handed, and all patients were
on antipsychotic medication. The groups were matched for age, sex and estimated premorbid IQ. participants.tsv gives
age, sex, premorbid IQ, group and, for patients, the PSYRATS hallucination score.

## Acquisition

Every participant has one T1-weighted structural volume and one task run, both from a 3T Philips Ingenia. The
functional run is a T2*-weighted EPI with 341 volumes at a repetition time of 2 s, 32 interleaved slices and 3.5 mm
in-plane resolution, lasting about 11 minutes. The task is a block design with six blocks each of word lists,
sentence lists and reversed sentences in Spanish, separated by white noise blocks. The structural image is a 1 mm fast
field echo volume.

## Annotations

There are no image labels. A shared events file gives block onsets per condition, counted from the sixth volume.

## Known limitations

- The first five volumes of each run were discarded in the paper's analysis but are kept in the files.
- The white noise blocks are listed in the events file but served as an implicit baseline in the paper.
- Patients were selected from larger samples (29 AVH+ and 36 AVH-) after exclusions for motion, attention and matching.
- Schizophrenia and schizoaffective diagnoses are not separated in the participant table.
- Only one session per subject; no longitudinal data.

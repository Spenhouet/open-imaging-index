This dataset holds the imaging from the first year of a longitudinal study of cognition in Parkinson's disease run
at New York University under James E. Galvin and funded by the Michael J. Fox Foundation. Participants who agreed to
optional neuroimaging had a resting-state fMRI session. The release on OpenNeuro (ds005892, January 2025, CC0)
accompanies an analysis by Aaron Kemp and colleagues in NeuroImage: Clinical that compared how often the brain
dwells in recurring connectivity states across the three groups and used sequences of those states to classify
them.

## Composition

Of 82 people who consented to the study, 62 were imaged. After seven were dropped for scanning or motion artifacts,
55 remain, and these are the 55 released subjects: 22 healthy controls, 18 people with Parkinson's disease and
normal cognition (PD-NC) and 15 with Parkinson's disease and mild cognitive impairment (PD-MCI). Groups were set by
consensus conference from a neurological exam, the Clinical Dementia Rating and neuropsychological tests (MoCA and
RBANS). Nobody had dementia, and all were right-handed. The participants table gives group, sex and age in whole
years; ages run from 60 to 94. Paper Table 1 also reports education, disease duration, MDS-UPDRS, Hoehn and Yahr,
MoCA and RBANS per group, but these scores are not in the release.

## Acquisition

All scans were made on one Siemens 3 T TrioTim at the NYU Center for Biomedical Imaging. Each subject has a 3D
T1-weighted MPRAGE (1 mm slices), one eyes-closed resting-state EPI run of 196 volumes at TR 2 s and TE 29 ms with
3.5 mm slices, and a gradient-echo field map (two magnitude images and a phase difference). People with Parkinson's
disease were scanned on their usual medication.

## Annotations

There are no image annotations. The only labels are the diagnostic group per subject.

## Known limitations

- The paper says the session also included T2-weighted and diffusion scans, but these are not part of the release.
- Clinical and cognitive scores are reported only as group summaries in the paper.
- The sample is small and comes from a single site and scanner.
- The participants table codes healthy controls as "Control", while participants.json lists the level as "HC".
- The paper is inconsistent about whether one artifact exclusion was from the PD-NC or the PD-MCI group.

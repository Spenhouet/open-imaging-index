This OpenNeuro release holds the MRI part of a project at the University of Graz on the psychology and neuroscience of
interest in true crime, meaning real crime stories told in books, podcasts, films, television and news. The project,
funded by the Country of Styria under its 2022 "Unconventional Science" call and run from January 2023 to May 2024,
asks what motivates true crime consumers, which traits they share and whether consumption relates to coping with fear
and stress, well-being and mental health. Corinna Perchtold-Stefan, Christian Rominger, Karl Koschutnig and Andreas
Fink published the scans under CC0 in February 2024; the current snapshot is 1.0.1 from March 2024, which updated the
participants file.

## Composition

The snapshot has 133 subjects with one session each: 88 female and 45 male, aged 18 to 65 years (median 24, most in
their twenties). participants.tsv holds only age and sex. Questionnaires administered in German (true crime
consumption and motives, morbid curiosity, Big Five, dark triad, depressive symptoms, trait anxiety, perceived stress,
resilience, worry, aggression, emotion regulation and others) and behavioral tasks on reappraisal and malevolent
creativity are shared on OSF (https://osf.io/phx9d/), not in this release.

## Acquisition

Scanning took place in Graz on a Siemens MAGNETOM Vida 3 T scanner. No task was run in the scanner. Each session has a
3D MPRAGE T1-weighted scan (0.9 mm slices, TR 1.97 s, TE 2.06 ms, TI 1 s), one resting-state BOLD run (TR 1.4 s, TE
30 ms, 2.5 mm slices) and one reverse phase-encoded EPI image for distortion correction. Data were converted to BIDS
with BIDScoin 4.2.1.

## Known limitations

- The README states that data of 2 of the 133 scanned participants had to be removed for quality reasons, yet the
  snapshot still lists 133 subjects; it is not clear whether those two are included.
- Extended questionnaire data exist for only 101 participants.
- Recruitment was through campus, press, social media and mailing lists, and the only stated exclusion was prior
  experience with the behavioral tasks, so the cohort is not screened as healthy and is skewed to young women.
- There are no derivatives and no image annotations.

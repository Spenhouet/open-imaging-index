Peelle and colleagues at Washington University in St. Louis scanned healthy young and older adults while they heard
single spoken words, to test whether aging changes how the brain recognises words heard in quiet. Each person did two
tasks in the scanner: attentive listening without a response, and repeating each word aloud. The images, together
with age, sex, handedness and some hearing thresholds, are on OpenNeuro as ds002382 under a CC0 waiver.

## Composition

Snapshot 1.0.1 (April 2022) holds 61 right-handed native English speakers: 29 young adults aged 19 to 30 and 32 older
adults aged 65 to 81. The participants table lists 36 women, 24 men and one person coded as another sex. Every
participant has one T1-weighted and one T2-weighted anatomical scan and four BOLD runs, two per task. Pure-tone
audiometric thresholds for both ears at 250 Hz to 8 kHz are filled in for 17 people, eight young and nine older.

## Acquisition

All data come from a 3T Siemens Prisma with a 32-channel head coil. The T1-weighted MPRAGE has 0.8 mm isotropic
voxels. The functional runs use a multiband factor of 8 and 2 mm isotropic voxels in a sparse design: each volume
takes about 0.77 s within a 3.07 s repetition time, leaving a quiet gap for the word and the spoken reply. Stimuli
were 240 monosyllabic words plus single-channel noise-vocoded words as an unintelligible baseline. Stimuli, scripts
and extracted data are on OSF, and group result maps on NeuroVault.

## Annotations

There are no image annotations. Event files mark word, noise and silent trials with word frequency and neighbourhood density, and in the
repetition runs they flag whether each reply was correct, as scored offline.

## Known limitations

- The sample is small and has no middle-aged adults, so age can only be treated as two groups.
- Hearing was measured in a minority of participants, which limits analyses of hearing loss.
- Older adults moved more during the repetition task, and the paper excluded many high-motion frames.
- Health and hearing status were self-reported.

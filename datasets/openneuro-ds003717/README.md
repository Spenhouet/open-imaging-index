This dataset comes from a Washington University in St. Louis study of how the brain handles seeing a talker's face
alongside hearing their voice. Young adults saw and heard recorded single words during fMRI: sound only, lip movements
only, and sound with video, the last also mixed into six-talker babble at four signal-to-noise ratios. The study found
stronger coupling between auditory, visual and motor regions when visual speech was present. The images are on
OpenNeuro as ds003717 under CC0 and suit work on multisensory integration, lipreading and speech perception in noise.

## Composition

65 adults were scanned and 5 were excluded from the fMRI analysis, leaving 60 participants in the release. All are
right-handed and aged 18 to 34 (mean 22.4). participants.tsv lists 45 women and 15 men. It also gives pure-tone
hearing thresholds for each ear from 250 to 8000 Hz for 48 participants; the other 12 have none.

## Acquisition

All scans come from a Siemens Prisma 3T with a 32-channel head coil in a single session. Each participant has a 1 mm
T1-weighted MPRAGE, a T2-weighted volume and six task runs of multiband EPI (acceleration factor 8) in a sparse
design, so that words played during silent gaps between volume acquisitions. Each run held blocks of five trials per
condition plus null trials with a fixation cross; on half of the trials the participant pressed a button to say
whether they had understood the word. A seventh run, in which participants read printed words aloud, is described in
the README but is not among the released files.

## Annotations

There are no image labels. Each run has an events file with the condition, the word presented and the button
response for every trial.

## Known limitations

- The README gives a repetition time of 3.07 s for the functional runs, while the BIDS sidecars state 2.47 s.
- Event durations before snapshot 1.1.0 were wrong; only the latest snapshot has corrected timings.
- The cohort is young, healthy and mostly female, so it does not cover age-related hearing loss.
- Hearing thresholds are missing for 12 participants.
- One session per subject; no longitudinal data.

This OpenNeuro release (ds005504) holds the task fMRI data behind a study of inhibitory control in young children
growing up in extreme poverty in Dhaka, Bangladesh. The children come from the Bangladesh Early Adversity Neuroimaging
(BEAN) project, a collaboration of Boston Children's Hospital, Harvard and the icddr,b. The study asked whether brain activity
during a Go/No-Go task varies with the child's exposure to psychosocial adversity and with maternal stress and
depression. The data are shared under a CC0 waiver. The README asks users to tell the study lead their research
question, and states that doing so does not affect access.

## Composition

The release contains 68 children aged 5 to 7 years (34 boys, 34 girls), a subset of the 260 BEAN participants who had
usable fMRI and questionnaire data and passed the motion and task accuracy criteria. They were drawn from two earlier
cohort studies in the Mirpur area of Dhaka (PROVIDE and CRYPTO). Each child has one T1-weighted scan and three runs of
the Go/No-Go task, with separate event files for correct and incorrect Go and No-Go trials. The participants table
gives sex, age in months, Go and No-Go accuracy, subscale and total scores of a childhood psychosocial adversity scale,
and maternal mental health scores (EPDS, PSS and TS).

## Acquisition

All scans were acquired on one 3T Siemens MAGNETOM Verio with a 12-channel head coil at the National Institute for
Neuroscience and Hospital in Dhaka. The T1-weighted image is a 1 mm isotropic MPRAGE. The functional runs are
gradient-echo EPI with a repetition time of 2 s and 3 x 3 x 4.8 mm voxels. In the task the children pressed a button
for a rooster and withheld the press for a chick, over 80 trials per run with 25% No-Go trials.

## Known limitations

- Single site and scanner, and a small sample from one low-income urban area.
- Only children who met motion and accuracy thresholds are included, so the release is not a random sample of the
  cohort.
- The coding of the Sex column is not documented; the sex split above comes from the paper.
- No derivatives, fieldmaps or resting-state data are part of the release.

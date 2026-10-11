This dataset holds the raw scans and behaviour from a study at South China Normal University and The Chinese University
of Hong Kong on how the brain builds new auditory categories during feedback training. Two groups of young adults
learned four categories of synthetic ripple sounds, one group a structure that can be split along a single acoustic
dimension (rule-based) and the other the same structure rotated by 45 degrees, which requires combining both
dimensions (information-integration). It is on OpenNeuro as ds003764 under CC0 and suits work on category learning,
auditory cortex representations, learning-related network change and prediction of individual learning success.

## Composition

60 native Mandarin speakers took part, 30 per learning group, 41 of them female. Ages run from 18 to 28 with a mean of
21.2 years. All were right-handed, had less than a year of music training and reported no psychiatric, neurological or
hearing problems. There is no participants.tsv; group, trial responses, accuracy, reaction times and stimulus timing
are in a behavioural spreadsheet under sourcedata.

## Acquisition

Each subject has one session on a 3T Siemens Tim Trio with a 12-channel head coil: one 1 mm MP-RAGE T1-weighted volume
and six functional runs, one per training block. The functional sequence is a sparse-sampling gradient echo EPI with a
2.5 s repetition time that leaves an 800 ms silent gap, in which the sound was played, followed by 1.7 s of
acquisition. It has 31 slices of 3.5 mm with a 1.1 mm gap and 3.5 mm in-plane voxels. Each run has 40 sound trials of
three repetition times plus ten silent trials, with jittered visual feedback after every response.

## Annotations

There are no image labels. Events files give sound and feedback onsets per run with category, response and accuracy. The release also includes the
stimulus generation code, analysis scripts, representational dissimilarity matrices and group statistical maps from
the original study.

## Known limitations

- Healthy young adults from one university community only.
- One session per subject; learning is tracked across runs within that session, not over days.
- There is no participant table with age and sex per subject.
- The images are uncompressed NIfTI files, and the group maps appear in both the derivatives and metadata folders.

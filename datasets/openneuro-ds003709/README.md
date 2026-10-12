This dataset comes from a National Institute of Mental Health study of how past outcomes shape momentary mood.
Adolescents, some with depression, played a gambling game inside the scanner and rated their mood at intervals while
the task adapted its rewards in real time to push mood up and down. The accompanying paper reports that outcomes
early in the task weigh more on mood ratings than recent ones (a primacy effect) and links this weighting to frontal
brain activity. The images are on OpenNeuro as ds003709 under CC0 and suit work on reward processing, mood dynamics
and adolescent depression.

## Composition

The release holds 51 participants aged 12 to 18 (mean 15.6), 40 female and 11 male. participants.tsv puts 31 in the
depression group, which covers current, ongoing or past depression, and 20 in the healthy volunteer group. It also
gives handedness and total scores on two self-report scales: the short Mood and Feelings Questionnaire for depressive
symptoms and the Snaith-Hamilton Pleasure Scale for anhedonia. The paper's in-scanner adolescent sample had 72
participants, so not all of them are in the shared data.

## Acquisition

Each participant had one session on a GE Discovery MR750 3T scanner at the NIH functional MRI facility with a
32-channel head coil. The session holds a 1 mm T1-weighted MPRAGE, three runs of echo-planar BOLD during the task
(repetition time 2 s, 240 volumes per run in the sidecars) and two short EPI scans with matching and opposite
phase encoding for distortion correction. Most runs also come with physiological recordings.

## Annotations

There are no image labels. Each subject has an events file describing the task trials and mood ratings.

## Known limitations

- The paper describes the BOLD runs with 47 slices, 2.5 mm in-plane resolution and a 75 degree flip angle, while the
  released sidecars list 41 slices, 3.75 mm pixel spacing and a 65 degree flip angle.
- 21 of the 72 adolescents in the paper are not in the release, and the README gives no reason.
- The depression group mixes current and past depression; diagnoses are not separated in participants.tsv.
- Most participants are female, and there is a single session per subject.

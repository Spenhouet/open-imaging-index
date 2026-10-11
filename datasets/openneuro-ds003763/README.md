This OpenNeuro dataset (ds003763) holds task fMRI from a heartbeat detection paradigm run at the Research Center of
Neurology in Moscow. The group used it to ask how the brain processes signals from inside the body, how that relates
to understanding emotions, and how it changes with age and white matter damage. During the Heart condition
participants counted their own heartbeats and pressed a button for each one they felt; during the Sound condition they
pressed for tones played at their individual heart rate. The data are shared under CC0.

## Composition

62 participants: 50 adults in an older group and 12 young healthy adults aged 18 to 24. The older group was recruited
without prior stroke or myocardial infarction and with at most moderate white matter hyperintensities (modified
Fazekas score of 2 or less). 50 participants are female. participants.tsv adds age, sex, depression and anxiety
scores, interoceptive accuracy, a cognitive screening score for some subjects and self-reported hypertension,
gastrointestinal disease, autoimmune thyroiditis and type 2 diabetes. Some participants also did a rubber hand
illusion experiment, and their proprioceptive drift and ownership ratings are included.

## Acquisition

All images come from a Siemens Verio 3T scanner. Each subject has one sagittal 1 mm T1-weighted MPRAGE and one
heartbeat detection run of gradient-echo EPI (TR 2 s, TE 21 ms, 3 mm slices). 58 subjects also have a field map
(two magnitude images and a phase difference image). Event files mark the task phases, and the stimulus presentation
script is included.

## Annotations

There are no image labels. Event files give condition and response phase onsets.

## Known limitations

- Only one task and one functional run per subject; no resting state or diffusion data are shared, although diffusion
  imaging was used in a related paper.
- The sample is mostly female, and the young group is small.
- participants.tsv lists two members of the older group aged 37 and 38, below the 40 to 65 range given in the README.
- Medical history columns are missing for 22 participants.
- One subject was removed in version 1.0.4 because of image artifacts.

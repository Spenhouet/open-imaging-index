This release comes from a study by Cheryl Grady's group at Baycrest Health Sciences in Toronto on how cognitive
control changes across adulthood. Healthy adults between 20 and 86 years old were scanned at rest and during three
tasks that each tap one part of cognitive control: go/no-go for inhibition, letter categorization with cue switching
for shifting, and n-back with 0, 1 and 2-back loads for working memory. The group used the data to study moment to
moment variability of the BOLD signal and functional network organization in relation to age. The images are on
OpenNeuro as ds005270 under CC0.

## Composition

158 adults took part, 99 female and 59 male. Participants were right-handed, fluent in English, free of major
psychiatric and neurological illness and head trauma, and scored above 26 on the MMSE. Every subject has a T1w and a
FLAIR image and resting-state, go/no-go and n-back fMRI runs. One subject ended the session early and lacks the task
switching run and diffusion data, and four more lack diffusion data because of an artifact or lack of time, so 153
have diffusion MRI. Task event files are included. Questionnaire and cognitive test scores are hosted on OSF, outside
this release.

## Acquisition

All subjects were scanned between 2016 and 2019 on one Siemens Trio 3T with a 12-channel head coil at Baycrest. A
session of about 90 minutes held FLAIR, a 10-minute rest run, a T1w MPRAGE, the three task runs in counterbalanced
order and diffusion imaging. Arterial spin labeling was acquired when time allowed and is flagged in
participants.tsv, but no perfusion images are part of the OpenNeuro release. Subjects practiced the tasks in a mock
scanner first.

## Annotations

There are no image labels. participants.tsv gives age, sex and which scans each subject completed.

## Known limitations

- Single site and scanner with an older Trio system.
- Screened healthy volunteers, so findings may not carry over to clinical groups.
- The ASL scans are not shared.
- The availability flags in participants.tsv do not always match the files (one subject flagged without a rest run
  has one).

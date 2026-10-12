Rogers, Peelle and colleagues at Washington University in St. Louis scanned young and older adults during a spoken word
repetition task to find out whether showing people their own head motion while they are scanned helps them hold still.
Motion was tracked in real time with FIRMM. One group saw a fixation cross that changed colour with framewise
displacement and got a motion score after each run, the other group got only verbal feedback from the staff. The
images, with age and sex, are on OpenNeuro as ds004285 under a CC0 waiver.

## Composition

Snapshot 1.0.0 holds 78 right-handed native speakers of American English aged 19 to 81. The preprint splits them into
48 young and 30 older adults, and into 56 with motion feedback and 22 without; the group sizes are unequal because
recruitment stopped early during the COVID-19 pandemic. Group membership is not part of participants.tsv. The
participants table lists 62 women and 16 men, while the preprint's group table adds up to 63 and 15. Each person has
one T1-weighted and one T2-weighted anatomical scan and six BOLD runs. The OpenNeuro README mentions 82 people tested;
78 are shared.

## Acquisition

Scans were done on a 3T Siemens Prisma with a 32-channel head coil. The T1-weighted MPRAGE has 0.8 mm isotropic voxels.
Functional runs use multiband EPI with factor 8 and 2 mm isotropic voxels in a sparse design: each volume takes 0.77 s
within a 3.07 s repetition time, so words in background noise and the spoken replies fall into quiet gaps. Participants
have 763 to 846 functional frames, median 794. Motion summaries and analysis scripts are in a separate GitHub
repository.

## Annotations

There are no image annotations. Event files give the onset of each word and noise trial with the word, its concreteness, frequency and neighbourhood density, and mark whether the reply was correct.

## Known limitations

- Feedback and no-feedback groups differ in size, and the older no-feedback group is small.
- Feedback group labels are not in the shared participant table.
- Hearing, handedness and health were self-reported.
- The study is described in a preprint that had not been peer reviewed when this entry was checked.

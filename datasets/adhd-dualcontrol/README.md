This OpenNeuro release (ds005899) holds the imaging data of a Stanford study on inhibitory control in children with
attention-deficit/hyperactivity disorder (ADHD). The study builds on the dual control model, which separates proactive
control (preparing to stop before a signal appears) from reactive control (cancelling a response once a stop signal
appears). Children performed a cued stop-signal task during fast multiband fMRI, and the authors compared how stable
trial-by-trial activity patterns were in children with ADHD and in typically developing children. The data are shared
under a CC0 waiver.

## Composition

The release contains 61 children aged 9 to 12 years: 26 with ADHD (10 girls, 16 boys) and 35 typically developing
controls (13 girls, 22 boys). They are the subset of 107 children recruited from the local community who completed
two task runs and passed the data quality and head motion checks. Every child has two task fMRI runs with event files.
Five children have no T1-weighted image in the release. The participants table gives group, age in whole years, a sex
code and the run numbers used.

## Acquisition

Scans were acquired on a 3T GE Signa scanner with a 32-channel head coil at the Richard M Lucas Center for Imaging at
Stanford University. Functional runs use multiband gradient-echo EPI with a repetition time of 490 ms. The structural
image is a spoiled gradient-recalled inversion recovery 3D sequence. In the task a cue before each trial signals
whether a stop signal can occur. Each run has 32 certain go, 32 uncertain go and 16 stop trials, with the stop-signal
delay adjusted by a staircase.

## Known limitations

- Single site and scanner, and a small sample.
- Only children who passed quality and motion criteria are included, so the release is not the full recruited cohort.
- The sex code in participants.tsv is not documented; the sex split above comes from the paper.
- The imaging files sit under an `openneuro/` folder rather than at the BIDS root.
- Children on stimulants had a washout period before testing; medication history is not part of the release.

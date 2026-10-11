This OpenNeuro release (ds003148) holds the raw MRI behind a Nature Communications study that tested whether
performance on intelligence tests reflects how flexibly the brain recruits its functional networks. Sixty adults
performed a battery of twelve cognitive tasks inside the scanner, one fMRI run per task, and the authors related the
task activation and connectivity patterns to individual differences in performance. The data are shared under a CC0
waiver. Processed data from the same study were deposited separately on figshare and are not part of this entry.

## Composition

The release contains 60 healthy adults (35 women) aged 18 to 38 years, mean age 22.95, recruited at and around the
University of Western Ontario. Each subject has one T1-weighted structural image and twelve task fMRI runs with event
files, giving 780 NIfTI volumes in total. The task labels in the file names are Digit, Feature, Grammatical, ML, Odd, Paired,
Polygon, Rotation, SOS, Spatial, Tree and Trouble. There is no participants table, so age and sex are only available as group figures from the paper.

## Acquisition

All scans were acquired on a single 3T Siemens TIM Trio at the institution recorded in the sidecars as Robarts, in London, Ontario.
Functional runs are gradient-echo EPI with a repetition time of 2 s, 36 slices of 3 mm, an 80 x 80 matrix and an echo
time of 30 ms; the first ten volumes of each run were discarded. Each run had three one-minute task blocks separated
by 20 s of rest, about 60 minutes of fMRI per person. The structural scan is a 1 mm MPRAGE. Anatomical images were
defaced with spm_deface.

## Known limitations

- Single site and scanner, and a small sample of young, mostly student-age adults.
- No participants.tsv: individual age, sex and task scores are not in the release.
- The README and paper give a flip angle of 90 degrees for the EPI, while the JSON sidecars state 50 degrees.
- Each task has only one run per subject, administered in a fixed order.
- No derivatives, fieldmaps or resting-state data are included.

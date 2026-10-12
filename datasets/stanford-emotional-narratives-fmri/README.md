This OpenNeuro release holds the raw MRI behind a study of empathic accuracy, the match between what a speaker feels and what a listener thinks they feel. Healthy adults in the scanner watched short videos of people describing positive and negative events from their own lives and moved a slider to rate, continuously, how positive or negative the speaker felt. The speakers had rated their own feelings on the same scale right after recording. From the observers' brain activity the authors trained one multivariate model that predicts the speaker's self-rating and one that predicts the observer's rating, and showed that the two align more closely when observers are accurate. The data are shared under CC0.

## Composition

The release has 100 subject folders with one session each. The paper describes the participants as 100 healthy adults from the Stanford University community, 59 women, 37 men and 4 who did not report gender, with a mean age of 25.2 years (SD 9.96); eligibility required an age of 18 to 65 and right-handedness. Each folder holds one T1-weighted scan and two functional runs of the task, labelled `empacc`.

## Acquisition

Scanning took place at the Stanford Center for Cognitive and Neurobiological Imaging on a 3 T GE Discovery MR750 with a 32-channel Nova Medical head coil. The anatomical scan is a 3D BRAVO T1-weighted sequence at 0.9 mm isotropic resolution. The functional runs are gradient-echo EPI with a TR of 2 s, TE of 25 ms, 46 interleaved slices and 2.9 mm voxels. Each run had 12 of the 24 video trials, which were shown as audiovisual, visual-only or auditory-only clips of 1 to 3 minutes, separated by 4 to 12 s of fixation.

## Known limitations

The release contains no participants table, events files or README, so age, sex and stimulus timing per subject are not in the imaging files; the paper points to an OSF project for the behavioural ratings and processed data. The paper states that a field map was collected before each functional run, but no field maps are in the release. The stimulus videos come from a separate video corpus and are not included. One participant saw duplicate trials because of a technical error.

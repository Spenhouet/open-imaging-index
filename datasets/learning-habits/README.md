Learning Habits is a task fMRI dataset from the Zurich Center for Neuroeconomics at the University of Zurich, built to
study how choices turn into habits over the course of learning. Hugo Fluhr, Viktor Timokhov and Stephan Nebe scanned
participants while they repeatedly picked one stimulus out of a pair and saw how many points each option was worth. The
raw BIDS data are on OpenNeuro as ds008039, released in June 2026 under a CC0 waiver. The Swiss National Science
Foundation funded the work through grants 207613 and 215002. No paper is linked from the dataset record.

## Composition

The release holds 70 participants with one session each. Subject numbers run from 01 to 73, with 11, 39 and 66 missing.
Every participant has a T1-weighted anatomical image, two runs of the learning task and
one run of the test task, and a phase and magnitude fieldmap set for each of the three functional runs. Five
participants have a second T1-weighted run, giving 75 anatomical and 210 functional images. Event files give the trial
timing of stimulus onsets, responses, chosen-stimulus highlighting, point feedback and missed responses. In the
learning phase, feedback showed the value of both stimuli in the pair.

## Acquisition

All images come from a 3T Philips scanner. Functional runs are 2D gradient-echo EPI with a repetition time of about
2.33 s, an echo time of 30 ms and 40 slices of 3 mm voxels with a 0.5 mm gap. The anatomical images were defaced
before release.

## Known limitations

- The participants table lists subject IDs only. Age, sex, handedness and health status are not shared.
- No inclusion criteria, recruitment details or behavioural results are documented in the record.
- All images come from a single 3T Philips scanner type in one study.
- Only raw data are shared; there are no preprocessed derivatives.

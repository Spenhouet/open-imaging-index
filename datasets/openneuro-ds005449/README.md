This OpenNeuro release holds the raw MRI behind a 2024 Imaging Neuroscience paper by Ehlers, Todd and colleagues. Young
healthy adults saw face images that were paired with touch on the skin: a soft brush stroke in the appetitive task and a
painful pressure in the aversive task. The study asked whether, after learning, the face alone brings back the sensory
or the emotional side of the touch, and tested this with representational similarity analysis of the fMRI patterns.
The data are in BIDS and anatomical images were defaced.

## Composition

The snapshot has 122 subject folders. Two of them contain only event files, so 120 people have images: 113 with a
T1-weighted scan and 115 with functional runs (108 with both). There are 610 functional runs across the pain, brush and
face-only conditioning tasks, a morphing-face task, a faces versus houses localizer, resting state and a set of
aborted runs labelled error. Per the participants table, the imaged group has 66 women and 34 men, with sex and age
missing for 20; reported ages run from 18 to 29. The paper recruited 121 people and analysed 71 after dropping 50 for
failed multi-echo denoising, missing files, motion or protocol deviation.

## Acquisition

All scans were made at Cornell University on a GE Discovery 3 T scanner with a 32-channel head coil. The anatomical
scan is a 1 mm MPRAGE. Functional runs use a multi-echo EPI with three echoes (11.7, 24.2 and 37.1 ms), a TR of 2 s and
3 mm isotropic voxels, and each echo is stored as its own file. The paper also mentions pulse and respiration
recordings, which are not part of the release.

## Known limitations

- Single site and a young student sample.
- Subject folders and the participants table do not match: some table rows have no images and three imaged subjects
  have no row.
- Seven subjects lack an anatomical image because of acquisition errors, and runs labelled error have no timing files.
- The morphing, localizer and resting runs were not used in the paper.

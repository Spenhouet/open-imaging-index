This dataset holds the awake infant fMRI data that the Turk-Browne lab collected while developing a protocol for
scanning infants who are awake and watching cognitive tasks, rather than sedated or asleep. Ellis and colleagues
describe the apparatus, the session procedure, an experiment menu system and an analysis pipeline in Nature
Communications (2020), and deposited the anatomical and functional MRI of both study cohorts on Dryad under CC0, first in
July 2020 and last updated in August 2021.

## Composition

The paper reports 26 infants who took part in 45 sessions and completed 57 experiments. Cohort I, scanned at
Princeton University, has 11 infants (5 female) aged 6 to 33 months over 23 sessions, with 1 to 8 sessions per
infant. Cohort II, scanned at Yale University, has 15 infants (8 female) aged 4 to 10 months over 22 sessions, with
1 or 2 sessions per infant. Sessions in which the infant would not lie down are not counted. All tasks used silent visual stimuli.

## Acquisition

Cohort I was acquired on a 3 T Siemens Skyra and Cohort II on a 3 T Siemens Prisma, using only the bottom half of
a 20-channel head and neck coil so that the infant could see the ceiling-projected screen and be filmed for gaze
coding. Anatomy comes from a T1-weighted PETRA sequence at 0.94 mm isotropic. A T2-weighted SPACE scan was tried in two infants. Functional runs are
gradient-echo EPI with TR 2 s, TE 28 ms, 36 slices and 3 mm isotropic voxels, without multiband acceleration.

## Annotations

There are no image labels. Gaze was coded manually from video of the infant's face, and the pipeline marks
time-points and task epochs for exclusion based on head motion and whether the eyes were on screen. A file with
the burn-in volumes of each raw run was added to the record in 2021.

## Known limitations

- The cohorts are small, and the two sites differ in scanner model and age range.
- In Cohort II, about 4.9 minutes of usable awake functional data were obtained per session on average. Motion
  sometimes moved the cerebellum and brain stem out of the field of view.
- The order and mix of tasks varies between sessions, because the protocol adapts to each infant's state.
- The paper does not report health or developmental screening criteria.

This OpenNeuro collection (ds003345), named PenaltyKik.02, holds brain MRI from a Duke University study of
competitive decision-making. While in the scanner, participants steered a puck toward a goal with a joystick in a
real-time video game, the Penalty Shot task, and a goalie controlled either by another person or by a computer
algorithm tried to block them. The authors used the behavior and the fMRI to relate opponent sensitivity and action
timing to activity in prefrontal cortex and the temporoparietal junction. Snapshot 1.0.0 appeared in October 2020;
snapshots 1.0.1 and 1.0.2 from June 2021 added further defacing of the anatomical images. The data are released
under CC0.

## Composition

The snapshot has 75 subjects, which matches the analysed sample of the 2020 paper: 82 people were scanned and 7
were dropped for head motion over 3 mm. The paper reports 41 women, a mean age of 25.9 years (SD 6.8) and an age
range of 18 to 48. All were right-handed and reported no neurological or psychiatric disorder. Every subject has
one T1-weighted image and BOLD task runs, 223 runs in total: 73 subjects have three runs and two have two. No
participants.tsv is shared, so per-subject age and sex are not available.

## Acquisition

All images come from a GE Discovery MR750 at 3 T at Duke University Hospital. The BOLD runs use echo-planar imaging
with a 2 s repetition time, 28 ms echo time and 3.0 x 3.0 x 3.8 mm voxels, and each run lasts about 12 minutes. The
T1-weighted image is a 1 mm isotropic BRAVO scan. A 4-minute practice run was done before the three task runs but
is not part of the release.

## Annotations

There are no image labels. Each BOLD run has an events file with the trial timing of the game.

## Known limitations

- Demographics exist only as group summaries in the paper.
- Seven high-motion participants are not included.
- Two subjects have only two of the three task runs.
- One site and one scanner.

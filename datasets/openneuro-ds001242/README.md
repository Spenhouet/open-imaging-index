This OpenNeuro release holds the brain MRI behind a study by Mara Mather's group at the University of Southern
California on how arousal changes attention in younger and older adults. Participants first learned that one of two
tones predicted a mild shock. In the main task the tones were played before pairs of place and object pictures, and
people reported where the higher-contrast picture appeared. The study tested whether arousal, through the locus
coeruleus noradrenaline system, boosts brain responses to salient input more in younger than in older adults. The data
went public on OpenNeuro in 2018 as ds001242 under the Open Data Commons Public Domain Dedication and License; the
current snapshot is 1.0.0 from June 2019.

## Composition

The participants table lists 52 healthy adults with an age group and sex for each: 28 younger adults (9 women) and 24
older adults (9 women). The paper gives the age ranges as 18 to 34 and 55 to 75; individual ages are not shared. Every
subject has anatomical, diffusion and functional images, 540 NIfTI files in total.

## Acquisition

All scans come from a Siemens 3 T Magnetom Trio with a 32-channel head coil. The anatomical folder holds a 1 mm MPRAGE
T1-weighted image and a T1-weighted fast spin echo scan of 11 axial 2.5 mm slices, used to measure neuromelanin
signal in the locus coeruleus. The neuromelanin files are stored as hidden files with a `.bidsignore`
prefix because BIDS had no suffix for them. The diffusion scan has one b=0 volume and 64 volumes at b=1000. The
functional runs are gradient-echo EPI with TR 2 s and 4 mm slices: one fear-conditioning run, one place localizer run
and up to five spatial detection runs. Eye-tracking (pupil) and ECG, respiration and skin conductance recordings
accompany the task runs.

## Annotations

There are no image annotations. BIDS events files give the timing of tones, pictures and responses.

## Known limitations

- Ages are only given as two groups, not per person.
- Some subjects have fewer than five spatial detection runs.
- Two subjects (01 and 44) have two MPRAGE images because they left the scanner between runs.
- The first three volumes of each functional run were removed before release.
- The physiological sidecars warn of scanner noise in some ECG and pupil recordings; the authors excluded several
  subjects from those analyses.
- One site, small groups.

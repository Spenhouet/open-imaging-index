This dataset comes from a training study by Allyson Mackey's lab at the University of Pennsylvania. Young adults
were scanned, practised an adaptive n-back working memory task for 50 minutes, and were scanned again with the same
protocol. The authors asked whether resting-state connectivity of the ventral tegmental area and T1w/T2w ratios, a
proxy for myelin, at baseline predict how much people improve. The images were released on OpenNeuro as ds003849
under CC0 in October 2021; snapshot 1.0.1 from February 2026 adds a README with the n-back block timing.

## Composition

The paper's final sample is 46 adults aged 18 to 25 (mean 21.4 years, 30 female), most of them Penn undergraduate
or graduate students. Fifteen other participants were excluded, for example for falling asleep, poor accuracy on
the 1-back control condition or equipment faults. The release has 92 BIDS subject folders: each participant appears
twice, with suffix A and suffix B, one folder per scan session. Every folder holds a T1-weighted and a T2-weighted
image, a resting-state BOLD run and an n-back BOLD run. No participants table is included, so age and sex are not
available per subject.

## Acquisition

All scans were acquired on a Siemens MAGNETOM Prisma 3 T with a 32-channel head coil at Penn's Center for Magnetic
Resonance Imaging and Spectroscopy. Structural images are 1 mm isotropic (MPRAGE T1w and SPACE T2w) with volumetric
navigators. Resting-state fMRI ran until at least five minutes of low-motion data were collected, and the n-back run
lasted about five minutes, both at TR 2 s and 2 mm isotropic voxels.

## Annotations

There are no image annotations. The behavioral learning measures and region-of-interest values are kept in the
authors' GitHub repository, not in the OpenNeuro release.

## Known limitations

- The per-subject events files are empty. The block onsets of the n-back task are only given as a table in the
  dataset README.
- Without a participants table, pairing the A and B folders as pre- and post-training sessions relies on the
  folder naming.
- The sample is small, young and largely drawn from one university.

PIOP1 is one of three studies in the Amsterdam Open MRI Collection (AOMIC), a set of 3T brain MRI datasets from the
University of Amsterdam meant for research on individual differences in brain structure and function. "PIOP" stands
for Population Imaging of Psychology. The study combines multimodal MRI with demographics and psychometric scores of
university students. It has been on OpenNeuro as ds002785 under a CC0 waiver since 2020 and is described in a 2021
Scientific Data paper together with its sister studies PIOP2 and ID1000.

## Composition

The release holds 216 of 248 scanned students from the University of Amsterdam and the Amsterdam University of Applied
Sciences, aged 18 to 26 (120 female, 89 male, 7 without sex or age). Every participant has a T1-weighted scan and at
least one functional run, and 211 also have a diffusion scan. The functional part covers resting state and five tasks:
face perception, gender-stroop, emotion matching, working memory and emotion anticipation. Respiratory and cardiac
traces accompany most runs. The participants table lists BMI, handedness, education type, religiosity, Raven matrices
score and NEO-FFI personality scores.

## Acquisition

Data were collected between May 2015 and April 2016 on a single Philips 3T scanner (Achieva generation) with a 32-channel
head coil. The resting-state and face runs used multiband acceleration with factor 3, the other runs sequential
gradient-echo EPI. A phase-difference fieldmap was part of the protocol, but the release contains no fieldmap images.
Anatomical scans were defaced with pydeface. The BIDS release ships derivatives from Fmriprep, Freesurfer, MRIQC,
preprocessed diffusion data, voxel-based morphometry and physiology-based noise regressors.

## Annotations

There are no manual image annotations. Derivatives include automated tissue segmentations and cortical parcellations
from Freesurfer and Fmriprep.

## Known limitations

- Single site and scanner; the scanner was upgraded before PIOP2, and the authors report lower temporal SNR in PIOP1.
- Only healthy students in a narrow age range, with no clinical groups.
- Not every participant completed every functional task; per-run counts range from 203 to 210.
- Ages are rounded to the nearest quarter year for privacy.

PIOP2 is one of three studies in the Amsterdam Open MRI Collection (AOMIC), a set of 3T brain MRI datasets from the
University of Amsterdam meant for research on individual differences in brain structure and function. "PIOP" stands
for Population Imaging of Psychology. The study pairs multimodal MRI with demographics and psychometric scores of
university students. It has been on OpenNeuro as ds002790 under a CC0 waiver since 2020 and is described in a 2021
Scientific Data paper together with its sister studies PIOP1 and ID1000. PIOP1 and PIOP2 follow nearly the same
protocol, so the authors suggest using them as separate training and test sets.

## Composition

The release holds 226 of 242 scanned students from the University of Amsterdam and the Amsterdam University of Applied
Sciences, aged 18 to 25 (129 female, 96 male, 1 without sex). All 226 have a T1-weighted scan, a diffusion scan, a
phase-difference fieldmap and at least one functional run. The functional part covers resting state and three tasks:
working memory, stop signal and emotion matching. Respiratory and cardiac traces accompany most runs. The participants
table lists BMI, handedness, education type, Raven matrices score and NEO-FFI personality scores.

## Acquisition

Data were collected between March and July 2017 on a single Philips 3T scanner after its upgrade to the Achieva dStream
generation, with a 32-channel head coil. All functional runs, including resting state, use sequential gradient-echo
EPI without multiband, and the functional slice stack was tilted to keep the eyes out of the field of view. Anatomical
scans and fieldmap images were defaced with pydeface. The BIDS release ships derivatives from Fmriprep, Freesurfer,
MRIQC, preprocessed diffusion data, voxel-based morphometry and physiology-based noise regressors.

## Annotations

There are no manual image annotations. Derivatives include automated tissue segmentations and cortical parcellations
from Freesurfer and Fmriprep.

## Known limitations

- Single site and scanner.
- Only healthy students in a narrow age range, with no clinical groups.
- The task set differs from PIOP1: the stop-signal task is unique to PIOP2, and several PIOP1 tasks are missing.
- Ages are rounded to the nearest quarter year for privacy.

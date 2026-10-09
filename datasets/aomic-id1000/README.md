ID1000 is the largest of the three studies in the Amsterdam Open MRI Collection (AOMIC), built at the University of
Amsterdam to support research on individual differences in brain structure and function. It pairs multimodal 3T brain
MRI with demographics and psychometric scores of young adults from the general Dutch population. The data have been on
OpenNeuro as ds003097 under a CC0 waiver since 2020 and are described in a 2021 Scientific Data paper.

## Composition

The release contains 928 participants aged 19 to 26 (483 female, 445 male), drawn from 992 scanned people. Recruitment
went through an agency and aimed to match the educational level distribution of the Dutch population, while the narrow
age range limits ageing effects. Each person has up to three T1-weighted scans, three diffusion-weighted runs and one
functional run recorded while watching an 11-minute compilation of scenes from the film Koyaanisqatsi, set to music and without a storyline.
All 928 have T1w data, 925 have diffusion and 881 have the movie fMRI. Respiratory and cardiac traces accompany most
fMRI runs. The participants table adds handedness, BMI, education, socio-economic background, intelligence (IST),
personality (NEO-FFI), BIS/BAS, trait anxiety and religiosity.

## Acquisition

All scans were acquired between 2010 and 2012 on one Philips 3T scanner (Intera generation) with a 32-channel head coil
in Amsterdam. Structural images use a 3D fast-field echo sequence, diffusion runs a spin-echo EPI with one b0 and 32
directions at b=1000, and functional data a sequential gradient-echo EPI with a 2.2 s TR. Anatomical scans were defaced
before release. The data are in BIDS with extensive derivatives: Fmriprep and Freesurfer outputs, MRIQC metrics,
preprocessed diffusion with tensor maps, voxel-based morphometry maps and physiology-based noise regressors.

## Annotations

There are no image annotations. Derivatives include automated tissue segmentations and cortical parcellations from
Freesurfer and Fmriprep.

## Known limitations

- Single site and single scanner, and an older scanner generation than the later AOMIC studies, with lower T1w data
  quality reported by the authors.
- Only healthy young adults; no clinical groups and almost no age variation.
- Ages are rounded to the nearest quarter year for privacy.
- The movie lacks a narrative, so the fMRI suits low-level visual analyses better than semantic ones.
- Gender identity and sexual attraction were asked only after the first 400 participants.

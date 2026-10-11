This dataset holds resting-state functional MRI recorded at 7 tesla from healthy young adults, with an imaging
protocol tuned for the small, iron-rich nuclei deep in the brain. The University of Amsterdam group of Birte
Forstmann collected it together with the Norwegian University of Science and Technology and released it on Figshare
in 2024 under CC BY 4.0, alongside a data article in Data in Brief. The same data were analysed in a 2023 study of
how subcortical regions connect to cortical resting-state networks.

## Composition

56 healthy adults (33 women) aged 19 to 39, mean age 26.2, recruited at NTNU. Each person has one T1-weighted
image, two resting-state BOLD runs of about 15 minutes each with eyes open, and the raw cardiac (pulse) and
respiratory recordings for both runs. A demographics file gives sex and an age group per subject. The session shared
here was the first of four; the other three sessions held decision-making task fMRI and are not part of this
release.

## Acquisition

All scans were made on a Siemens MAGNETOM Terra 7 T system with a 32-channel head coil at the Norwegian 7T MR
Center in Trondheim. The structural image is an MP2RAGE at 0.75 mm isotropic resolution. The functional runs use a
multiband gradient-echo EPI with 1.5 mm isotropic voxels, TR 1380 ms and a short TE of 14 ms, chosen to match the
short T2\* of iron-rich nuclei. Each run is followed by a short scan with reversed phase encoding for distortion
correction. Pulse was sampled at 200 Hz and respiration at 50 Hz.

## Known limitations

- Only fMRIPrep outputs are shared: bias-corrected T1-weighted images, brain masks, tissue probability maps,
  preprocessed BOLD series in T1w space, transforms and confound tables. Raw BIDS images are not in the release.
- Structural images were defaced, and background noise was suppressed by recomputing the T1-weighted image from the
  second MP2RAGE inversion.
- sub-45 lacks pulse data for the second run. For sub-13 and sub-21 the reversed-phase scan of the first run was
  wrong, so the one from the second run was used.
- The short TE favours the subcortex and may lower BOLD contrast in the cortex; temporal SNR is reduced in the
  temporal lobe.
- Ages are only shared as groups, and the sample is young and recruited at one university.

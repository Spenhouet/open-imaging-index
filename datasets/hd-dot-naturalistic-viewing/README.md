This OpenNeuro release (ds004569) holds high-density diffuse optical tomography (HD-DOT) recordings of the cortex from
healthy adults who watched a clip of the 1966 film The Good, the Bad, and the Ugly. A team at Washington University in
St. Louis around Joseph Culver and Jonathan Peelle collected the data with a custom HD-DOT system and described it in
Scientific Data in 2025. The release is meant for methods development in optical neuroimaging and for studies of brain
responses to naturalistic stimuli. Version 1.0.0 appeared in 2023; the current snapshot 1.1.0 from September 2025
updated the SNIRF files and the README.

## Composition

There are 58 participants (35 female, 23 male) aged 18 to 76 years, recruited from the university community. All
reported normal vision and hearing and no known neurological disorder. Most are in their twenties; six are 64 or older.
Thirty-six participants watched the clip in more than one session, for 106 sessions in total (one subject has seven).
participants.tsv also lists race, handedness and whether English was a first language.

## Acquisition

Two caps were used: one with 96 sources and 92 detectors using LEDs at 750 and 850 nm (9 participants), and one with
128 sources and 125 detectors using laser diodes at 685 and 830 nm (49 participants). The extra pad of the larger cap
was removed from the shared data, so every session has 96 sources and 92 detectors. Light was sampled at 10 Hz.
Each session comes in three forms: channel-level SNIRF (HDF5), the NeuroDOT .mat file, and a NIfTI time series of
hemoglobin changes reconstructed with an atlas-based light model in standard space after downsampling to 1 Hz,
filtering and superficial signal regression with the NeuroDOT toolbox.

## Annotations

There are no image annotations. Per-session event files mark the movie onset, and a shared events file labels seconds
of the clip as audio or audiovisual events. Sidecars report per-session motion (GVTD) and pulse
signal-to-noise values.

## Known limitations

- No anatomical MRI is included; reconstructions rely on an atlas head model.
- The NIfTI reconstructions are stored as BIDS `func/*_bold.nii.gz`, so OpenNeuro labels the dataset as MRI although
  no MRI was acquired.
- The movie itself is not shared because of copyright.
- Movie onset differs between participants in the SNIRF and .mat files; the NIfTI files are trimmed to start at onset.

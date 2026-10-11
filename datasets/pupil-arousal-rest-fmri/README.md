Resting-state fMRI recorded together with pupil size in healthy young adults, shared by Beth Lloyd, Lycia de Voogd,
Verónica Mäki-Marttunen and Sander Nieuwenhuis. The authors used it to ask whether spontaneous pupil fluctuations at
rest follow the BOLD signal of six arousal nuclei: the locus coeruleus, ventral tegmental area, substantia nigra,
dorsal and median raphe and the cholinergic basal forebrain. They found the strongest coupling at lags of 0 to 2
seconds. The data were collected at New York University within a larger extinction learning study and are released on
Dryad, mirrored on Zenodo, under CC0.

## Composition

74 right-handed adults were scanned on two consecutive days; 72 remain in the release (39 female, 33 male, aged 18 to
33, mean 22.5). Each person has up to two 5-minute eyes-open fixation runs. 71 have both runs, one has only the day-2
run. A file of age and gender per participant is included.

## Acquisition

One Siemens MAGNETOM Prisma 3 T. The functional runs are multi-echo EPI with two echoes, 2 mm voxels, a repetition
time of 2 s and multiband factor 2. The release holds the realigned volumes with the two echoes already combined into
a weighted sum, as single-volume NIfTI files with the first five volumes removed. The second day adds a 0.9 mm MP-RAGE
and an 11-slice neuromelanin-sensitive fast spin echo scan aimed at the locus coeruleus. Pupil diameter of the right
eye was sampled at 250 Hz with an EyeLink 1000 Plus through the head coil mirror. MATLAB files hold 26 cardiac and
respiratory regressors plus six motion parameters per run. Images are defaced.

## Annotations

No image labels are shared. Blinks are flagged in the raw pupil traces by the eye tracker.

## Known limitations

- The raw multi-echo data are not included, only the combined and realigned volumes.
- One participant has no structural scans, and one pupil file is missing on each day.
- The sample is small, young and drawn from one university.
- Pupil data in version 1 were interpolated and downsampled to 50 Hz; version 2 replaced them with the raw 250 Hz
  traces.

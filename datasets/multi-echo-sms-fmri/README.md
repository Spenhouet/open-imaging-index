This OpenNeuro release (ds004499) comes from the Multimodal and Functional Imaging Laboratory (MAFIL) at CEITEC, Masaryk University in Brno. It was built to test multi-echo fMRI under different degrees of simultaneous multislice (multiband) acceleration and different flip angles. Every participant did the same block-design task seven times, each run with another combination of settings, so single-echo and multi-echo processing can be compared across acquisition protocols. The authors suggest it for testing and tuning fMRI processing pipelines. The data went public on OpenNeuro in January 2024; snapshot 1.0.4 from February 2026 only fixed the README.

## Composition

There are 50 subjects, 23 female and 27 male, aged 18 to 41 (mean 28.98). Each has one T1-weighted MPRAGE, a gradient echo field map (two magnitude images and a phase difference), seven functional runs with three echo images each, and a physiological recording per run. The participants file names the recording device: a Siemens physiological recording unit or a BrainProducts BrainAmp MR ExG amplifier. The README does not state inclusion criteria or health status.

## Acquisition

All scans were done on a 3 T Siemens Magnetom Prisma with a 64-channel head-neck coil, using the CMRR multiband EPI sequence. Field of view (192 x 192 mm), matrix (64 x 64), 48 axial slices of 3 x 3 x 3.5 mm, in-plane GRAPPA factor 2 and the three echo times (17.00, 34.64 and 52.28 ms) are the same in every run. The runs differ in multiband factor (1, 4, 6, 8), repetition time (3.05 s down to 0.4 s, giving 120 to 900 volumes in 6 minutes) and flip angle (80, 45 or 20 degrees). Run order was counterbalanced between ascending and descending.

## Annotations

The task alternated checkerboard blocks with digits 1 to 4, answered with right-hand button presses, and rest blocks. There are no image labels.

## Known limitations

No data descriptor paper is linked from the release, so the cohort description rests on the README and participants file. A 2021 Human Brain Mapping study by the same group (doi:10.1002/hbm.25698) used the same seven-run protocol in 26 volunteers; the release does not say whether those people are part of it. The single site and narrow age range limit generalization.

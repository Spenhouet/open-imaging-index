This OpenNeuro release holds raw brain MRI from a methods study at the Multimodal and Functional Imaging Laboratory
(MAFIL) of CEITEC Masaryk University in the Czech Republic. The group recorded multi-echo functional MRI and kept both
the magnitude and the phase of every echo, so that the data can be used to build and test processing pipelines for
complex-valued multi-echo fMRI. Every task was run twice, once with a slow and once with a fast repetition time, which
makes the release useful for comparing sampling rates within the same person. It was published in November 2025 as
snapshot 1.0.0 under CC0, with support from the Czech Science Foundation (grant 23-06957S).

## Composition

There are 83 adults, 41 female and 42 male, aged 20 to 41 years (median 26). The release does not state a clinical
condition or recruitment criteria. 41 people were scanned on scanner A and 42 on scanner B. Every subject folder
holds the same set of files: one T1-weighted MPRAGE, a ten-echo gradient-echo series with a derived R2\* map, a
gradient-echo field map (two magnitude images and a phase difference) and six fMRI runs. The runs cover three
paradigms, each at TR 1800 ms and TR 800 ms: a block-design visual-motor task with a flickering checkerboard and
finger presses, a visual oddball task with frequent, target and distractor letters, and eyes-closed rest. Four
protocol variants change only the run order. Event files describe the task timing, and electrocardiogram and
respiration traces were recorded during every run.

## Acquisition

All scans come from two Siemens Magnetom Prisma 3 T scanners with a 64-channel head and neck coil. Functional runs are
three-echo 2D echo-planar sequences with multiband acceleration and 3.5 mm slices, each run stored as magnitude and
phase per echo plus single-band reference images. The two scanners used the same protocol apart from small differences
in echo times and readout bandwidth. Physiological signals were recorded with a BrainAmp MR system.

## Annotations

There are no image annotations. Event files give stimulus and response timing for the task runs.

## Known limitations

- Single site and a young adult sample, with few people over 40.
- No paper describing the data is linked from the release yet.
- Small timing deviations in the visual-motor task are possible because of communication delays between the scanner
  and the stimulus software.
- Only raw data are shared; no preprocessed derivatives are included.

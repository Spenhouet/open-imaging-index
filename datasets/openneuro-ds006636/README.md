This OpenNeuro dataset comes from a study of morphological awareness, the ability to recognise and use the meaningful
parts of words such as roots and affixes, in readers with and without dyslexia. Researchers at MIT scanned each
participant once while they judged spoken and written words in two morphology tasks. The first snapshot appeared in
September 2025; the current snapshot 1.4.0 (August 2026) added further participants and is released under a CC0
waiver. The study was funded by the NICHD (R01HD106122 and F32HD100967).

## Composition

The release contains 204 participants with one session each. All have a T1-weighted structural scan. 203 have task
fMRI: 182 completed both the auditory and the visual morphology task, 11 only the auditory task and 10 only the
visual task. One participant has a structural scan only. Each functional run has a matching reverse phase-encoded EPI
field map. The participants file lists only identifiers, so the release does not state which participants have
dyslexia, nor their age or sex.

## Acquisition

All images were acquired at MIT and the McGovern Institute for Brain Research on Siemens Prisma and Prisma Fit 3T
scanners. The structural scan is a 3D multi-echo MPRAGE with volumetric navigators for prospective motion correction
(TR 2.53 s, 1 mm slices). Functional runs use multiband echo-planar imaging (TR 2 s, multiband factor 2, 2.4 mm
slices) acquired posterior to anterior. Structural images were defaced.

## Annotations

There are no image annotations. Only 7 of the 385 functional runs come with a raw events file. The derivatives folder
holds fMRIPrep 25.1.4 outputs for part of the cohort and FitLins 0.11.0 first-level statistical maps comparing root,
affix and control trials for each task.

## Known limitations

- No diagnostic group, age, sex or reading scores are shared, so the dyslexia and control groups cannot be separated
  from the release alone.
- No paper describing the cohort is linked from the dataset.
- Not every participant completed both tasks, and most functional runs lack a raw events file.
- Three structural images are not labelled as defaced.

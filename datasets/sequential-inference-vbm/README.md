Sequential Inference VBM is the structural MRI release of a study by Thomas FitzGerald, Dorothea Hämmerer, Karl
Friston, Shu-Chen Li and Raymond Dolan on whether people infer over sequences of past states when they learn under
uncertainty. Younger and older adults did a probabilistic reversal task, and the strength of their sequential
inference was related to grey matter density with voxel-based morphometry. The data went up on OpenfMRI in April
2017 as ds000222 and now sit on OpenNeuro, where snapshot 1.0.1 (December 2019) carries a CC0 license.

## Composition

The release holds 79 healthy, right-handed adults: 43 younger adults in their twenties and early thirties and 36
older adults aged 60 to 73. Each subject has one T1-weighted image and a behavioural events file from the reversal
task. The participants table lists age group, age, sex, height, weight, an abbreviated Raven's matrices score and
1-, 2- and 3-back accuracy. It counts 41 women and 38 men. Seven subjects lack Raven's scores, and some lack n-back
scores.

## Acquisition

All images were acquired on a Siemens 3 T Trio with an MPRAGE sequence at 1 mm isotropic resolution (TR 1550 ms, TE
2.34 ms, TI 900 ms, flip angle 9 degrees). The study was approved by the ethics committee of the Charité in Berlin.
Subjects performed the task in four runs during fMRI, but the functional images are not part of this release.

## Annotations

There are no image annotations. The events files give trial-level stimuli, responses and feedback, and the
derivatives folder holds MRIQC quality metrics.

## Known limitations

- Only T1-weighted images are shared; the task fMRI collected in the scanner is not.
- The anatomical images were defaced with pydeface by the OpenfMRI curators.
- The paper excluded five younger and two older adults for technical problems during acquisition, so the released
  set and the analysed set differ.
- Ages in the participants table do not match the paper's stated ranges exactly (21 to 34 against 20 to 33 for the
  younger group).
- The sample is small and highly educated.

AVID records brain activity while people picture things they only hear about. Participants lay in a 5 T scanner with their eyes closed, listened to a short spoken Mandarin description and held the described image in mind. The authors, from ShanghaiTech University and South China Normal University, built it as training data and a benchmark for models that turn fMRI responses into images of what was imagined. Because no picture is shown during the task, the recordings avoid the visual and short-term memory signals that earlier imagery paradigms mix in. The paper was accepted to the NeurIPS 2026 track on evaluations and datasets, and the data were published on Science Data Bank on 18 October 2026.

## Composition

Nine healthy adults aged 18 to 25 (5 male, 4 female), all students and native Mandarin speakers, took part. They were picked for vivid self-reported imagery on the Vividness of Visual Imagery Questionnaire. All nine did the complex split, which has 800 natural scene descriptions taken from COCO-CN captions, each heard twice (14,400 trials, 48 hours). Seven did the simple split, which has 400 descriptions of single letters, digits, shapes or objects with a set color and position, also heard twice (5,600 trials, 18.7 hours). Everyone also did four auditory localizer runs. The release holds raw BIDS data, minimally preprocessed time series, single-trial beta estimates in volume and surface space, FreeSurfer outputs, region masks, noise ceilings, stimuli with English translations and fixed train and validation splits.

## Acquisition

Scans ran on a United Imaging uMR Jupiter at 5 T with a 48-channel head coil. Functional runs used multiband echo-planar imaging at 2 mm isotropic resolution with a repetition time of 1.5 s and reversed phase-encoding references for distortion correction. T1-weighted images were 0.7 mm isotropic. Runs where head motion passed the scanner's warning threshold were excluded from analysis.

## Annotations

Each trial has a vividness rating on a 4-point scale. Each stimulus links to its source image, Mandarin caption and checked English translation.

## Known limitations

The cohort is small, young, Mandarin-speaking and selected for strong imagery, so results may not carry over to other groups. The simple split covers fewer participants and less scan time. The source images are references for building the descriptions, not the exact pictures participants imagined.

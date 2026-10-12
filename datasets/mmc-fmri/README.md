The Magic, Memory, and Curiosity (MMC) Dataset comes from a study at the Centre for Integrative Neuroscience and Neurodynamics of the University of Reading on how curiosity and reward shape learning. Healthy adults watched 36 short, muted magic trick videos in the scanner and rated how curious each trick made them. Half of the participants were told they could earn a bonus for their answers, the other half were not. About a week later an unannounced online test measured which tricks they could still recall and recognise. Resting-state scans before and after the viewing allow work on memory consolidation. The images were released on OpenNeuro as ds004182 in July 2022, and the data descriptor appeared in Scientific Data in 2024.

## Composition

Snapshot 1.0.1 holds 50 subject folders, 25 in the control group and 25 in the incentive group. The paper describes the final sample as 36 women and 14 men aged 18 to 37 (mean 25.32). Each subject has one T1-weighted scan, two 10-minute resting-state runs, three runs of the magic trick task and a phase-difference field map with two magnitude images. The participants file has one extra row for a person without image data. Behavioural tables cover demographics, questionnaires (for example need for cognition and fear of failure), working memory tasks, trial-wise ratings and memory results.

## Acquisition

All scans were made in one session on a 3 T Siemens Prisma with a 32-channel head coil. Functional runs used single-band gradient-echo EPI with a 2 s repetition time, 3 mm voxels and 37 axial slices. The T1-weighted image is a 1 mm isotropic MPRAGE, defaced before sharing.

## Annotations

The derivatives folder holds preprocessed functional data from AFNI, FreeSurfer segmentations, tissue masks and nuisance regressors. There are no expert image labels.

## Known limitations

The sample is small for between-group comparisons and limited to young, mostly female adults. The video stimuli are not part of the release and must be requested separately. One task run of one subject is split into two files.

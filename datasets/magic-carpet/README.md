magic_carpet holds the brain MRI from a study at the Zurich Center for Neuroeconomics, University of Zurich, on how people learn from rewards in a two-stage choice task. Participants were randomly told the task rules either in abstract terms or as a story. The authors tested whether the ventral striatum carries model-free reward prediction errors alongside model-based ones, and whether clearer instructions raise or lower mental effort. They report no evidence for model-free prediction errors once flaws in earlier analyses were corrected, and found that instructions which produced more correct model-based behaviour reduced mental effort. The images were released on OpenNeuro as ds004455 in January 2023, and the paper appeared in Nature Human Behaviour the same year.

## Composition

Snapshot 1.1.0 has 94 subject folders, each with one T1-weighted scan and three task fMRI runs with event files. The study's final sample is 94 healthy young adults recruited at the University of Zurich, 48 in the abstract condition and 46 in the story condition, after six exclusions. Inclusion required an age between 18 and 30; the authors did not record gender. The participants file lists 96 ids, two of which have no image folder, and its age, sex and handedness columns are empty. A derivatives folder holds physiological noise regressors (PhysIO) per run.

## Acquisition

Scans were acquired between October and December 2018 on a 3 T Philips Achieva with an eight-channel SENSE head coil. Functional runs used gradient echo EPI with a 2.5 s repetition time, 30 ms echo time, 42 slices of 3 mm thickness with a 0.6 mm gap and 3 x 3 mm in-plane voxels. Each of the three runs held 50 trials and lasted 842.5 s. Eye tracking was recorded with an EyeLink 1000 during scanning; those data and the behavioural records are hosted on GitHub, not on OpenNeuro.

## Annotations

Each functional run has an events file with trial timing. There are no image labels.

## Known limitations

No demographics are shared, so age and sex cannot be filtered. The physiological and eye-tracking recordings are not part of the BIDS imaging files. The full methods of the paper are behind a paywall; acquisition details here come from its reporting summary.

LEARNING BRAIN follows how the brains of young adults change while they learn a new skill. Healthy young women were assigned to a tactile Braille reading course, a piano course, or a control group without any training, and were scanned repeatedly from one week before training, through several months of training, to a follow-up two to three months after it ended. The study ran from September 2020 to July 2022. The OpenNeuro release shares preprocessed images, task events and behavioural test results in BIDS layout.

## Composition

There are 60 participants: 17 in the Braille group, 24 in the music group and 19 controls. According to `participants.tsv` all are female and right-handed, aged 18 to 24 at the first session. Sessions are labelled pre, 0, 1, 2, 3, 4 and 5 (one week before training, training onset, after one, six and 13 weeks, end of training, follow-up). The file tree holds 401 sessions with fMRI: 41 participants have seven and 19 have six. Each participant has one T1-weighted image averaged across sessions, with grey matter, white matter and CSF probability maps, a discrete tissue segmentation and a brain mask. The 1,502 BOLD runs cover resting state, finger tapping, passive music listening, a six-dot detection task and a Braille lexical decision task on an MRI-compatible Braille display, and a piano playback task on an MRI-compatible keyboard. Which tasks a person did depends on the group and session. Outside the scanner, n-back and Stroop tests were run at three time points.

## Acquisition

All scans come from a Siemens TrioTim 3 T scanner with a 32-channel head coil at the Institute of Experimental Biology in Warsaw. The BOLD runs use a multiband (factor 3) echo-planar sequence with a repetition time of 1.41 s and 2.5 mm slices; the two music tasks use interleaved silent steady-state acquisition so that sounds play in silent gaps. The T1-weighted scans are 1 mm MP-RAGE. All images were preprocessed with fMRIPrep and resampled to MNI152NLin2009cAsym space; confound tables come with every run.

## Known limitations

Raw scanner images are not shared, only the normalised fMRIPrep outputs. The cohort is small, female only and narrow in age. Group sizes differ and task coverage varies by group and session. The root `dataset_description.json` states CC0, while the fMRIPrep derivative folder, which holds all images, states CC BY 4.0.

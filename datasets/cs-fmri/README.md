Functional MRI from the Click & Switch study by Xinxu Shen, Lauri Gurguryam, Hazel Chen, Halle Dimsdale-Zucker and
Ian Ballard at the University of California Riverside. Inside the scanner, participants watched a recorded
mathematics lecture on an iPad and decided for themselves when to leave it for Instagram Reels, when to skip to the
next Reel and when to go back. The study looks at how people direct their own switching between educational and
social media content. The release is in BIDS format on OpenNeuro under CC0 and also carries fMRIPrep 25.2.5
preprocessing outputs.

## Composition

The release holds 68 participants, the number the README also gives. Each has up to six functional runs: rest before
the iPad task, the self-paced iPad task, rest after it, spoken free recall of the lecture and Reels, a yoked run in
which a history lecture and Instagram content switch on a schedule taken from an earlier recorded session rather than
the participant's choices, and a localizer with Instagram, weather logo and phase-scrambled image cues. All 68 have
a T1-weighted scan, 63 also have a T2-weighted scan, and 66 have a pair of opposite phase-encoding spin-echo
fieldmaps. A few participants miss one or two functional runs. No participants table is shared, so age, sex and
group information are not available.

## Acquisition

The sidecar files name a 3 T Siemens MAGNETOM Prisma at the University of California Riverside for every
participant. In the sidecars of the first participant, the functional runs use a multiband echo-planar sequence with a
repetition time of 2 s and 3 mm slices, and the T1-weighted scan is an MPRAGE with 0.8 mm slices. Images were converted from DICOM with dcm2niix.

## Known limitations

There is no participants.tsv and no linked publication yet, so the cohort cannot be described beyond its size, and
recruitment criteria are not documented. No task event files or behavioural switching logs are part of the raw
data. Session numbering is absent: each participant has a single visit.

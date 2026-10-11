Brain recordings of young Chinese adults watching the first episode of the reality show "Where Are We Going, Dad?"
(season 1), shared on OpenNeuro by Jixing Li, Yike Wang, Chengcheng Wang and Zhengwu Ma under CC0. One group of 30
was scanned with functional MRI in Shanghai, a second group of 30 was recorded with an optically pumped magnetometer
(OPM) MEG system in Chengdu. The design targets shared neural responses to unscripted social scenes and the
spontaneous replay of the episode after viewing.

## Composition

The release has 60 participants, sub-01 to sub-30 in the fMRI group and sub-31 to sub-60 in the MEG group. By
`participants.tsv` there are 33 women and 27 men aged 19 to 30. Each fMRI participant has a T1-weighted scan and BOLD
runs for the video, the quiz, a 15-minute eyes-closed replay period and rest; sub-01 lacks the replay run. Each MEG
participant has a T1-weighted scan for source modelling and MEG files for the video, quiz and replay. The episode
video, its transcript with word and acoustic annotations, and the quiz questions and answers are in `sourcedata`.
Preprocessed fMRI and MEG outputs are under `derivatives`.

## Acquisition

Viewing lasted 25 min 19 s with sound, followed by five multiple-choice questions and the eyes-closed period. fMRI
ran on a 3 T Siemens Prisma: 1 mm MP-RAGE T1w and echo-planar BOLD at 2.5 mm isotropic with a repetition time of
2 s. MEG used a 64-sensor OPM helmet sampled at 1000 Hz inside a magnetically shielded cylinder. The MEG group's T1w
scans came from a 3 T Siemens TrioTim at West China Hospital. Anatomical images were defaced with PyDeface.

## Known limitations

The two modalities come from different people, so fMRI and MEG cannot be paired within a subject. The authors left
6 MEG participants out of their own analyses because their power spectra differed from the others, but the files are
still shared. MEG is not an imaging modality in this index and is only described here. Samples are small, young and
from two sites. No companion paper is linked from the dataset page.

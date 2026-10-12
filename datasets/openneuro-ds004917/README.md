This OpenNeuro dataset comes from a Chilean study on how people decide when the odds of a reward are only partly
known. Participants picked one of two options, each shown as a reward amount and a coloured bar giving its probability.
In half of the trials a grey mask covered 40 to 80 percent of the bars, so the true odds were ambiguous. A 2026 Data in Brief
article describes the release. Snapshot 1.0.1 (May 2024) is the current version, released under a CC0 waiver.

## Composition

There are 53 healthy adults aged 18 to 31 (27 female, 26 male), recruited through social media. 52 of them have T1- and
T2-weighted anatomical scans. Of these, 45 also have diffusion MRI and 38 have one task fMRI run of the decision
game; 37 have both. A separate EEG session with transcranial magnetic stimulation (TMS) holds 24 people, and one of
them has no MRI at all. The overlap between the fMRI and EEG groups is small (nine people in participants.tsv, ten in
the Data in Brief text).

## Acquisition

All MRI was acquired on one Siemens Skyra 3T at Clínica Alemana de Santiago. The anatomical scans are a 1 mm MPRAGE
T1-weighted and a 1 mm 3D SPACE T2-weighted image. Diffusion uses 30 directions at b = 1000 s/mm² plus b = 0 images,
2 mm voxels, with three repetitions. The fMRI run is echo-planar BOLD with 3 mm voxels and a TR of about 2.4 s,
covering 40 trials. A field map is included for most subjects. The EEG session used a 64-channel BrainAmp system while
paired TMS pulses hit the right intraparietal sulcus, the right posterior parietal cortex or the vertex just before
each feedback, over 240 trials.

## Annotations

There are no image labels. Events files list stimulus codes, choices, reaction times, the hidden fraction of the bar,
the true and visible probabilities and, for the EEG session, which TMS target was active. participants.tsv gives age,
sex and which data types each person has.

## Known limitations

- The sample is small, young and from one site.
- Only about ten people have both fMRI and EEG-TMS data, which limits cross-modal analyses within subjects.
- The female/male split in Table 2 of the Data in Brief article (27/26 for the 52-person MRI session) does not match
  participants.tsv, which gives 26/26 for those with MRI.

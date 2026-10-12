This OpenNeuro dataset belongs to a research project on how the brain processes speech disfluencies, the signals
that regulate the flow of spoken conversation. The project aims to identify and separate
the brain circuits involved in understanding different linguistic classes of disfluency. The release contains the
resting-state functional and structural MRI of the healthy volunteers. Its eight authors are listed with Ekaterina
Pechenkova first; the work was funded by a Russian Foundation for Basic Research (RFBR) grant, and its only snapshot (1.0.0, February
2021) is shared under a CC0 waiver.

## Composition

There are 81 healthy participants, 50 women and 31 men, aged 18 to 39 (mean 24). The participants table lists only
age and sex. There is one session per person and no patient group. Every participant has one T1-weighted scan, one
resting-state BOLD run and a pair of EPI fieldmaps with opposite phase-encoding directions for distortion
correction, for 324 NIfTI files and about 5.9 GB in total.

## Acquisition

All data come from a 3 T Philips Ingenia scanner. The structural scan is a 3D T1-weighted turbo field echo with 1 mm
slices. The functional run is a 2D gradient-echo EPI with a repetition time of 2 s, an echo time of 35 ms and 34
slices of 3.1 mm. During the run, participants kept their eyes closed, stayed awake and were asked not to dwell on a
single topic.

## Annotations

The release has no image annotations, derivatives or task event files.

## Known limitations

- Brain responses to disfluent speech, the project's actual question, are not in this release; it holds only
  resting-state and structural data.
- The reference list in dataset_description.json is a placeholder, and no study paper is linked to the release.
- The sample is young and narrow in age, so it is of limited use for questions about ageing.
- No language, handedness or cognitive measures are included.

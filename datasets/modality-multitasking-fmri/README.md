This OpenNeuro release (ds005038) holds the raw fMRI data of a preregistered Berlin study on multitasking. The
question is why some dual tasks interfere more than others: pairing visual input with manual responses and auditory
input with vocal responses is modality compatible, while the crossed pairings are modality incompatible. Participants
were scanned before and after a practice intervention, and the study paper uses multivoxel pattern analysis to test
whether practice separates the neural representations of incompatible tasks in sensory regions. The data are shared
under a CC0 waiver.

## Composition

The full study sample was 71 healthy right-handed adults aged 18 to 30. The release contains the 58 who signed an
updated consent form allowing publication of their individual data; the participants table still lists all 71 with a
consent column. Released participants are 18 to 28 years old, 32 female and 26 male. Between the two scan sessions,
each participant was assigned to 80 minutes of practice on modality compatible dual tasks, on modality incompatible
dual tasks, or to a passive control group. Three released participants have only the pre-practice session.

## Acquisition

All scans were acquired at 3T with a 32-channel head coil. A scanner upgrade during the study means 16 released
participants were scanned on a Siemens TIM Trio and 42 on a Siemens Prisma, each keeping the same scanner for both
sessions. The pre session has a 1 mm isotropic T1-weighted image, eight single-task runs, two dual-task runs, one
resting-state run and two localizer runs. The post session repeats the single-task and dual-task runs. Functional runs
use echo-planar imaging with 3 mm isotropic voxels and a repetition time of 2 s. Each session also has phase-difference
fieldmaps with two magnitude images.

## Known limitations

- Two scanner models are mixed across participants, which matters for pooled analyses.
- 13 participants of the published sample are missing because of consent, so the release does not match every
  analysis in the paper.
- Group-level t-maps that include the unreleased participants are hosted elsewhere and are not part of this release.
- Task materials and scripts are described in the OSF preregistration, not in the dataset itself.
- One scanner value in the participants table is misspelled ("Primsa").

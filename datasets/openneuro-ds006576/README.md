This OpenNeuro dataset holds the imaging and sleep recordings behind a Princeton study of how sleep reshapes
memories. Participants learned that some pictures predict others, then saw one of those predictions violated. The
study asked whether the hippocampus later pulls apart the representations of the cue and the mispredicted item, and
whether this only happens when the violation is followed by REM sleep. After the morning scan, each participant was
randomly assigned to stay awake, to take a nap with non-REM sleep only, or to take a nap that also contained REM
sleep, and was scanned again in the late afternoon. Snapshot 1.0.5 (April 2026)
completed the upload of all participants and is released under a CC0 waiver.

## Composition

The release covers 69 healthy adults, 23 per group, out of 74 complete data sets collected; three were excluded for
poor task performance and two did not consent to public sharing. The paper reports 42 women, eight left-handers and
a mean age of 20.4 years (range 18 to 35) for the 74 collected, not for the released 69. The participants file gives
sex (37 female, 32 male) and group, but no age. Each participant has three MRI sessions: a prestudy visit 1 to 14
days earlier with a category localizer, a morning session with the learning and violation task, and an afternoon
session with reward prediction, decision and post-tests. 67 participants also have an EEG recording of the nap or
rest period.

## Acquisition

All MRI was done on a 3 T Siemens Skyra with a 64-channel head coil. Functional runs use multiband echo-planar
imaging (TR 1.5 s, TE 40 ms, 1.5 mm isotropic voxels, multiband factor 6). Every session has a T1-weighted MPRAGE
(1 mm isotropic), a FLASH image and opposite phase-encoded spin-echo field maps. A T2-weighted turbo spin-echo image
oriented perpendicular to the hippocampus was taken in the morning session for subfield segmentation.
Polysomnography used 64-channel BioSemi EEG at 512 Hz with eye, chin muscle and heart channels.

## Annotations

There are no image annotations. Functional runs come with events files of trial timing and responses.

## Known limitations

- Three sessions lack a T1-weighted image (sub-160 and sub-170 in the prestudy session, sub-178 in the morning
  session).
- Two participants have no EEG file.
- Age is not shared per participant, and the published demographics describe the 74 collected rather than the 69
  released.

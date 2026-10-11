This OpenNeuro release (ds002513) holds the MRI data behind a study of sports bettors and problem gambling. Frequent
sports bettors watched cues for real upcoming sport events during functional MRI. Some events could be bet on and some
were shown as blocked, and the cues varied in how confident the bettor was of winning. The study asked whether brain
responses to events that could not be bet on differ between problem and nonproblem bettors, and whether they relate to
sports betting passion and trait self-control, both measured by questionnaire. The authors report higher insula and
striatum responses to blocked events in problem bettors. The data are shared under a CC0 waiver.

## Composition

The release contains 65 frequent sports bettors. The paper classes 30 of them as problem bettors and 35 as nonproblem
bettors. Each participant has one T1-weighted image, one run of the cue-exposure task with its event file, and a
fieldmap (magnitude and phase-difference image). The release has no participants table, so group membership, sex, age
and questionnaire scores are not part of the shared files.

## Acquisition

All scans come from one 3T Siemens Prisma fit at Ghent University Hospital in Belgium, according to the image
sidecars. The T1-weighted image is an MPRAGE (repetition time 2.25 s, echo time 4.18 ms, inversion time 0.9 s). The
task run is gradient-echo EPI with a repetition time of 1.72 s and an echo time of 27 ms. The images are stored as
uncompressed NIfTI with BIDS sidecars.

## Known limitations

- Single site and scanner, and a small sample.
- No participants table: the problem and nonproblem group labels, demographics and scale scores needed to reproduce
  the group analysis are not in the release.
- Only one task run per subject; there is no resting-state or diffusion data.
- The condition tag marks the study's problem bettor group, which is a study classification rather than a stated
  clinical diagnosis of gambling disorder.

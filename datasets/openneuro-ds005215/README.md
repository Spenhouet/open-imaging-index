This OpenNeuro release holds the fMRI data behind a 2025 Communications Biology study by Park, Song and Shim at
Sungkyunkwan University on how the hippocampus supports narrative comprehension. Participants watched a 10-minute
episode of an animated Mr. Bean series whose scenes had been put out of order, and then told the story aloud in the
order they believed was the original. The authors scored each recall for content and for temporal order and related
these scores to hippocampal functional connectivity at event boundaries and at moments where events could be linked.
The data are shared under CC0.

## Composition

The release contains 65 participants, each with one T1-weighted scan and one functional run that covers both the
movie viewing and the spoken recall. The paper recruited 71 young adults (26 female, mean age 22.8) and excluded
six, one for an image artifact and five for head motion, leaving 65 analysed, the same number as in this release. Age and sex are reported only
for the full 71 and the release has no participants.tsv, so per-subject demographics are not available.

## Acquisition

All scans come from a 3T Siemens Prisma with a 64-channel head coil. Functional images are multiband (factor 3)
echo-planar BOLD with 3 mm isotropic voxels and a repetition time of 1 s. The anatomical scan is a 1 mm isotropic MPRAGE.
The scan length varies because it depends on how long each participant spoke during recall. The paper describes a
session of four functional runs, the last at rest, but only the first run, used in the study, is in this release.

## Annotations

There are no image labels, event files or recall transcripts in the release.

## Known limitations

- Only one functional run per subject; the other runs of the session are not shared.
- No demographic or behavioural data accompany the images.
- Single site and scanner, with a narrow young-adult age range.

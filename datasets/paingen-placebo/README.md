This OpenNeuro dataset holds the imaging of the placebo part of the Paingen study by Tor Wager's group, scanned at
the University of Colorado Boulder. Adult twins received painful heat and pressure on two fingers, one treated with a
cream they were told was a painkiller and one with an identical cream called a control. Before scanning, a
conditioning phase secretly lowered the heat on the placebo finger. The study, with pre-registered analyses, tested whether the placebo reduces
activity in brain signatures of nociceptive pain or acts on affective and cognitive systems. It found clear
analgesia in the ratings but no drop in the nociceptive markers. The data are shared under a CC0 waiver and are
mirrored on brainlife.io.

## Composition

The release covers the 395 participants of the pre-registered sample: 232 women and 163 men aged 30 to 43 (mean
35.4). The paper counts 142 monozygotic twins, 160 dizygotic twins and 93 people without a sibling in the sample;
the participant table gives family and twin ids so pairs can be modelled. Each participant has a T1-weighted scan,
a pair of opposite phase-encoding field maps and the placebo task fMRI with its event files. 392 participants have
all four runs. A derivatives folder adds beta maps for each condition from the first-level analysis and the matching
behavioural ratings.

## Acquisition

Scans come from one 3 T Siemens Prisma with a 32-channel head coil. The T1-weighted MPRAGE has 0.8 mm isotropic
voxels (TR 2000 ms, TE 2.11 ms). Task fMRI uses multiband 8 EPI with 2.7 mm isotropic voxels, TR 460 ms, TE
27.2 ms and 550 volumes per run, each with a single-band reference image. The four runs go control, placebo,
placebo, control, with eight thermal or mechanical trials each. The protocol also acquired resting-state fMRI, a
perspective-taking task and diffusion MRI, but those are not part of this release.

## Known limitations

All participants come from one Colorado twin registry and are mostly white, and the age range is narrow. A few
participants completed scanning on another day, which shows as a second or third session. The participant table has
two more rows than there are subject folders, and a few listed ages fall outside the range the paper reports.
The paper names signal dropout from the high multiband factor in some regions, such as ventral prefrontal cortex.

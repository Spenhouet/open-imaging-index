This OpenNeuro dataset holds brain MRI of adolescents from the Adolescent Health and Development in Context study, a
community cohort in Columbus, Ohio, run by The Ohio State University. The parent study tracks how places young people
spend time in, tracked by GPS and smartphone surveys, relate to substance use. The imaging arm asks how these exposures
and substance use reshape brain structure and function, and whether brain measures predict later substance use.
Snapshot 1.0.0 was released in March 2025 under a CC0 waiver.

## Composition

The release contains 262 participants, 143 female and 119 male, aged 11 to 20 years (mean 15.6). Each has one
imaging session, without session labels. Every T1-weighted image in the release was acquired between July 2018 and
March 2020, the period of the first imaging wave (wave 3 of the parent study). The README also describes a second
imaging wave (2022 to 2024, 120 scanned), but no data from that wave are in this snapshot. All participants have a
T1-weighted image and fMRI; 257 have a T2-weighted image, 255 have diffusion imaging and 233 have field maps. The
participants file lists age, sex, weight and height.

## Acquisition

Scans were made at the Center for Cognitive and Behavioral Brain Imaging at Ohio State on a Siemens scanner (the
sidecars do not state the model or field strength). The protocol contains a 3D MPRAGE T1-weighted image (1 mm), an
axial 2D turbo spin echo T2-weighted image, 64-direction diffusion imaging with multiband 2, two resting-state runs
and two runs each of an emotional faces task, a cue reactivity task (food, marijuana, flavored e-cigarettes, alcohol
and outdoor images), a monetary incentive delay task and an n-back working memory task. The last two use the same
task scripts as the ABCD study. Functional runs come with single-band reference images and, for most tasks, event
files.

## Annotations

There are no image annotations. Task event files record the trial timing.

## Known limitations

- Only the first imaging wave is shared, although the dataset title and README describe two waves.
- 271 adolescents were scanned in that wave according to the README, but 262 are in the release.
- The README gives post quality control counts per task (for example 249 usable MPRAGE scans), but the release does
  not mark which runs failed quality control.
- Survey, GPS, ecological momentary assessment and biosample data from the parent study are not included.
- The README asks users not to attempt to re-identify participants.

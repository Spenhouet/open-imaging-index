This OpenNeuro release holds the brain imaging from a Weizmann Institute study of olfaction in women with unexplained
recurrent pregnancy loss (uRPL). Liron Rozenkrantz, Noam Sobel and colleagues asked whether these women perceive and
process men's body-odor differently from women without pregnancy loss. The release contains task fMRI recorded while
participants were exposed, without being told when, to a pooled body-odor of unfamiliar men or to clean air, plus
T1-weighted anatomy and high-resolution coronal T2-weighted images used to measure olfactory bulb volume and olfactory
sulcus depth. Data are in BIDS under CC0. The same release is mirrored on brainlife.io.

## Composition

59 women: 26 with uRPL (at least two consecutive miscarriages before week 15 without a known cause) and 33 controls.
Ages in the participants table run from 25 to 48 years. 56 subjects have a T1w image, 51 a T2w image and 46 have the
two BOLD runs, 23 in each group. 38 subjects have all three contrasts. There are no session folders. The participants
table holds only age, sex and group; the behavioural olfaction scores from the paper are not part of the release.

## Acquisition

All imaging was done on a Siemens MAGNETOM Trio at 3 T. Each fMRI session had two runs of the same paradigm, one with
body-odor and one with blank air, in counterbalanced order, separated by the T1w scan. In each run participants watched
20 emotional and 20 landscape film clips of 12 s and rated their arousal after each clip, while an olfactometer
delivered the odor or blank pulse during the clip. The EPI used TR 2000 ms, TE 25 ms, 3 x 3 mm in-plane voxels, 3.7 mm
slices and 450 volumes per run with a 12-channel coil. The T1w image is a 1 mm isotropic MP-RAGE. The T2w image is a
coronal turbo spin echo over the anterior skull base with 0.4 x 0.4 mm in-plane resolution and 1.6 mm slices, acquired
with a 32-channel coil.

## Annotations

There are no image labels. Group membership comes from clinical history. Events files give clip onsets per run.

## Known limitations

- The paper reports 48 fMRI participants (24 uRPL) and 55 with T2w imaging, while the release holds 46 and 51.
- sub-46 and sub-54 carry a duplicate pair of BOLD runs labelled run-001 next to the regular runs.
- Several runs were trimmed or stopped early; the README lists the affected subjects.
- Single site and small groups; the fMRI effects in the paper came from region-of-interest analyses.

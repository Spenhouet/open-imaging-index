This dataset holds the MRI data of a round-robin interpersonal perception study by Robert S. Chavez, scanned at the
University of Oregon. In a round-robin design, members of a group rate one another, so each person is both a perceiver
and a target. The functional runs belong to a task named "round robin trait judgement", plus one localizer run. The
dataset was published on OpenNeuro in December 2024 under CC0, and version 1.0.1 added the analysis scripts. A 2024
paper from the same lab reports a study with a matching design, but neither the paper nor the OpenNeuro record names
the other.

## Composition

The snapshot holds 114 subjects in one session (wave1). Subject labels combine a group (G01 to G20) and a member number
(S01 to S06), and several groups have fewer than six members. Each subject has one T1-weighted scan, five runs of the
trait judgement task (A to E) and one localizer run. One subject lacks run B, and three subjects have no field maps.
There is no participants.tsv, so no age, sex or other demographic information is released.

## Acquisition

All sidecars name a Siemens Skyra at 3 T with a 32-channel head coil at the University of Oregon. The T1-weighted scan
is an MP-RAGE with TR 2.5 s, TE 3.43 ms, flip angle 7 degrees and 1 mm slices. Functional runs use a multiband (factor 3)
echo-planar BOLD sequence with TR 2 s, TE 25 ms, flip angle 90 degrees and 2 mm slices. Spin-echo EPI field maps with
opposite phase encoding (AP and PA) are included for distortion correction.

## Annotations

There are no image annotations, and the release has no events files. The scripts folder contains FSL design files for
the first and second level analyses, the Python scripts that generated them and the defacing script.

## Known limitations

- The release has no README, participants file or events files, so trial timing and demographics are not available.
- The study's aims and recruitment are not documented in the record itself.
- Anatomical scans were defaced before sharing.

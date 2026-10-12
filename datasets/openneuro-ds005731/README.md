This dataset contains the MRI data of a round-robin fMRI study from Robert Chavez's lab at the University of Oregon.
Members of 20 existing social groups lay in the scanner and judged whether trait adjectives
described themselves and each of the other people in their group. Because everyone in a group is both a perceiver and a
target, the design lets researchers separate how a person sees others from how that person is seen. Guthrie and Chavez
(2024) used this design with 111 analysed participants to show that closer relationships came with more distinct neural
representations of a person in the medial prefrontal cortex and anterior insula. The dataset was published on OpenNeuro
in December 2024 under CC0. The paper does not cite the OpenNeuro accession. We link the two because they share the
author, the 20-group design, the five task runs of 188 volumes and the scanner.

## Composition

The snapshot holds 114 subjects in one session (wave1), labelled by group (G01 to G20) and member (S01 to S06). Each
subject has one T1-weighted scan, five runs of the round-robin trait judgement task and one localizer run. One subject
lacks one task run, and three subjects have no field maps. There is no participants.tsv. The paper reports 120 recruited
adults aged 18 to 51 (48 female, 72 male, mean age 23.5).

## Acquisition

All scans come from a Siemens Skyra at 3 T with a 32-channel head coil at the University of Oregon. The T1-weighted scan
is an MP-RAGE with 1 mm isotropic voxels. Functional runs use a multiband (factor 3) echo-planar BOLD sequence with TR
2 s, TE 25 ms and 2 mm isotropic voxels. Opposite-phase spin-echo EPI field maps (AP and PA) are included for distortion
correction.

## Annotations

There are no image annotations. The release has no events files. The scripts folder contains FSL design files and the
Python scripts that generated them for the first and second level analyses, along with the defacing script.

## Known limitations

- No README, demographics or events files are released, so sex, age and trial timing cannot be linked to subjects.
- Demographic numbers come from the paper and describe the 120 recruited participants, not the 114 released subjects.
- Anatomical scans were defaced before sharing.

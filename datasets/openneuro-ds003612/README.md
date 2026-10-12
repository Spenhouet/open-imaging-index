This OpenNeuro dataset comes from an fMRI study at the MRI-Lab Graz in Austria that compared how right-handed and
left-handed people engage motor networks when they only imagine a movement and when they perform it. Healthy young
adults first imagined, then executed, a repeated self-paced squeeze of a ball with the right hand, the left hand or both
hands. Crotti, Koschutnig and Wriessnegger reported that left-handers recruited a more bilateral network during
execution, while imagery activity differed between the groups in cortical and cerebellar regions (Journal of
Neuroscience Research 2022). Snapshot 1.0.0 was posted in April 2021 and the latest, 1.0.5, in April 2025, all under
CC0.

## Composition

The snapshot holds 51 subject folders with one session each. participants.tsv lists 50 of them with age, sex and a
handedness group (26 right, 24 left), ages 19 to 29 and 25 female, 25 male; subject 049 has imaging but no row. The
paper describes 51 participants aged 19 to 32, 26 right-handed and 25 left-handed, grouped by the Hand Dominance Test,
and also collected Edinburgh Handedness Inventory and VMIQ-2 imagery scores. Those scores are not in the current
participants.tsv.

## Acquisition

All scans were made on a 3 T Siemens Magnetom Vida with a 64-channel head coil. Each subject has a 1 mm isotropic
MPRAGE T1-weighted scan and two task runs of multiband EPI (1.8 mm isotropic voxels, 78 slices, TR 2.3 s, TE 30 ms,
multiband factor 3): an imagery run followed by an execution run. Each run has a reverse phase-encoding field map and an
events file that marks fixation and the hand cue per block. The paper also describes a multi-shell diffusion
acquisition, but no diffusion data are part of the release.

## Known limitations

- Subject 043 lacks the imagery run and its field map.
- participants.tsv omits subject 049, and its age range differs from the one in the paper.
- The dataset_description.json and README do not cite the paper, and the README still describes questionnaire results
  that the current participants.tsv no longer contains.

This OpenNeuro dataset holds resting-state perfusion MRI of cognitively healthy adults at the two ends of the adult age
range, collected to look at how cerebral blood flow differs with age. It was first released on OpenfMRI in November
2017 and moved to OpenNeuro in 2018. Snapshot 2.0.0 (August 2021) added JSON sidecars and ASL context files and moved
the ASL runs into the BIDS perf folder. The data are shared under a CC0 waiver.

## Composition

There are 63 participants, 35 women and 28 men. The age column splits into two groups with no one between 40 and 59:
31 people aged 19 to 39 and 32 people aged 60 to 84. For the 32 older participants the participant table adds
neuropsychological scores, including the MMSE, CERAD word list and praxis, Wechsler memory and digit tests, Stroop, the
Trail Making Test, verbal fluency and the Boston Naming Test. The younger participants have no test scores. Each
participant has one T1-weighted scan and one ASL run, both from a single session.

## Acquisition

All scans were taken on a 3 T Trio TIM scanner with a 32-channel head coil while participants lay with their eyes open.
The T1-weighted image is a 3D MPRAGE with 1 mm isotropic voxels (TI 950 ms, TR 1760 ms, TE 3.1 ms). Perfusion was
measured with pseudo-continuous labeling and a background-suppressed single-shot 3D GRASE readout, with a 1600 ms
labeling duration and a 1500 ms post-labeling delay, at 4 x 4 x 7 mm resolution. Each ASL file holds 110 volumes: 10
images without background suppression for calibration, followed by 50 label and control pairs acquired over 6 minutes.

## Known limitations

The sample is small and has no middle-aged participants. No diagnosis, group label or clinical outcome is given beyond
the cognitive scores of the older group. The JSON sidecars added in snapshot 2.0.0 describe a different scanner model,
site and readout than the README, so acquisition settings should be taken from the README. No data descriptor paper
is linked from the dataset.

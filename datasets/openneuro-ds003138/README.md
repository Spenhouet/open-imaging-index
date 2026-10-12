This OpenNeuro dataset comes from a randomized longitudinal study at the MRI-Lab Graz in Austria that asked whether
learning a demanding balance skill changes white matter within a few weeks. Young adults from the general population
with almost no slacklining experience were assigned either to a slackline training group or to a control group, and
every participant was scanned three times. Koschutnig, Weber and Fink analysed the diffusion data with fixel-based
analysis, NODDI and tensor metrics and reported changes in sensorimotor tracts that were largest right after training
and had mostly faded at follow-up (Human Brain Mapping 2024). Snapshot 1.0.0 was posted in September 2020 and 1.0.1,
a spelling fix, in November 2023, both under CC0.

## Composition

The release holds 53 participants aged 18 to 36 (31 female, 22 male): 25 in the slackline group and 28 controls, as
listed in participants.tsv. The paper randomized 60 people, of whom seven withdrew. Each participant has three
sessions: a baseline scan, a scan within 24 hours of reaching the training goal (walking 6 m and balancing for 2
minutes), and a follow-up scan three weeks later. Controls were scanned on a matched schedule and could take the
training after the study. Every session has one T1-weighted scan and three diffusion shells, for 159 sessions in total.

## Acquisition

All data were acquired on a 3 T Siemens Skyra with a 32-channel head coil. Diffusion imaging used three shells with
b-values of 1000, 2000 and 3000 s/mm² and 20, 30 and 64 directions, each run with its own echo time and three b = 0
volumes. For each shell, three b = 0 images with posterior-to-anterior phase encoding are stored as field maps for
distortion correction. The anatomical scan is a 3D MPRAGE with 0.8 mm isotropic voxels. A full session took about 14
minutes.

## Known limitations

- The control group was on average about 2.5 years older than the training group, as the paper reports.
- Training intensity varied, since each participant trained until reaching the skill criteria, up to 270 minutes.
- participants.tsv gives age and sex but no training duration or balance scores.
- The ReferencesAndLinks field in dataset_description.json does not cite the paper.

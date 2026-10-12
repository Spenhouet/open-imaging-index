This OpenNeuro dataset holds the raw brain MRI of a Chilean study on adults who had recovered from a mild or
moderate respiratory infection, most of them from COVID-19. The group at Universidad del Desarrollo and Clínica
Alemana de Santiago asked whether two features of the acute illness, loss of smell and the need for hospital
admission, go along with differences in decision making, brain activity and white matter months later. Participants
played a probabilistic reversal learning card game, once outside and once inside the scanner. Snapshot 1.0.0 was
published in July 2024 under a CC0 waiver.

## Composition

The cohort has 100 adults recruited between February 2020 and May 2023 from public and private hospitals in Santiago.
73 had a PCR-confirmed SARS-CoV-2 infection and 27 had a respiratory infection from another agent, with repeated
negative PCR tests and no history of COVID-19; these 27 serve as the comparison group, so there are no healthy
controls. People needing invasive ventilation or intensive care, or with prior brain lesions, neuropsychiatric
disorders or neurological symptoms other than smell loss, were excluded. Imaging took place 2 to 27 months after
diagnosis. The participants table gives age, sex, education, COVID-19 status, smell loss and hospitalization during the
acute episode, persistent cognitive complaints, months since diagnosis, and scores for depression (PHQ-9), anxiety
(GAD-7), cognition (ACE-III), executive function (IFS-Ch), smell (KOR test) and the six-minute walk test.

## Acquisition

All scans come from one 3 T Siemens Skyra. Each participant has a sagittal 3D MPRAGE T1-weighted image and a 3D SPACE
T2-weighted image at 1 mm isotropic resolution. Most have a diffusion series with 30 directions at b = 1000 s/mm²
plus b = 0, at 2 mm isotropic, and a task fMRI run (TR 2.39 s, 3 mm voxels) recorded during the reversal learning
game with its event files. Gradient echo fieldmaps accompany most fMRI runs. Data are in BIDS with NIfTI images and
JSON sidecars.

## Known limitations

- Single site and scanner, one imaging session per person.
- The paper describes a 3D FLAIR acquisition for every participant, but no FLAIR images are in the snapshot.
- Ten participants lack the diffusion series and three lack the fMRI run.
- The snapshot has no dataset README, and participants.json mislabels the hospitalization levels as anosmia.
- Counts in participants.tsv differ slightly from the paper (44 versus 43 with smell loss; mean age 41.6 versus 40.1).
- Only raw images are shared; no derived maps or tractography.

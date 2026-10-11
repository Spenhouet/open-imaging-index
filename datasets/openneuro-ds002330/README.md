Sunavsky and Poppenk at Queen's University ran a pre-registered replication study of brain features that earlier
work had linked to creativity. They tested grey matter volume, white matter microstructure and functional
connectivity against several creativity measures in the same group of healthy adults. The imaging data and the
behavioural scores were released on OpenNeuro as ds002330 under a CC0 waiver.

## Composition

Snapshot 1.1.0 (January 2020) holds 66 participants aged 20 to 35 (median 25): 36 women, 29 men and one person who
reported another sex. Each person has one session with a T1-weighted and a T2-weighted anatomical scan, two diffusion
runs acquired with opposite phase-encoding directions, two resting-state fMRI runs and a pair of field maps with opposite phase-encoding directions.
The participants table carries the creativity scores: the Creative Behavior Inventory, the Creative Achievement
Questionnaire with its ten domain subscales, and verbal and visual subscores of the Abbreviated Torrance Test for
Adults. Two participants lack some or all of the Torrance scores.

## Acquisition

All scans come from one 3T Siemens Trio scanner at the Centre for Neuroscience Studies, Queen's University, Kingston,
Ontario. The anatomical images have 0.7 mm slices. The resting-state runs use a multiband factor of 6 with a TR of
1.9 s and 1.5 mm slices, and the diffusion runs also use 1.5 mm slices. Data are organized in BIDS 1.2.0, and
version 1.1.0 added acquisition sidecars for the anatomical scans.

## Annotations

There are no image annotations. The behavioural creativity scores in the participants table are the targets for
prediction or correlation analyses.

## Known limitations

- The sample is small and narrow in age, so it does not represent older adults or children.
- The phenotype is limited to creativity scores; there are no other cognitive, clinical or demographic variables
  beyond age and sex.
- The resting-state scans are not paired with any task fMRI.

This release pools 15 years of sensorimotor task fMRI from the University Medical Center Utrecht, gathered by the
Utrecht BCI group for the PANDA project, which studies whether implanted communication brain-computer interfaces
could help children with severe physical impairment such as cerebral palsy. Children and adults moved, imagined
moving or had a brush stroked over a body part while being scanned, so that hand, foot and mouth areas of the
sensorimotor cortex can be located. The data are on OpenNeuro as ds005366 under CC0 and suit work on somatotopic maps,
motor cortex development and implant target planning.

## Composition

155 participants aged 6 to 89 contributed 471 task runs. 92 were healthy volunteers. 63 were patients scanned
during clinical workup: 60 with drug-resistant epilepsy and 3 before removal of a tumour. 78 are female, and 31 were
younger than 18 at scanning. Six standardized tasks were used: a two-condition block design with movement
(Motor2Class, 148 participants, 416 runs), a child-friendly version of it, a brush stimulation variant, a three-condition
task with executed and imagined movement, and two event-related finger mapping tasks. Body parts include individual
fingers, hand, arm, feet, lips and tongue. Every subject has at least one T1-weighted image and one task run.

## Acquisition

All scans come from Philips systems: an ACS-NT 1.5T (8 participants, 20 runs), an Achieva 3T (139 participants, 434
runs) and an Achieva 7T (13 participants, 17 runs). The 1.5T and 3T functional runs use a PRESTO sequence and the 7T
runs use EPI. Volume times range from 0.5 to 4.86 s. Structural images were defaced with SPM12, converted from
PAR/REC to uncompressed NIfTI and organized in BIDS, with event files for every run.

## Annotations

There are no image labels. Event files give block and trial onsets per condition.

## Known limitations

- All 7T runs and some 1.5T runs cover only the dorsal brain, and the finger mapping runs are not whole-brain.
- Slice timing is not provided, and some finger mapping runs contain phase as well as magnitude images.
- Healthy and patient groups differ in field strength and task mix, as data come from several studies.
- Head motion is high in children and patients; 108 participants have more than 5% motion outlier volumes.
- Runs without event logs, with partial sensorimotor coverage or with visible brain anomalies were excluded.

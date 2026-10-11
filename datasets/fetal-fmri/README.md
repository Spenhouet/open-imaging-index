This OpenNeuro release holds raw fetal resting-state functional MRI volumes and manually drawn fetal brain masks from a Wayne State University (WSU) cohort in Detroit. The authors used these pairs to train a 2D U-Net that separates the fetal brain from maternal tissue in fetal fMRI, and they share them so others can build on that model. The pretrained model, preprocessing pipeline and a tutorial are on GitHub (saigerutherford/fetal-code).

## Composition

The snapshot (version 1.0.0, 2020) contains raw data for 159 fetuses and 181 sessions, labelled ses-T1 and ses-T2 for fetuses scanned at two time points. Each session has one BIDS `task-rest` BOLD file. Mask files under `derivatives/manual-masks/` cover 163 subject folders and 191 sessions, so a few masks have no matching raw file in the snapshot. No participants.tsv is included, so sex and gestational age per fetus are not available from the release.

The paper describes the full WSU cohort as 197 fetuses at 24 to 39 weeks of gestation (mean 30.9), 21 of them scanned twice, from uncomplicated singleton pregnancies. It reports 1,163 manually masked WSU volumes split by subject into training (129), validation (20) and test (48) sets. The shared files cover fewer fetuses than that cohort.

## Acquisition

WSU scans used a Siemens Verio 3 T scanner with an abdominal 4-channel flex coil and an echo-planar sequence (TR 2000 ms, TE 30 ms, 4 mm axial slices, 360 volumes per run). Only selected single volumes are released, not full runs.

## Annotations

Trained research staff drew binary fetal brain masks in BrainSuite on single 3D volumes taken from periods of low fetal motion. The paper reports several masked volumes per fetus.

## Known limitations

Raw and mask files are 4D stacks of separate volumes; consecutive volumes are not temporally connected, so the authors advise against connectivity analysis. Full time series are available only by contacting the study lead. The Yale test cohort from the paper is not part of this release. The release does not list the train, validation and test assignment; the paper and the GitHub page describe it.

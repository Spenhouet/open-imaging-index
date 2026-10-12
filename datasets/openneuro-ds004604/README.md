This OpenNeuro dataset is a normative reference for cerebrovascular reactivity (CVR), the change in brain blood flow
per unit change in blood carbon dioxide. A group at the Université libre de Bruxelles scanned healthy adults while
they breathed blocks of CO2-enriched air and recorded their exhaled CO2 at the same time. The data served to validate
CVRmap, an open BIDS pipeline that turns such recordings into voxelwise CVR and delay maps. The release is under a
CC0 waiver.

## Composition

There are 50 healthy adults with no history of neurological or psychiatric disorder. The participant table gives sex
and age only; it lists 23 women and 27 men aged 21 to 67, with most participants in their twenties and thirties. The
paper reports 25 women for the same cohort, so the two sources disagree on the sex split. Each participant has one
T1-weighted scan, one functional run of the gas challenge task and one breath CO2 trace. Beside the raw data, the
release holds fMRIPrep 21.0.4 output with ICA-AROMA denoising and CVRmap output from versions 2.0.20 and 2.0.25,
the latter also with global signal and vessel signal reference options.

## Acquisition

All scans were taken on a 3 T GE SIGNA PET/MR at Erasme hospital in Brussels. The anatomical scan is a 3D BRAVO
T1-weighted sequence with 1 mm slices. The functional run is 2D gradient-echo EPI with 3 mm slices, TR 3 s and
TE 34 ms. A capnograph sampled breath CO2 during the functional run, and the challenge followed a block protocol
described in an earlier study by the same group. Only MR data are shared; no PET images are part of the release.

## Known limitations

The cohort is small and skews young, with only five participants aged 50 or older. All data come from a single
scanner and site. The participant table does not record smoking status or handedness, although its data dictionary
defines those columns. The sex counts in the table and the paper do not match.

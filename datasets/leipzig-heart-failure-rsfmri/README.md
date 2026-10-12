This entry covers a resting-state functional MRI cohort of 80 patients recruited at the Leipzig Heart Center after
presenting with stenocardia or myocardial infarction. Researchers at the Max Planck Institute for Human Cognitive and
Brain Sciences used it to test whether heart failure goes along with altered functional brain connectivity and whether
that relates to cognitive performance. The same patients were studied earlier with voxel-based morphometry for gray
matter density. The scans themselves are available on reasonable request. Mendeley Data hosts, under CC BY 4.0, the
per-subject connectivity maps and the SPM12 group analyses.

## Composition

All 80 patients (22 women, mean age 54.9 years) were grouped after the fact: 58 had coronary artery disease and 22 did
not. Within the coronary artery disease group, 35 met heart failure criteria based on NT-proBNP serum levels, two of
whom were dropped from the heart failure group for cerebral lesions, and 20 had low NT-proBNP. Three patients in an
intermediate NT-proBNP range were left out of group comparisons. Left ventricular ejection fraction and NT-proBNP were
recorded at admission and again at a follow-up visit about 3.5 years later.

## Acquisition

Imaging and cognitive testing took place only at the follow-up visit. Each patient had a 10-minute resting-state scan
on a 3 T Siemens MAGNETOM Verio with a 32-channel head coil, using gradient-echo EPI with a 2 s repetition time and 300
volumes, plus an MPRAGE T1-weighted image for spatial normalization. Preprocessing used the CONN toolbox and SPM12.

## Annotations

The public release holds, per participant, global correlation and eigenvector centrality maps (with variants using a
different motion model or high-pass cut-off) and seed-based correlation maps from a precuneus seed. Group models use
heart failure status, ejection fraction, NT-proBNP and cognitive performance, with age, sex and body mass index as
covariates.

## Known limitations

- Only derived connectivity maps are openly available; the functional and structural MRI must be requested, and no
  terms for them are published.
- Per-subject clinical variables and cognitive scores are not part of the open release.

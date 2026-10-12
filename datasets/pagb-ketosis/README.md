This OpenNeuro release holds 7 tesla resting-state fMRI and T1-weighted brain scans from a within-subject metabolic intervention study. Healthy adults between 21 and 79 years old came in after an overnight fast on two separate days. On one day they drank a weight-dosed D-beta-hydroxybutyrate ketone monoester, on the other a glucose drink with the same calories, and they were scanned before and about 30 minutes after the drink. The study, registered as NCT04106882, asked whether ketones stabilize functional brain networks and whether that effect depends on age. The data are shared under CC0.

## Composition

There are 101 participants, 48 women and 53 men, all cognitively normal. According to the 2025 paper, 104 people were scanned and three were dropped for head motion. The participant table gives age, sex, body mass index, body weight, fasting insulin, HbA1c and HOMA insulin resistance for each person. Every participant has two sessions, `ses-bhb` for the ketone day and `ses-glc` for the glucose day. Each session contains two resting-state BOLD runs and two T1-weighted volumes, in line with the scans before and after the drink described in the paper, plus phase-difference field maps for most runs.

## Acquisition

All scans come from a single 7 T scanner. The paper reports a simultaneous multislice EPI sequence with a repetition time of 802 ms, an echo time of 20 ms and 2 x 2 x 1.5 mm voxels, giving 740 volumes in just under 10 minutes per run. The T1-weighted images are four-echo MEMPRAGE at 1 mm isotropic. Proton MR spectroscopy was acquired for a subset of 41 participants, but the spectra are not part of this release. Scanner vendor and model are not stated in the shared files or the paper's main text.

## Known limitations

The cohort is small and screened to exclude diabetes, insulin resistance and neurological disease, so it reflects healthy ageing only. No file states which run was acquired before and which after the drink, and the T1-weighted images have no JSON sidecars. A few field map files are missing (one subject lacks the glucose-day field maps, two lack the second ketone-day phase-difference image). The metabolic blood measurements taken during the scan days are not included, and drink order across days is not recorded in the release.

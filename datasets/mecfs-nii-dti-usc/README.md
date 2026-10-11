This release holds preprocessed white matter diffusion maps from a single-centre Australian study of myalgic encephalomyelitis/chronic fatigue syndrome (ME/CFS) at the University of the Sunshine Coast. It was published on Zenodo so that the analyses of Yu et al. (2026, Human Brain Mapping) can be reproduced. That study fitted a diffusion-based neuroinflammation imaging (NII) model alongside the standard diffusion tensor model and compared patients with controls voxel by voxel using tract-based spatial statistics.

## Composition

134 adults aged 18 to 65 at recruitment: 67 people with ME/CFS (54 women, 13 men, median age 38) and 67 healthy controls (52 women, 15 men, median age 38). Patients received a consensus diagnosis from two clinicians under the Canadian Consensus Criteria. Controls were recruited on purpose with a sedentary lifestyle, under 60 minutes of moderate or vigorous exercise per week, to reduce the effect of deconditioning. Groups did not differ in age, sex, body mass index, activity level or scan time.

Each participant folder holds eleven maps: NII hindered water ratio, restricted fraction, fibre fraction, axial, radial and mean diffusivity and fractional anisotropy, plus DTI fractional anisotropy, mean, axial and radial diffusivity. A spreadsheet adds demographics and symptom scores (anxiety and depression, SF-36 mental and physical health, sleep quality, disability).

## Acquisition

All scans come from one Siemens Skyra 3T scanner with a 64-channel head coil. Diffusion MRI used multiband EPI at 2 mm isotropic resolution with b = 1000 and 2500 s/mm² shells (27 and 62 directions) and reverse phase-encoded b = 0 volumes. Data were corrected with FSL eddy and TOPUP, tensor-fitted with dtifit and warped to MNI 152 space through the TBSS FA registration; the NII maps use the same warps.

## Known limitations

Only derived maps in standard space are shared, not the raw diffusion-weighted images, so other models cannot be fitted. The 67 patients are a matched subset of a larger cohort of 76; nine were dropped to keep a 1:1 ratio. Women make up about four in five participants. All data come from one site and scanner.

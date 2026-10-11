This release holds preprocessed white matter diffusion tensor maps from a single-centre Australian study of myalgic encephalomyelitis/chronic fatigue syndrome (ME/CFS) at the University of the Sunshine Coast. It was put on Zenodo so that the analyses of Yu et al. (2025, Scientific Reports) can be reproduced. That study split patients by how their illness began, after an infection or gradually, and compared each group with matched controls using tract-based spatial statistics. Post-infectious patients showed raised axial diffusivity in several tracts, while gradual onset patients showed lowered axial diffusivity in the corpus callosum.

## Composition

142 adults: 43 with post-infectious ME/CFS, 33 with gradual onset ME/CFS and 66 healthy controls. Patients received a consensus diagnosis from two clinicians under the Canadian Consensus Criteria. Controls were chosen for a sedentary lifestyle, under 60 minutes of moderate or vigorous exercise per week, to limit the effect of deconditioning. Among patients, 63 are women and 13 men; recruitment covered ages 18 to 65.

Each participant has four maps: fractional anisotropy, mean, axial and radial diffusivity. A spreadsheet adds demographics and symptom scores (anxiety and depression, SF-36 mental and physical health, sleep quality, disability).

## Acquisition

All scans come from one Siemens Skyra 3T scanner with a 64-channel head coil. Diffusion MRI used multiband EPI at 2 mm isotropic resolution with b = 1000 and 2500 s/mm² shells (27 and 62 directions) and reverse phase-encoded b = 0 volumes. Data were corrected with FSL TOPUP and eddy, tensor-fitted with dtifit and warped to MNI 152 space through the TBSS FA registration.

## Known limitations

Only derived maps in standard space are shared, not the raw diffusion-weighted images. In the paper each patient group was compared with its own 1:1 matched control set, and the two control sets overlap. The same group later released neuroinflammation imaging maps from the same site and scanner for 67 patients and 67 controls; that release also draws on a pool of 76 patients, so the participants probably overlap. Women make up most of the patient sample. All data come from one site and scanner.

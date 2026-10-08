ParkTDI is a small cross-sectional diffusion MRI study of Parkinson's disease from the Cyclotron Research Centre at the University of Liège, released on NITRC in 2014 together with the paper that introduced track density imaging for this disease. It is used to compare white matter microstructure and tractography-derived maps between patients and controls, and as a high angular resolution test set for diffusion modelling.

## Composition

The release covers 53 people: 27 non-demented patients with clinically diagnosed Parkinson's disease and 26 healthy controls matched on age, sex and education. The patients were in early stages (mean Hoehn and Yahr stage 1.5, mean disease duration 5 years). Three downloads are offered: the motion-corrected diffusion images, spatially normalized track density maps for all 53 subjects, and a CSV file with demographics, intracranial volume, a motion index, neuropsychological test scores and, for patients, UPDRS parts 2 and 3, Hoehn and Yahr stage, disease duration and levodopa equivalent dose.

## Acquisition

All scans come from one 3 T head-only Siemens Magnetom Allegra with an 8-channel head coil. The diffusion sequence used a twice-refocused spin echo with EPI readout, 120 gradient directions at b = 1000 and b = 2500 s/mm², 22 interleaved b = 0 volumes, 2.4 mm isotropic voxels and about 35 minutes of scan time. Patients were scanned on their usual medication. The authors realigned the volumes using the interleaved b = 0 images, split them by shell and averaged the b = 0 images to the front of each 4D NIfTI file, with FSL-style gradient tables alongside. The paper also describes multi-parameter mapping scans, but these are not part of the download.

## Known limitations

The cohort is small and comes from a single scanner and site. Subjects with poor image quality were excluded from a larger sample before release. Only preprocessed diffusion data are shared, not the raw scanner output, and no structural T1-weighted images are included. The NITRC page names the license as Attribution Share Alike without a version number.

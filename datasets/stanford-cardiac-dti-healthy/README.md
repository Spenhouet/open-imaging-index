This release holds processed cardiac diffusion tensor imaging (cDTI) of the heart from healthy volunteers, deposited in the Stanford Digital Repository by the cardiac MR group of Daniel Ennis and Luigi Perotti. It was built as a reference for the microstructure and biomechanics of healthy myocardium and as a benchmark for developing and testing cardiac diffusion processing pipelines, building computational heart models and comparing future patient studies against normal fiber architecture. The quantitative analysis is described in a chapter of Functional Imaging and Modeling of the Heart (FIMH 2025) by Hannum, Cork, Perotti and Ennis.

## Composition

The study enrolled 55 participants prospectively, and the record states that 48 of them are healthy volunteers with a mean age of 39.4 years (standard deviation 13). The public file listing has 48 participant folders, all named as healthy volunteers. Each participant has two archives. The Processing archive keeps the intermediate outputs of each stage of the diffusion pipeline as NIfTI images with b-value, gradient direction and header files. The Analysis archive holds the final diffusion tensor data used in the publication, a left ventricle segmentation and the derived diffusion metric maps. Sex and age bins are not reported on the record.

## Acquisition

All participants were scanned between 2023 and 2025 on a 3 T Siemens MAGNETOM Vida Fit with the same protocol and the same radiofrequency coil configuration. Processing used the Cardiac Diffusion in Python (CarDpy) toolbox. The sequence parameters are not listed on the record.

## Annotations

Left ventricle segmentations are provided as NRRD files, and diffusion tensor metrics as MATLAB files, per participant.

## Known limitations

Only processed diffusion data is in this record. All acquired MRI data of the whole cohort, including cine, tagging, DENSE strain imaging and T1 maps and four patients with aortic stenosis, sit in a separate repository record (doi:10.25740/xt223hz2438) under a different license. Beyond the license, the repository's use statement asks users not to use the content to identify individuals. The download is about 138 GB.

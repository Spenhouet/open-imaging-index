Calgary-Campinas-359 (CC-359) is an openly downloadable set of volumetric T1-weighted brain MRI from healthy adults,
built by groups at the University of Calgary and the University of Campinas. Its scans come from scanners of three
vendors at two field strengths, so it is used to study how scanner and field strength affect automatic analysis, to
tune and benchmark skull stripping and other brain segmentation methods, and to train deep learning models. A second
release added raw multi-coil k-space data for MRI reconstruction research.

## Composition

The reconstructed part holds 359 T1-weighted volumes of older healthy adults aged 29 to 80 years, roughly 60 per
vendor and field strength combination. The paper describes the cohort as approximately balanced for age and sex
within the limits of the available images. File names encode vendor, field strength, age and sex.

The raw data part holds 167 fully or partially sampled 3D T1-weighted gradient echo acquisitions of presumed healthy
adults (20 to 80 years, mean 44.5). Of these, 117 were acquired with a 12-channel coil (47 training, 20 validation, 50
test) and 50 with a 32-channel coil (all test). For the test scans only undersampled k-space at acceleration 5 and 10
is shared. An earlier simulated single-coil track is discontinued.

## Acquisition

Reconstructed volumes come from GE, Philips and Siemens scanners at 1.5 T and 3 T. The raw data were acquired on a GE
Discovery MR750 with 1 mm isotropic sagittal slices and one of two parameter sets (TR/TE/TI 6.3/2.6/650 ms or
7.4/3.1/400 ms).

## Annotations

Every volume has silver-standard brain masks, one from a STAPLE consensus of eight public skull stripping tools and
one from a supervised classifier. An expert manually segmented the brain in 12 randomly chosen subjects,
and the same 12 have manually corrected BEaST masks. Hippocampus silver-standard masks exist for 357 volumes, plus
FreeSurfer 6.0 hippocampal subfield labels.

## Known limitations

Only T1-weighted images are included. Most brain masks are consensus results rather than manual labels. Exact
counts per vendor, field strength and sex are not listed here. It is not stated whether the raw-data subjects overlap with the 359 reconstructed volumes. The NoDerivatives license limits
sharing of anything built from the data.

7TAMIbrain is an openly shared set of quantitative brain T1 maps from 60 young adults without known neurological disease, acquired on a 7 tesla scanner. The authors used these images to build a consensus atlas of deep grey nuclei and to report reference T1 relaxation values for each nucleus, intended as a normative baseline for detecting subtle changes in neurological disease. The data are hosted on OpenNeuro under CC0 and accompany a 2022 paper in the European Journal of Neuroscience.

## Composition

The release holds 60 subjects with one session each and one T1 map per subject, in BIDS layout. The participant table lists sex and age: 30 women and 30 men aged 19 to 45, with most in their twenties. A `dataset` column assigns 30 subjects to the group used to build the template and the other 30 to a validation group. The `derivatives/atlases` folder holds per-subject label maps from three atlases (the study's own 7TAMI deep grey nuclei atlas, CIT168 and Morel) for 57 of the 60 subjects.

## Acquisition

According to the paper, the source images were 3D MP2RAGE volumes at 0.6 mm isotropic resolution. The shared T1 maps derive from these volumes; the paper reports a correction for residual B1+ bias before T1 values were extracted. Scanner vendor and model are not stated in the files on OpenNeuro.

## Annotations

Two neuroradiologists delineated 24 deep grey nuclei per hemisphere, including the claustrum and 12 thalamic nuclei, on a 0.5 mm template built from 30 subjects, and a third neuroradiologist reviewed the result. The consensus atlas and the CIT168 and Morel atlases were then mapped to each subject by nonlinear registration, which produced the label maps in the derivatives folder.

## Known limitations

Only the T1 maps are shared, not the raw MP2RAGE inversion images. The cohort is small and young, so it does not cover ageing or disease. The individual label maps come from registration, not from manual tracing on each subject. Three subjects have no label maps. The paper is not open access.

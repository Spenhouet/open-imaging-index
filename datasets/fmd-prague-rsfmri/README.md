This entry covers the resting-state fMRI cohort behind a 2022 study by Charles University in Prague and the Max Planck
Institute for Human Cognitive and Brain Sciences in Leipzig. The authors compared voxel-wise network centrality between
people with functional movement disorder (FMD) and healthy controls, and between patients with and without functional
weakness, and correlated centrality with motor symptom severity. The scans themselves are offered on reasonable request
as anonymized pre-processed NIfTI files. What is public is a CC BY 4.0 deposit on Mendeley Data with each
participant's connectivity maps and the SPM12 group analyses.

## Composition

The cohort has 48 patients with clinically definite FMD and 65 controls. Of the patients, 28 had functional weakness
and 20 did not; all had non-paroxysmal motor symptoms. Controls had no signs of neurological disease, but people with
depression, anxiety or antidepressant treatment were deliberately included to match common comorbidity in FMD. Mean
age was 45.3 years in patients and 46.0 in controls; 37 patients and 41 controls were women.

## Acquisition

Every participant had one 10-minute resting-state BOLD run (304 volumes, TR 2 s, 3 mm in-plane resolution, 30 axial
slices) on a 3T Siemens MAGNETOM Skyra with a 32-channel head coil, fixating on a crosshair. The same sequence was used
for the whole study. Pre-processing used the CONN toolbox and SPM12.

## Annotations

Clinical labels include the simplified FMD rating scale, the Beck Depression Inventory, the State-Trait Anxiety
Inventory, disease onset and duration, and psychotropic medication. The public deposit holds global correlation (with
and without denoising), intrinsic connectivity, two eigenvector centrality variants, and seed-based correlation from
the precuneus and the left temporoparietal junction, one NIfTI map per participant each.

## Known limitations

- Raw and pre-processed fMRI are not public, and no terms for the on-request data are published.
- The public maps are derived values in standard space, not images that can be reprocessed.
- Single site, single scanner, and a modest sample split further by phenotype.

NEUROLINGUA brings together fMRI language localizer runs that the Basque Center on Cognition, Brain and Language
(BCBL) in Donostia-San Sebastian collected across many of its projects between 2010 and 2022. All participants
lived in Gipuzkoa, where Basque and Spanish are both everyday languages, so the cohort spans people who are close to
monolingual in Spanish through to balanced Basque-Spanish bilinguals and speakers of three languages. The aim is to
study how the language comprehension network varies with age of acquisition, exposure and proficiency. The data
descriptor appeared in Scientific Data in 2026, and the release is on OpenNeuro as ds007111.

## Composition

The paper and participants.tsv list 725 healthy adults aged 18 to 82 (389 women; mean age 34, median 27). Snapshot
1.1.1 holds 1,684 BOLD runs: 717 subjects have at least one Spanish run, 294 a Basque run and 57 an English run,
and many subjects have repeated runs. Derivatives include CAT12 morphometry (atlas volumes, cortical surfaces and
thickness) for 723 subjects, SPM12 probabilistic atlases of the auditory and visual comprehension contrasts, and a
phenotype table with sociolinguistic, education and cognitive measures. The stimuli for all three languages are
included.

## Acquisition

All scans come from a 3 T Siemens Magnetom scanner. T1-weighted images are 3D MPRAGE at 1 mm isotropic with a
64-channel head coil. Functional runs are gradient-echo EPI; the two most common settings are TR 850 ms with 2.4 mm
voxels and TR 2400 ms with 3 mm voxels. The task is an adaptation of the Pinel localizer: auditory and visual
sentences for passive comprehension, mental arithmetic or a button press, plus flashing checkerboards.

## Annotations

There are no image labels. Events files give onsets and conditions of every trial.

## Known limitations

- The original T1-weighted images are not on OpenNeuro. BCBL shares them only for justified requests under its own
  agreement, and asks researchers to use the CAT12 derivatives instead where possible.
- Data come from many projects, so acquisition parameters, number of runs and languages tested differ between
  people. Some subjects have more than the 14 runs the paper states as the maximum.
- Phenotype variables are missing for part of the cohort, with missing rates from 1 to 52 percent per variable.
- Three subjects have T1-weighted scans of too low quality for morphometry.

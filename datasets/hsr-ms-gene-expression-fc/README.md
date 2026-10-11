This entry covers the brain MRI cohort behind a 2026 study from the Neuroimaging Research Unit of IRCCS San Raffaele
in Milan. The authors measured resting-state functional connectivity with voxel-wise degree centrality and tested
whether regions with abnormal centrality in multiple sclerosis (MS) match regional expression of 3,634 MS-related
genes taken from the Allen Human Brain Atlas. The images stay with the research unit. A per-subject table of
demographic, clinical, cognitive and brain volume measures is public on Mendeley Data under CC BY 4.0.

## Composition

Participants were drawn retrospectively from the unit's database: 558 consecutive right-handed adults with MS and 214
right-handed healthy controls who had the same MRI and neuropsychological protocol. Of the patients, 365 had
relapsing-remitting MS, 133 secondary progressive and 60 primary progressive MS. 491 patients completed the Brief
Repeatable Battery of Neuropsychological Tests, and 144 of them met the criterion for cognitive impairment (failure in
at least two domains). Median age was 42.4 years in patients and 38.4 in controls; 61% of patients and 54% of controls
were women.

## Acquisition

Scans came from two 3T Philips systems: an Achieva (334 patients, 110 controls) and an Ingenia (224 patients, 104
controls). Every participant had resting-state echo planar fMRI with eyes closed and a 3D T1-weighted fast field echo
scan. Lesions were imaged with dual-echo turbo spin echo on the Achieva and with 3D FLAIR on the Ingenia. The paper's
supplement gives the sequence parameters per scanner.

## Annotations

White matter lesions were contoured semi-automatically on the dual-echo scans and by a convolutional network on the
FLAIR and T1-weighted scans, then checked visually. Normalized brain, cortical, deep grey matter and white matter
volumes come from SIENAX. Clinical labels include phenotype, EDSS, disease duration, treatment class and cognitive
z-scores.

## Known limitations

- Images, lesion masks and connectivity maps are not shared, and no terms for them are published.
- The public table holds derived values only, with no image data.
- Two scanners with different lesion sequences and lesion segmentation methods were used, and their share differs
  between patients and controls.

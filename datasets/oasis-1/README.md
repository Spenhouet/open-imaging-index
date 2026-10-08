OASIS-1 was the first release of the Open Access Series of Imaging Studies from Washington University in St. Louis,
published in 2007. It provides structural brain MRI from one visit per person across the adult age range, covering
young and middle-aged adults as well as older adults with and without Alzheimer's disease. It is commonly used to
study brain volume changes with age and dementia and to develop and test segmentation and classification methods.

## Composition

The set holds 416 right-handed subjects aged 18 to 96: 160 men and 256 women. 316 are nondemented and 100, all over
60, have a clinical diagnosis of probable Alzheimer's disease with a Clinical Dementia Rating of 0.5 (70 subjects),
1 (28) or 2 (2). A reliability subset of 20 nondemented subjects was scanned again within 90 days of the first
session. The dataset page counts 434 MR sessions in total. A spreadsheet lists sex, handedness, age, education,
socioeconomic status, MMSE, CDR and three derived anatomic measures: estimated total intracranial volume, atlas
scaling factor and normalized whole-brain volume.

## Acquisition

Each session contains 3 or 4 repeated T1-weighted acquisitions of the same structural protocol, stored sagittally at
1 x 1 x 1.25 mm. The repetitions were combined into a motion-corrected average, which was then gain-field corrected
and registered to the Talairach and Tournoux atlas space at 1 mm isotropic resolution, with and without a brain mask.
Faces were removed before release. All images are in Analyze 7.5 format, about 15.8 GB compressed. FreeSurfer outputs
are offered as a separate download.

## Annotations

There are no manual labels. Each session includes an automated grey matter, white matter and CSF segmentation of the
masked atlas-registered image, and the clinical diagnosis and CDR serve as labels for classification.

## Known limitations

- Cross-sectional design: apart from the 20 reliability subjects, each person has a single session.
- Dementia cases are limited to subjects over 60, and the under-60 range is dominated by people in their twenties
  (119 of 416).
- Scanner model and field strength are not stated on the dataset page or in the fact sheet.
- The OASIS team advises against pooling OASIS-1 with OASIS-2 or OASIS-3.

This OpenNeuro release (ds003877) holds the structural MRI data behind a study of brain morphometry and early growth
failure in children from an extremely poor urban neighbourhood of Dhaka, Bangladesh. The children belong to the
Bangladesh Early Adversity Neuroimaging (BEAN) study, run by Boston Children's Hospital, Harvard and the icddr,b, which
followed 260 children from infancy. The study asked whether stunting, underweight and wasting in the first three years
relate to brain volume and cortical shape at about six years, and whether they link socioeconomic status to brain
structure and IQ. The data are shared under a CC0 waiver. The README asks users to tell the study lead their research
question and states that this does not affect access.

## Composition

The release has 79 children (36 girls, 43 boys) aged 5.5 to 7 years at the scan. Of 81 children scanned, two were
dropped for severe head motion. Each child has one T1-weighted image. The participants table gives sex, age at MRI in
months, how often C-reactive protein was raised, height-for-age, weight-for-age and weight-for-height z-scores, head
circumference at the scan, rescaled maternal education, log income-to-needs and full-scale IQ from the Wechsler
Preschool and Primary Scale of Intelligence. By the paper's z-score cut-off of -2, 24 children were stunted, 18
underweight and 8 wasted. No child had a diagnosed neurological disease.

## Acquisition

All scans come from one 3T Siemens MAGNETOM Verio with a 12-channel head coil at the National Institute of Neuroscience
and Hospital in Dhaka. The T1-weighted image is a sagittal MPRAGE with 1 mm isotropic voxels (TR 2500 ms, TE 3.47 ms).
Children were prepared with a cardboard mock scanner and practice at lying still. Growth measures were taken at 21, 30
and 36 months of age.

## Known limitations

- Single site and scanner, and a sample from one low-income urban area.
- Functional and diffusion scans were acquired in the same sessions but are not part of this release.
- No derivatives are included; the analysis code is in a separate GitHub repository named in the README.
- Growth measures date from early childhood, years before the scan.

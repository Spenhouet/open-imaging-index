The Enhanced NKI-Rockland Sample is the second phase of the NKI-Rockland Sample, run by the Nathan Kline Institute
for Psychiatric Research in Orangeburg, New York, and now called Rockland Sample I. Recruitment started in March 2012
and the project ran until 2020. In contrast to the convenience-sampled pilot (a separate entry), participants were
recruited from the community by zip code so that the sample would mirror Rockland County, whose demographics resemble
the United States as a whole. Data were shared before publication in periodic releases through the International
Neuroimaging Data-sharing Initiative, starting with 181 participants in January 2013. The later Rockland Sample II
(from 2021) is not part of this entry.

## Composition

The project reports about 1,500 participants aged 6 to 85, pooled from four NIH-funded studies: a cross-sectional
lifespan study that planned 1,000 people with oversampling of the youngest and oldest ages, a longitudinal study of
children and adolescents, a real-time fMRI neurofeedback study of adults aged 25 to 40, and an adult longitudinal
study of brain aging. Several studies have repeat visits.

## Acquisition

Scanning used a Siemens MAGNETOM TrioTim. The main protocol includes multiband resting-state fMRI at TR 645 ms (3 mm)
and TR 1400 ms (2 mm), a standard resting-state run at TR 2500 ms, 137-direction multiband diffusion MRI at 2 mm, MPRAGE,
a visual checkerboard and a breath-holding task, and pseudo-continuous ASL. The 2020 protocol sheet also lists a T2-weighted
SPACE scan and FLAIR. The neurofeedback study used its own task fMRI series. The open release is organized as BIDS
NIfTI with cardiac and respiratory recordings.

## Annotations

There are no image labels. The open release carries age, sex and handedness. Psychiatric diagnoses, item-level
questionnaires, neuropsychological tests, laboratory measures and actigraphy are in the phenotypic release, which
needs a signed agreement.

## Known limitations

- Living in Rockland County is known for every participant, so the data cannot be fully de-identified under HIPAA.
- Anatomical images are defaced, which can disturb tools such as FreeSurfer.
- The team does minimal cleaning and validation and asks users to run their own quality checks.
- Multiband data need care with slice timing, temporal autocorrelation and smoothness-based inference.
- The open release has no license of its own; the INDI non-commercial terms are the closest stated terms.

AIBL is an observational cohort from Melbourne and Perth that follows older Australians to learn how Alzheimer's
disease begins and progresses. It started in November 2006 with 1,112 people aged 60 and over and reassesses them
every 18 months with cognitive tests, blood sampling, lifestyle questionnaires and, for a subset, brain MRI and amyloid
PET. New participants were added over time to replace those lost to follow-up. Through an agreement with the
Alzheimer's Association, the participants who have both MRI and PET are shared through the same LONI archive as ADNI,
with their data mapped to the ADNI table structure.

## Composition

A 2021 overview counts 2,359 participants: 1,487 cognitively normal, 413 with MCI, 441 with Alzheimer's dementia and
18 with other conditions at their first visit. 954 of them had at least one structural MRI and 2,336 MRI sessions had
been acquired. The study website reports 3,045 participants as of February 2023. The LONI release covers only the
imaged subset: about a quarter of the cohort up to the 36-month visit, then 250 MR/flutemetamol, 200 MR/florbetapir
and 50 MR/PiB cases added at 54 months. Baseline, 18-month and 36-month data are released.

## Acquisition

MRI came mainly from Siemens scanners: 3 T Trio and Skyra in Melbourne, 3 T Verio and 1.5 T Avanto in Perth. LONI
holds raw DICOM only, and only the ADNI-compliant series: MPRAGE and axial PD/T2 TSE, plus MPRAGE and 3D T2 FLAIR at
54 months. Amyloid PET used PiB, florbetapir and flutemetamol, with PiB frames re-summed to the ADNI 50 to 70 minute
window. Demographics, medical history, cognitive scores, APOE and blood results come as CSV tables.

## Annotations

There are no image labels in the release, only diagnoses and the ADNI-style clinical tables. Outside the release,
Yates et al. (2014) read 3 T susceptibility-weighted images of 174 AIBL participants for microbleeds at three time
points.

## Known limitations

- Susceptibility-weighted, diffusion and ASL scans were acquired for a subset, but the LONI imaging page does not list
  them among the shared series.
- Some early baseline scans lacked ADNI-compliant series and are not provided.
- DICOM headers are not reliable for age and sex; the non-imaging tables are.
- The cohort is mostly Caucasian and highly educated.

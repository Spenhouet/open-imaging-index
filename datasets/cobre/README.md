COBRE is a schizophrenia sample shared through the International Neuroimaging Data-sharing Initiative (INDI) by the
Mind Research Network and the University of New Mexico. The data come from a National Institutes of Health Center of
Biomedical Research Excellence grant. The INDI release holds raw resting-state and anatomical MRI with basic
phenotypes, which makes it a common benchmark for comparing patients and controls on functional connectivity and
brain structure.

## Composition

There are 147 participants: 72 patients with schizophrenia and 75 healthy controls, aged 18 to 65 in both groups.
Diagnoses were made with the Structured Clinical Interview for DSM disorders. People with a neurological disorder,
intellectual disability, severe head injury with more than 5 minutes of unconsciousness, or substance abuse or
dependence in the past 12 months were excluded. Every participant has a resting-state fMRI run and an anatomical
scan, and the phenotypic file lists sex, age, handedness and diagnosis. The release consists of one scan archive and
three CSV files (rest parameters, MPRAGE parameters, phenotypes).

## Acquisition

The anatomical scan is a sagittal 5-echo MPRAGE (TR 2530 ms, TI 900 ms, echo times 1.64 to 9.08 ms, flip angle 7°,
1 mm isotropic voxels, 256 x 256 x 176 matrix, 6 minutes). Resting-state data use single-shot EPI aligned to the
AC-PC line with TR 2 s, TE 29 ms, a 64 x 64 matrix and 32 interleaved ascending axial slices of 3 x 3 x 4 mm. The
descriptor paper for the wider COBRE collection names a Siemens 3 T TIM Trio with a 12-channel head coil at MRN.

## Annotations

There are no image labels. Diagnosis (schizophrenia or control) is the main label for classification.

## Known limitations

- No source states the exact release date. INDI announced the contribution for summer 2012; the INDI data table did
  not list it in October 2012 and listed it as released in May 2013. The year is set to 2013.
- The descriptor paper covers the full COBRE collection in COINS (about 100 patients and 100 controls, more
  modalities). Its acquisition values differ from the INDI page in places (TI 1.2 s, 33 EPI slices, 3.75 x 3.75 x
  4.55 mm voxels).
- Sex, handedness and age distributions are only in the phenotypic file, which is behind NITRC registration.

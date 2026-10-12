This entry covers the stroke patient MRI behind a 2023 NeuroImage: Clinical study from UMC Utrecht that asked whether
white matter disconnection after a focal lesion can be estimated from healthy-control tractography instead of from the
patient's own diffusion scan. The authors drew 95 patients from the Functional Architecture of the Brain for Vision
(FAB4V) project, compared tool predictions with tractography of the patients' own diffusion data, and applied both to
map visual field defects. The patient images are not public. The Mendeley Data record holds only derived results and
the tool's code.

## Composition

95 adults after a first-ever symptomatic ischemic stroke with an MRI-confirmed lesion and available diffusion data.
The paper reports a mean age of 55 years (SD 15) and 67.4 percent men. Lesions were left-sided in 54 percent, right in
41 percent and bilateral in 5 percent. Eleven patients had a stroke-induced visual field defect and 84 had none.

## Acquisition

Patients were scanned at Amsterdam UMC and UMC Utrecht between September 2015 and January 2020, 3 weeks to 3 months
after the infarct (8 weeks on average). Each session had a FLAIR image and a 3 T diffusion series with b = 1000 s/mm2,
34 volumes at 2 mm isotropic resolution, plus a reversed phase-encoding b = 0 image. The scanner vendor is not stated.

## Annotations

Lesions were delineated manually on the patient images and normalized to MNI space. Only the overlap of all 95
normalized lesions is released, together with permutation-based statistical maps that compare patients with and
without visual field defects.

## Known limitations

- MRI images and lesion masks are not shared, and no terms for them are published.
- The healthy-control diffusion data used for the predictions (78 UMC Utrecht volunteers and 173 Human Connectome
  Project 7 T subjects) are not part of this release.
- Patient diffusion data has a single complete series, so it is of lower quality than the control data.

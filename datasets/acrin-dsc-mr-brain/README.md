ACRIN-DSC-MR-Brain holds the imaging and clinical data of ACRIN 6677/RTOG 0625, a randomized phase II trial run by
the American College of Radiology Imaging Network and the Radiation Therapy Oncology Group at 23 institutions. Patients
with recurrent glioblastoma received bevacizumab combined with either irinotecan or temozolomide, and MRI was repeated
during treatment. The Cancer Imaging Archive published the collection in 2019. It suits work on treatment response,
progression assessment and survival prediction under anti-angiogenic therapy.

## Composition

The collection covers all 123 enrolled patients (71 male, 52 female, aged 23 to 87, median 56), with 566 imaging
studies, 7,629 DICOM series and 717,070 images of MR and CT. Of the 123 patients, 107 had a baseline
and at least one post-treatment MRI and were evaluable for the trial's primary aims. Clinical data come as one CSV per
trial form with a form description and a data dictionary, covering demographics, diagnosis, follow-up, measurements,
progression and survival. Dates are replaced by day offsets from a fixed baseline of 1 January 1960, so intervals
between scans are preserved. The clinical files are split into a 75% and a 25% random sample of participants; the
smaller group was first held back for testing algorithms.

## Acquisition

The standard protocol acquired axial pre-contrast T1-weighted, T2-weighted, FLAIR and diffusion-weighted series, then
2D spin-echo and 3D volumetric T1-weighted series after 0.1 mmol/kg gadolinium. Patients in the optional advanced arm
also had variable flip angle T1 mapping, DCE MRI, DSC perfusion and/or 2D chemical shift imaging MR spectroscopy.
Scans were taken at baseline, after every two 28-day cycles and at the end of treatment, with an extra advanced scan
at week 2. Scanners and field strengths are not listed.

## Annotations

No image annotations are distributed. In the trial, two central neuroradiologists measured enhancing tumor in 2D,
segmented enhancing tumor and FLAIR hyperintensity in 3D, and rated progression by Macdonald and RANO criteria, with a
third reader adjudicating disagreements. These results are part of the clinical forms, not image masks.

## Known limitations

- Images are controlled access because they contain faces; only the clinical data are open.
- The advanced perfusion and spectroscopy series exist for a subset of patients only, and the subset size is not
  stated on the collection page.
- Imaging comes from 23 institutions, and scanner models and parameters are not listed.

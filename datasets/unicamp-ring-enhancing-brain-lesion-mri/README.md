This retrospective cohort was assembled by researchers at São Paulo State University (UNESP, Botucatu) and the
University of Campinas (Unicamp) to test whether texture features on routine brain MRI can separate inflammatory
lesions from brain tumors when both show a ring-enhancing lesion with a non-enhancing core. All exams come from one
1.5T scanner in a medical school hospital in Brazil; the paper thanks the radiology staff of the Unicamp School of
Medical Sciences. The images are not released.

## Composition

67 patients scanned between 2010 and 2020 were included: 30 with inflammatory lesions and 37 with tumors. Diagnoses were
confirmed by histopathology, cerebrospinal fluid analysis or follow-up imaging. The inflammatory group covers fungal,
parasitic, bacterial and tuberculous infections (toxoplasmosis is the largest subgroup with 8 patients), 3 multiple
sclerosis cases and single cases of neuromyelitis, progressive multifocal leukoencephalopathy and vasculitis. The tumor
group consists of gliomas: 15 glioblastomas, 11 anaplastic astrocytomas, 8 low-grade astrocytomas, 2 gliosarcomas and 1
anaplastic ependymoma. Patients with prior biopsy or surgery, lesions under 10 mm, a visible scolex in
neurocysticercosis or intracranial malformations were excluded. Ages and sex per patient are given in the article's
supplementary files.

## Acquisition

A Philips 1.5T scanner with an 8-channel head coil was used. The protocol included spin-echo T1-weighted images before
and after gadolinium, fast spin-echo T2-weighted and proton density images, axial FLAIR and diffusion-weighted images
with b = 1000. Axial T1, contrast-enhanced T1, T2, FLAIR and DWI were used for the analysis.

## Annotations

Two radiologists with over 15 years of experience picked the axial slice with the largest lesion diameter and placed
10 x 10 pixel regions of interest inside the solid and necrotic parts of the lesion, excluding edema. 63 GLCM, run
length and wavelet features were extracted per sequence and classified with SVM, kNN and random forest.

## Known limitations

- Not shared. The ethics approval limits the images to this study, and the paper states they are not available on
  request.
- Single centre, single scanner and a small, heterogeneous set of diagnoses.
- Annotations are small ROIs on one slice, not lesion masks.

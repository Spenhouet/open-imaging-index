This collection from the Mathematical Oncology Laboratory at the University of Castilla-La Mancha gathers
the follow-up brain MRI of patients with brain metastases, collected under the retrospective multicenter
OpenBTAI study. Each segmented exam comes with lesion masks, and the release adds spreadsheets of clinical
and treatment history, morphological measurements and PyRadiomics features. It targets metastasis
detection and segmentation, response assessment, separating tumor progression from radiation necrosis, and
survival modeling. All files on Figshare are released under CC0.

## Composition

75 adult patients, all deceased, contribute 637 imaging studies covering 260 metastases. The primary
cancers were non-small cell lung cancer (38), small cell lung cancer (5), breast cancer (22), melanoma (6),
ovarian cancer (2), kidney cancer (1) and uterine cancer (1). Every patient has high-resolution post-contrast
T1-weighted imaging, and most studies also hold other series such as T1-weighted, T2-weighted, FLAIR and
diffusion images. The clinical spreadsheet lists 47 women and 28 men.

## Acquisition

Patients were diagnosed between 2005 and 2021 at Spanish hospitals and scanned on GE, Philips and Siemens
scanners at 1, 1.5 or 3 tesla, mostly 1.5 tesla. Post-contrast T1w series had to have pixel spacing and slice
thickness of at most 2 mm with no slice gap. Raw series are shared as DICOM in six archives; segmented series
and masks are shared as NIfTI in the original image space. Dates are shifted so that the first metastasis
scan of each patient falls on 1 January 1900, and images are defaced.

## Annotations

593 post-contrast T1w series were segmented with an in-house threshold tool, corrected slice by slice by one
researcher, cross-checked by experienced researchers and corrected by a radiologist. Each lesion carries two
labels: an enhancing part and a non-enhancing or necrotic part. Radiation necrosis was confirmed for 39
lesions. Lesion centroids in MNI space are provided.

## Known limitations

- Only patients who had died were included, which skews the cohort toward advanced disease.
- Counts per sequence other than post-contrast T1w are not reported.
- The GPA prognostic score is available only for some institutions.
- Masks cover 154 distinct metastases, not all 260.

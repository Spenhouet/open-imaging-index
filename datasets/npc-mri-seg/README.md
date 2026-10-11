This collection pairs pretreatment head MRI of patients with primary nasopharyngeal carcinoma (NPC) with manual
outlines of the primary tumor. It was assembled at The First People's Hospital of Foshan, China, to give
segmentation and outcome models a public, annotated NPC cohort. Images, masks and clinical tables are on Zenodo under
CC BY 4.0.

## Composition

There are 277 patients, each with axial T1-weighted, T2-weighted and contrast-enhanced T1-weighted series, 831 scans
in total. All patients had histologically confirmed NPC and no radiotherapy, chemotherapy or other cancer before the
scan. A diagnosis table records sex, age, histological type, TNM stage (8th edition UICC/AJCC), EBV-DNA and VCA-IgA
status and progression-free survival in months over five years. Most tumors are non-keratinizing squamous cell
carcinoma. A second table gives tumor volume, surface area, maximum
diameter and surface regularity per sequence. In the diagnosis table, 74 patients are female and 203 male, aged 20 to
91 with a mean of 50.6 years.

## Acquisition

Images come from six scanners at one hospital, among them a GE Discovery MR750w at 3 T and a Philips Achieva at
1.5 T. The paper lists the models as Achieva (146 patients), MAGNETOM IMPACT (93), Signa HDxt (20), DISCOVERY MR750w
(12), OPTIMA MR360 (5) and SIGNA EXCITE (1). The contrast agent was gadoteric acid meglumine. Median slice thickness is
5 mm with about 0.43 mm in-plane spacing. Images are DICOM with identifiers and dates removed.

## Annotations

Two radiologists with more than ten years of experience drew the gross tumor boundary slice by slice in ITK-SNAP on
all three axial series, using the other sequences to settle unclear borders. Masks are NIfTI files, one per
sequence. Both readers segmented 30 random patients for an inter-rater check, and a senior radiologist reviewed 10
cases. Further archives on the record hold the inter-rater labels and, per the paper, images and masks at
256 x 256 resolution.

## Known limitations

- Single center in southern China, so the case mix reflects an endemic population.
- Only the primary tumor is labeled; lymph nodes are not segmented.
- Patients with tumors beyond the field of view, low resolution or strong artifacts were excluded.
- Table 4 of the paper splits 278 patients across clinical stages, while the abstract and the diagnosis table give
  277.
- The paper mentions a meta_data.csv with scanner types, but the current primary_data.zip does not contain it.
- Some age entries in the diagnosis table carry a Chinese unit character and need cleaning before use.

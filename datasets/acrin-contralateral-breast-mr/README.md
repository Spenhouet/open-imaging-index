ACRIN-Contralateral-Breast-MR contains the breast MRI and clinical forms of ACRIN 6667, a multicenter trial of the
American College of Radiology Imaging Network. It tested whether MRI finds cancer in the opposite breast of women
whose unilateral breast cancer had just been diagnosed and whose other breast looked normal on mammography and
clinical examination. The trial reported that MRI found occult contralateral cancer in 30 of 969 analyzed women, with
91% sensitivity and 88% specificity. The Cancer Imaging Archive released the collection in 2021 under CC BY 4.0. It
fits work on lesion detection and malignancy classification in contrast-enhanced breast MRI.

## Composition

The collection has 984 women aged 25 to 86 (mean 53.2, median 53), with 1,103 imaging studies, 10,184 DICOM series
and 626,782 images. Only 969 women met the criteria for the primary analysis. Most women have a single MRI study;
some have repeat studies from the follow-up work-up of suspicious findings. One series is a computed radiography (CR)
image; all others are MR. Clinical data come as one CSV per trial form with a data dictionary, covering imaging,
clinical management, pathology and outcome. Dates are shifted so that each woman's study entry falls on 1 January
1960, which keeps the intervals between events intact.

## Acquisition

The protocol required a magnet of at least 1.5 T, a dedicated breast coil, and at least one pre-contrast and two
post-contrast 3D T1-weighted gradient echo acquisitions, with the first post-contrast scan within 4 minutes of
injection. Slices were at most 3 mm thick, with fat suppression or subtraction. Sites could otherwise use their own
protocol, and series descriptions show additional T2-weighted and localizer series in many exams. Scanners are mostly
GE, Siemens and Philips systems; some series were produced by computer-aided detection software.

## Annotations

No image annotations are distributed. MRI findings, biopsy outcomes and the reference standard (biopsy or one year of
follow-up) are recorded in the clinical forms, not as image masks or coordinates.

## Known limitations

- The image data of case 120 were removed because they were corrupt; its clinical records remain.
- A missing DICOM Sequence Variant tag was filled with the placeholder value NONE.
- The cancer prevalence in the screened breast is low, so positive cases are few.
- Field strength and exact sequence parameters vary by site and are not summarized on the collection page.

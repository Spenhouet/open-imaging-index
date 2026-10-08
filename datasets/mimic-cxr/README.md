MIMIC-CXR is a large collection of chest radiographs with the radiology reports written for them during routine
care. It was built by the MIT Laboratory for Computational Physiology together with Beth Israel Deaconess
Medical Center (BIDMC) in Boston and is widely used for chest X-ray classification, report generation and
vision-language research.

## Composition

The cohort consists of patients who had a chest radiograph in the BIDMC emergency department between 2011 and 2016. For these patients, all chest radiograph studies from the same period were included. Version 2 contains
65,379 patients, 227,835 studies and 377,110 DICOM images. A study usually holds a frontal and a lateral image
and always one free-text report. Patients often have several studies, and dates are shifted per patient into
the years 2100 to 2200 so that the order of studies is kept.

The data descriptor lists the examination types: about two thirds of the images come from "CHEST (PA AND LAT)"
exams and about one third from "CHEST (PORTABLE AP)" exams. View counts per image are not published.
Version 2.1.0 (2024) added de-identified provider identifiers for each study.

## Acquisition

Images were exported from the hospital PACS in their original DICOM format. Burned-in text that could identify
a patient was blacked out by an OCR-based algorithm, and DICOM headers were cleaned following the DICOM
de-identification profiles. Reports were de-identified with rule-based and neural methods, with removed text
replaced by three underscores.

## Annotations

MIMIC-CXR itself ships images and reports only. Structured labels (e.g. CheXpert-style findings) and JPEG
versions are distributed in the separate MIMIC-CXR-JPG project.

## Known limitations

- Single hospital in the US, with an emergency-department-derived cohort.
- Image quality and positioning vary as in clinical practice; black boxes cover some image regions, and some
  orientation metadata is wrong.
- The de-identification code is not public.
- Access requires credentialing, training and a data use agreement that forbids sharing the data.

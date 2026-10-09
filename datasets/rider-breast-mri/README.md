RIDER Breast MRI is a small test-retest collection from the NCI Reference Image Database to Evaluate Therapy Response
(RIDER), contributed by a University of Michigan group and hosted by The Cancer Imaging Archive. It was gathered to
estimate the scan-rescan noise of diffusion MRI in breast tumors, so that early ADC change under neoadjuvant
chemotherapy can be judged against a patient-specific null distribution with parametric response mapping. It suits
repeatability studies, deformable breast registration and tumor ADC analysis.

## Composition

Five patients with primary breast cancer, each with two pre-treatment "coffee break" exams taken about 15 minutes
apart, give 10 studies and 40 DICOM series of 60 images each (2,400 images, about 400 MB). The first exam of each
patient holds b0 and b800 diffusion-weighted series, an ADC map, an early anatomical reference series and a tumor
volume-of-interest mask; the repeat exam holds the b0, b800 and ADC series only. Age, sex and dates are not in the
DICOM metadata.

## Acquisition

Patients who chose neoadjuvant chemotherapy before surgery were scanned twice at baseline and taken out of the
scanner between the two exams to be repositioned. ADC maps come from interleaved b0 and b800 acquisitions and are
stored as integers with a scale factor given in the series description. Scanner vendor, model and field strength
are not reported.

## Annotations

Tumor volumes of interest were drawn on the anatomical image and provided as a mask series in the first exam.

## Known limitations

- Only five subjects.
- The study described on the collection page also used a post-treatment exam 8 to 11 days after the start of
  chemotherapy and clinical response grades; neither is part of the public series metadata.
- Scanner, protocol parameters and demographics are missing.

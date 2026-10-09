QIN-PROSTATE-Repeatability is a test-retest collection of multiparametric prostate MRI from Brigham and Women's
Hospital, created under the NCI Quantitative Imaging Network. Each man was imaged twice with the same scanner and
protocol, so that measurement variability can be studied without biological change in between. The Cancer Imaging
Archive first released it in 2018. It supports repeatability studies of volume, ADC and radiomic features, and work on
prostate segmentation, longitudinal registration and lesion detection.

## Composition

The collection holds 15 men with 30 studies (baseline and repeat), 330 DICOM series and 38,500 DICOM instances, about
15 GB. The men were 47 to 69 years old (mean 61) and treatment-naive. Eight had prostate cancer confirmed by biopsy;
the others were referred because cancer was suspected, and three had no biopsy before imaging. Each study contains an
axial T2-weighted series, a scanner-computed ADC map and a DCE subtraction image. Version 2 added the source DWI and
DCE series.

## Acquisition

All scans were acquired at 3 T on GE scanners with an endorectal coil in an air-filled balloon. A scanner upgrade
during the study split the cohort between a Signa HDxt and a Discovery MR750w; each subject kept the same scanner for
both visits. The two exams were 3 to 14 days apart (mean 10). Diffusion used b-values of 0 and 1400 s/mm².

## Annotations

One radiologist with more than ten years of experience in abdominal MRI outlined the whole gland, the peripheral zone
and suspected tumor on T2-weighted, ADC and DCE subtraction images, plus normal peripheral zone on ADC. Studies were
shown in random order, blind to subject and time point. Suspected tumor was found in 11 of 15 subjects. Masks are DICOM
SEG objects, and the derived volumes and mean ADC values are DICOM SR (TID 1500) reports.

## Known limitations

- Only 15 subjects from a single center and one vendor.
- One reader only, so inter-reader variability cannot be studied.
- Clinical data such as PSA, Gleason score and PI-RADS scores are not distributed with the images.
- The scanner split differs between sources: the collection page and the 2017 paper give 6 and 7 patients, the 2018
  data descriptor gives subjects 1 to 7 and 8 to 15.

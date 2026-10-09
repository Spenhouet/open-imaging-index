ACRIN 6698/I-SPY2 Breast DWI is the imaging collection of the ACRIN 6698 trial (NCT01564368), which ran as a
substudy inside the I-SPY 2 neoadjuvant breast cancer trial. It tested whether the change in tumor apparent diffusion
coefficient (ADC) during neoadjuvant chemotherapy predicts pathologic complete response (pCR). Women were enrolled at
ten US institutions between August 2012 and January 2015. The University of California, San Francisco processed the
images, and The Cancer Imaging Archive released the collection in 2021 under CC BY 4.0. It serves work on treatment
response prediction, breast DWI analysis and ADC repeatability.

## Composition

The collection holds 385 of the 388 eligible patients, all women aged 23 to 77 (median 49), with 1,123 MRI studies.
Every patient has a pre-treatment study (T0); later studies were made only for the 272 patients randomized into
I-SPY 2 treatment arms: early treatment after 3 weeks of paclitaxel (T1), mid-treatment between paclitaxel and
anthracycline (T2) and post-treatment before surgery (T3). Download subsets cover the 242-patient primary analysis
cohort, 71 patients with analyzable same-session test-retest DWI, and the 117 training and 74 test patients of the
BMMR2 challenge. A spreadsheet adds age, race, tumor type, HR/HER2 subtype, grade, tumor size, pCR and per-study DWI
quality ratings.

## Acquisition

Scans were done prone on 1.5 T or 3 T scanners with a dedicated bilateral breast coil, the same scanner configuration
for every study of a patient. The protocol required axial T2-weighted imaging, fat-suppressed single-shot echo-planar
DWI with b = 0, 100, 600 and 800 s/mm² and T1-weighted DCE. GE, Siemens and Philips scanners appear in the metadata.

## Annotations

For DWI studies that passed quality control, the collection includes trace images, ADC maps and manually drawn
multi-slice whole-tumor segmentations from the trial analysis, as DICOM SEG and as MR objects. DCE studies come with
ipsilateral cropped images, percent enhancement and signal enhancement ratio maps, and the functional tumor volume
analysis mask.

## Known limitations

- Only primary-analysis and test-retest studies are guaranteed to have segmentations and DWI derived objects.
- Some derived objects are not strictly DICOM compliant, and DCE functional tumor volumes stored here differ slightly
  from those used in I-SPY 2.
- Clinical data are limited because I-SPY 2 was ongoing at release.
- The 116 non-randomized patients have only a baseline study.

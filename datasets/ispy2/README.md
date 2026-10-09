ISPY2 is the TCIA image collection of the I-SPY 2 TRIAL (NCT01042379), a multi-center adaptive trial that tests new
drugs for high-risk, locally advanced breast cancer given before surgery as neoadjuvant chemotherapy. The trial uses
the change in tumor volume on dynamic contrast-enhanced (DCE) MRI during treatment to steer randomization. The
collection covers patients randomized between 2010 and 2016 and was released in May 2022 under CC BY 4.0.

## Composition

The collection holds 719 women aged 24 to 73 (mean 48.9 years) with 2,688 MRI studies, 32,411 DICOM series and about
5.6 million images. Each patient had up to four exams: before treatment (T0), after three weeks of paclitaxel-based
therapy (T1), between the paclitaxel and anthracycline regimens (T2) and before surgery (T3). Counted from the open
metadata digest, 717 patients have a T0 study, 690 a T1, 647 a T2 and 634 a T3.

These 719 patients are one part of "I-SPY2 Imaging Cohort 1". The other 266 patients of that cohort are published as
the separate TCIA collection ACRIN-6698 (ACRIN 6698/I-SPY2 Breast DWI). The collection page provides a combined
manifest for all 985 patients and warns that results from the 719 alone are not comparable to published trial results.
A clinical spreadsheet for the 985 patients carries pathologic outcome and receptor status, and a separate sheet
gives four MRI features for a 384-patient subset.

## Acquisition

More than 22 sites scanned patients prone on 1.5 T or 3 T systems with a dedicated breast coil, following a shared
protocol. Each patient stayed on the same scanner configuration for all visits. The collection includes axial
bilateral T2-weighted series and T1-weighted DCE series. DWI was acquired but is not included. Per the metadata
digest, most patients were scanned on GE systems, followed by Siemens and Philips.

## Annotations

Each DCE study comes with derived objects from the trial's analysis: an ipsilateral cropped DCE series, early and late
percent enhancement maps, a signal enhancement ratio (SER) map, and a functional tumor volume (FTV) analysis mask
stored as DICOM SEG. The mask encodes thresholds and manually drawn volume-of-interest and exclusion regions.

## Known limitations

- The T2-weighted series are not curated.
- Some derived objects are not strictly DICOM compliant.
- FTV values stored in the derived objects can differ slightly from the values used in the trial analysis.
- DWI is missing from this collection.

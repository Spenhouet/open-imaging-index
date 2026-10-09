ISPY1 is the imaging collection of ACRIN 6657, the MRI companion study to CALGB 150007. Together the two formed the
I-SPY 1 TRIAL, a multicenter study of whether imaging and tissue biomarkers predict pathologic complete response (pCR)
and recurrence-free survival (RFS) in women receiving neoadjuvant chemotherapy for stage 2 or 3 breast cancer. Patients
were enrolled from May 2002 to March 2006. The Breast Imaging Research Program at UCSF prepared the data, and The Cancer
Imaging Archive released it publicly in 2016 under CC BY 3.0.

## Composition

The full set (Level 0) holds 847 MRI studies of 222 women, aged 24 to 68 (mean 47.8), in 9,032 DICOM series. Each
patient was to be scanned before chemotherapy, after the first anthracycline-cyclophosphamide cycle, between
anthracycline-cyclophosphamide and taxane treatment, and before surgery. Three curated subsets are offered as separate
downloads: 219 subjects with MRI longest diameter measurements (Level 1), 207 subjects whose studies passed quality
review for volumetric analysis (Level 2a, 706 studies) and 162 subjects used in the trial's primary aim RFS analysis
(Level 3, 586 studies). A spreadsheet gives age, race, hormone receptor and HER2 status, laterality, MRI longest
diameters per time point, pCR, residual cancer burden class and survival times for 221 subjects.

## Acquisition

All scans were acquired at 1.5 T with a dedicated breast coil, unilaterally over the affected breast in the sagittal
plane. The protocol was a localizer, a T2-weighted series and a 3D fat-suppressed T1-weighted gradient echo series with
in-plane resolution of 1 mm or better, acquired once before and at least twice after contrast injection.

## Annotations

The UCSF lab computed functional tumor volume centrally from the contrast-enhanced series with the signal enhancement
ratio method. The collection includes these derived analysis maps and tumor segmentations as DICOM SEG. Site
radiologists measured the tumor longest diameter at every time point.

## Known limitations

- Images went through several transfers between sites, the ACRIN core lab and UCSF, and some metadata may have been
  lost on the way.
- Many studies deviate from the protocol (axial or alternating bilateral acquisitions, changed parameters during the
  dynamic series, motion) and are excluded from the curated subsets.
- Subject 1079 has images but no clinical or outcome data.
- The participating sites, scanner vendors and models are not listed on the collection page.

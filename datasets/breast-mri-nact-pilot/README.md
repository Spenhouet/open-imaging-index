Breast-MRI-NACT-Pilot is a longitudinal breast MRI collection from the Breast Imaging Research Program at the
University of California San Francisco (David Newitt, Nola Hylton), published on The Cancer Imaging Archive in 2016. It
comes from a pilot study, run between 1995 and 2002, that tested whether repeated dynamic contrast-enhanced MRI during
neoadjuvant chemotherapy can track tumor response. Subsets of it serve as training data for the NCI Quantitative
Imaging Network Breast MRI Metrics of Response (BMMR) challenge. It suits work on response monitoring, functional tumor
volume and recurrence prediction.

## Composition

The pilot enrolled 68 women with stage II or III locally advanced invasive breast cancer; four were excluded, leaving 64
patients and 189 MRI studies. The protocol called for four cycles of adriamycin and cyclophosphamide. MRI 1 was taken before
treatment, MRI 2 after the first cycle and MRI 3 after the anthracycline regimen. A group of 17 patients also received
a taxane and had a fourth exam before surgery. Three patients had treatment anomalies that are flagged in the clinical
workbook. The workbook also gives age, receptor status, lesion size, histologic type, pathologic size, lymph node status
and recurrence-free survival.

## Acquisition

All exams ran on a 1.5 T GE Signa scanner with a bilateral phased array breast coil. The main series is a unilateral
sagittal fat-suppressed T1-weighted 3D fast gradient echo acquisition (TR/TE 8/4.2 ms, flip angle 20°, 2 mm sections)
with one pre-contrast and usually two post-contrast phases, at about 2.5 and 7.5 minutes after gadopentetate injection.
Some studies also hold T2-weighted and diffusion-weighted series, scouts and scanner-derived subtraction or projection
images.

## Annotations

For each study the collection contains a signal enhancement ratio map, an early percent enhancement map and two DICOM
segmentations: a breast tissue mask from an intensity threshold on the pre-contrast image, and an enhancing tumor mask
from a 70% early enhancement threshold inside a tumor volume of interest. These come from the functional tumor volume
analysis of the original study, not from manual delineation.

## Known limitations

- Single site, single scanner, and images acquired more than 20 years ago.
- Not every patient has every visit, and only 17 patients were scheduled for a fourth exam.
- The collection page gives 189 studies in its data table but refers to 198 studies in its description of the DCE
  series.
- T2-weighted and diffusion-weighted series are present for some studies only.

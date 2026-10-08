CBIS-DDSM is a cleaned-up and standardised selection from the Digital Database for Screening Mammography (DDSM), a
collection of scanned film mammograms assembled in the 1990s. A Stanford group released it through The Cancer
Imaging Archive in 2016-2017 so that mammography CAD methods could be compared on one public benchmark. It is used
for mass and calcification classification, lesion detection and mass segmentation.

## Composition

The collection covers 1,566 participants. The data descriptor reports 891 mass cases and 753 calcification cases;
the public description tables list 3,568 abnormalities on 3,103 full mammograms in craniocaudal (CC) and
mediolateral oblique (MLO) views. Every abnormality carries a pathology label (malignant, benign, or benign without
callback), a BI-RADS assessment, a subtlety score, breast density and shape, margin, type or distribution
descriptors. About a fifth of the cases form a test set, split separately for masses and calcifications and
stratified by BI-RADS category. Besides the full images, the download contains ROI masks and square crops around
each abnormality. In the DICOM headers every breast view has its own patient id, so TCIA's counters show 6,671
"patients".

## Acquisition

DDSM mammograms came from Massachusetts General Hospital, Wake Forest University School of Medicine, Sacred Heart
Hospital and Washington University in St Louis, digitised on several film scanners. The curators decompressed the
obsolete lossless JPEG files, mapped pixel values to standardised optical density and stored the result as 16-bit
DICOM.

## Annotations

A trained mammographer reviewed questionable mass cases and removed 254 images in which the mass was not clearly
visible. Mass outlines were refined with a level-set segmentation started from the original DDSM contours;
calcification ROIs keep the original, coarse outlines.

## Known limitations

- Scanned film from decades ago; no digital mammography and no normal cases.
- Calcification ROIs are imprecise.
- Age and other demographics are not in the description tables, although DDSM recorded patient age.
- Train and test are split per abnormality, so a few participants appear in both.

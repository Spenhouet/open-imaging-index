Gazi Brains 2020 is a brain MRI benchmark from the Turkish Brain Project, prepared by medical experts at the Gazi
University Faculty of Medicine with support from the Digital Transformation Office of the Presidency of
Türkiye. It pairs 50 patients with histologically confirmed high-grade glioma and 50 subjects without a brain tumor, so
that tumor detection and classification models can be trained on a balanced set. The data descriptor (Sagiroglu et al.,
PeerJ Computer Science 2025) reports baseline results of eight deep learning models for classification and detection,
plus explainability maps.

## Composition

There is one scan per subject. Every subject has axial T1-weighted, T2-weighted and FLAIR images. All glioma patients
and 12 of the normal subjects also have a gadolinium-enhanced T1-weighted series. The paper counts about 1,000 to 1,060
2D slices per sequence and group. Mean age is 38.7 years in the normal group and 56.8 years in the glioma group; age and
sex are released for every subject. In the Kaggle copy, subjects 1 to 50 are the glioma group and 51 to 100 the normal
group.

## Acquisition

Studies were collected in 2018 and 2019 at 24 institutions across Türkiye, on scanners from four vendors at 1.5 T or
3 T. Vendor and institution names are masked. Slice thickness, orientation and matrix size vary between sequences. For
release, every sequence was registered to the subject's FLAIR image and the scans were defaced with hand-drawn masks
that remove the nose, cheeks and teeth while keeping the orbits. The Synapse release is organized in BIDS with NIfTI
images and includes MRIQC quality metrics.

## Annotations

Six medical experts drew and cross-checked 12 labels covering anatomical structures, non-tumoral findings and tumor
components. The paper shows tumor segmentations drawn on the post-contrast T1-weighted images.

## Known limitations

- The cohort has 100 subjects from a single release; the paper says more patients will follow in a later version.
- The normal group is about 18 years younger on average than the glioma group, so age can act as a shortcut for
  classification.
- Post-contrast T1-weighted images are missing for 38 of the 50 normal subjects.
- Terms differ by copy: the descriptor paper excludes commercial use, while the Kaggle copy is labelled Apache 2.0. The
  Synapse page states no license.
- Both Synapse and Kaggle need a free account to download.

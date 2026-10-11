BraTS-PEDs is the pediatric arm of the Brain Tumor Segmentation (BraTS) benchmark, published on The Cancer Imaging
Archive (TCIA). It collects pre-treatment brain MRI of children with high-grade glioma, most of them diffuse midline
gliomas including diffuse intrinsic pontine glioma (DIPG), with tumor sub-region masks drawn to pediatric response
criteria. The cases served the BraTS 2024 and BraTS Lighthouse 2025 challenges and support segmentation and outcome
research in a disease with short survival.

## Composition

The collection holds 457 patients split into 257 training, 91 validation and 109 test cases. The public TCIA download
covers the 348 training and validation subjects; test cases stay hidden for evaluation. Each subject has one
treatment-naive session with native T1, contrast-enhanced T1, T2 and T2-FLAIR, all four being required for
inclusion. Cases come from the Children's Brain Tumor Network, the international DIPG/DMG registry, the TCIA
DFCI-BCH-BWH-PEDs-HGG collection, Duke University and Yale University. A metadata table lists source, split,
institution, age at imaging, sex, ethnicity, race and overall survival, but demographics are filled in for only 116
training subjects. A second table gives acquisition parameters for 112 subjects.

## Acquisition

Scans were taken during routine care on scanners from several vendors at 1.5 T and 3 T, with protocols that differ
between sites and no fixed delay after gadolinium. Images were converted from DICOM to NIfTI with the BraTS pipeline
in CaPTk and the FeTS tool, defaced with a pediatric defacing model and co-registered across sequences. They are not
skull-stripped.

## Annotations

A pediatric auto-segmentation model produced first labels for four sub-regions following RAPNO guidance: enhancing
tumor, non-enhancing tumor, cystic component and peritumoral edema. Volunteer neuroradiologists corrected them in
ITK-SNAP, and board-certified attending neuroradiologists reviewed and returned cases until they agreed.

## Known limitations

- Most cases come from US institutions, and DIPG is over-represented relative to clinical practice.
- Only baseline imaging is included, so treatment effects over time are not covered.
- Clinical and acquisition metadata are missing for most subjects.
- Four cases have known issues: two partly skull-stripped, one with a different orientation, one with head tilt.
- The masks are semi-manual, so some inter- and intra-observer variability remains.
- Genomic data are not part of the release; they are linked through CBTN identifiers.

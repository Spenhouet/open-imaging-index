BONBID-HIE Part I is a public set of neonatal brain diffusion MRI with manual lesion masks for hypoxic ischemic encephalopathy (HIE), released by researchers at Boston Children's Hospital, Harvard Medical School and Massachusetts General Hospital. It served as the data of the first BONBID-HIE lesion segmentation challenge at MICCAI 2023. HIE lesions in this cohort tend to be small and spread across several regions, which makes the set a test case for segmenting small diffuse lesions.

## Composition

The cohort has 133 term-born infants (74 male, 59 female) with a clinical diagnosis of HIE, treated at Massachusetts General Hospital between 2001 and 2018 and scanned on postnatal day 0 to 14 (mean 3.9 days). Each patient has a skull-stripped apparent diffusion coefficient (ADC) map, a ZADC map that expresses each voxel as standard deviations from a normative neonatal ADC atlas, and a binary lesion mask. A clinical spreadsheet with maternal and neonatal variables and a normal and a lesion atlas are included. The challenge split is 85 training, 4 validation and 44 test cases. The paper reports that the median lesion covers 0.63% of the brain and 74 patients have lesions below 1% of brain volume.

## Acquisition

Diffusion MRI came from the clinical archive: 52 patients on a GE 1.5 T Signa scanner (2001 to 2012) and 81 on a Siemens 3 T TrioTim or PrismaFit (2012 to 2018), with b = 1000 s/mm². ADC maps were computed on the scanners. Preprocessing covered bias correction, skull stripping and DRAMMS registration to the atlas.

## Annotations

A physician with more than three years of experience drew the lesion masks on the 3D ADC maps in native space, guided by the clinical neuroradiology reports. Uncertain cases (27 patients) were settled by consensus of three pediatric neuroradiologists.

## Known limitations

Single-center, retrospective data with only diffusion-derived maps; no T1- or T2-weighted images. Race is unknown for 57 of 133 mothers. Some mild cases have no visible lesion (minimum lesion volume 0 mm³). The Zenodo files are in MetaImage format, while the paper describes NIfTI. License statements conflict: the Zenodo license field gives CC BY-NC-ND 2.5, its description text says CC BY 4.0, and the paper and challenge page say CC BY-NC-ND; this entry records the NoDerivs license.

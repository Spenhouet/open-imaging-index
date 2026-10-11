BEAMSTER is a retrospective collection of contrast-enhanced T1-weighted brain MRI from patients with brain
metastases who received stereotactic radiotherapy. Each scan comes with a binary mask of the treated metastases,
drawn by an experienced radiation oncologist in a radiotherapy planning system. The authors released it on figshare
to support work on automatic detection and segmentation, with particular attention to small lesions.

## Composition

The release holds 140 patients with 260 annotated lesions. Cases are split into Dataset_A (113 patients) and
Dataset_B (27 patients); Dataset_B was enriched with small metastases. A clinical table gives sex, age, scanner,
primary tumor, radiotherapy dose, number of fractions, prescription isodose, vital status, survival time for
deceased patients, prior surgery and whether the lesion was irradiated for the first time or re-irradiated. In
that table 77 patients are male and 63 female, aged 25 to 86. The commonest primary tumors are lung cancer (42),
melanoma (21), kidney cancer (15) and breast cancer (13); 17 have an unknown primary.

## Acquisition

All scans were acquired on Siemens systems: Magnetom Avanto (126 patients) and Magnetom Sola (4) at 1.5 T, and
Magnetom Prisma (10) at 3 T. Images and masks are stored as NIfTI in the planning CT coordinate space, after the
rigid MRI to CT registration done for treatment planning. Most volumes have 1 mm slice spacing with in-plane voxels
around 0.5 mm. Data were de-identified and faces were removed by defacing.

## Annotations

One radiation oncologist outlined the metastases during radiotherapy planning. The contours were exported as
binary masks (`*_segm.nii.gz`), one per patient.

## Known limitations

- Only one contrast (post-contrast T1-weighted) is released.
- Masks come from a single annotator.
- Images and masks are given in the planning CT coordinate space, not in native MRI space.
- No peer-reviewed data descriptor was found; the figshare record and its README are the only documentation.

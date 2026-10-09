SKM-TEA (Stanford Knee MRI with Multi-Task Evaluation) is a knee MRI collection from Stanford University, released
through the Stanford AIMI Center and presented at the NeurIPS 2021 Datasets and Benchmarks track. It pairs raw
multi-coil k-space with the scanner's own DICOM images and dense labels, so one set of scans can test accelerated
reconstruction, tissue segmentation, pathology detection and the cartilage and meniscus T2 values derived
from them.

## Composition

There are 155 patients, each with one quantitative double-echo steady-state (qDESS) knee scan. Each scan holds two
co-registered 3D echoes, from which T2 relaxation maps can be computed. The release fixes a split of 86 training, 33
validation and 36 test scans. The test set holds the patients who also had arthroscopic surgery; the remaining scans
were split at random. Data come as HDF5 (k-space, coil sensitivity maps, SENSE reconstructions, image arrays), DICOM
and NIfTI masks. The documentation gives the size as about 900 GB
compressed and 1.6 TB unpacked.

## Acquisition

All scans were acquired at Stanford Healthcare on two 3 T GE MR750 systems with 2x1 parallel imaging and elliptical
sampling. Missing k-space lines were filled in with GE's ARC method, and the result is treated as fully sampled.
The paper reports 15 or 16 receive coils and 80 to 88 slices per scan, at an in-plane resolution of 0.38 x 0.31 mm.

## Annotations

Two researchers with 3 to 4 years of knee MRI experience, supervised by two musculoskeletal radiologists, outlined
patellar, femoral, medial and lateral tibial cartilage and the medial and lateral meniscus slice by slice on the
DICOM images. A second mask set was registered to the SENSE reconstructions to undo the scanner's gradient warping.
The same annotators drew 3D bounding boxes for 16 pathology categories (meniscal tears, ligament and cartilage lesions,
joint effusion) taken from the radiology reports. Each scan was labelled by one person.

## Known limitations

- Single center, one vendor and one sequence.
- Coil counts differ between scans, and the AIMI page states 8 or 15 coils where the paper states 15 or 16.
- Scanner DICOM images and T2 maps carry vendor post-processing and are not meant as reconstruction targets.
- No demographics or per-pathology counts are given in the paper or on the dataset pages.
- The research use agreement limits use to personal, non-commercial research and forbids redistribution and
  derivative works.

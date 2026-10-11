NeuriPhy is a derived dataset built for a project on physics-guided deep learning for brain shift registration. During
tumor surgery the brain moves and deforms, so preoperative MRI no longer matches the anatomy, and intraoperative imaging
is often sparse or missing. NeuriPhy pairs preoperative MRI from two public collections with displacement fields from
biomechanical simulations of resection-induced brain shift, so that registration networks can be trained with dense
supervision. It was made by Tiago Assis, Reuben Dorent, Benjamin Zwick, Nuno Garcia and Ines Machado and is published
on Zenodo as version 1.0.0, still marked as work in progress.

## Composition

207 patient cases: 45 taken from ReMIND (brain tumor patients who had image-guided resection at Brigham and Women's
Hospital) and 162 from UPENN-GBM (de novo glioblastoma at the University of Pennsylvania). Each case is one folder with
images, segmentations, simulations and keypoints. The record reports 394 simulations in total, 1 to 5 per patient.

## Acquisition

No new scans were acquired. Each case holds a contrast-enhanced T1-weighted and a T2-weighted preoperative MRI; the T2
series are mostly T2-SPACE, with some native T2 and T2-BLADE. Images are not skull-stripped, were rigidly co-registered
within each patient in 3D Slicer and resampled to 1 mm isotropic voxels, and are stored as NIfTI. Acquisition details
are those of the source collections.

## Annotations

- Displacement fields from a meshless nonlinear elasticity simulation of tumor resection and gravity, each with a
  different gravity direction matching a plausible surgical entry point. Initial and final point coordinates are given
  alongside dense fields interpolated with multi-level B-splines.
- 3D SIFT-Rank keypoints with descriptors, computed on the contrast-enhanced T1 (or T2 where that is missing).
- Whole-brain labels from SynthSeg and the tumor labels of the source collections, in NRRD.

## Known limitations

- Displacement fields are simulated, not measured from intraoperative imaging.
- Files are restricted on Zenodo and released on request.
- The method paper uses only the UPENN-GBM part (204 simulations of 162 patients), not the full release.
- Brain labels are automatic and not checked by experts; SynthSeg was not designed for brains with tumors.

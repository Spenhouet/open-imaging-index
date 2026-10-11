This collection comes from the Virtual Growing Child project of the Medical Image Processing Group at the University of Pennsylvania, with data contributed through the Children's Hospital of Philadelphia. It shares free-breathing dynamic MRI of the thorax and abdomen in healthy children so that regional lung, chest wall and diaphragm motion in young patients with respiratory disorders can be compared against a normal reference. The release is funded by an NIH (NHLBI) grant and was deposited on Dryad, with a mirror on Zenodo and on the group's website.

## Composition

The image release of May 2024 holds 141 healthy children. For each child the 4D image covers one breathing cycle, and the end expiration and end inspiration volumes are shared, which gives 282 3D volumes. Every volume has ten masks, for 2,820 3D segmentations in total. A spreadsheet adds per-child lung volumes at both phases and the left and right chest wall and diaphragm excursion volumes. Images and masks are DICOM, sorted per subject into EE and EI folders with separate image and label subfolders. The download is about 641 MB.

## Acquisition

Scans were made on a 3 T Siemens Verio with a sagittal true-FISP bright-blood sequence (TR 3.82 ms, TE 1.91 ms, about 1 x 1 x 6 mm voxels). About 35 sagittal positions are covered, with 40 slices per position over several tidal breaths, so roughly 1,400 slices per child in 11 to 13 minutes. An optical-flux method assembles one 4D image of 5 to 8 respiratory phases from these slices, and each 3D volume is intensity standardized.

## Annotations

The ten objects are the outer skin boundary, both lungs, liver, spleen, both kidneys, the diaphragm and the left and right hemi-diaphragms. A pretrained U-Net produced first masks, which were checked and corrected by hand under the supervision of a radiologist.

## Known limitations

The Dryad version of July 2025 describes 200 children and 4,000 segmentations and replaces the spreadsheet with a CSV, but its image archive has the same size as the 2024 file, so the count of children with images in that version could not be confirmed. No age or sex breakdown is published with the data. Only the two extreme respiratory phases are shared, not the full 4D series. The MIPG page calls the images T2-weighted; the protocol is a balanced steady-state sequence.

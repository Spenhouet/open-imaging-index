Breast MRI scans from a single hospital in Tehran, Iran, each labelled with the amount of fibroglandular tissue (FGT) in the BI-RADS lexicon. A team from the University of Tehran and Tehran University of Medical Sciences released it on Zenodo to support machine learning models that grade FGT, a factor in breast cancer risk. The images were acquired at Imam Khomeini Hospital Complex between July 2017 and May 2022; they are not taken from another public collection.

## Composition

Of 826 scans collected, 654 remain after exclusions, one per patient. Patients were 19 to 76 years old, with a mean of 43.24 years (SD 9.64). Sex is not reported. The record gives a fixed random split of 498 training, 57 validation and 99 test patients, stratified by FGT category. Counted from the openly licensed Labels.csv, the FGT categories are A (almost entirely fat) 56, B (scattered) 197, C (heterogeneous) 241 and D (extreme) 160. The same file names the normal contralateral side that the label refers to: left 129, right 145, both 380.

## Acquisition

All scans come from GE Healthcare systems, an Optima MR360 at 1.5 T or a Discovery MR750w at 3 T. The shared sequence is the 3D axial fat-saturated T1-weighted series before contrast. The 3D set keeps the volumes at their original resolution, converted from DICOM to NIfTI. The 2D set holds, per patient, three PNG slices at the 40th, 50th and 60th percentile positions of the volume, meant as three-channel input for pretrained 2D networks.

## Annotations

Two radiologists rated each scan independently into BI-RADS FGT categories A to D, and a third radiologist settled disagreements. Labels.csv lists the file name, the FGT category (coded 1 to 4) and the normal breast side.

## Known limitations

Single site and single vendor. Cases with bilateral breast cancer, implants or prior mammoplasty, bilateral surgery or motion artefacts were excluded, so the cohort does not cover these groups. Only the pre-contrast T1-weighted series is shared, and there are no segmentation masks. Clinical variables beyond age are not released.

ReMIND collects the imaging acquired around brain tumor surgery in the AMIGO suite of Brigham and Women's Hospital in
Boston, where resections were guided by both intraoperative ultrasound and intraoperative MRI. Neuronavigation built on
preoperative MRI becomes inaccurate once the brain shifts during surgery, and data that pair preoperative and
intraoperative scans of several modalities in the same patient are rare. The collection was released on The Cancer
Imaging Archive in 2023 under CC BY 4.0, with a data descriptor in Scientific Data in 2024.

## Composition

114 patients operated between November 2018 and August 2022, kept from 123 consecutive cases after 9 were dropped for
corrupted or poor-quality images. 92 had gliomas (mostly astrocytoma, glioblastoma and oligodendroglioma), 11 had
metastases and 11 other lesions. Ages at surgery range from 20 to 76 years; 61 patients are male and 53 female. 51
operations were reoperations. The release has 369 preoperative MRI series, 301 intraoperative MRI series and 320 3D
ultrasound volumes, plus a clinical table with histopathology, WHO grade, IDH, 1p/19q and MGMT status.

## Acquisition

Preoperative T1, contrast-enhanced T1, T2 and T2-FLAIR come from many scanners and sites (mostly Siemens at 3 T, with
1.5 T, 7 T and 1.16 T scans), rigidly co-registered in Brainlab Elements. Intraoperative MRI was acquired on a 3 T
wide-bore Siemens Magnetom Verio. Ultrasound came from a tracked BK5000 system with an N13C5 curvilinear probe swept
across the craniotomy and reconstructed into 3D volumes, aimed at three time points: before dural opening, after dural
opening, and just before intraoperative MRI. MR scans were defaced. Images are DICOM; segmentations are DICOM SEG and
NRRD.

## Annotations

Manual preoperative whole tumor (113 cases), tumor target (3), prior resection cavity (21) and intraoperative residual
tumor (58) segmentations by neurosurgeons, plus automatic Brainlab cerebrum (89) and ventricle (54) masks.

## Known limitations

- Single institution; preoperative protocols vary between scanners and sites.
- Cerebrum and ventricle masks are automatic and not meant as a segmentation gold standard.
- 22 cases miss ultrasound at one or more time points.
- MRI-ultrasound landmarks were not yet released with the collection.

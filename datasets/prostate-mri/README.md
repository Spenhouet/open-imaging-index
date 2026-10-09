PROSTATE-MRI is a small radiology-pathology collection from the National Cancer Institute in Bethesda, Maryland,
published on The Cancer Imaging Archive (TCIA). It pairs preoperative prostate MRI with whole-mount histopathology of
the removed gland from 26 men with biopsy-confirmed prostate cancer who then had robotic-assisted radical
prostatectomy. The data were acquired between 2008 and 2010. Because the specimen was sectioned in the same plane as
the MRI, the collection suits work on registering histology to MRI and on mapping tumor appearance in
multiparametric MRI to pathology.

## Composition

The collection holds 26 subjects with one MR study each, 182 DICOM series and 22,036 MR images, plus 26 whole-mount
histopathology images in JPEG, one per subject. According to the open series metadata, every subject has axial,
coronal and sagittal T2-weighted turbo spin echo series, two diffusion-weighted series and a dynamic
contrast-enhanced series with a pre-contrast acquisition. No clinical data such as age, PSA or Gleason score are
distributed.

## Acquisition

All MRI was acquired at 3T on a Philips Achieva with an endorectal coil combined with a phased-array surface coil.
The investigators state that the diffusion b values were 0, 188, 375, 563 and 750 s/mm², and that these values may no
longer be present in the DICOM headers. After surgery, a mold built from each patient's MRI held the specimen, which
was then cut in the MRI plane.

## Annotations

The collection does not include tumor or gland segmentations. The histopathology images serve as the reference for
tumor location.

## Known limitations

- 26 subjects from one center and one scanner model.
- Only one whole-mount histopathology image per subject is distributed.
- The DWI b values must be taken from the collection page, not from the DICOM headers.
- Downloads were restricted to users approved by the investigators until May 2018.

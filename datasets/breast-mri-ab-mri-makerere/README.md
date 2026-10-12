This collection holds de-identified breast MRI examinations deposited on Harvard Dataverse by Ainekirabo Mbabazi of
Makerere University. It is meant as research material for machine learning on multiparametric breast MRI, with a focus
on the abbreviated protocol that adds an ultrafast dynamic contrast-enhanced (DCE) phase. The record describes the
images and the de-identification pipeline; no paper or data descriptor is linked to it.

## Composition

The record states 52 patient studies. It does not say whether any patient contributed more than one study, and it gives
no demographics, diagnoses, lesion findings or clinical labels. Each study follows the same abbreviated protocol with
five kinds of series: T2-weighted imaging, diffusion-weighted imaging, a native T1-weighted series, an ultrafast DCE
series and a conventional high-resolution T1-weighted series after contrast injection. The data come as one ZIP archive
of about 1.1 GB, and the description refers to DICOM headers, so the images are shared as DICOM.

## Acquisition

All studies were acquired on a Siemens 3.0 T scanner using a standardised ultrafast abbreviated breast MRI protocol.
The record names neither the scanner model, the site, the contrast agent nor the sequence parameters.

## De-identification

Patient identifiers were replaced with pseudonyms and all dates were shifted by a random interval between 365 and 2000
days chosen per patient. Private DICOM tags were removed and all UIDs regenerated, while clinically relevant header
fields were kept.

## Known limitations

The set is small and comes from one scanner. There are no annotations, segmentations or outcome labels, so it supports
unsupervised work, image synthesis or protocol studies more readily than supervised detection. Although the record is
labelled CC0 1.0, the file itself is restricted and only available after the depositor approves an access request.
Dates in the headers are shifted and cannot be used for real timing between patients.

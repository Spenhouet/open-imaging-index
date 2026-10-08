The ISIC 2020 dataset was built for the SIIM-ISIC Melanoma Classification challenge, which ran on Kaggle from
May to August 2020. Unlike earlier ISIC challenge sets, it groups lesions by patient, so a model can compare a
suspicious lesion with the other lesions on the same person ("ugly duckling" reasoning). It is used for melanoma
classification and for studying patient-level context.

## Composition

The labelled training part holds 33,126 dermoscopic images of 2,056 patients; 584 images show melanoma and 428
patients have at least one. The remaining lesions are benign, either confirmed by biopsy or by at least six
months of follow-up without change. A separate test part of 10,982 images from 690 patients is downloadable, but
its labels were never released. Each image comes with an anonymised patient id, approximate age (rounded to five
years), sex and a coarse anatomic site; version 2 of the training table adds a lesion id. Images are offered as
JPEG and as DICOM with embedded metadata.

## Acquisition

Images come from Memorial Sloan Kettering Cancer Center, Hospital Clínic de Barcelona, the Medical University of
Vienna, Melanoma Institute Australia and the Sydney Melanoma Diagnosis Centre, and The University of Queensland,
mostly high-risk or referral clinics. The test set also includes cases from a hospital in Athens. Contact and
non-contact, polarised and non-polarised dermoscopy are mixed; the capture devices were not recorded.

## Annotations

Malignant labels were checked against histopathology reports and visually by a dermoscopy expert. Melanoma in situ
and invasive melanoma share one label. Most benign lesions carry the diagnosis "unknown"; nevus, seborrheic
keratosis, lentigo and a few other benign diagnoses are given where available.

## Known limitations

- 425 training images are pixel-identical duplicates; a list is provided, and lesion ids in version 2 help remove them.
- Darker skin types are under-represented, and melanoma is far more frequent than in the general population.
- Each lesion is one image with one type of dermoscopy.
- Age bins on this page are approximate because ages are rounded to five years.
- Condition counts cover training labels only.

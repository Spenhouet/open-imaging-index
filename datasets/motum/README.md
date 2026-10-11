MOTUM (multi-origin brain tumor MRI) is a small multi-center collection of brain MRI from patients with either a high-grade glioma or a brain metastasis whose primary cancer is known from pathology. The authors, from three Chinese hospitals together with TU Munich and Harvard Medical School, released it so that segmentation and classification methods can be tested on the hard problem of telling gliomas apart from metastases, and metastases of different origin apart from each other.

## Composition

The cohort has 67 patients. 29 have a high-grade glioma (glioblastoma, grade 3 or 4 astrocytoma, or oligodendroglioma). The other 38 have brain metastases from lung (20), breast (10), ovarian (4), gastric (2) and melanoma (2) primaries. Each patient has FLAIR, T1-weighted, contrast-enhanced T1-weighted and T2-weighted images. A clinical spreadsheet gives sex, age at MRI, pathology, immunohistochemistry or molecular results and the extent of surgery. Radiomics features (110 PyRadiomics features) are included as derivatives.

## Acquisition

Scans come from routine clinical care of patients diagnosed between 2019 and 2022 at the Second Affiliated Hospital of Anhui Medical University, Changzheng Hospital and the First Affiliated Hospital of USTC, on Siemens or Philips 3 T systems with 5 mm slices. Images were converted to NIfTI, skull-stripped with HD-BET and rigidly registered to the T1 image, keeping the native 2D resolution. Scans with severe motion were excluded.

## Annotations

Two masks per patient: non-enhancing FLAIR abnormality and contrast-enhancing tumor on T1-ce. Thirty patients were segmented by hand in ITK-SNAP and corrected by two physicians. The remaining 37 were pre-segmented by a 2D nnU-Net trained on those 30 and then corrected by the same physicians. The trained model is shared as a Docker container.

## Known limitations

The cohort is small and several metastasis groups have only two to four patients. Slices are thick (5 mm). Version 2 on Harvard Dataverse lists image folders for 66 subjects: 012-LungMeta-AYEY has masks and radiomics but no images, and the clinical spreadsheet lists 12 breast metastasis rows against 10 in the paper. The paper states adults as an inclusion criterion but also mentions consent from the parents of a minor, and the clinical data list one 15-year-old glioma patient.

UT-EndoMRI is a set of pelvic MRI scans with manual organ and lesion labels from patients examined for endometriosis at two hospital systems in Houston, Texas. A team at the McWilliams School of Biomedical Informatics (UTHealth Houston) assembled it to measure how well raters agree on ovary outlines and to build an automatic ovary segmentation method, RAovSeg, with nnU-Net as the baseline. The images are deposited on Zenodo as NIfTI files.

## Composition

The release has two parts. Dataset 1 (folder D1_MHS) holds 51 patients scanned before 2022 within the Memorial Hermann Hospital System; all were suspected of endometriosis, and eight were not diagnosed with it. Dataset 2 (folder D2_TCPW) holds 81 endometriosis patients scanned in 2022 at Texas Children's Hospital Pavilion for Women; the Zenodo description gives 82. Dataset 1 contains T2-weighted and fat-suppressed T1-weighted scans, Dataset 2 contains T1-weighted and T2-weighted scans with and without fat suppression. Not every patient has every sequence.

## Acquisition

Dataset 1 comes from 15 sites and nine scanner models by GE, Philips and Siemens at 1.5 T and 3 T. A file on Zenodo lists site and scanner per subject, with the entry unknown for 18 subjects. Dataset 2 was acquired at one site on a Philips Ingenia 1.5 T. DICOM images were converted to NIfTI for de-identification, and the sequences of each subject are registered to each other.

## Annotations

In Dataset 1, uterus, ovaries and endometriomas were outlined in 3D Slicer by up to three raters following a guideline from an abdominal radiologist, who reviewed the final labels; 11 subjects have three raters, 22 have two and 18 have one. The Zenodo files also include cyst and cul-de-sac labels. In Dataset 2, one obstetrics and gynecology assistant, supervised by a gynecologist, outlined uterus, ovaries, cysts and endometriomas on the fat-suppressed T2-weighted scans.

## Known limitations

Labels are missing where a structure was absent or not visible, and only 12 patients in Dataset 2 have endometriomas. Interrater agreement on the ovaries is moderate. The paper and the Zenodo record disagree on the Dataset 2 subject count and on which subjects formed the RAovSeg training and test sets. Table 1 of the paper lists plain T1-weighted scans for Dataset 1, while its text names only fat-suppressed T1-weighted scans. Zenodo lists CC BY 4.0, while the record's user agreement limits use to non-commercial research.

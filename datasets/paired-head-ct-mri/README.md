Head CT and brain MRI acquired from the same 120 patients before neurosurgery at The First Affiliated Hospital of Sun Yat-sen University, China. The authors released the pairs on Zenodo in October 2025 so that methods turning MRI into synthetic CT can be trained and compared. Synthetic CT would let radiotherapy and surgical planning rely on MRI alone and spare patients a CT scan, but MRI shows neither electron density nor bone in detail.

## Composition

The 120 patients fall into four diagnosis groups, each shipped as its own archive: 60 with a pituitary tumor, 20 with a meningioma, 20 with a vestibular schwannoma and 20 with cerebrovascular disease. 74 are women and 46 men, aged 18 to 77 years (mean 46.9).

Every subject folder holds a contrast-enhanced T1-weighted MRI and two reconstructions of one thin-slice CT, one with a soft-tissue kernel (CT-BRAIN) and one with a bone kernel (CT-BONE). The 60 pituitary tumor patients also have a T1-weighted MRI without contrast. Images are NIfTI files, with a JSON sidecar for each MRI. A participants spreadsheet lists sex, age, scanner and acquisition parameters per subject.

## Acquisition

All MRI are 3D MPRAGE scans on Siemens systems (Prisma, Verio, MAGNETOM Vida, Spectra), with slice thickness between 0.6 and 1 mm. CT came from Toshiba (Aquilion ONE and Prime), Siemens (SOMATOM Force), Philips (IQon) and GE (Revolution Apex) scanners, mostly at 120 kVp, with 0.5 or 0.625 mm slices and a 512 by 512 matrix.

## Known limitations

- Single hospital, and all MRI from one vendor, so scanner diversity on the MRI side is limited.
- Half of the cohort has a pituitary tumor; the other groups have 20 patients each.
- The record gives no description of registration between CT and MRI, of defacing, or of a train and test split, and no data descriptor paper was found.
- The CC BY-NC 4.0 license rules out commercial use.

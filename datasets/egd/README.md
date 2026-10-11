The Erasmus Glioma Database holds preoperative structural brain MRI of 774 adults with diffuse glioma who were treated at Erasmus MC in Rotterdam between 2008 and 2018. Each patient comes with four registered and defaced scans, a whole-tumor mask and, where known, the IDH mutation status, the 1p/19q co-deletion status and the tumor grade. The data were released to study how tumor appearance on MRI relates to genetic and histological features, and to build segmentation methods. In 2023 the Radboudumc organizers of the AUC23 classification challenge repackaged EGD cases as 4D MetaImage files labelled with WHO grade 2, 3 or 4 (Zenodo record 8054721, files restricted).

## Composition

There are 281 women, 492 men and one patient of unknown sex, aged 19 to 86. IDH status is known for 467 patients, 1p/19q status for 259 and grade for 716. Combined, these give the full WHO 2016 subtype for 415 patients. Age, sex, scanner details and labels come as spreadsheets and as a JSON file per patient.

## Acquisition

Scans come from routine clinical care. Every patient has a pre-contrast T1-weighted, a post-contrast T1-weighted, a T2-weighted and a T2-weighted FLAIR scan. Scanners came from Siemens, Philips, GE and Toshiba at 0.5 T to 3 T, with 1.5 T the most common. All scans were converted to NIfTI, affinely registered to the MNI152 atlas with Elastix and defaced with an atlas mask. A brain mask made with HD-BET is included for skull stripping.

## Annotations

374 patients have a manual whole-tumor mask drawn by one of four observers on the T2-weighted or FLAIR scan. The other 400 have a mask produced by a convolutional neural network trained on manual masks. A spreadsheet records which observer or the network made each mask.

## Known limitations

Molecular and grade labels are incomplete, so the full subtype is missing for almost half the cohort. Protocols and field strengths vary widely, and the field strength is unknown for four patients. The authors flag some scans with poor quality or failed registration as unacceptable on the XNAT server. Masks cover the whole tumor only, without subregions. All patients come from one center.

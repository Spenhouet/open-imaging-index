IDEAS collects pre-operative brain MRI from adults who had resective surgery for drug-resistant focal epilepsy at the National Hospital for Neurology and Neurosurgery in London, together with scans of healthy controls from the same scanners. The CNNP Lab at Newcastle University and the UCL Queen Square Institute of Neurology released it in two parts on OpenNeuro: IDEAS (ds005602, 2024) with T1-weighted and FLAIR scans, and IDEAS II (ds007401, 2026) which adds diffusion MRI under the same subject identifiers. It is meant for lesion detection, localisation of the epileptogenic zone, outcome prediction and connectome research.

## Composition

The patient group holds 442 people operated between 2003 and 2022, chosen from 625 candidates after leaving out previous neurosurgery and scans of insufficient quality. 100 healthy controls are included. Every subject has a T1w scan, 493 have FLAIR and 314 (216 patients, 98 controls) have diffusion MRI. Clinical tables give sex, age in five-year bands, age at onset, seizure history, number of anti-seizure medications, surgery type, histopathology and yearly ILAE outcomes up to five years.

## Acquisition

All scans come from 3 T GE scanners at one centre. T1w scans are mostly 3D FSPGR or MPRAGE at about 1 mm. Diffusion data follow two protocols: a single-shell scheme on a Signa HDx (2009 to 2013) and a multi-shell scheme on an MR750 (2014 to 2019). When diffusion and T1w were acquired on different days, they sit in separate sessions. Faces were removed by masking and scans were shared as NIfTI.

## Annotations

Resection masks for 433 patients were derived from post-operative imaging with an automated pipeline and manual correction. The lab page also links FreeSurfer reconstructions, regional thickness and volume tables, z-scores against controls, preprocessed diffusion data, tensor maps and structural connectomes.

## Known limitations

Single centre with adults only, so paediatric and laser ablation cases are absent. Resection masks approximate the epileptogenic zone rather than mark it. Diffusion and anatomical scans of many patients come from different sessions, sometimes years apart. FLAIR counts in the paper (411 in Table 1, 420 in the text) differ from the 410 patient FLAIR files on OpenNeuro. One patient's anatomical scans appear only in the first release. The derived files on figshare carry no license we could confirm.

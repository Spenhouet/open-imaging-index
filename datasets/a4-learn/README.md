A4 and LEARN are two linked studies of cognitively unimpaired older adults run by the Alzheimer's Therapeutic Research
Institute at USC and Brigham and Women's Hospital. A4 was a phase 3, placebo-controlled trial of the anti-amyloid
antibody solanezumab in people with elevated brain amyloid on PET (preclinical Alzheimer's disease). LEARN followed
people who were screened for A4 but had no elevated amyloid, on a similar schedule. Both are released together as one
data package with clinical, cognitive, biomarker and imaging data, used for work on preclinical Alzheimer's disease,
amyloid and tau progression, and trial design.

## Composition

A4 screened 6,763 people and randomized 1,169; LEARN enrolled 538. The final imaging release counts 7,133 MRI scans
from 1,787 participants (A4 1,163, LEARN 537, 87 screen failures), 5,661 florbetapir amyloid PET scans from 4,477
participants and 1,576 flortaucipir tau PET scans from 452 participants. Most screen failures only have amyloid PET.
MRI was planned at screening and at weeks 12, 84 and 168, with further scans in the open-label extension.

## Acquisition

Data come from 67 to 68 sites in the US, Canada, Japan and Australia, scanned on one qualified 3 T scanner per site
(Siemens 67%, GE 23.5%, Philips 8.6% of MRI). The protocol, derived from ADNI, includes 3D MPRAGE, axial T2*-GRE
(0.9 x 0.9 x 4 mm, TE 20 ms), axial FLAIR, axial T2 TSE, DWI and resting-state fMRI. Images are shared as NIfTI with
BIDS-style JSON sidecars; T1, T2*, FLAIR and T2 TSE series were de-faced and re-faced with mri_reface.

## Annotations

No voxel labels. The package includes analysis datasets from central MRI safety reads for microhemorrhages and
superficial siderosis, NeuroQuant brain volumes and amyloid and tau PET SUVR values. In the trial, ARIA with
microhemorrhage or siderosis was reported in 29.2% of the solanezumab and 32.8% of the placebo group.

## Known limitations

- Participants are 65 to 85 years old and about 94% white, so the cohort is not representative of the wider
  population.
- People with substantial vascular disease or four or more microhemorrhages at screening were excluded from A4.
- MRI safety reads are per-scan visual findings; lesion masks or coordinates are not described in the publications.
- The website states that the repository is under review for possible changes in line with US administration
  directives.

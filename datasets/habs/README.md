The Harvard Aging Brain Study (HABS) is an NIA-funded longitudinal cohort at Massachusetts General Hospital that
follows older adults who were cognitively normal at entry, to study the earliest brain changes of preclinical
Alzheimer's disease. The study shares its data with outside researchers; release 3 (March 2025) is hosted on Synapse.

## Composition

Release 3 covers 358 participants aged 50 to 90 at baseline (216 women, 142 men), followed for up to 11 years. By the
last visit, 300 were still cognitively normal, 43 had mild cognitive impairment and 15 had dementia. Spreadsheets hold
demographics, APOE status, clinical ratings (CDR, MMSE, GDS, Hachinski), neuropsychological tests, the PACC composite,
plasma pTau217 and FreeSurfer and PET regional measures.

Release 3 started with ADNI-style T1w MPRAGE images and mean PiB and flortaucipir PET images. The Synapse roadmap lists
T2w, FLAIR, FDG, resting-state fMRI, DTI and SWI images as later additions. The scan counts in the statistics come from
release 2.0 (2020), which shared raw NIfTI images from the baseline, 3-year and 5-year visits, for example 508 SWI
scans of 289 participants.

## Acquisition

All MRI was acquired on two matched Siemens 3 T TIM Trio scanners at the Martinos Center: MEMPRAGE with matched T2w
SPACE, ADNI-style MPRAGE, 3D FLAIR, SWI, 30-direction DTI and resting-state BOLD. SWI was collected for microbleed
counts and clinical reads, and was dropped from the 5-year visit onward. PET was done on a Siemens ECAT HR+ with dynamic
PiB (0 to 60 min), FDG and flortaucipir. Images are converted to NIfTI. Release 3 refaces T1w and PET images with
mri_reface, and all dates are shifted by a per-subject offset.

## Annotations

No manual image labels are shared. Derived data are FreeSurfer 6 regional measures and PET regional SUVR and DVR
values from PETSurfer.

## Known limitations

- Single site, one scanner model, and a mostly white cohort (80% in release 3).
- Imaging is collected only at selected visits, so the set of scans per participant varies.
- The per-sequence image counts describe release 2.0. Counts for release 3 are not published.
- Whether microbleed counts or SWI reads are part of the shared spreadsheets is not documented.

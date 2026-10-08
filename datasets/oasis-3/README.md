OASIS-3 is the third release of the Open Access Series of Imaging Studies. It gathers about three decades of research
imaging and clinical follow-up from several studies run at the Knight Alzheimer Disease Research Center of Washington
University in St. Louis, and is used for work on normal ageing, preclinical Alzheimer's disease and the link between
amyloid, tau, brain structure and cognition.

## Composition

The current release lists 1,378 participants: 755 cognitively normal adults and 622 with some degree of cognitive
decline, aged 42 to 95. Many were followed for years, giving 2,842 MR sessions, 2,157 PET sessions with PiB,
florbetapir (AV45) or FDG, and 1,472 CT sessions. A separately requested sub-project, OASIS-3_AV1451, adds 451 tau PET
sessions. Clinical Dementia Rating, neuropsychological tests, UDS forms and other clinical data come with the images.
Identifiers were replaced and all dates are expressed as days since study entry.

## Acquisition

All MRI was acquired on Siemens systems: a 1.5 T Vision, two 3 T TIM Trio scanners and a 3 T Biograph mMR PET-MR.
Sequences include T1w, T2w, FLAIR, ASL, SWI, time-of-flight angiography, resting-state BOLD and diffusion. PET was done
on an ECAT HR+, a Biograph 40 PET/CT and the Biograph mMR. Images are converted to NIfTI with dcm2niix and organised in
BIDS, with acquisition parameters in JSON sidecars.

## Annotations

No manual labels. Many MR sessions include FreeSurfer segmentations and cortical measures, and PET sessions come with
regional outputs of the PET Unified Pipeline (PUP); amyloid Centiloid values are also provided.

## Known limitations

- Data come from several studies with different visit schedules, so follow-up length and the set of scans vary by
  participant.
- Scanners changed over the years (1.5 T to 3 T, PET-only to PET-MR), which affects longitudinal comparisons.
- The data descriptor preprint describes an earlier, smaller release (1,098 participants); the website gives slightly
  different totals for the current release (1,378 in the text, 1,379 in the counter).
- The sex and age distribution of the current release is not published on the website.

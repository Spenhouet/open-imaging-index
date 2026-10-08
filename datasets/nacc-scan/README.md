SCAN is an NIA-funded initiative, started with a U24 grant in May 2020, that standardizes how the US Alzheimer's
Disease Research Centers (ADRCs) acquire, curate and analyse MRI and PET. Images collected under the SCAN protocols are
uploaded to LONI, defaced and quality-checked at the Mayo Clinic ADIR laboratory, and processed by teams at Mayo
Clinic, UC Davis, UC Berkeley and the University of Michigan. NACC links the results to the Uniform Data Set (UDS) of
clinical and cognitive visits, neuropathology and genetic data, and shares them with researchers.

## Composition

On 8 October 2026 the public SCAN dashboard listed 38 ADRCs and 16,412 participants: 14,164 with MRI (19,420 exams,
62,696 series) and 8,788 with PET (16,386 amyloid or tau scans). Participants are UDS participants, whose clinical
diagnoses range from normal cognition through MCI to dementia. Per-group, sex and age counts for SCAN are not published.
All SCAN images were acquired after January 2021. Numerical outputs include QC ratings, FreeSurfer regional volumes,
cortical thickness and surface area, and PET SUVRs.

## Acquisition

Every MRI scanner is certified by SCAN with a phantom or volunteer scan, and longitudinal scans must use the same
scanner. Each site chooses one of two MRI options. Option 1 covers only an accelerated sagittal 3D T1-weighted scan and
a sagittal 3D FLAIR. Option 2 is the full ADNI4 protocol or a subset of it with T1 and FLAIR plus any of 3D T2, axial
multi-echo T2* GRE, diffusion, resting-state fMRI, ASL and a high-resolution hippocampus scan. Protocol files exist
for GE, Philips and Siemens systems. PET accepts several amyloid tracers (PiB, florbetapir, florbetaben, NAV4694,
flutemetamol), tau tracers (flortaucipir, MK6240, PI2620, GTP1) and FDG.

## Annotations

There are no manual image labels. SCAN provides automated measures such as brain volumes, white matter
hyperintensities and SUVRs. Every participant gets a local clinical read at the acquiring site, but those reads are
not part of the SCAN data.

## Known limitations

- Option 1 sites only contribute T1 and FLAIR, so other contrasts exist for a subset that is not quantified publicly.
- The dashboard is updated continuously; counts change between releases, and processing delays mean not every
  submitted image is available yet.
- NACC describes its data as a case series from ADRCs, not a population-based sample.
- Mixed-protocol (non-SCAN) ADRC imaging held by NACC is not part of this entry.

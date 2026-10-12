OPAL is a brain perfusion collection from Stanford University, released through the Stanford AIMI data portal on
Redivis. Every participant was scanned on a simultaneous PET/MRI system with oxygen-15 labeled water, the reference
method for measuring cerebral blood flow, alongside several MRI perfusion techniques. The aim is to give researchers
paired PET and MRI perfusion data for building and validating non-invasive methods, for example ASL quantification or
PET CBF synthesis from MRI. The data are organised in BIDS.

## Composition

Version 1.0 holds 120 participants: 66 healthy controls and 54 Moyamoya patients scanned before surgery. To study
repeatability, 35 controls and 35 patients had two pre-acetazolamide ASL and PET acquisitions in the same session,
and 22 controls returned for a second session about one week later. Patients had no follow-up because they went on to
surgery. Demographic data are part of the release; the public page does not report the sex or age breakdown.

An ISMRM 2025 abstract by the same group describes an earlier state of the dataset with 70 controls and 50 patients.

## Acquisition

All scans come from one 3T GE PET/MRI scanner. The release includes high-resolution structural MRI, diffusion
weighted imaging, single-delay pseudo-continuous ASL, DSC bolus perfusion and static 2-minute early-frame
[15O]H2O PET with derived CBF maps. Every participant received the vasodilator acetazolamide during each session to
measure cerebrovascular reactivity: runs 1 and 2 are before the drug and run 3 is after it. Post-acetazolamide DSC
is available for 61 controls and 42 patients. Quantitative PET CBF maps calibrated with phase-contrast MRI, which
give global brain blood flow, exist for 40 controls and 17 patients.

## Known limitations

- Single site, single scanner, and one patient group (Moyamoya disease).
- The page does not name the structural sequences, so the exact structural contrasts are not listed here.
- Access requires a Redivis account, AIMI membership and a Stanford research agreement whose text is visible only
  after sign-in. AIMI data are offered for non-commercial research; commercial use needs a separate license.

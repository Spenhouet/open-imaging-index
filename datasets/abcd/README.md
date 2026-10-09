The Adolescent Brain Cognitive Development (ABCD) Study follows close to 12,000 children recruited at ages 9 to 10
at 21 US research sites into early adulthood, to describe how the brain develops through adolescence and how that
relates to substance use, mental and physical health, cognition and environment. Curated data releases come out
roughly once a year. Release 7.0 (13 May 2026) is the current one; release 1.0 appeared in February 2018.

## Composition

Release 7.0 contains 11,860 participants, the whole enrolled cohort of 11,880 except those who withdrew consent to
data sharing. The website reports the baseline cohort as 48% female and 52% male. Non-imaging data reach the 7.5-year
follow-up (ages 16 to 17); imaging runs through most of the baseline, 2-, 4- and 6-year visits, because MRI is
collected every second year. The release also holds genetics, including whole-genome sequencing, and substudies
such as MR spectroscopy, COVID-19 and Social Development.

## Acquisition

All sites use 3T scanners from Siemens (Prisma), GE (MR750) and Philips with a protocol harmonised across vendors.
A session of about two hours covers 1 mm 3D T1w and T2w, diffusion at 1.7 mm with 96 directions over four shells
(b = 500 to 3000 s/mm2), resting-state fMRI, and three task fMRI paradigms (monetary incentive delay, stop signal and
emotional n-back) at 2.4 mm with multiband EPI, plus field maps. Unprocessed data are shared as DICOM and NIfTI in
BIDS layout; processed volumes, FreeSurfer outputs and tabulated measures are included.

## Annotations

No manual segmentations. Neuroradiologists reviewed the T1w and T2w scans for incidental findings; the baseline
review covered 11,687 participants with interpretable scans. Release 7.0 adds a dictionary of 85 finding labels
drawn from the reports with AI assistance and checked by a neuroradiologist. Every exam is rated for quality.

## Known limitations

- Diffusion and other derived measures differ between vendors and software versions (GE DV25 to DV26, Siemens VE11
  to XA30), so site or scanner must be modelled.
- In release 7.0, T1w, T2w and field maps are missing from the raw BIDS data of 889 sessions from Siemens XA30
  scanners; derivatives are not affected.
- Visits at and after the 6-year follow-up were still being collected at the data freeze and are incomplete.
- Data may not be passed to third-party systems, including large language models.

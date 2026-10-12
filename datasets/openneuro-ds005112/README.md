This OpenNeuro dataset (ds005112) gathers structural brain MRI collected under two protocols of the NIMH Intramural
Research Program: 00-M-0085, a 3 T imaging study of people with neuropsychiatric disorders and healthy volunteers run by
Karen Berman's Clinical and Translational Neuroscience Branch (ClinicalTrials.gov NCT00004571), and 11-M-0251, a
longitudinal study of the hormonal and brain changes that come with puberty run by Peter Schmidt's Behavioral
Endocrinology Branch (NCT01434368). Scans were taken between October 2018 and September 2023 in Bethesda, Maryland. The
first snapshot appeared in April 2024 and is released under CC0.

## Composition

There are 135 participants with 244 sessions; 62 people were scanned once and the rest two to six times. Participants
are 75 male and 60 female, with one age per person ranging from 8 to 55 years (median 16). The participants file does
not record which protocol each person came from, nor any diagnosis or group. Handedness is given for most participants.

## Acquisition

All scans come from a GE Discovery MR750 3 T scanner with a 32-channel head coil. The main T1-weighted image is a
sagittal multi-echo MP-RAGE at 1 mm; a handful of sessions use an axial or sagittal MP-RAGE or a MEMPRAGE variant
instead. A 2D fat-suppressed fast spin-echo T2-weighted scan with 1.7 mm slices is present in 94 sessions from 91
participants. The 1,006 NIfTI files total about 7.3 GB, converted with dcm2niix, with a JSON sidecar of acquisition
parameters for each.

## Annotations

The release has no labels, masks or derived outputs; only raw anatomical images and demographic variables are shared.

## Known limitations

- With no protocol or diagnosis column, it is unknown which participants, if any, have a neuropsychiatric diagnosis.
- Many sessions hold several T1-weighted runs, in part because the scanner's original and filtered reconstructions are
  both included, so the scan count overstates the number of distinct acquisitions.
- Age is a single value per participant even for people with several sessions.
- 44 participants have no T2-weighted scan, and almost all of the other 91 have it in only one of their sessions.

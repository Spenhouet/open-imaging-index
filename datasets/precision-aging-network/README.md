The Healthy Minds for Life study of the Precision Aging Network examines why some people keep their memory and
thinking into old age while others decline, with the aim of tailoring interventions to the individual. It recruited
adults from the online MindCrowd cohort at four US universities: Arizona (Tucson), Miami, Emory (Atlanta) and Johns
Hopkins (Baltimore). This entry covers only the 3T brain MRI, which the network shares on OpenNeuro as ds007522 under a
CC0 waiver. The other study data are held on the network's own portal under a separate data use agreement.

## Composition

Release 2.0.1 holds 969 participants and 1064 imaging sessions. Participants self-identified as White, Black or
Hispanic, were aged 50 to 79 at enrolment (two are listed as 49), spoke English and had no diagnosis of memory loss or
dementia. About 70% are women. Most have one baseline session; 78 people scanned in Tucson also have a follow-up about
two years later. Further sessions labeled as repeats replace scans that failed for technical reasons.
`participants.tsv` gives age, sex, handedness and site.

## Acquisition

Each site used one scanner: Siemens Skyra in Tucson, Siemens Prisma Fit in Atlanta, Siemens Vida in Miami and a
Philips Ingenia Elition X in Baltimore. The protocol has a defaced T1w and FLAIR, a high-resolution hippocampal T2w, a
five-echo T2starw series with magnitude and phase (suitable for susceptibility mapping), diffusion MRI with a reversed
phase-encoding scan, arterial spin labeling with an M0 scan, and resting-state BOLD. No dedicated field maps were run
for ASL and fMRI; the README explains how to derive them from the multi-echo and reversed phase-encoded scans. Per
session, `sessions.tsv` lists scanner model, software version and free-text notes. Several scanner software upgrades
happened during the study.

## Annotations

There are no image labels. Derived MRI measures and processing protocols are available on the network's data portal
under its agreement, not in this release.

## Known limitations

- Manual quality control is still in progress; failed scans were removed and the reasons are listed under
  `derivatives`.
- Not every subject has every contrast: 611 have all seven, and the hippocampal T2w is missing for about a third.
- One scanner per site, so site and vendor are confounded.
- Scan dates were shifted by 1 to 15 days per subject.

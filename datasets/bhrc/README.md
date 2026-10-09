The Brazilian High Risk Cohort Study (BHRC) follows 2,511 children and their families recruited through schools in São
Paulo and Porto Alegre since 2010. A screening of 9,937 children at 57 schools was used to draw a random community
subsample (958) and a high-risk subsample (1,554) selected for psychiatric symptoms and family history of mental
disorders. Part of the cohort was scanned with MRI at baseline and at follow-ups, and the imaging data can be linked
to psychiatric assessments, cognition and genetic data. Data are shared to approved research proposals.

## Composition

The imaging sample covers 1,321 probands with at least one scan: 743 at Wave 0 (2010 to 2012, mean age 10.7), 466 at
Wave 1 (2014 to 2016), 418 at Wave 2 (2018 to 2020) and 828 at Wave 3 (2023 to 2025, mean age 24.0). Of the 1,321,
710 are male and 611 female, 787 come from the high-risk subsample and 534 from the random subsample. Lifetime
diagnoses from the DAWBA interview include anxiety disorders (457), depression (374) and ADHD (267). Wave 3 also
scanned parents of the probands, who are not counted here.

## Acquisition

Waves 0 to 2 were scanned at two sites, INRAD in São Paulo and Hospital Dom Vicente Scherer in Porto Alegre, on 1.5 T
scanners; the design paper names a 1.5 T General Electric scanner for baseline. These waves include a 3D T1-weighted
image, diffusion MRI and resting-state fMRI, plus magnetization transfer images in Waves 0 and 1 and FLAIR in Wave 2.
Wave 3 used 3 T scanners at four sites and acquired T1w, T2w, three resting-state runs, movie and eye-tracking
calibration task fMRI and field maps. The data are organized in BIDS, converted with dcm2niix and defaced with
mideface. fMRIPrep, FreeSurfer and MRIQC derivatives are provided for structural and functional scans.

## Known limitations

- Only a subset of the cohort was invited to imaging in Waves 0 to 2, so the scanned sample shrinks and then grows
  across waves.
- Field strength, sites and protocols changed between Waves 0 to 2 and Wave 3.
- Diffusion, magnetization transfer and FLAIR images are released raw only.
- The vendor of the Wave 1 to 3 scanners is not stated in the sources.
- The Data Transfer Agreement text is not public, so permitted uses cannot be checked before applying.

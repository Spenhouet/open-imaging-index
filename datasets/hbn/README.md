The Healthy Brain Network is a biobank run by the Child Mind Institute since 2015. Families in the New York City
area with concerns about their child's mental health or learning were invited to take part, and each child receives
a free diagnostic evaluation. The aim is a large transdiagnostic sample of children and adolescents aged 5 to 21 with
psychiatric, cognitive and lifestyle phenotypes alongside MRI, EEG, eye tracking and other recordings. Imaging is
shared through the 1000 Functional Connectomes Project / INDI in numbered releases, from Release 1.0 in June 2017 to
Release 11 in November 2022. MRI collection stopped in April 2023.

## Composition

The open metadata file for Release 11.1 lists 4,862 participants with phenotypic records, of whom 3,421 have MRI:
2,207 male and 1,214 female, aged 5 to 22 years (median 10). Most participants have T1-weighted, resting-state fMRI
and diffusion scans; T2-weighted images and a magnetization transfer pair are present for a subset. The download
table on the portal gives per-release MRI counts, from 159 to 700 participants per release. The data descriptor
covers the first release of 664 participants. Diagnoses, from clinician consensus and the KSADS, are part of the
phenotypic data and need a signed data use agreement.

## Acquisition

Four sites scanned participants. A mobile 1.5 T Siemens Avanto at Staten Island served the pilot phase (343
participants), followed by a 3 T Siemens Tim Trio at Rutgers University and 3 T Siemens Prisma scanners at the
Citigroup Biomedical Imaging Center and CUNY. Protocols include resting-state runs, two movie-watching fMRI runs, a
gaze calibration run (PEER), diffusion MRI and structural T1w and T2w images, with later protocols aligned to the ABCD
Study. Data are distributed in BIDS format, and preprocessed derivatives are offered through the Reproducible Brain
Charts project.

## Annotations

There are no image labels. Image quality metrics from MRIQC and the Preprocessed Connectome Project protocol are
published for the scans.

## Known limitations

- Recruitment was based on clinical concern, so the sample is not representative and ADHD is common.
- Scanners and sequences differ by site, and the portal advises harmonization across sites.
- Scans are shared regardless of quality, and head motion is high in young children.
- Participants without consent for commercial use (412 of the 3,421 with MRI) are under a non-commercial license.
- Counts here come from the metadata file, which leaves out imaging participants without phenotypic records.

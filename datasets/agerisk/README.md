AgeRisk is a cross-sectional study from the Center for Cognitive and Decision Sciences at the University of Basel
that looked at how risk preference, impulsivity and self-control differ between younger and older adults. Each
participant took part in a laboratory session, a home session and, last, an MRI session. This entry covers the MRI
session, which Loreen Tisdall and Rui Mata released on OpenNeuro in August 2023 as ds004711 under CC0. The
self-report, behavioral and hormone measures of the other sessions are not part of this release.

## Composition

The study recruited 200 healthy, right-handed adults from the Basel area, a convenience sample aged 16 to 81. At
the time of scanning 189 were still enrolled. Two of them did not enter the scanner, which leaves 187 subjects with
images. Each has a T1-weighted scan and two runs of the Balloon Analogue Risk Task (BART). 178 of the 187 also have a
run of a delay discounting task with monetary rewards; the others ran out of scanner time. The participants table
gives self-reported gender and age at the MRI session with two decimals: 97 women and 90 men, mean age 45.1.

## Acquisition

All scans come from one Siemens 3 T MAGNETOM Prisma at the University Hospital Basel, recorded between 2016 and
2017 with a 20-channel head coil. The T1-weighted image is an MPRAGE at 1 mm isotropic resolution. The functional
runs are gradient-echo EPI with TR 2.01 s, TE 30 ms, 3 mm voxels and 33 interleaved axial slices. The full protocol
is on the study's OSF project.

## Annotations

There are no image annotations. BIDS events files give the trial timing of both tasks, and the participants table
flags which runs were collected for each subject.

## Known limitations

- All images were skull-stripped with FSL BET before upload, so the raw head images are not available. For sub-138
  the threshold was lowered because the default removed brain tissue.
- sub-112 left the scanner between the two BART runs and has two T1-weighted scans.
- In the analysis paper, 14 of the 189 MRI participants were excluded for incomplete data, faulty equipment or head
  motion, so not every released run is of analysis quality.
- The sample was recruited by convenience in one Swiss region.

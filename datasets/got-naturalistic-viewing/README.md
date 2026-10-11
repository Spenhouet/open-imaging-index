Functional MRI recorded while adults watched short clips from the television series Game of Thrones, shared by
Kira Noad, David Watson and Timothy Andrews at the University of York. The cohort mixes people with developmental
prosopagnosia, a lifelong difficulty recognising faces, with neurologically healthy controls, and splits both groups
by whether they already knew the series. The creators used it to compare inter-subject correlation and functional
connectivity between familiar and unfamiliar viewers, and between prosopagnosic and control viewers. The data are in
BIDS format on OpenNeuro under CC0.

## Composition

The release holds 73 participants: 45 controls and 28 with developmental prosopagnosia. Each participant is labelled
familiar or unfamiliar with the series in `participants.tsv`. Every participant has one T1-weighted anatomical scan
and one movie-watching run. All but one also have a category localiser run and a fieldmap (magnitude and phase
difference). A separate table gives scores on the 20-item prosopagnosia index, the Cambridge Face Memory Test and a
quiz on the series written by the authors, with face, scene and narrative questions. No age or sex column is shared.

## Acquisition

All scans come from a 3 T Siemens Prisma at the York Neuroimaging Centre. The functional runs use the CMRR multiband
echo-planar sequence with a repetition time of 2 s and 3 mm slices; slice timings ship with the data. The movie run
strings together clips of 50 to 117 s, close to 13 minutes in total, watched passively with sound. The localiser shows
faces, scenes and phase-scrambled faces, for defining face- and scene-selective regions. The anatomical scan has
1 mm slices.

## Known limitations

Participant sex and age are not part of the shared files. Participant sub-DP15 lacks the localiser and fieldmap
because scanning time ran out. The control CFMT scores cover only about half of the controls. The group sizes are
small, and familiar and unfamiliar subgroups within the prosopagnosia group hold 13 and 15 people.

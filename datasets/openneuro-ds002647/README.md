This OpenNeuro dataset comes from the Emotion and Cognition Lab at the University of Southern California. It was
gathered to test whether a short bout of isometric handgrip exercise raises activity in the noradrenergic locus
coeruleus system and, through it, sharpens attention to rare target sounds. Women squeezed a ball (or only watched the
cues, in a control group) during one functional run and then performed an auditory oddball task in the scanner. The
first public snapshot appeared in March 2020 under a CC0 waiver; an earlier upload as ds002572 was withdrawn for
privacy reasons.

## Composition

The release holds 91 women in three hormone groups: 31 younger women in the luteal phase of the menstrual cycle, 30
younger women taking hormonal contraceptives and 30 postmenopausal older women. Ages run from 18 to 75. The
participants table lists the handgrip or control assignment, hormone group, age, sex and a flag for the participants
the published study excluded from imaging analyses (5 of 91). The paper describes 92 recruited women and 87 analysed.
Pupillometry, extra behavioral data and subject data are kept in a separate OSF project.

## Acquisition

All scans were acquired on a 3 T Siemens Prisma fit with a 32-channel head coil. Each participant has a 1 mm
isotropic T1-weighted MPRAGE and a 2D fast spin echo scan with 11 axial slices through the pons, weighted toward
neuromelanin to locate the locus coeruleus. Functional data are gradient-echo EPI with a 2 s TR: one handgrip run and
one or two oddball runs. Event files describe cue timing and tone types.

## Annotations

There are no image annotations or derivatives in the release.

## Known limitations

- 60 of 91 participants have a second oddball run, because the protocol was later cut to one run; the published
  analysis used run 1 only.
- Three acquisitions used pilot sequence settings, so image dimensions are not identical across subjects.
- Behavioral event files are missing for the pilot participant sub-101.
- Only women were studied, so sex effects cannot be examined.

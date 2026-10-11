This OpenNeuro release (ds007694) holds the brain imaging of GRACE, a cross-sectional case-control study from the
University of Basel. The study asked whether young adults from the general population with strong positive
schizotypy, meaning unusual perceptual experiences below the level of a psychiatric diagnosis, differ from people with
very low schizotypy in their gut microbiota and in the structure, perfusion and chemistry of the hippocampus. The
data are shared openly under CC0 in BIDS format. Gut microbiome sequencing, questionnaires and cognitive scores are
not part of this release.

## Composition

The paper enrolled 142 participants selected by screening 2,425 people with the short O-LIFE questionnaire; after one
exclusion, 69 high and 72 low schizotypy participants formed the analysed sample. The release contains 139 subjects,
67 labelled high and 72 labelled low schizotypy in participants.tsv. Of these, 97 are female, 41 male and 1 recorded
as other. Ages range from 18 to 25 years (mean 21.9). Each subject has one session. 136 have T1w, resting-state BOLD
and ASL images, one lacks ASL, one has only ASL and spectroscopy, and one has spectroscopy only.

## Acquisition

All imaging sidecars name a Siemens Prisma at 3 T, and the paper places every scan at University Hospital Basel. The
session included an MPRAGE T1w image, a resting-state echo-planar BOLD run and a pulsed arterial spin labeling
series. Single-voxel proton spectroscopy of the left hippocampus is shared as NIfTI-MRS: the raw folder holds a
water-suppressed spin-echo spectrum with its water reference, and a derivatives folder holds MEGA-PRESS edit-on,
edit-off and difference spectra, which the paper used for glutamate and GABA.

## Known limitations

- Single site and scanner, and a narrow age range of 18 to 25 years.
- Two participants of the analysed sample are not in the release.
- participants.json still carries template descriptions, so the group codes HS and LS are explained only in the
  README and paper.
- No clinical, cognitive or microbiome variables are included.

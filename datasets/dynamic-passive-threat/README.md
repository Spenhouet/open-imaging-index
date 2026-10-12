This OpenNeuro release (ds002320) holds the MRI of a threat-of-shock experiment run by the Laboratory of Cognition and
Emotion at the University of Maryland, College Park. Healthy adults watched two circles drift around the screen while
knowing that a collision of the circles would deliver an unpleasant, non-painful electric shock. Because the distance,
direction and speed of the circles changed continuously, the study could test how these threat factors interact in
regions such as the anterior insula, amygdala, bed nucleus of the stria terminalis and periaqueductal gray. The data
are shared under a CC0 waiver.

## Composition

The snapshot contains 82 healthy adult volunteers, each scanned in a single session. Two of them (sub-16 and sub-44)
were added in version 1.1.0. Subject numbers run from 01 to 93 with gaps. No participants table is included, so age and
sex are not available in the release.

## Acquisition

All scans come from a Siemens 3T TRIO with a 32-channel head coil. Each subject has a 0.8 mm isotropic T2-weighted
SPACE scan and a 0.8 mm isotropic T1-weighted MPRAGE. The task (named "circles" in the files) ran for up to six runs of
457 volumes each, acquired with a multiband EPI sequence (multiband factor 6, TR 1 s, TE 39 ms, 2.2 mm isotropic
voxels). Each run held six 60-second blocks of moving circles separated by 15-second blank periods. A double-echo field
map (two magnitude images and a phase image) is included per subject. Events files give the task timing.

## Known limitations

- Single site and scanner.
- 11 subjects have fewer than six task runs (480 runs in total out of a possible 492).
- Skin conductance was recorded during scanning according to the paper, but it is not part of the release.
- The paper reports on 85 participants (41 female, aged 18 to 40) after excluding 8 of the 93 recruited, which does
  not match the 82 subjects released, so its demographics cannot be transferred to this release.
- The same sample was analysed earlier at the network level in a separate study.

This dataset comes from a Brigham Young University study of pattern separation, the ability to keep memories of
similar events apart, in younger and older adults. The authors measured volumes of medial temporal lobe regions and
hippocampal subfields, white matter integrity from diffusion tensor imaging and resting functional connectivity, and
related them to performance on a task that asks whether an object is old, new or merely similar to one seen before.
They report that age and the volume of the left CA3/dentate gyrus predicted performance, while diffusion and
connectivity measures did not. The images are on OpenNeuro as ds004665 under CC0.

## Composition

participants.tsv lists 54 adults, 53 of them right-handed: 20 in the young group aged 18 to 26 and 34
in the old group aged 56 to 83. There are 32 women and 22 men. The scanner_site column assigns 36 participants to
Brigham Young University (20 young, 16 old) and 18 old participants to the University of Utah. Each participant has
one session.

## Acquisition

Every sidecar names a Siemens TrioTim 3T scanner with a head matrix coil. Every participant has an MPRAGE
T1-weighted volume (1.2 mm slices), a T2-weighted turbo spin echo volume with high in-plane resolution and 3 mm
slices, a diffusion run of 52 volumes (48 at b = 1000 s/mm² and 4 at b = 0) and one resting-state EPI run with a
repetition time of 2 s.

## Annotations

There are no image labels. participants.tsv holds, per participant, the counts of old, similar and new responses to
targets, lures, foils and first presentations in the memory task. One participant has no task scores.

## Known limitations

- The README gives only the paper abstract; there is no description of the protocol, exclusions or task in the
  release, and the full paper is not openly available.
- The sex column mixes two codings (Female/Male and F/M) between sites.
- Sidecars from the University of Utah subjects lack institution fields and use an older scanner software version.
- No participant is aged 30 to 49, so age effects rest on two separated groups.
- No hippocampal subfield segmentations or other derivatives are included.

This entry covers the two OpenNeuro releases of a University of Graz study on the illusion of control in
neurofeedback. Participants lay in the scanner watching a display like the one used in real-time fMRI neurofeedback
and were told their brain activity moved the bars, although the bar movements were sham and unrelated to their
brain. The authors asked whether this belief alone engages the basal ganglia and ventral striatum, regions often
taken as a sign of neurofeedback learning. Part 1 is ds004556 and part 2 is ds004557. Both are shared under a CC0
waiver.

## Composition

Part 1 holds 53 adults with images. Its README describes 28 triathletes in regular training and 26 controls who did
not train for any sport. Part 2 holds 35 adults with images, all university students. Pooled over both parts there
are 88 subjects (42 female, 46 male) aged 19 to 53, and every subject has one T1-weighted image, one T2-weighted
image and one task fMRI run with events. The participants tables give age, sex, height and weight.

## Acquisition

All scans come from a 3T Siemens Skyra. The structural images are a 3D MPRAGE and a 3D SPACE T2-weighted scan. The
functional run uses multiband EPI (factor 4) with a repetition time of 1.25 s. The task has three block types, each
repeated five times in random order: trying to raise the middle of three bars, watching the bars move without
interfering, and watching static bars. A jittered fixation of about 18.5 s and a 3 s cue precede each 20 s bar
display. After each control block participants rated how much control they felt on a five-point scale.

## Known limitations

- The preprint abstract reports 97 participants (50 female, aged 18 to 54), more than the 88 with images in the two
  releases. The part 1 README names 54 subjects and the part 2 README names 40, and the part 2 list mixes
  subject labels with raw scanner ids, so the analysed sample cannot be matched exactly to the files.
- The part 1 participants table has no group column, so triathletes and controls are separated only by the README
  list.
- The study is published as a preprint only; methods details beyond the abstract and the OpenNeuro files were not
  checked.
- Single site and scanner; young adults only.

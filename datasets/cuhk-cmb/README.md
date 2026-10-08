This is the public part of SWI-CMB, a susceptibility-weighted MRI collection that a group at The Chinese University of
Hong Kong built to train and test a cascaded 3D convolutional network for cerebral microbleed detection (Dou et al.,
IEEE TMI 2016). The full collection was not released; the project page offers an archive with 20 of the subjects and
their microbleed annotations, released for others to reproduce the paper or to build and test their own detectors.

## Composition

The archive holds 20 SWI volumes in NIfTI format and one MATLAB file per subject with the voxel coordinates of the
centroid of each annotated microbleed. The readme does not say which of the paper's groups or splits the 20 subjects
come from.

The full SWI-CMB set in the paper has 320 subjects: 126 with stroke (mean age 67.4 ± 11.3 years) and 194 from a normal
ageing group (mean age 71.2 ± 5.0 years), with 1,149 annotated microbleeds in total. The paper split it at random into
230 training, 40 validation and 50 test subjects.

## Acquisition

All scans come from a single 3.0 T Philips system with a 3D spoiled gradient-echo sequence (repetition time 17 ms,
echo time 24 ms), a 512 × 512 × 150 matrix, 0.45 × 0.45 mm in-plane resolution, 2 mm slices at 1 mm spacing and a
230 × 230 mm field of view.

## Annotations

One experienced rater labelled the microbleeds and a neurologist verified them, following the Microbleed Anatomical
Rating Scale (MARS). Agreement between the two, checked on 20 subjects, gave a Pearson correlation of 0.91. Labels are
points (lesion centroids), not voxel masks, and only microbleeds are annotated.

## Known limitations

- Only 20 of the 320 subjects are public, which suits evaluation rather than training.
- One site, one scanner and one protocol.
- No demographic or clinical data come with the released files.
- The terms in the archive's readme limit use to research and reserve all other rights to the university; the
  project page states no terms.

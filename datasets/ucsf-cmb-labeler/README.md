The UCSF CMB_labeler repository is a semi-automated tool from the Lupo Lab at the University of California San
Francisco for finding and outlining cerebral microbleeds on susceptibility-weighted MRI. It ships a small test set so
that users can try the tool: 10 SWI brain volumes from patients with microbleeds caused by radiation therapy. The tool
and its evaluation are described in Morrison et al., NeuroImage: Clinical 2018.

## Composition

Ten SWI volumes, one per patient, named P01 to P10. The patients had radiotherapy-induced cerebral microbleeds. The
repository gives no age, sex or diagnosis per volume.

## Acquisition

Volumes P01 to P05 were acquired on a 3 T GE scanner and P06 to P10 on a 7 T GE scanner. Each volume is a single
uncompressed NIfTI file. The zip archives in the repository total about 67 MB.

## Annotations

The test set has no microbleed labels. It is meant as input for the tool, which proposes candidates that a reader
then accepts or rejects.

## Known limitations

- Ten volumes in one disease setting, so the set suits a quick test of a pipeline, not training or a
  benchmark.
- The repository's MIT license is written for the software. No terms cover the images, so commercial use, model
  training and redistribution are not settled.
- Scan parameters per volume are not given in the repository.

This OpenNeuro dataset was collected by the Saxe Lab at MIT to study how brain networks for thinking about other
people's minds and for perceiving bodily sensations develop in childhood. Children aged 3 to 12 and adults lay in the
scanner and watched a silent version of the Pixar short film Partly Cloudy, with no task beyond keeping still. The
data were first shared through OpenfMRI alongside the 2018 Nature Communications paper; the current OpenNeuro snapshot
1.1.1 (September 2023) is released under a CC0 waiver.

## Composition

There are 155 participants: 122 children and 33 adults, 84 female and 71 male. The participants table groups the
children by age (3, 4, 5, 7 and 8 to 12 years) and adds handedness, scores on a theory-of-mind booklet with a
false-belief pass or fail grouping, block design and KBIT scores, a card sorting summary, and scan log fields for
scanner, head coil, voxel size and slice gap. Each person has one T1-weighted scan and one movie fMRI run.

## Acquisition

All data come from a 3 T Siemens Tim Trio at the Martinos Imaging Center at MIT. Most participants used the standard
32-channel head coil; 31 children under five used one of two custom 32-channel coils sized for young children.
Structural scans have 1 mm isotropic voxels. Functional runs are gradient-echo EPI with a 2 s TR and 168 volumes,
with voxel size of 3 or 3.13 mm and slice gaps that vary between participants because they were first recruited for
different studies.

## Annotations

There are no image annotations. The README lists the onset and duration of movie events that drive theory-of-mind and
pain regions, found by reverse correlation in adults. Derivatives contain SPM8-preprocessed
functional data with nuisance regressors and masks, normalized anatomy, MRIQC reports and regions of interest.

## Known limitations

- Children under five completed two functional runs, but only one run per participant is in the release.
- Voxel size and slice gap differ across subgroups, which can confound age effects.
- Participants with excessive motion, language delays or incomplete sessions were excluded before release.
- No adolescents between 13 and 17 are included.

This dataset comes from the Cole Neurocognition Lab at Rutgers University, which studies how the brain flexibly
combines rules to perform new tasks. Healthy young adults lay in the scanner for a long resting-state run and then
performed the Concrete Permuted Rule Operations (C-PRO) paradigm, in which rules from three domains (a logical
decision, a sensory feature and a motor response) are recombined into many distinct task sets. The paper that the README asks users to cite
showed that task information moves between brain regions along routes predicted by resting-state
connectivity. The images are on OpenNeuro as ds003701 under CC0 and suit work on cognitive control, task-rest
relationships and network models of brain activity.

## Composition

The release holds 96 participants aged 18 to 38 (mean 22.2), 54 female and 42 male, all in a single control group.
participants.tsv has 105 rows, but only 96 of them have image data. The 2017 paper analysed 32
participants out of 35 recruited.

## Acquisition

Each participant had one session on a Siemens Trio 3T scanner at the Rutgers University Brain Imaging Center with a
32-channel head coil. The session holds 0.8 mm isotropic T1-weighted and T2-weighted scans, a pair of spin-echo field
maps with opposite phase encoding, one resting-state run of 1070 volumes (about 14 minutes) and eight C-PRO task runs
of 581 volumes each. The BOLD runs use multiband factor 8, a repetition time of 785 ms and 2 mm isotropic voxels, and
each comes with a single-band reference image.

## Annotations

There are no image labels. Each task run has an events file with trial timing and the rules in play.

## Known limitations

- The README does not say why nine people in participants.tsv have no image data.
- Only the 2017 subsample is described in a paper; recruitment and exclusion for the full 96 are not documented in the
  release.
- Participants are young adults from one university community, scanned on one scanner in one session.

This OpenNeuro dataset holds the raw MRI of a study from the University of Pennsylvania on how curiosity in the
moment affects learning in young children. Before scanning, each child picked, out of sets of three animals, the one
they were most keen to hear about, which gave high, middle and low curiosity ratings for 27 animals. In the scanner
the children looked at a picture of each animal while listening to a 12-second recorded story about where it lives
and what it eats. A memory test followed about 15 minutes after the scan. The accompanying paper relates the
curiosity ratings to later recall and to task-evoked brain activity. Snapshot 1.0.0 (January 2026) is released under
a CC0 waiver.

## Composition

There are 61 children from kindergarten to second grade, aged 5.25 to 8.79 years (mean 6.95), 31 of them boys,
recruited around Philadelphia. Children born prematurely, adopted, or with a psychiatric, neurological or learning
disorder were not enrolled. Each child has a single session (labelled ses-01 for 59 children and ses-03 for two),
with one T1-weighted image and two task runs, except one child with a single run. The release has no participants
table, so age and sex per child are not included.

## Acquisition

All scans come from one Siemens MAGNETOM Prisma 3 T scanner with a 32-channel head coil at the university's imaging
centre. The structural image is a 1 mm isotropic multi-echo MPRAGE. The task runs
are multiband (factor 3) gradient-echo EPI at 2 mm isotropic, TR 2 s, 150 volumes each. Events files give story
onsets with a trial type code.

## Known limitations

- Healthy children from a narrow age range and one city; the paper reports a mostly White sample with a
  mean household income of about $164,000.
- The paper analysed fMRI from 51 children: two had a scanner malfunction and seven moved too much. The release
  holds imaging for all 61 children.
- Behavioural memory scores and the pre-scan curiosity sort are not in the release.
- No field maps or resting-state scans are included.

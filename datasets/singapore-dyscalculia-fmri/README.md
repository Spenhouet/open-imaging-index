This OpenNeuro dataset holds the raw MRI behind Kwok et al. (2023), a pre-registered task fMRI study that compared children with persistent developmental dyscalculia (DD) against typically achieving (TA) classmates in Singapore. The children came from a longitudinal cohort that had been followed with cognitive testing from kindergarten to Grade 1, and they were scanned in Grade 3. The study found no consistent group differences in brain activation for any of its three tasks. The data are released under CC0.

## Composition

68 children were scanned successfully out of 77 enrolled: 30 in the DD group and 38 in the TA group, with a mean age of 8.95 years (SD 0.34) and 30 boys. The DD group combined children placed in a national learning support program for math with children who scored in the bottom 10th percentile of a standardized math test in Grade 1. Each child has one T1-weighted scan and up to six BOLD runs: two each of an arithmetic task, a matching task with numbers, faces and shapes, and a dot-matrix visuo-spatial working memory task. Event files with trial timings come with every run. The group label is the only column in participants.tsv.

## Acquisition

All scans were made on one Siemens 3T MAGNETOM Prisma with a 32-channel head coil at Nanyang Technological University. The T1-weighted MPRAGE has 0.9 mm isotropic voxels. The functional runs are T2*-weighted echo-planar images with a repetition time of 1 s, 48 interleaved slices and 2.5 mm isotropic voxels. The files are organized in BIDS.

## Known limitations

The dataset README mentions field maps, but snapshot 1.0.0 contains no fmap folders. Some children are missing single task runs. The paper excluded further children from individual task analyses for low accuracy, so the analysed sample per task is smaller than 68. Cognitive and math test scores used to form the groups are not part of the release. All children come from one city and one scanner.

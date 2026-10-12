The Baby Open Brains (BOBs) Repository shares structural brain MRI of infants together with segmentations that were corrected by hand and checked by expert reviewers. The authors built it because few manually curated segmentations exist for the first year of life, when growing myelin changes how tissue looks on MRI from month to month. It serves as a benchmark for infant segmentation pipelines and was used to train BIBSNet. The data are released on OpenNeuro as ds005450 under CC BY 4.0, with the OSF project as the hub for protocols and links.

## Composition

51 infants contribute 71 imaging visits between 1 and 9 months of age: 34 infants have one visit, 14 have two and 3 have three. The shared session table lists 31 girls and 20 boys, with age in months, gestational age at birth and sex per visit. Every visit has one T1w volume, one T2w volume and one label map. The authors report that the sample is mostly White, non-Hispanic and highly educated, and that its demographics and developmental scores did not differ from the full Baby Connectome Project sample.

## Acquisition

All infants come from the University of Minnesota site of the Baby Connectome Project and were scanned in natural sleep on a Siemens 3 T Prisma with a 32-channel head coil. T1w images used MPRAGE and T2w images a turbo spin-echo sequence, both at 0.8 mm isotropic resolution. The authors picked the best-quality visits by visual review. Shared images are preprocessed outputs of the DCAN infant-abcd-bids pipeline in an infant MNI space, aligned between T1w and T2w, and defaced with PyDeface and an infant mask.

## Annotations

Each visit has one FreeSurfer-style label map covering cerebral gray and white matter and 23 subcortical structures. Labels were started from joint label fusion or from BIBSNet prototypes, then edited in ITK-SNAP by trained markers using both T1w and T2w images, following a written protocol, and checked by at least one expert reviewer. The thalamus boundary follows the hypothalamic sulcus and the hippocampus label excludes the tail, which departs from FreeSurfer conventions.

## Known limitations

The cohort is small, comes from one site and one scanner, and skews toward well-resourced White families. Only term-born infants without major birth complications were eligible. Raw images are not included, only the preprocessed volumes.

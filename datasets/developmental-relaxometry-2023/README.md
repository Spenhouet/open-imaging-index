This OpenNeuro dataset (ds004611) holds quantitative T1 and T2 relaxation maps of the brain from 73 healthy children
and adolescents, scanned at Lausanne University Hospital (CHUV) with a protocol of about six minutes that fits into
routine clinical imaging. The authors used it to fit age-dependent normative models of regional brain volumes and
relaxation times, so that a new pediatric scan can be checked against the expected range for its age. The data are
described in a 2024 Scientific Data paper and released under CC0.

## Composition

The study recruited 80 children without neurological or learning disorders reported by their parents; 7 were excluded
for motion artifacts, leaving 73 participants aged 3.4 to 17.2 years. Each participant has one session with age at
scan. All 73 have the two MP2RAGE inversion images, the uniform image and the T1 map. T2 maps are shared for 64: eight
were dropped for flow artifacts and one was missing. The participants file lists 37 girls and 36 boys, while the paper
reports 36 females. Derivatives include regional volume, T1 and T2 values per subject from an automated segmentation
into 38 regions, regression slopes, offsets and 95% prediction intervals per region as CSV and Excel files, slope maps,
and movies of how the age-dependent templates change.

## Acquisition

All scans were acquired on one 3 T Siemens MAGNETOM Prisma Fit with a 64-channel head coil. T1 maps come from MP2RAGE
and T2 maps from GRAPPATINI, a prototype sequence that fits a single-compartment decay model to undersampled k-space data. Both share
field of view and resolution. Images were defaced with pydeface and resampled to 0.7 x 0.7 x 1.0 mm.

## Annotations

No manual labels. Segmentations came from the MorphoBox research application with a pediatric atlas, and a
radiologist reviewed each segmentation and scan for quality. Only one example label volume is shared.

## Known limitations

- Single site, single scanner, and the T2 sequence is a vendor prototype, so values may not transfer to other
  protocols.
- The paper's counts of excluded scans differ between sections (seven or eight with T2 flow artifacts), and its sex
  count and mean age differ slightly from the shared participant files.
- Ages are spread unevenly: only 8 participants were 13 or older at the scan.

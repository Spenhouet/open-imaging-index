This OpenNeuro release (ds005518) contains the MRI data of a study at HSE University on how the brain processes a
persuasive health message under natural listening conditions. Participants heard a first-person narrative by a
nutritionist about the health risks of sugar while in the scanner. Before and after the narrative they placed bids on
sugar-containing, sugar-free and non-edible products, and the change in their bids was used to label each person as
persuaded or unpersuaded. The study compared intersubject correlation and connectivity between the two groups. The
data are shared under a CC0 waiver, and the analysis code is on GitHub.

## Composition

The release holds 50 healthy, right-handed adults aged 18 to 32 years (25 women, 25 men). The paper describes them as
free of psychiatric, neurological and metabolic illness and eating disorders, not on prescribed medication, and people
who eat sweets. Each participant has one T1-weighted anatomical image and one functional run with an events file that
marks the onset of the narrative and of its 13 arguments; bidding trials are not coded in the events files. The participants table lists age, sex and the persuasion group from a median split of the bid
change for sugar-free products (24 persuaded, 26 unpersuaded).

## Acquisition

All scans come from one 3 T Siemens Prisma with a 20-channel head coil at the Research Center of Neurology in Moscow.
The functional data are gradient-echo EPI with a repetition time of 2 s, an echo time of 21 ms, 44 axial slices and
2 mm voxels with a 0.5 mm gap. A run averaged about 1,239 volumes, roughly 41 minutes, and spans both bidding blocks and
the narrative. The anatomical image is a sagittal MPRAGE. Images were converted from DICOM with dcm2niix and no
derivatives are included.

## Known limitations

- Small single-site sample of young, healthy adults, all described in the paper as white.
- The persuasion groups come from a median split, not from an external criterion.
- The T1-weighted parameters printed in the paper (TR 1,900 ms, TE 2.47 ms) differ from the image sidecars (TR 2.3 s,
  TE 2.98 ms); the sidecars describe the released files.
- Participants were asked to fast for at least 3 hours before scanning, which may affect food-related responses.

Penn LEAD follows adolescents at the University of Pennsylvania to study how executive function develops and how
it varies across psychiatric diagnoses rather than within one disorder. Participants are typically developing, have
ADHD, or are on the psychosis spectrum, including clinical high risk. The raw BIDS data are on OpenNeuro under a CC0
waiver; the first snapshot appeared in December 2025 and the current one is 1.0.6 (July 2026). The study is
described in a bioRxiv preprint by Sevchik, Satterthwaite and colleagues.

## Composition

The release holds 132 participants (65 female, 67 male), aged 8 to 16 at enrollment, with 225 imaging sessions:
all 132 have a first session, 73 a second and 20 a third. By study group, 36 are typically developing, 27 were
recruited for ADHD and 69 for the psychosis spectrum. The participants file also records diagnoses from the baseline
clinical interview, which overlap: ADHD, subthreshold or threshold psychosis, depression, bipolar disorder and PTSD.
Every participant has T1-weighted and T2-weighted images; 113 have all six image types. The phenotype folder holds
results of a long computerized cognitive battery and many self-report scales.

Processed outputs are shared as separate OpenNeuro datasets, among them fMRIPrep anatomical derivatives (ds007089),
fMRIPrep functional derivatives (ds007088) and XCP-D outputs (ds007402). This raw dataset also contains FreeSurfer
summaries and n-back task contrast maps in its derivatives folder.

## Acquisition

Scans come from a Siemens Prisma 3T. Each session has a T1-weighted and two T2-weighted structural images, two
resting-state runs and a fractal n-back run (TR 800 ms), a multi-shell diffusion run of 103 volumes at 1.7 mm, a
3D spiral pseudo-continuous ASL scan with an M0 reference, and a four-echo gradient-echo sequence at 1.5 mm intended
for susceptibility mapping. Opposite phase-encoding field maps support distortion correction. T1 images are refaced
and T2 images defaced; session dates are rounded to the 15th of the month.

## Known limitations

- Not every participant has every modality: 19 lack the multi-echo GRE data and 16 lack ASL.
- Some runs were repeated, so run numbers can skip or exceed the protocol count.
- The multi-echo GRE data are shared raw, without curation or preprocessing.
- Several sessions miss cognitive or self-report data, and some scales were added at later sessions after protocol
  changes.
- One participant has two sessions a few days apart because the first was incomplete.

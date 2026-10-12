The Developmental Neuroimaging Lab at the University of Calgary followed healthy school-age children with repeated multimodal MRI between 2014 and 2020 to study how white matter matures through late childhood and adolescence and whether its microstructure relates to reading and other cognitive skills. The BIDS release on the Canadian Open Neuroscience Platform (CONP) is version 1.0, licensed under PDDL, and its files download over HTTPS without an account. Its reference paper, Geeraert et al. 2020, analyzed 46 participants aged 6 to 16.

## Composition

The README lists 51 children: 16 with one visit, 23 with two and 12 with three. The file tree has 96 sessions with images; participants.tsv has 99 rows, including one child without any image files. Among the 51 imaged children, 24 are female and 27 male. Children were 6 to 13 years old at enrollment and 6 to 17 years old across all sessions; the mean age at the first session is 10.2 years. Every child has T1-weighted images, two diffusion shells (b=900 and b=2000), multi-echo gradient echo images acquired for quantitative susceptibility mapping (QSM) and inhomogeneous magnetization transfer (ihMT) images. T2-weighted, resting-state fMRI, arterial spin labeling and mcDESPOT data cover 42 to 47 children. Cognitive scores from WASI-II, NEPSY-II and WIAT-III subtests are not part of the download and can be requested by email.

## Acquisition

All scans come from one GE 3T Discovery MR750w at the Alberta Children's Hospital with a 32-channel head coil. Children were invited back about two years after each visit with the same protocol; some returned a third time while the study was still recruiting. The raw ihMT images come with derived MTR, ihMTR, qMT and qihMT maps, and the raw ASL series with cerebral blood flow maps. The QSM series are raw echoes, not susceptibility maps.

## Known limitations

Children with preterm or complicated births, developmental or psychiatric diagnoses or prior neurosurgery were excluded. The README warns that the b-values and gradient tables written by dcm2nii are wrong and that the corrected tables in the top-level folder must be used instead. Three session rows in participants.tsv have no image files, one of them the only visit of a child. The CONP DATS.json lists its privacy as "registered" while marking the distribution itself as public.

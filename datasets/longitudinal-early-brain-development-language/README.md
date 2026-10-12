This OpenNeuro release holds the New England cohort of a study by Turesky, Escalante, Loh and Gaab at Harvard that
traced how the brain grows from infancy to early school age and whether those growth curves relate to later reading
skills. Children were enrolled as infants in an NIH-funded longitudinal project on brain and literacy development and
were scanned again at up to four later stages. The PNAS paper analysed this cohort together with the separately
hosted Calgary Preschool MRI dataset.

## Composition

The release contains 80 children (41 female, 39 male by the participants file) and 234 MRI sessions. Every child has
T1-weighted and diffusion images from at least two time points that passed the study's quality control; images from
further time points of the same children are included whether or not they passed. Sessions are numbered by
developmental stage: infant, toddler, pre-reading, beginning reading and emergent reading. Ages at scan range from
about 2.5 months to just over 10 years. The paper reports that 40 of the 80 children have a first-degree relative
with a history of reading difficulty. The participants file also carries maternal education, a home literacy score,
literacy and cognitive test scores (Woodcock-Johnson IV, Woodcock Reading Mastery Tests III, KBIT-2) and quality
ratings of the FreeSurfer segmentations and diffusion tracts.

## Acquisition

All scans come from a 3 T Siemens scanner with a 32-channel head coil, at Boston Children's Hospital before 2021 and
at the Harvard Center for Brain Science afterwards. Structural images are 1 mm MPRAGE. Diffusion scans have 2 mm
isotropic voxels, 30 directions at b = 1000 s/mm² and 10 to 11 b = 0 volumes, with simultaneous multi-slice factor 2.
A reverse phase-encoded volume is shared as a field map for 178 sessions. Parameters were adapted to head size across
ages. T1-weighted images were defaced with mri_deface, or with mideface where that tool failed.

## Known limitations

Only children with at least two usable time points were released, so the sample is selected on scan quality and
retention. There is no functional MRI and no T2-weighted image. The family history column in the participants file
codes 33 children as positive, which differs from the 40 reported in the paper. One session has no row in the
participants file. Race data are given only as percentages in the preprint supplement.

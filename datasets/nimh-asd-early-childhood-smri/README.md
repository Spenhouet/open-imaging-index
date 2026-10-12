This dataset holds the structural brain MRI of a longitudinal natural history study run at the NIH by the NIMH intramural program, the Clinical and Immunological Investigations of Subtypes of Autism (NCT00298246). The study followed young children with autism, children with a developmental delay that is not autism, and typically developing children, with repeated clinical, behavioral and imaging visits. The NIMH Data Science and Sharing Team defaced the scans, converted them to BIDS and released them in 2023 as NDA Study 1887, part of NIMH Data Archive collection 2368.

## Composition

The study description lists 102 children with autism spectrum disorder, 18 with non-autism developmental delay and 53 typical controls, 173 children in total, with scans from several time points. Age and sex at the first session are given per subject in the BIDS participants file, which is only part of the controlled download, so no age or sex breakdown is reproduced here. The cohort papers describe preschool children: a cross-sectional analysis of boys aged 2 to 5, and a two-visit analysis of 57 children whose ages at the first and second scans spanned about 2 to 9 years.

## Acquisition

The shared images are T1w, T2w, FLAIR, proton density weighted and magnetization transfer scans, the latter as pairs acquired with and without the transfer pulse. The cohort papers report that the T1w scans came from one 1.5 T GE Signa scanner with a 3D spoiled gradient echo sequence and 1.5 mm axial slices. Children with autism were scanned under propofol sedation given by anesthesiologists, while controls were scanned in natural night sleep or awake while watching a movie. Faces were removed with AFNI Refacer; scans that failed visual quality control were corrected by script or by hand, and the method per scan is recorded in the scans file. The whole package is under 5 GB.

## Annotations

There are no image labels. Subjects carry a diagnostic group (autism, developmental delay, control), age and sex.

## Known limitations

Sedation differed by group, so head motion and physiology are confounded with diagnosis. All scans come from a single site and an older 1.5 T scanner. Per-contrast and per-visit counts are not published. Access requires an approved NIMH Data Archive request.

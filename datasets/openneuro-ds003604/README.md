This OpenNeuro dataset follows children through early school years to study how the brain specializes for spoken
language. A lab at The University of Texas at Austin scanned children at about 5, 7 and 9 years of age while they
judged word sounds, word meanings, sentence plausibility and sentence grammar. It was first released in April 2021,
and the current snapshot 1.0.7 (November 2022) is published under a CC0 waiver.

## Composition

The release holds 322 children who completed at least one structural and one functional scan: 174 girls and 148
boys. Two cohorts were recruited. The first (141 children) entered at 5.5 to 6.5 years (ses-5); 101 returned at 7 to
8 years (ses-7) and 46 of those again at 8.5 to 10 years (ses-9). The second (181 children) entered at ses-7, and 55
returned at ses-9. This gives 524 imaging sessions. Every child has T1-weighted and task fMRI data; 239 also have
diffusion imaging. Standardized language, reading, IQ and articulation tests plus parent questionnaires are in the
phenotype folder.

## Acquisition

All scans were made on one Siemens Skyra 3T scanner with a 64-channel head coil. Structural images are 1 mm MPRAGE.
Functional runs used multiband echo-planar imaging at 2 mm isotropic with a 1.25 s TR, two runs per task. Diffusion
images have 64 directions at b = 800 s/mm². Phase-difference field maps were collected when time allowed. Children
practised in a mock scanner first. T1-weighted images were defaced with pydeface using pediatric templates, and
dates were shifted to protect identity.

## Annotations

There are no image annotations. The release includes trial-level responses and reaction times for each fMRI run,
per-run motion summaries, MRIQC reports, a composite T1 quality score and diffusion quality metrics from FSL eddy.

## Known limitations

- Children with ADHD, psychiatric or neurological diagnoses, premature birth or substantial non-English language
  exposure were excluded, though recruitment also targeted children with language impairment.
- Not all children completed all tasks or sessions, and some sessions contain repeated scans.
- For 33 runs the original DICOMs were lost, so their JSON sidecars were reconstructed by hand.
- Image quality is somewhat lower than in datasets of older children because of the young age.

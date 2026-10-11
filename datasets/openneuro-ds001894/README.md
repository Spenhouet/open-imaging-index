This OpenNeuro dataset follows school-aged children to study how the brain supports learning to read. A lab at
Northwestern University scanned children of varied reading ability while they judged whether pairs of words or
pseudowords rhymed, with the pairs heard, seen, or heard and then seen. Standardized reading and cognitive tests
accompany the scans. It was first released in May 2019, and the current snapshot 1.4.2 (April 2022) is published
under a CC0 waiver.

## Composition

The release holds 188 children, 99 boys and 89 girls, first scanned at about 10.5 years of age (session T1). The
age at scanning spans roughly 7.5 to 16.5 years. About 2.5 years later 70 children returned for testing, and 49 of
them were scanned again (session T2), giving 237 imaging sessions. Every child has a T1-weighted image and task fMRI;
113 also have diffusion imaging. Recruitment targeted typically developing children as well as children with a
reading disability diagnosed by an outside clinician. Phenotype files hold test scores from both sessions, plus a
developmental history questionnaire and an ADHD rating scale completed by parents at T1.

## Acquisition

All images come from one Siemens Trio 3T scanner with a 16-channel head coil. Structural images are 1 mm MPRAGE.
Functional runs used single-shot EPI with a 2 s TR and 1.7 x 1.7 x 3 mm voxels; each of the six tasks was split
into two runs. Diffusion images have 64 directions at b = 1000 s/mm² and 2 mm voxels. At T2 only the two visual
tasks and a T1-weighted scan were repeated, and no diffusion was acquired. Children practised in a mock scanner
before each session. T1-weighted images were defaced with a registered template mask.

## Annotations

There are no image annotations. The release includes per-trial accuracy and response times for every fMRI run, the
stimuli, MRIQC reports for structural and functional images, and diffusion quality reports.

## Known limitations

- Runs with more than 25% of volumes moving over 1.5 mm between volumes were removed, so task coverage varies.
- Children who performed below chance at T1 were not invited back, which biases the longitudinal subset.
- Children with ADHD, psychiatric or neurological disorders, prematurity or hearing loss were excluded.
- Repetition times were corrected after a conversion bug, and the diffusion TR changed during the study.

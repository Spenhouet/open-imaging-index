PAFIN (PennLINC AFfective INstability) is an ongoing study at the University of Pennsylvania that pairs brain MRI with dense measures of mood and sleep in adolescents and young adults. It aims to enrol 100 people aged 13 to 23 and asks how affective instability, emotion regulation and sleep relate to brain development. Besides imaging, participants fill in self-report scales, do a cognitive battery, answer ecological momentary assessment prompts on their phone for two weeks and wear an actigraphy watch for three weeks. Raw data are on OpenNeuro as ds006131 under CC0, without a data use agreement. The protocol paper appeared in Aperture Neuro in 2026 and described a first release of 10 participants.

## Composition

Snapshot 2.0.1 holds 51 subjects (49 study participants and 2 pilots), each with one session. The participants file gives 36 women, 14 men and one pilot coded as other, aged 15 to 31 at the scan. Every subject has a T1-weighted scan and multi-echo fMRI; most also have T2-weighted, multi-echo gradient echo, diffusion and perfusion scans (see the stats). Self-report questionnaires sit in `phenotype/`, raw actigraphy in `sourcedata/` and GGIR actigraphy outputs in `derivatives/`.

## Acquisition

All scans come from one 3 T Siemens Magnetom Prisma with a 64-channel coil in a one-hour session. Structural scans are 1 mm isotropic T1w and T2w plus a 5-echo gradient echo with magnitude and phase for susceptibility mapping. Two 5-echo, multiband fMRI runs at 2 mm were acquired while participants watched the Pixar shorts "Bao" and "Your Friend the Rat", with physiological recordings. Diffusion is a 92-direction compressed sensing diffusion spectrum scan; perfusion is a single-delay PCASL with an M0 reference. Field maps exist for the functional and diffusion scans.

## Annotations

No manual image labels. Processed data are released as separate CC0 OpenNeuro datasets: fMRIPrep (ds006185, made with fMRIPrep 25.2.4), MRIQC, QSIPrep, QSIRecon, ASLPrep, fMRIPost-AROMA, tedana and XCP-D outputs.

## Known limitations

Recruitment continues, so counts change between snapshots. The README says every participant has a T2w scan, but the file tree has T2w for 41 of 51 subjects. Ages in the participants file are from the first session. Physiological recordings have not been quality checked. Processed susceptibility maps are not provided.

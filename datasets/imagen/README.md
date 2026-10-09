IMAGEN is a European longitudinal cohort that follows adolescents from age 14 into early adulthood to study how
genes, brain structure and function, and environment shape reward sensitivity, impulsivity, emotional reactivity and
the onset of psychiatric and substance use disorders. The IMAGEN Consortium recruited participants through schools
at eight centres: London, Nottingham, Dublin, Paris, Berlin, Hamburg, Mannheim and Dresden. The data are hosted at
CEA NeuroSpin and released in numbered versions; 2.7 is the latest named in the databank documentation.

## Composition

The database holds data from over 2,000 adolescents and their parents. There are four time points: baseline at
about 14 years (BL), follow-up 1 at 16 (FU1), follow-up 2 at 19 (FU2) and follow-up 3 at 22 to 23 (FU3). Besides
imaging, the release contains neuropsychological tests (CANTAB), psychiatric interviews (DAWBA), questionnaires on
personality, family, environment and alcohol and drug use, coarse geolocation, and genomics: DNA genotypes, DNA
methylation and RNA sequencing.

## Acquisition

Participants were scanned at BL, FU2 and FU3; FU1 was questionnaire-only. The raw image folders hold a 3D MPRAGE
T1w scan, T2w, FLAIR, diffusion tensor imaging, field maps, resting-state fMRI and three task fMRI paradigms
(monetary incentive delay, stop signal and emotional faces). NODDI diffusion was added at FU3 for part of the cohort. The centres used
Siemens (Trio, Verio), Philips and GE scanners, and Berlin started baseline on a Bruker system. The site-specific
protocols are published on GitHub. Raw images are shared as NIfTI, together with FreeSurfer, CAT12, FSL DTI, TBSS and
SPM or HALFpipe fMRI derivatives.

## Known limitations

- 20 sibling pairs are in the cohort, although siblings were meant to be excluded; the consortium lists them.
- At follow-up some sites used a different EPI phase-encoding direction from baseline, and kept it for consistency
  within participants.
- MPRAGE geometric distortion varies by scanner (phantom SD of about 0.4% to 2.9%), which affects cortical thickness.
- Sex is recorded inconsistently across tables; the consortium provides a reference table.
- Access needs an approved proposal with an IMAGEN principal investigator for each manuscript.

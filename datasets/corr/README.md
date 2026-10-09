The Consortium for Reliability and Reproducibility (CoRR) pools test-retest MRI that laboratories had already
collected, so that researchers can measure how stable connectome metrics are across repeated scans, sites and study
designs. Every sample has at least one baseline and one retest scan. The data are shared through the International
Neuroimaging Data-sharing Initiative (INDI) and the COINS platform. Resting-state fMRI is the focus, with diffusion
imaging also included.

## Composition

The data descriptor reports 1,629 typical individuals with 5,093 resting-state fMRI scans. At submission, CoRR had
received 40 test-retest datasets from 36 imaging groups at 18 institutions. The CoRR Data Description page lists 33
datasets, 32 of them downloadable, with 1,629 subjects, 3,357 anatomical scans, 5,093 resting functional scans,
1,302 diffusion scans and 300 CBF and ASL scans. Most samples are presumed neurotypical adults; pediatric samples come
from IPCAS 2 and 7, UPSM and NYU, and NKI 1 spans the lifespan. In Table 1 of the paper, site age ranges run from 6
(IPCAS 7) to 88 (LMU 3). Retest designs are within-session, between-session, serial, longitudinal developmental or a
hybrid, with retest intervals from minutes to several years. Sites are in China, the United States, Germany and
Canada.

## Acquisition

Each site used its own protocol. The paper's parameter tables list Siemens, GE and Philips 3 T scanners; structural
scans are 3D T1-weighted sequences such as MPRAGE and SPGR. One additional sample (MPG 1) is a high-resolution 7 T
test-retest dataset. Faces were removed from anatomical images and NIfTI headers replaced before release.
Phenotypic files hold core variables such as age, sex, resting-state instruction and retest interval, with optional
items like IQ and BMI at some sites.

## Annotations

There are no image labels. The paper and the CoRR quality control page report image quality metrics computed with the
Preprocessed Connectomes Project quality assurance protocol.

## Known limitations

- Data were released regardless of quality, including scans with notable motion.
- Physiological recordings are mostly absent.
- Protocols, populations and retest intervals differ widely between samples.
- Some samples in the site list were not part of the analyses in the data descriptor, and five listed sites are
  marked as coming soon.

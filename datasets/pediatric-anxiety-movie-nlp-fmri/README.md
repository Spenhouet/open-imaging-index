This OpenNeuro release comes from a National Institute of Mental Health (NIMH) intramural study of how young people put
their anxiety into words. Children and adolescents with and without an anxiety disorder watched a short animated film
chosen to provoke anxiety while multi-echo fMRI was recorded. Afterwards they answered interview questions about the
film, and Kirk et al. (2025) scored the spoken answers with natural language processing and related those scores to
brain activity during the film. Data were collected from 2018 to 2021 and published under CC0 in 2026.

## Composition

75 participants aged 8 to 18 (48 female, 27 male): 33 with a clinician-confirmed primary anxiety disorder and 42
healthy volunteers. The study recruited 84; only those who agreed to data sharing are included. Diagnoses were made
with the K-SADS-PL. Each participant has one session.

## Acquisition

Scans were done on one of two GE MR750 3 T systems with a 32-channel head coil. Every participant has a 1 mm isotropic
MPRAGE T1w image. Functional runs used a three-echo EPI (3.8 mm isotropic, TR 2 s, echo times about 15, 29 and 42 ms)
in a fixed order: resting state before the film (about 8 minutes), the film itself (task-francis, about 6 minutes) and
a short resting state after it (about 2 minutes). The post-film rest run is missing for one participant. Two pairs of
opposite phase-encoding EPI field maps support distortion correction. The first four volumes of each run are dummy
scans.

## Annotations

No image annotations. Phenotype tables hold SCARED (parent and child) and PARS anxiety scores at baseline and, for
patients, after 8 to 12 weeks of cognitive behavioural therapy, plus, for each of three interview prompts (liked, disliked and story recall), a VADER sentiment valence score and
Universal Sentence Encoder embeddings of the answer. Participant age, sex, race and diagnosis are in participants.tsv.

## Known limitations

- Some T1w scans show motion or Gibbs ringing artifacts.
- Four participants are kept for completeness but were excluded from the paper: one scanned with the wrong TR, one that
  failed preprocessing and two with high motion.
- The paper analysed only the film run; the two rest runs were not used in it.
- The release holds no interview audio or transcripts, only the derived language scores.

This OpenNeuro dataset holds the shareable part of the imaging used by Zugman and colleagues at the National Institute
of Mental Health (NIMH) in Bethesda, Maryland, to ask whether resting-state functional connectivity or cortical
morphology can predict how much children and adolescents with anxiety disorders improve under cognitive behavioral
therapy (CBT). The study, published in Psychological Medicine in 2025, found that connectome predictive models and
their anatomical counterpart predicted end-of-treatment anxiety scores poorly. Snapshot 1.0.0 was released in March
2025 under a CC0 waiver; analysis code is on GitHub at zugmana/CPM-Anx.

## Composition

The release has 83 participants, limited to those who consented to data sharing. All have a first session and 62
have a second one. The OpenNeuro files include no participants table, so age, sex, diagnosis and treatment
outcome are not part of the release. In the paper, the main analysis sample had 54 patients treated with 12 weeks of
CBT plus active or sham attention bias modification, and a replication sample had 15 patients from an earlier 8-week
CBT trial; healthy volunteers were also recruited under the same protocol (01-M-0192). The dataset README warns that
some data may overlap with other releases from the same group.

## Acquisition

All images come from GE 3T scanners at the NIH functional MRI facility: 139 T1-weighted scans on a Discovery MR750
and 6 on a Signa HDxt. Each session has a defaced 3D T1-weighted scan and one resting-state BOLD run with a TR of
2 s. On the Discovery MR750 the run is multi-echo with three echoes and a 32-channel head coil; the six Signa HDxt
runs are single echo with an 8-channel coil. A few sessions add EPI field maps.

## Known limitations

- No demographics, diagnoses or symptom scores are shared, so the treatment-outcome analysis cannot be reproduced
  from the release alone.
- Which participants belong to the main or replication sample, or are healthy volunteers, is not stated.
- No derivatives such as connectivity matrices or FreeSurfer surfaces are included.

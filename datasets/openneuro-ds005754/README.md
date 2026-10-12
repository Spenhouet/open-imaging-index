This OpenNeuro release accompanies a study from the NIMH Intramural Research Program on inhibitory control in
children and adolescents. The study asked whether a latent inhibitory control factor, built from four computer tasks
(antisaccade, AX continuous performance, flanker and stop signal), relates to symptoms that are shared across anxiety,
irritability and ADHD, and to resting-state brain network organization. Alongside the imaging, the release holds
trial-level task data, eye-tracking derivatives of the antisaccade task, parent questionnaires (SCARED, ARI, CBRS),
K-SADS-PL diagnoses, WASI scores, medications and demographics. It is shared under CC0.

## Composition

Youth aged 8 to 18 were recruited with a primary anxiety disorder (generalized, social or separation), disruptive mood
dysregulation disorder (DMDD), ADHD, clinically significant irritability below the DMDD threshold, or no psychiatric
diagnosis. The paper analysed 246 participants; 220 of them agreed to public sharing and appear in participants.tsv.
MRI was optional, and 124 of the 220 have imaging files: 66 female and 58 male, mean age 13.1 years. In the K-SADS-PL
table of these 124, 46 carry a generalized anxiety flag, 32 social phobia, 19 separation anxiety, 26 ADHD and 8 DMDD,
with overlap between flags.

## Acquisition

All scans come from one GE Discovery MR750 3T scanner with a 32-channel head coil at the NIH Functional MRI Facility.
Each imaged subject has one 1 mm T1w MPRAGE (ten are labelled acq-PURE or acq-ABCD) and one 12-minute
resting-state run viewing a fixation cross, acquired as multi-echo EPI with three echoes (TR 2 s, 3.8 mm
slices), stored as three separate echo files.

## Annotations

There are no image labels. Phenotype tables give diagnoses and symptom scales, and behavioral files give per-trial
responses for the four tasks.

## Known limitations

- Only 220 of the 246 participants in the paper are shared (the paper itself says 245 consented to sharing), so the
  published analyses cannot be reproduced exactly.
- The paper cites an earlier OpenNeuro accession (ds004724) that was withdrawn for subject privacy; ds005754 is the
  current release.
- About 44% of shared participants have no MRI.
- Single site and scanner, one resting run per subject, no task fMRI.

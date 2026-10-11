This OpenNeuro dataset shares the structural brain scans of the BEACON study (Brain imaging of Emotion And Cognition of
adolescents with Anorexia Nervosa) run at King's College London. BEACON compares young people who are acutely
underweight with anorexia nervosa, people who previously had anorexia nervosa and have since regained a healthy
weight, and healthy controls, and asks whether autistic characteristics relate to brain structure in the illness.
Participants were seen twice, about two and a half years apart. Snapshot 1.0.0 was released in April 2026 under a CC0
waiver.

## Composition

The release holds 187 subjects in 260 sessions: 184 have a first time point scan and 76 a second one, so 73 subjects
have both. Each session contains one structural image. The study papers describe an all-female sample aged 12 to 27 at
enrolment. The first time point phenotype file lists 183 participants: 58 acutely underweight, 58 weight-restored and
67 healthy controls, aged 12 to 27 (median 18). It also gives ethnicity, BMI, IQ, medication, illness duration and
autism, eating disorder, mood and social questionnaire scores. A second phenotype file holds item-level questionnaire answers
from the follow-up.

## Acquisition

All scans come from one GE Discovery MR750 3 T scanner at the Centre for Neuroimaging Sciences, King's College London. The structural image is an accelerated sagittal 3D MPRAGE-type gradient echo sequence with
1.2 mm slices, flip angle 11 degrees and a 256 by 256 matrix. The first time point ran from June 2017 to February 2019
and the second from October 2019 to March 2022. The study also collected functional MRI during tasks, which is not in
this release.

## Annotations

No image annotations. Group labels come from BMI at enrolment: acute anorexia nervosa below 85% of median BMI for age
(under 18) or BMI below 18.5 (18 and over), weight-restored above those cut-offs after an earlier diagnosis.

## Known limitations

- The release has no README or participants.tsv; demographics sit only in the phenotype folder.
- Eight subjects in the image release are missing from the first time point phenotype file, and four phenotype rows
  have no images.
- Group counts in the phenotype file (58 acute, 58 weight-restored) differ from the 2025 paper (68 and 48).
- Six images named T1w are FLAIR, T2-weighted or reformatted series according to their sidecars; one image has no
  sidecar.
- Sex is not recorded in the release files.

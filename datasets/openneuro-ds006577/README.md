This OpenNeuro dataset comes from a double-blind randomized trial at the National Institute of Mental Health that
tested whether a game-like attention bias modification training (ABMT) adds to the benefit of cognitive behavioral
therapy (CBT) for anxious children and adolescents. Patients received 12 weeks of manualized CBT, with active or sham
training added from week 4 to week 12. Each youth did an fMRI dot-probe task before and after treatment; healthy
volunteers were scanned twice over a matching interval. The trial found that active training did not improve
symptom reduction beyond sham. Snapshot 1.0.0 (October 2025) is released under a CC0 waiver.

## Composition

The study enrolled youth aged 8 to 17. The participants file lists 185 of them (113 with a primary anxiety disorder, 72 healthy
volunteers), but only 100 of them have imaging: 28 patients (17 active, 11 sham) and all 72 healthy volunteers.
There are 97 pre-treatment and 66 post-treatment MRI sessions. Age at the first scan ranges from 8.3 to 18.0 years,
and 63 of the 100 imaged youth are female. Eligible diagnoses were generalized, social or separation anxiety
disorder, panic disorder and specific phobia. Phenotype tables carry clinician, child and parent ratings (PARS,
CGI, SCARED, STAIC, MFQ, ARI, CGAS) at weeks 3, 8 and 12 of CBT, plus KSADS screening.

## Acquisition

Scanning used two identical 3 T GE scanners with 32-channel head coils. Each session has a T1-weighted MPRAGE and
two runs of a gradient-echo EPI (TR 2.3 s, TE 25 ms, 2.5 x 2.5 x 3 mm voxels) during a face dot-probe task with
threat-congruent, threat-incongruent and neutral trials, 80 of each. One session also has a T2-weighted image.

## Annotations

There are no image annotations. Functional runs come with events files of trial timing and responses.

## Known limitations

- Imaging covers only a minority of the randomized patients: the trial randomized 121 patients, while 28 patients
  have MRI in this release.
- The README describes 121 patients and 90 healthy volunteers, which does not match the 185 participants listed.
- The paper reports poor test-retest reliability of amygdala connectivity in healthy controls.
- No resting-state or field map images are included.

This OpenNeuro dataset holds the baseline brain scans of a Northwestern University project on placebo response in
chronic knee osteoarthritis pain. Tétreault and colleagues scanned patients before two clinical trials started and
used resting-state connectivity to predict who would later report pain relief on placebo. Study 1 was a two-week
single-blind trial in which every patient took placebo pills. Study 2 was a three-month double-blind trial that
randomised patients to placebo or duloxetine. The data are shared under a CC0 waiver; the paper's data availability
statement names accession ds000208.

## Composition

There are 76 participants: 56 patients with knee osteoarthritis pain and 20 healthy controls matched to the patients
on mean age and sex mix. Of the patients, 17 come from study 1 and 39 from study 2. The participant table lists 40
women and 36 men aged 44 to 78. For patients it adds the study, the treatment arm, a responder flag and the percentage
pain relief on the visual analogue scale and on the WOMAC osteoarthritis index. A responder had at least 20% less knee
pain at the end of treatment. Each participant has one T1-weighted scan and one resting-state fMRI run, all taken
before treatment.

## Acquisition

All scans come from a 3 T Siemens Trio. The T1-weighted MPRAGE has 1 mm isotropic voxels and 160 slices (TR 2500 ms,
TE 3.36 ms). The resting-state run is gradient-echo EPI with 40 slices of 3 mm, a 64 x 64 matrix, TR 2.5 s, TE 30 ms
and 300 volumes, covering the brain from cerebellum to vertex.

## Known limitations

The cohort is small, and the paper names sample size as a weakness. Only pretreatment scans are shared; there are no
follow-up images. Study 3, an untreated observational group described in the paper, is not part of this release.
Of 143 people recruited across the three studies, 45 did not finish or had scans that failed quality control and
are not included.

Researchers at Karolinska Institutet and Stockholm University scanned healthy adults from two age groups twice, once
after a normal night and once after a night restricted to about three hours of sleep, in randomized order. The aim was
to learn how sleepiness changes brain function, with a focus on emotional processing. The release holds structural,
diffusion and functional MRI together with questionnaires and task logs. It is published on OpenNeuro as ds000201,
first released through OpenfMRI, and the current snapshot 1.0.3 carries a CC0 waiver.

## Composition

The participants table of snapshot 1.0.3 lists 86 people: 47 in the younger group (20 to 30 years) and 39 in the
older group (65 to 75 years), 44 women and 42 men. The study abstract gives 48 younger and 36 older participants, so
the published counts and the table differ slightly. The table records which session followed sleep deprivation, plus
body mass index, education and many rating scales on sleep, anxiety, depression, personality, empathy and
sleepiness. Exact ages are not shared. Imaging exists for 167 sessions: every subject has a T1-weighted scan, 83 have
a T2-weighted scan, 76 have diffusion imaging and 85 have functional runs.

## Acquisition

All scans come from a 3T GE Discovery MR750 in Stockholm. Each session can include a 3D T1-weighted
scan, B0 field maps and fMRI for five paradigms: facial mimicry of emotional expressions with facial EMG, empathy for
pain, emotion regulation by reappraisal (arrows), resting state, and rest with Karolinska Sleepiness Scale ratings
every two minutes. The T2-weighted scan and the diffusion series are present for at most one session per subject in
nearly all cases. Ambulatory polysomnography was recorded the night before each session; its raw files are available from the authors on request. Anatomical images are defaced.
MRIQC quality metrics are included as derivatives.

## Annotations

There are no image annotations. Event files describe task timing, and the sleep condition per session supports
within-subject comparisons.

## Known limitations

- The README flags the diffusion gradient tables of 23 subjects as suspect.
- Some sessions lack runs, so per-task counts vary.
- Variables that could identify participants were censored; age is given only as a group.
- Newer versions of the study data are distributed outside OpenNeuro and are not described here.

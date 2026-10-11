This OpenNeuro release (ds006243) holds the fMRI part of a preregistered randomized trial at Georgetown University.
Adults from the Washington DC area completed four weeks of online loving-kindness meditation or
progressive muscle relaxation as an active control, and about half were then scanned during an empathic pain task. The
study asked whether the training lowers loneliness and whether loneliness relates to self-reported or neural empathy
(PsyArXiv preprint, Dressel et al. 2025). The data were first published in May 2025 under CC0; the current snapshot
is 1.1.2 from November 2025.

## Composition

The snapshot has 54 subjects: 29 from the meditation group and 25 from the relaxation group, all scanned within two
weeks of finishing training. The preprint reports 108 trial completers in total; only the scanned half is included.
Each subject has two task runs. No participants.tsv is shared, so age and sex of the scanned subjects are not
available in the release.

## Acquisition

Scanning took place at Georgetown's Center for Functional and Molecular Imaging on a 3 T Siemens TIM Trio. The
protocol included a T1-weighted MP-RAGE (1 mm isotropic) and T2\*-weighted EPI (46 slices, 3 mm isotropic, TR 2.5 s,
TE 30 ms). In each trial an auditory cue signalled whether pressure pain would follow, then a pneumatic device pressed
on the right thumbnail. One run covered the participant's own pain and the other a study partner's pain, seen on a live
video feed. The release contains only fMRIPrep 23.0.0 outputs: preprocessed BOLD for both runs, resampled to the
MNI152NLin2009cAsym and MNI152NLin6Asym templates.

## Annotations

There are no image annotations. A separate events folder gives per-subject timing files for cue, anticipation,
stimulation and rest periods, plus confound and outlier regressors.

## Known limitations

- Raw images and the T1-weighted scans are not shared; only normalized BOLD is.
- No demographics are released.
- The README states a 64-channel head coil, while the preprint states a 12-channel coil.
- Confound files are trimmed to 290 volumes but the BOLD series are not, so users must trim them before analysis.

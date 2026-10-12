This release holds the monetary incentive delay (MID) task scans of the Neuropsychological Risk cohort of the Michigan
Longitudinal Study (MLS), a University of Michigan study that follows behavioral and biological measures across
development. Mary Heitzeg's group collected the data, Ryan Klaus and Mary Soules converted them to BIDS, and Michael
Demidenko published them on OpenNeuro in March 2024 under CC0 for a registered-report study of how analytic choices
change the test-retest reliability of task fMRI (Imaging Neuroscience 2024). The current snapshot is 1.0.3 from August
2024.

## Composition

The snapshot has 81 subjects (31 female, 50 male) aged 18.0 to 24.7 at their first session. 68 subjects have two
sessions and 13 have three; participants.tsv gives 332 to 2,973 days between scan waves. The paper
describes the full cohort as about 159 participants in the first fMRI year and about 150 in the second; the 81 here
are those who met its motion and two-session criteria. participants.tsv also records self-reported race in eight
groups. Further phenotype and behavioral data are not part of the release.

## Acquisition

All scans come from a GE Signa scanner. Each session has a 3D T1-weighted inversion-recovery SPGR scan and a 2D
inplane T1-weighted scan. The BOLD runs use a spiral acquisition with TR 2 s, TE 30 ms, flip angle 90 degrees and
3.125 x 3.125 x 4 mm voxels; no fieldmaps were collected. Each of the first two sessions holds two MID runs of 50
trials; the third sessions hold only the anatomical scans. Derivatives include fMRIPrep 23.1.4 and MRIQC 23.1.0
outputs and per-run task performance summaries.

## Annotations

There are no image annotations. Event files give the cue type (large or small reward, large or small loss avoidance,
neutral), timing, response and outcome for each trial.

## Known limitations

- The sidecar JSON files do not record the scanner manufacturer, model or field strength; the vendor comes from the
  paper's supplement.
- For 4 subjects the age listed for session 1 is higher than the age for session 2.
- The README mentions T2w scans in its MRIQC command, but the raw folders hold only T1w, inplane T1 and BOLD images.
- Questions about wider use of the MLS data go to the original study team, as the OpenNeuro README notes.

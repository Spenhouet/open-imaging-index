The Transdiagnostic Connectome Project (TCP) scanned adults with and without psychiatric illness at Yale University
and McLean Hospital between November 2019 and March 2023. Recruitment targeted psychiatric hospitals, community mental
health centers and online platforms so that the sample covers a wide range of affective and psychotic
psychopathology next to a healthy comparison group. The aim is to relate brain function to symptoms and behavior
across diagnostic categories. Raw data are on OpenNeuro as ds005237 under CC0; the data descriptor appeared in
Scientific Data in 2025.

## Composition

The open release holds 241 participants aged 18 to 68 at scan: 148 who met criteria for a psychiatric diagnosis on
the SCID-5 research interview and 93 healthy comparison participants. Five more participants did not agree to open
sharing and are left out. The most common primary diagnoses are current or past major depression, anxiety disorders,
bipolar disorder, PTSD and schizophrenia or schizoaffective disorder. Phenotype tables cover clinician ratings (MADRS,
PANSS, YMRS and others), more than 25 self-report scales, TestMyBrain cognitive tests and in-scanner task performance.

## Acquisition

Both sites used harmonized 3 T Siemens Magnetom Prisma scanners with a 64-channel head coil. Each person has a
multi-echo MPRAGE T1-weighted image and a T2-weighted image at 1.2 mm, up to four resting-state runs, two Stroop task
runs and one emotional faces task run, all multiband EPI at 2 mm with a TR of 800 ms following the Human Connectome
Project protocol, plus spin-echo field maps in both phase encoding directions. Images were defaced before upload and
organized in BIDS. Later snapshots added framewise displacement traces and parcellated, denoised timeseries.

## Known limitations

- Group counts differ slightly between sources: the paper gives 148 patients and 93 controls, while participants.tsv
  labels 149 imaged subjects as Patient and 92 as GenPop.
- The run counts in the file tree are a little lower than the per-run sample sizes reported in the paper.
- Primary diagnoses are free text in the phenotype table; the condition counts here group them and cover only the
  primary diagnosis, so comorbidity is not reflected.
- The face images used in the emotional faces task cannot be shared.
- Full HCP-pipeline derivatives sit in the NIMH Data Archive rather than on OpenNeuro.

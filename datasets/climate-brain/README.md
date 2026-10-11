CLIMATE BRAIN is a task fMRI study from Warsaw on how people respond emotionally to climate change and how they trade
personal gain against carbon emissions. Researchers at the Nencki Institute, SWPS University and NTNU scanned healthy
young adults while they read short stories meant to evoke climate anger or climate hope and while they chose between
money and emission reductions. The data are on OpenNeuro as ds005460 under a CC0 waiver, and a 2025 Scientific Data
paper describes them. The questionnaire and behavioural files are also mirrored on the Open Science Framework.

## Composition

The release holds 160 right-handed Polish adults aged 19 to 26, 80 women and 80 men, with no neurological or
psychiatric history. Recruitment targeted people who reported a moderate level of concern about climate change.
Participants were split into three story groups: anger (54), hope (54) and neutral (52). Each subject has one T1-weighted
scan, three runs of the Reading and Rating Emotional Stories task, one run of an fMRI version of the Carbon Emission
Task and a pair of spin-echo EPI fieldmaps with opposite phase encoding. The participants table carries demographics,
climate concern, political views, perceived income, car use and scores of the Inventory of Climate Emotions and three
other climate questionnaires. Event files hold trial-wise ratings and choices.

## Acquisition

All scans come from one 3T Siemens Prisma with a 32-channel head coil. The T1-weighted image is a 1 mm isotropic
MPRAGE. Functional runs use multiband EPI (factor 2) with 2.5 mm isotropic voxels and a repetition time of 2 s.
Anatomical images were defaced with mri_deface. Derivatives include fMRIPrep 24.1.0 outputs (preprocessed BOLD,
confounds and brain masks) and a group MRIQC table of functional image quality metrics.

## Known limitations

- Single site and scanner, and a narrow, mostly urban sample of young adults with at least secondary education.
- Very low and very high climate concern were excluded by design.
- The authors flag six subjects per task as low quality on motion or temporal SNR and recommend excluding them; one
  subject has a story run affected by a technical problem.
- Health screening data are not shared.

Researchers at the University of Sussex scanned more than one hundred people with synaesthesia, together with a
smaller group of non-synaesthete controls, to study how brain areas and their connections differ in the condition. They
used the Human Connectome Project Development and Ageing protocol so that the scans can be compared or pooled with other
cohorts acquired the same way. The raw images were released on OpenNeuro as ds004466 under a CC0 waiver, and the data
descriptor appeared in Scientific Data in 2023.

## Composition

Snapshot 1.0.3 (April 2025) holds 127 participants: 102 synaesthetes and 25 controls, aged 18 to 68. Every synaesthete
passed a consistency test for at least one of ten broad types of synaesthesia, and recruitment aimed for many people with
three or more types. Each person has one T1-weighted scan, one T2-weighted scan, four resting-state fMRI runs and two
pairs of spin-echo field maps. Behavioural and clinical questionnaires (autistic traits, sensory sensitivity, anxiety,
mood, personality, imagery, memory, reasoning, creativity) for these and further non-scanned participants are shared
on OSF, and HCP-pipeline outputs such as surfaces, parcellations and connectomes are hosted on NITRC.

## Acquisition

All scans come from one Siemens 3T Prisma with a 32-channel head coil at the CISC imaging centre in
Brighton. The T1-weighted scan is a multi-echo MPRAGE and the T2-weighted scan a SPACE sequence, both at 0.8 mm with
prospective motion correction. The resting-state runs use multiband factor 8 with a TR of 0.8 s and 2 mm voxels, about
24 minutes in total. Faces were removed with pydeface.

## Annotations

There are no image annotations. The participants table gives age, sex and group (synaesthete or control).

## Known limitations

- The control group is small, because the authors expected users to add controls from other cohorts with the same
  protocol.
- Most participants are women, and synaesthetes were sampled on purpose to include many with several types.
- The sex counts in participants.tsv differ by one person from the counts in the paper.
- No diffusion or task fMRI was acquired.

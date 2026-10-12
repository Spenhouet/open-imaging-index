PEARL-Neuro is an imaging genetics cohort from Poland built to look for early functional brain signatures of genetic
risk for late-onset Alzheimer's disease. Healthy volunteers aged 50 to 63 were genotyped for APOE and PICALM, then
carriers of risk alleles and a matched group with neutral alleles were invited back for EEG and functional MRI. The
OpenNeuro release (ds004796, CC0) was made by Patrycja Dzianok and Ewa Kublik at the Nencki Institute of Experimental
Biology and is described in a 2024 Scientific Data descriptor.

## Composition

The first phase covered 192 people who agreed to open sharing (200 took part). For all of them participants.tsv holds
APOE and PICALM genotypes, demographics, health and lifestyle questionnaires, family history of dementia and seven
psychometric tests. The second phase included 79 participants (39 men, 40 women, mean age 55.3), who also have blood
counts, a lipid profile and HSV serology. Of these, 69 have fMRI in the release; the descriptor lists the 10 without it,
one of whom was withheld after an incidental finding on the structural scan. Almost all 79 have high-density EEG.

## Acquisition

fMRI was acquired on a 3T Siemens Prisma FIT at the Bioimaging Research Center of the Institute of Physiology and
Pathology of Hearing, with 2 mm isotropic voxels, TR 0.8 s and TE 38 ms. Each fMRI subject has six BOLD runs: resting
state (eyes open and closed), a multi-source interference task and a Sternberg memory task, each in AP and PA phase
encoding. EEG was recorded on a separate day at the Nencki Institute with a 128-channel Brain Products system using the
same three protocols, with electrode positions and task log files under sourcedata.

## Known limitations

- No anatomical MRI is shared, although a structural scan was acquired. Registration needs a template.
- Participants are healthy and middle-aged; no amyloid, tau or other Alzheimer's biomarkers were measured.
- The imaged subgroup was selected by genotype, so risk allele frequencies differ from the general population.
- Health and lifestyle variables are self-reported.

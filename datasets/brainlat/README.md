BrainLat is a multimodal collection of brain imaging, resting-state EEG, cognitive scores and demographics from people
with neurodegenerative diseases and healthy controls in Latin America. It was assembled by the Latin American Brain
Health Institute with clinical sites of the ReDLat consortium, which harmonised recruitment and neuropsychological
assessment across centres. The aim is to give researchers data from populations that are rare in other dementia
cohorts and to support low-cost, scalable biomarkers. The data are hosted on Synapse and described by Prado et al. in
Scientific Data (2023).

## Composition

The paper reports 780 participants: 278 with Alzheimer's disease, 163 with behavioural variant frontotemporal dementia,
57 with Parkinson's disease, 32 with multiple sclerosis and 250 healthy controls. 453 are women. Mean age is 62.7 years
(range 21 to 89); the multiple sclerosis group is much younger than the others. Participants came from eight sites in
Argentina, Chile, Colombia, Mexico and Peru. Some Alzheimer's patients from one Colombian site carry PSEN1 mutations.
Not every participant has every modality: according to the per-group table, about 710 have anatomical T1-weighted MRI,
about 440 resting-state fMRI and about 360 diffusion MRI, and a smaller group has only EEG. Cognitive (MoCA, IFS and
others) and disease-specific clinical scales are supplied as CSV files.

## Acquisition

MRI was acquired on 1.5 T and 3 T scanners from GE, Siemens and Philips within six months of the clinical visit. The
protocol includes a T1-weighted MPRAGE, multi-echo resting-state BOLD with eyes open and diffusion imaging; the paper
also mentions T2-FLAIR but gives no counts for it. EEG was recorded for ten minutes, eyes closed, on a 128-channel
Biosemi system at every site and lightly preprocessed. Images were defaced with PyDeface and organised in BIDS, with
MRIQC quality metrics in the derivatives.

## Annotations

No image annotations. Labels are the clinical diagnosis, sex, age, education, handedness, cognitive test scores and
disease severity scales.

## Known limitations

- Imaging was not harmonised across sites and scanners.
- Several tables in the paper are internally inconsistent: the control rows of the imaging table add up to more than
  the 250 controls, and some per-site sex ratios do not match their counts.
- Disease duration, genetics and socioeconomic data are not included.
- MRI download needs a Synapse account and a short request form; EEG is in an open folder of the same project.

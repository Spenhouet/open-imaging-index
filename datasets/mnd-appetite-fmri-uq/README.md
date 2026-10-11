Brain imaging from a University of Queensland study of appetite loss in motor neuron disease. People with the disease and non-neurodegenerative controls were scanned twice on one morning: first after an overnight fast and again shortly after a liquid meal. In both sessions they watched blocks of pictures of high-calorie foods, low-calorie foods and non-food objects, so that brain responses to food cues can be compared between groups and between hunger and fullness. The data are on OpenNeuro in BIDS format under CC0.

## Composition

59 participants: 36 with motor neuron disease and 23 controls, who were mostly spouses, friends or colleagues of patients. Per the phenotype file, 32 patients have amyotrophic lateral sclerosis (ALS), 2 primary lateral sclerosis, 1 an undefined form of the disease, and 1 ALS together with behavioural variant frontotemporal dementia. 44 participants are male and 15 female. Phenotype files add appetite questionnaires, height, weight, site of onset, diagnostic delay and time from onset to assessment.

## Acquisition

All imaging took place at the Herston Imaging Research Facility in Brisbane on a 3 T Siemens Prisma, between July 2018 and February 2021. The fasted session holds an MP2RAGE T1-weighted scan and a 3D dark-fluid T2 (FLAIR) scan, both 1 mm isotropic and refaced. Each session has one food-cue task run and one resting-state run, acquired with multiband EPI at 2.4 mm and a repetition time of 0.82 s. Version 1.1.0 added four multiband diffusion runs from the second session. Cardiac, pulse and breathing recordings sit under sourcedata, and fMRIPrep, PhysIO and SPM12 outputs under derivatives.

## Annotations

There are no image labels. Task event files give the onset, duration and category of every picture block.

## Known limitations

The sample is small and the controls were a convenience sample sharing the patients' homes and diets. Many participants moved during the functional scans; four patients had more than half of their volumes above 0.5 mm framewise displacement. Diffusion data of one control are missing, and one control was scanned with a 20-channel coil and adjusted diffusion timing. The paper states three primary lateral sclerosis cases and an age range of 34 to 74 years, while the shared files list two such cases and a youngest control aged 26.

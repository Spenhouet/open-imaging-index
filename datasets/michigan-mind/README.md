The Michigan Neural Distinctiveness (MiND) project at the University of Michigan studies age-related neural dedifferentiation: the finding that brain activity patterns evoked by different kinds of stimuli become less distinct with age. The project asks whether this happens beyond visual cortex, whether lower levels of the inhibitory transmitter GABA contribute to it, and how it relates to sensory and cognitive performance. This OpenNeuro release, shared in BIDS under CC0, holds the imaging of the older adult cohort.

## Composition

The snapshot lists 289 participants, all in the older age category, aged 65 to 87 where age is given. participants.tsv records 160 women and 113 men, a cognitive group from neuropsychological testing (212 cognitively normal, 49 with mild cognitive impairment, one with dementia of the Alzheimer's type), MoCA score, education, race, ethnicity, hearing aid use, musical training and the scanner version. Sixteen participants have no demographic entries. Each person has an fMRI session (ses-placebo) and 279 also have a second session on another day (ses-mrs).

## Acquisition

All scans come from one GE 3 T scanner at the University of Michigan Functional MRI Laboratory, a Discovery MR750 with an 8-channel head coil that was upgraded to the UHP platform during the study. The fMRI session has a T1-weighted BRAVO volume and gradient-echo BOLD runs for a visual categorization task, an auditory task, a motor task and rest, with event files for the tasks. 174 participants also have diffusion MRI. The second session repeats the T1-weighted scan and adds MEGA-PRESS GABA-edited single-voxel spectroscopy with water reference scans in up to seven regions: left and right auditory, left and right sensorimotor, left and right ventral visual, and left primary visual cortex. participants.tsv flags 87 participants as scanned before and 184 after the upgrade.

## Known limitations

The protocol paper planned young adults, a somatosensory fMRI task and a separate lorazepam versus placebo drug study. This release contains only older adults, no somatosensory runs and no lorazepam session, and the paper's recruitment targets do not describe it. Diffusion data exist only for participants scanned after the upgrade, and the left primary visual spectroscopy voxel was acquired in 99 participants. One participant folder holds task event files without images. Cognitive group is missing for 27 participants.

This figshare record shares derived brain maps from a double-blind, placebo-controlled pharmacological fMRI study at
the University of Electronic Science and Technology of China (UESTC) in Chengdu. Healthy young adults sprayed a single
dose of oxytocin (24 IU), arginine vasopressin (20 IU) or placebo into the nose and, about 45 minutes later, were
scanned while they watched short clips of people being socially rejected or left alone and rated how much pain they
felt for them. The study asked whether the two hormones raise this social pain empathy and whether they act through
the same brain systems and gene expression patterns. Both raised the empathy ratings compared with placebo, with
partly shared and partly distinct neural patterns. Analysis code is on GitHub.

## Composition

The record matches the first sample of the PNAS paper, collected in 2023. Of 103 recruited volunteers, 9 were
excluded, leaving 94: 31 in the oxytocin group, 31 in the vasopressin group and 32 on placebo, 46 of them women, with
group mean ages between 19.9 and 20.7 years. All were right-handed Han Chinese. The single MATLAB file holds a CANlab
fmri_data object with 816 first-level contrast images from these 94 subjects, sampled to 2 mm space and masked to grey
matter. The images come from two first-level models with up to five contrasts each. A second sample of 60 people, collected in 2025 and used for replication, is not in this record.

## Acquisition

Each session began with 7.5 minutes of eyes-open resting-state fMRI, followed by six task runs of 20 video trials
each, 120 clips in total from social pain, social warmth and neutral categories. Scanner and sequence parameters are
given only in the paper's supplementary material, which could not be checked.

## Known limitations

Only processed contrast maps are public. The raw structural, task and resting-state images are not shared, so the
data cannot be reprocessed. The sample is small, narrow in age and ethnicity, and limited to students of one
university. The file does not say which contrast number stands for which condition, so the paper's code is needed to
interpret the maps.

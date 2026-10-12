ThinkAloud holds the brain MRI from a Johns Hopkins University study of spontaneous thought. Each participant lay in the scanner for 10 minutes in front of a fixation cross and described out loud whatever came to mind, while an MRI-compatible microphone recorded the speech. Annotators split the transcripts into single thought units and labelled each as current state, semantic memory, episodic memory, future thinking or other. The authors related the shifts between these thought types to hippocampal and default network activity. The images were released on OpenNeuro as ds006067 in June 2025, and the analysis appeared in Nature Communications the same year.

## Composition

Snapshot 2.0.0 has 118 subjects, aged 18 to 39 (73 female, 45 male, mean age 23.4). Every subject has one T1-weighted scan, one think-aloud functional run and a pair of opposite phase-encoding field maps. The paper recruited 126 healthy, right-handed native English speakers; 8 were dropped before release for poor audio, interrupted scans or not following instructions. Of the released subjects, the README lists 43 that were excluded from the fMRI analyses, 39 of them for head motion. Version 2.0.0 adds a derivatives folder with fMRIPrep and FreeSurfer outputs.

## Acquisition

All scans were made in one session at the Kennedy Krieger Institute on a 3 T Philips Ingenia Elition with a 32-channel head coil. Functional images used multiband echo planar imaging (factor 4) with a 1.5 s repetition time, 30 ms echo time and 2 mm isotropic voxels in 60 slices. The anatomical scan is an MPRAGE with 1 mm isotropic voxels. Field maps share the functional slice geometry.

## Annotations

Each functional run has an events file that gives onset, duration and transcript text for every spoken segment. The thought category labels used in the paper are not part of the image release. There are no image labels.

## Known limitations

The release is single-site and covers young adults only. More than a third of the subjects did not meet the paper's motion threshold, so the subject list matters for any fMRI reuse. Field map correction failed for sub-077 in the fMRIPrep derivatives. The snapshot contains no speech audio files, only the transcripts.

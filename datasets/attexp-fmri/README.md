AttExp_fMRI holds the brain MRI from a study at the Mind, Brain and Behavior Research Center (CIMCYC) of the University of Granada on how the brain gets ready for an upcoming stimulus. In some blocks a cue told participants which category of target (faces or names) would be relevant to the task; in others the cue told them which category was more likely to appear. The authors used multivariate decoding to ask whether the anticipated category is represented in the same brain regions in both contexts, and found that the coding mostly differs, apart from a patch of the fusiform gyrus. The raw images were released on OpenNeuro as ds005386 in July 2024, and the analysis appeared in Imaging Neuroscience the same year.

## Composition

Snapshot 1.0.0 has 52 subject folders. Every subject has one T1-weighted and one T2-weighted scan, eight runs of the attention and expectation task, and a phase-difference field map with two magnitude images. No participants file is shared, so the release carries no demographics. The paper analysed 46 native Spanish speakers, all right-handed (23 women and 23 men, mean age 21.98, range 18 to 30) and reports six more who completed the task but were excluded for low accuracy, head motion or technical problems.

## Acquisition

All data come from a single session on a 3 T Siemens Prisma with a 64-channel head coil. The T1-weighted scan is an MPRAGE with 1 mm isotropic voxels. Functional runs used simultaneous multislice echo planar imaging with a 1.73 s repetition time, 2.5 mm isotropic voxels and 50 slices aligned to the AC-PC line, 275 volumes per run. The anatomical images were defaced. The paper does not describe the T2-weighted scan; its presence comes from the shared file tree.

## Annotations

Each functional run has an events file with the trial timing of the task. There are no image labels.

## Known limitations

The shared subject count (52) does not equal the analysed sample (46), and the paper's demographics apply to the analysed group only. The paper's data statement mentions EEG, but this snapshot holds MRI only. The dataset description declares CC0 while the snapshot also includes a CC BY 4.0 license text.

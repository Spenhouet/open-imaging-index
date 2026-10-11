This release from the Zhen lab at Beijing Normal University maps how the whole body is laid out across the brain's
motor system. Healthy right-handed young adults moved twelve body parts in turn during task fMRI: toes, ankles, left
and right leg, fingers, wrists, forearms, upper arms, jaw, lips, tongue and eyes. Coverage spans the full brain
including the cerebellum, so maps can be drawn for cortex, subcortical nuclei and cerebellum alike. The data are on
OpenNeuro as ds004044 under CC0 and suit work on somatotopy, individual differences in motor maps and motion-robust
fMRI denoising.

## Composition

62 participants aged 19 to 29 (mean 22.8) took part, 34 of them female. 68 volunteers were screened for handedness
and admitted, and 6 were dropped because they could not perform the movements well enough in two practice sessions.
Each participant contributes one scan session with six task runs, one T1-weighted image and one field map, giving 372
task runs in total. Every run repeats each movement in 16 s blocks interleaved with rest.

## Acquisition

All scans were acquired on a Siemens MAGNETOM Prisma 3T with a 64-channel head coil. Task runs use multiband (factor
3) gradient-echo EPI with 2 mm isotropic voxels, 72 slices and a TR of 2 s, each lasting 7 min 44 s. A spin-echo
field map was taken between the third and fourth run, and a 1 mm MPRAGE T1-weighted image at the end. Images were
converted with HeuDiConv and defaced with PyDeface.

## Annotations

There are no image labels. Event files give block onsets per body part. Derivatives include fMRIPrep outputs,
per-run ICA decompositions with manual signal or artifact labels for each component, denoised runs, CIFTI surfaces
and first-level GLM results.

## Known limitations

- Only right-handed participants were included, so handedness effects cannot be studied.
- All fingers moved together, so individual finger maps are not possible.
- Adjacent body parts were split into separate sets, which prevents studying interactions between neighbouring
  representations.
- No resting-state or diffusion MRI was collected.
- participants.tsv lists sub-19 but not sub-46, while the subject folders contain sub-46 and no sub-19.

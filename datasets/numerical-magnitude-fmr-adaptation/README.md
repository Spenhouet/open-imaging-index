This OpenNeuro release (ds001848) holds the imaging data of a Western University study on numerical cognition. The
authors used functional MRI adaptation to ask whether the brain processes number symbols, nonsymbolic quantities and
physical size with shared or separate neural codes. While participants watched a stream of repeated arrays, one feature
of the array occasionally changed, and the recovery of the BOLD signal after such a change was taken as a marker of
sensitivity to that feature. The data are shared under a CC0 waiver.

## Composition

The release contains 52 healthy adults from London, Ontario, aged 18 to 39 years, 30 female and 22 male. Every
participant has one session with a T1-weighted image and three task fMRI runs with event files, 208 NIfTI volumes in
total. The participants table gives age, sex, handedness and flags for which runs and which participants entered the
published analysis. Seven participants were left out of that analysis, four for head motion and one each for being
left-handed, misunderstanding the task and an incidental finding, which leaves 45.

## Acquisition

Scans were acquired on a 3T Siemens Prisma Fit with a 32-channel head coil. The structural image is a sagittal 3D
MPRAGE with 1 mm slices. Functional runs use multiband gradient-echo EPI with a repetition time of 1 s and 2.5 mm
slices. In each run, arrays of four white digits "6" repeat, and deviant arrays change the digit, the number of
digits or the font size, by a small or a large step. Blue digits appear on catch trials, and participants press a
button when they see them.

## Known limitations

- Single site and scanner, and a sample of young adults only.
- Runs and participants that failed motion or catch-trial criteria are still in the release; the participants table
  marks them.
- The paper reports its age and sex figures for the final sample of 45, but those figures match all 52 rows of the
  participants table.
- No field maps are included.

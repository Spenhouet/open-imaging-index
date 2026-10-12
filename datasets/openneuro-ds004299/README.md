A registered report from Tel Aviv University tested whether long training on a free-operant task makes people act out
of habit, repeating an earlier design by Tricomi and colleagues with a larger sample and more imaging. Healthy young
adults earned sweet and savory snacks by pressing buttons to fractal cues, either on one day or on three consecutive
days. One snack was then devalued by eating it to satiety, and an extinction test in the scanner showed whether
responding still followed the snack's value. The raw MRI was released on OpenNeuro as ds004299 under a CC0 waiver. The
results appeared in NeuroImage in 2023; behavioral data and code are on GitHub and statistical maps on NeuroVault.

## Composition

The final sample has 123 adults aged 18 to 39 (mean 24.7 years), 61 of them women: 61 in the one-day group and 62 in
the three-day group. 161 people were recruited, and the rest were excluded for unequal or low snack motivation, for not
completing the study, or for medical or brain findings. In the BIDS tree all 123 participants have a first session and
62 have second and third sessions, for 247 sessions. The participants table holds only the subject ids.

## Acquisition

All data come from one Siemens 3T Prisma with a 64-channel head coil. Each day has T1-weighted MPRAGE at 1 mm, diffusion
imaging before and after the task (b = 1000 s/mm² in 64 directions, 1.7 mm, with reversed phase-encoding b0 images),
and multiband task fMRI at TR 1 s and 2 mm. Ten minutes of resting-state fMRI with the same protocol were recorded
before the first training and after the last. Spin-echo field maps and single-band reference images are included.

## Annotations

There are no image annotations. Event files describe the task runs.

## Known limitations

- Age and sex are not in the participants table, so only the group summary from the paper is available.
- Not every session folder has a T1-weighted scan (223 scans for 247 sessions).
- The paper notes that one participant's extinction run was acquired at the wrong slice angle and one training run had
  excessive motion.
- The study found no habit formation as a function of training length, which limits its use as a positive habit
  model.

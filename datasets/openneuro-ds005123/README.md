This OpenNeuro dataset is the interim release of a five-year Temple University study (2021 to 2026), funded by the
National Institute on Aging, that asks how brain responses to social and monetary rewards change across adulthood and
whether they relate to the risk of financial exploitation in older age. Adults from the Philadelphia area played four
reward and decision games in the scanner. Snapshot 1.0.0 (May 2024) was titled a preliminary release; all versions
share accession ds005123, the current one is 1.1.3, and the data are under a CC0 waiver. More participants are planned
for a later release.

## Composition

The release holds 114 community adults aged 21 to 80 (70 female, 40 male, 4 other or non-binary; mean age 42.8).
Everyone has a T1-weighted scan; 109 have a
FLAIR scan, 108 have diffusion MRI and 113 have BOLD runs. The tasks are a card-guessing game whose gains and losses
are shared with a friend, a stranger or a computer, a Social Doors task with separate social-feedback and monetary
runs, a trust game with the same three partner types, and an ultimatum game with stranger and computer proposers.
Task order was counterbalanced, and most people have two runs of each game.

## Acquisition

All scans come from one Siemens Prisma 3T with a 20-channel head coil. Functional runs use multiband (factor 3) EPI
with four echoes (13.8 to 67.0 ms), TR 1.615 s and 2.7 mm voxels; magnitude and phase images and single-band
references are included. Diffusion MRI is a multi-shell sequence with 145 weighted volumes up to b = 5000 s/mm2 and
2 mm voxels, with reversed phase-encoding field maps. The 1 mm MPRAGE and 3 mm axial FLAIR are defaced. A B0 field
map is included for the functional runs.

## Annotations

There are no image annotations. Events files give onsets, durations, trial types and response times for each run, and
the participants file lists age, sex, race, ethnicity, BMI and handedness.

## Known limitations

- The first 47 participants were scanned with a 20 degree flip angle and later ones with 50 degrees; the paper reports
  higher temporal SNR at the larger angle.
- Some diffusion and FLAIR scans and some task runs are missing.
- Single site, cross-sectional, and the release is interim, so counts will change in later versions.

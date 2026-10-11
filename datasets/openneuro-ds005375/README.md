This dataset holds the scans of the POLEX study by Luis Marcos-Vidal, Clara Pretus and colleagues at the Universitat
Autònoma de Barcelona. Adults living in Spain played three games in the scanner: Cyberball, where other players stop
passing them the ball, and two versions of a rating game called RateME. In Personal RateME the other players rate the
participant's own profile poorly, and in Group RateME players from other European countries rate Spain poorly. The
study asks whether discrimination against one's group engages the same brain systems as personal rejection. The
accompanying PsyArXiv preprint reports that both forms of discrimination produced similar activity patterns. Data were
collected between December 2023 and March 2024 and released on OpenNeuro as version 1.0.0 in July 2024 under CC0.

## Composition

The release has 58 subjects, matching the 58 participants in the preprint: 29 women, aged 18 to 55 (mean 32.0). Half
of the sample reported feeling fused with Spain. Every subject has one T1-weighted scan and three functional runs, one
per game. No participants.tsv is included.

## Acquisition

Scanning took place on a Philips Ingenia CX at 3 T at the Fundació Pasqual Maragall in Barcelona. The structural scan
is a 3D T1-weighted gradient-echo scan with 0.65 x 0.65 x 1 mm voxels. Each functional run is a 2D echo-planar BOLD
series with TR 1.75 s, TE 35 ms and flip angle 70 degrees, with 261 volumes per task. Participants watched the games
through VR goggles and answered with buttons in each hand. Each run had ten 30-second blocks, five of exclusion and five
of inclusion in random order, each followed by a mood rating.

## Annotations

There are no image annotations and no events files in the release. The README points to an OSF project for stimulus
onsets, covariates and questionnaires, and to a GitHub repository for the analysis code.

## Known limitations

- Demographics are only available as summary values in the preprint.
- The preprint gives 3 mm isotropic functional voxels, while the sidecars list a slice thickness of 3.1 mm.
- The accompanying paper is a preprint.

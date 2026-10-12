This OpenNeuro collection (ds004639), titled nav_training, holds brain MRI from a navigation training project led by
Arne Ekstrom and Steven Weisberg. Participants were scanned at the University of Arizona and the University of
Florida, most of them in two sessions, while doing an encoding task, a retrieval task and a resting-state scan.
Snapshot 1.0.0 was published in September 2025 under CC0. The dataset README is a placeholder that promises more
details later, and no study paper is linked, so the design, the training procedure and the participants are not
described in any public source yet.

## Composition

Counted from the file tree, the snapshot has 84 subjects and 158 sessions: 74 subjects have two sessions and 10
have one. Every subject has T1-weighted, T2-weighted and BOLD images, and 83 also have diffusion scans. There are
1,416 BOLD runs (630 encoding, 630 retrieval and 156 resting-state), 158 T1-weighted, 159 T2-weighted and 155
diffusion volumes, plus field maps. Subject IDs starting with 1 come from the Arizona site (41 subjects) and those
starting with 2 from the Florida site (43 subjects). participants.tsv lists a single ID and carries no age, sex or
group information.

## Acquisition

All scans come from 3 T Siemens systems: a Skyra at the University of Arizona and a Prisma at the University of
Florida, according to the JSON sidecars. A typical session has a T1-weighted image with 1 mm slices, a
T2-weighted image, a diffusion series acquired with anterior-posterior phase encoding, four encoding runs, four
retrieval runs and one resting-state run. Field maps are phase-difference with magnitude images at the Arizona site
and spin-echo EPI at the Florida site.

## Annotations

There are no image labels. The file tree holds no events files and no derivatives folder, so trial timing for
the task runs is not shared.

## Known limitations

- No demographics, inclusion criteria or task descriptions are published with the data.
- The README and participants.tsv are incomplete placeholders.
- Ten subjects have only one session, and a few sessions lack diffusion.
- Two scanner models at two sites were used, one per site.

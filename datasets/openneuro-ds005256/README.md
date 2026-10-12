Spacetop is a multi-session fMRI study from Dartmouth College that pairs about two hours of naturalistic movie
watching with a battery of controlled tasks in the same people, so that brains can be functionally aligned and task
effects compared across many conditions. Each participant came back for four scanning sessions, about six hours of scanning in total.
The tasks cover emotion ratings during movie clips, spoken and written narratives, dynamic faces, social judgements of
movie characters, thermal pain together with vicarious pain and mental rotation, and paired subtasks on attention,
memory and theory of mind. The raw BIDS data, events files and stimuli are on OpenNeuro as ds005256 under CC0. fMRIPrep 25.1.4 outputs for this dataset are
released separately as OpenNeuro ds007070, also under CC0.

## Composition

The release holds 117 healthy, right-handed adults recruited around Dartmouth: 70 female, 45 male and two other by
self-report, aged 17 to 44 with a median of 23. 185 people enrolled; 101 finished all four sessions, and the
release also keeps the scans of those who dropped out. The release has 117 first, 106 second, 100 third and 100 fourth
sessions; 98 subjects have all four sessions and 61 have the full set of 41 BOLD runs.

## Acquisition

All scans come from one Siemens Prisma 3T scanner with a 32-channel head coil at the Dartmouth Brain Imaging Center,
collected between December 2020 and July 2022. The first session adds a 0.8 mm T1w MPRAGE and a multi-shell diffusion
scan with b-values up to 3000. Functional runs use multiband 8 echo-planar imaging with 2.7 mm isotropic voxels and a
repetition time of 460 ms, most with a single-band reference, and reversed phase-encoding fieldmaps are given per
block.

## Annotations

There are no image labels. Events files give trial timing, conditions and ratings for every run, and participants.tsv
gives age and sex. The paper describes physiological recordings and questionnaires, but no physiology files are part
of this snapshot.

## Known limitations

- Healthy, mostly young adults from a single site and scanner.
- Uneven completeness: the paper counts 101 completers, the release has 98 subjects with all four sessions, and some runs are missing.
- The paper reports 69 males and 45 females, the reverse of the counts in participants.tsv.
- T1w and diffusion images exist only for the first session.

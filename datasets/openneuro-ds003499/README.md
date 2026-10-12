This OpenNeuro dataset comes from the Hartley Lab at New York University and was collected to study how children,
adolescents and adults learn which information is worth remembering and use it to prioritize memory. In the scanner,
participants first watched a stream of images in which some items repeated five times and others appeared once, then
learned an associated item for each, and finally recalled the associations and reported how often each item had
appeared. Item frequency signalled how many points a correct answer would earn. The results were published in eLife in
2021, and the data are shared as snapshot 1.0.1 under a CC0 waiver.

## Composition

There are 90 right-handed participants aged 8 to 25: 30 children, 30 adolescents and 30 adults, 47 female and 43
male. Participants reported no diagnosed psychiatric or learning disorders. The participants table holds age in
decimal years, sex and handedness. Each participant completed two blocks of the three tasks (frequency learning,
associative encoding, retrieval) plus frequency reports, giving up to eight functional runs.

## Acquisition

All scans were acquired on a 3 T Siemens Prisma with a 64-channel head coil at the NYU Center for Brain Imaging.
Structural imaging includes a T1-weighted MPRAGE and a T2-weighted 3D turbo spin echo, both at 0.9 mm isotropic
resolution. Functional runs use a multi-echo, multiband EPI sequence with four echoes, a 2 s TR and 3 mm isotropic
voxels; each echo is stored as its own file with a single-band reference. Opposite phase-encoding EPI field maps and
two short proton-density bias calibration scans are also included. Task event files are provided for every run.

## Known limitations

- Two participants have no T2-weighted scan, and five have fewer than eight functional runs.
- Ten further participants who were scanned but excluded for motion or technical problems are not part of the release.
- No derivatives or behavioural summary tables are included beyond the BIDS event files.

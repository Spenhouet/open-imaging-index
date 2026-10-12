This OpenNeuro release holds raw brain MRI from a Brazilian study of idiopathic focal dystonia. Researchers at
Hospital Israelita Albert Einstein, Universidade Federal de São Paulo and Hospital do Servidor Público Estadual
scanned people with cervical dystonia, people with upper limb dystonia and healthy controls to look for structural,
diffusion and functional brain differences between the dystonia subtypes. The first snapshot appeared in June 2025
under CC0; the current snapshot is 1.0.8 from May 2026. The dataset description links three papers from the group,
on task fMRI in upper limb dystonia (Neurophotonics 2020), striatal and white matter changes (Parkinsonism and
Related Disorders 2025) and brain structure in upper limb dystonia (Scientific Reports 2026).

## Composition

There are 91 participants: 37 healthy controls, 25 with cervical dystonia and 29 with upper limb dystonia. 59 are
female and 32 male, aged 19 to 78 years at the scan. All were right-handed adults. According to the release notes,
112 people were enrolled; 4 were dropped for incidental findings on MRI and 16 for image artifacts. participants.tsv
gives group, sex, age and the Burke-Fahn-Marsden Dystonia Rating Scale score (0 for controls).

## Acquisition

All scans come from one Siemens MAGNETOM Prisma 3 T scanner with a 64-channel head coil at Hospital Israelita Albert
Einstein. Each session has a T1-weighted MPRAGE, a diffusion series with 60 directions at b = 1000 s/mm² plus 9 b0
volumes and a reverse phase-encoding b0 for distortion correction, a multiband resting-state BOLD run (TR 0.9 s, 400
volumes, eyes open) and a block-design finger opposition BOLD run (TR 2 s, 360 volumes). T1-weighted images were
defaced with pydeface.

## Annotations

There are no image annotations. Event files give the timing of the finger-tapping blocks.

## Known limitations

- Single site and single scanner, with a small sample per group.
- One subject (sub-P00790) has no diffusion series, only the reverse phase-encoding b0, and one (sub-P00927) has no
  resting-state run.
- The groups differ in sex balance: most patients are female.
- No processed data are included yet.

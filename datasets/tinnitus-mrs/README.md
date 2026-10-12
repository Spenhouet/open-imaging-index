This dataset holds the raw spectroscopy signals behind a study by Joanna Wójcik, Tomasz Wolak and colleagues at the
Institute of Physiology and Pathology of Hearing (World Hearing Center, Kajetany, Poland). The study asked whether
glutamate and other brain metabolites differ between people with chronic subjective tinnitus and people without it,
and whether they depend on the side on which the tinnitus is heard. The spectra were published on Zenodo in September
2023 under CC BY-NC-SA 4.0 alongside the article in Scientific Reports.

## Composition

There are 77 adults: 25 healthy volunteers, 24 with unilateral tinnitus and 28 with bilateral tinnitus; everyone in the
tinnitus groups had heard it for at least six months. Table 1 of the article reports 36 women and 41 men, aged 21 to 71, with similar
mean ages (44 to 46) across the three groups. Each participant contributes four spectra, one per region, for 308 files
in total. A tab-separated file assigns each participant ID to the control, unilateral or bilateral group; it carries no
age, sex or clinical scores.

## Acquisition

Scans took place between 2018 and 2020 on a 3 T Siemens Prisma Fit with a 20-channel head coil. A single-voxel PRESS
sequence (TR 2000 ms, TE 40 ms, 128 averages, 1024 points, 1200 Hz bandwidth) with Siemens water suppression and no
lipid suppression sampled four cubic voxels of 1.5 cm edge length in the left and right temporal lobes and the left
and right frontal lobes. A technician placed the voxels by hand on T2-weighted localizer images in three planes. The
files are Siemens RDA exports: a plain-text header followed by the binary free induction decay.

## Annotations

None beyond the group label per participant. Metabolite estimates from the article (LCModel fits of Glx, total NAA,
total choline and myo-inositol) are not part of the record.

## Known limitations

- Only spectra are shared. The T1-weighted screening scan and the T2-weighted localizer images were acquired but are
  not in the record, so voxel tissue composition cannot be recomputed from the data.
- People with depression or anxiety disorders were excluded, so the tinnitus group does not reflect the full clinical
  population.
- Age, sex and hearing measures are given only as group summaries in the article.
- The license forbids commercial use and requires derived data to be shared under the same terms.

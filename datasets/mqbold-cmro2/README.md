This OpenNeuro release (ds004873) holds the imaging behind a study from the Technical University of Munich that
asked whether the BOLD fMRI signal reliably reflects how much oxygen the cortex uses. Healthy volunteers did an
arithmetic task, an autobiographical memory task, a low-demand letter task and rest while the team recorded BOLD
fMRI together with multiparametric quantitative BOLD (mqBOLD) scans. From these the authors computed maps of
blood flow, blood volume, oxygen extraction fraction and the cerebral metabolic rate of oxygen (CMRO2), and found
that about 40% of voxels with significant BOLD changes had oxygen metabolism moving the other way, mostly in the
default mode network. The data are shared under CC0.

## Composition

There are 75 subject folders from three cohorts. The main study enrolled 47 adults, of whom 7 were left out of the
analysis for task, contrast agent or image quality problems; their data stay in the release and the participants
table flags them. Of the 40 analysed, 30 did all four conditions and 10 did only the arithmetic and control
conditions with two contrast agent injections. A control study of 18 adults has only T1-weighted and BOLD scans
with short and long task blocks, and a replication study of 10 adults repeated the arithmetic and control
conditions with matched voxel grids. The participants table lists sex and age for all 75 (42 women, 33 men, aged
21 to 60) and hematocrit and oxygen saturation for the main study.

## Acquisition

All scans were made on 3 T Philips Ingenia scanners with 32-channel head coils. The
protocol had a 1 mm T1-weighted MPRAGE, multiband BOLD EPI (TR 1.2 s, 3 mm voxels), multi-echo spin-echo T2
mapping with 8 echoes, multi-echo gradient-echo T2* mapping with 12 echoes, pseudo-continuous arterial spin
labeling and gadolinium dynamic susceptibility contrast perfusion.

## Annotations

There are no image annotations. The derivatives folder holds fMRIPrep output, first-level contrasts and per-subject
T2, T2*, R2', blood volume, blood flow, oxygen extraction and CMRO2 maps, plus group median maps in MNI space.

## Known limitations

- The raw multi-echo gradient-echo, arterial spin labeling and perfusion files sit under derivatives, not in the
  raw subject folders.
- Post-contrast T1-weighted and FLAIR images described in the paper are not in the release.
- Three main-study subjects have blood flow maps but no raw arterial spin labeling files.
- The sample is small, young and from one site.

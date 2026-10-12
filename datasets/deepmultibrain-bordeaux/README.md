This entry covers a private brain MRI cohort collected at Bordeaux Hospital (CHU de Bordeaux) within the DeepMultiBrain
research project. It is known from the holiAtlas paper by Manjón, Coupé and colleagues, which builds an ultra-high
resolution multimodal atlas of the brain. The atlas itself rests on Human Connectome Project images. The Bordeaux cohort
was used only to train a network that predicts a white-matter-nulled (WMn) image from T1w and T2w input, so that WMn
images could be synthesized for the HCP subjects, who were not scanned with that contrast. The images are not released.

## Composition

The paper describes 55 young, healthy volunteers. Each of them has a T1w, a T2w and a WMn scan. Sex and age are not
reported for this cohort.

## Acquisition

All subjects were scanned on one 3 T Canon Vantage Galan 3T/ZGO system. T1w and T2w volumes have 0.6 mm isotropic
voxels on a 256 x 376 x 368 grid. WMn volumes have 0.4 mm isotropic voxels on a 448 x 548 x 400 grid. WMn imaging gives
strong contrast inside deep gray matter, which helps to separate the thalamic nuclei. For the atlas work the authors
denoised and bias-corrected the images, aligned the T2w and WMn scans rigidly to the T1w scan and mapped all three to
MNI152 space.

## Known limitations

- The images are not shared and no terms for access are published. The paper states the cohort was not used to build the
  released holiAtlas templates.
- Single site, single scanner, healthy young adults only.
- The paper gives no sex or age breakdown, no sequence parameters beyond voxel size and matrix, and no acquisition
  dates.

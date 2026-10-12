This record holds hand-curated tractography reconstructions of 72 white matter bundles for 105 subjects of the Human Connectome Project (HCP) young adult study. Researchers at the German Cancer Research Center built it as the reference standard for TractSeg, a neural network that segments bundles directly from fiber orientation peaks, and they ask users to keep the published cross-validation folds so that results stay comparable. Only the tracts are shared, under CC BY-NC 4.0 on Zenodo. The diffusion images they come from must be downloaded separately from HCP, which requires registration.

## Composition

Each of the 105 subject folders is named by its HCP subject ID and holds streamline files for 72 tracts. The set covers association, projection and commissural bundles, among them the arcuate fascicle, the corticospinal tract, seven corpus callosum segments plus the whole corpus callosum, the cerebellar peduncles, and per hemisphere thalamic projections to six and striatal projections to seven cortical targets. The record lists five folds of 21 subjects and states which folds trained the TractSeg model that ships with the software.

## Acquisition

The tracts come from HCP diffusion MRI at 1.25 mm isotropic resolution with 270 gradient directions over three shells (b = 1000, 2000 and 3000 s/mm²) and 18 b = 0 volumes, taken after the HCP minimal preprocessing pipeline. Whole-brain tractograms of 10 million streamlines were generated in MRtrix with multi-shell multi-tissue constrained spherical deconvolution and probabilistic tracking. Anatomical constraints were used for all bundles except the anterior commissure, the inferior occipito-frontal fascicles and the uncinate fascicles.

## Annotations

Bundles were extracted in five steps: tractography, a first selection with TractQuerier, filtering with exclusion regions registered between subjects, manual inspection and clean-up in every subject with hand-drawn regions where needed, and, for network training, conversion to binary masks that keep only the largest connected region. Version 1.2.0 stores the streamlines in the current TrackVis format in native voxel space.

## Known limitations

The images are not included, and the whole-brain tractograms are too large to share and are only available by contacting the authors. The authors note that some harder bundles, such as the anterior commissure, are incomplete in part of the subjects. All subjects come from one study with one high-end protocol, so the labels reflect a high-end research acquisition rather than clinical diffusion data. Use is limited to non-commercial purposes.

UltraCortex is an openly shared collection of T1-weighted brain MRI acquired at 9.4 tesla in healthy adults, released together with manual cortical ribbon segmentations of a subset of the brains. It was assembled by the Max Planck Institute for Biological Cybernetics and University Hospital Tübingen to give developers of segmentation, denoising and super-resolution methods a public benchmark beyond 7 tesla and below 1 mm resolution. The data are hosted on OpenNeuro (ds005216) under CC0 and are described in a 2024 arXiv data descriptor.

## Composition

The release holds 86 T1-weighted images from 78 volunteers without known neurological or psychiatric disease: 28 women and 50 men aged 20 to 53, median 29. Six people were scanned in two sessions and one in three. Each session has one image in BIDS layout. The derivatives folder adds a SynthStrip brain mask and skull-stripped image for every session, a table of per-image sequence parameters, and segmentations for 12 subjects.

## Acquisition

All scans come from a single 9.4 T whole-body Siemens scanner in Tübingen with a 16-channel transmit array and a 31-channel receive array. 18 images used MP-RAGE at 0.6 or 0.7 mm isotropic resolution and 68 used MP2RAGE at 0.6 or 0.8 mm, across eleven parameter setups. Images were converted with dcm2niix, defaced with Quickshear and stripped of identifying header fields.

## Annotations

For 12 high-quality scans, a FreeSurfer 7.1.1 high-resolution run produced an initial ribbon of left and right cortical gray matter and cerebral white matter. Trained annotators corrected it voxel by voxel in ITK-SNAP with repeated review by neuroradiologists, and two neuroradiologists independently approved the final masks. Subcortical nuclei are labelled as white matter, while hippocampus and amygdala are background, as in the FreeSurfer ribbon. The FreeSurfer starting masks are shared alongside the manual ones.

## Known limitations

All subjects show signal dropout near the ear canals from transmit field non-uniformity, and the segmenters closed the cortex there by guesswork. Gradient nonlinearity was not corrected, which can bias volume measurements. Sequence and resolution vary between images. The cohort is young, healthy and from one site. Each MP2RAGE scan is shared as a single T1-weighted volume, without the separate inversion images or the T1 map.

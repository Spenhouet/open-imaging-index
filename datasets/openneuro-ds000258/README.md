Multi-echo Cambridge is an OpenNeuro release (ds000258) of resting-state fMRI collected with a four-echo EPI sequence at the University of Cambridge. It first appeared on OpenfMRI in January 2018 and moved to OpenNeuro later that year. Power and colleagues used it as their "ME cohort" in a 2018 PNAS study on separating BOLD signal from motion and respiration effects with ME-ICA denoising; the paper describes the scans as previously published by Kundu et al. Snapshot 1.0.1 from August 2023 added a curator to the authors and cleaned up documentation.

## Composition

There are 89 subjects, each with one T1-weighted MPRAGE and one resting-state run saved as four NIfTI files, one per echo. The README describes them as neurotypical, English-speaking, right-handed adults with no history of neurological or psychiatric illness. No participants file is included, so age and sex are not available. The release has no sessions and no derivatives in its file tree.

## Acquisition

Scanning used a Siemens Trio at 3 T with a 32-channel receive-only head coil. The rest run lasted 9.84 minutes (139 volumes, TR 2.47 s, flip angle 78 degrees) with eyes open on a white screen. Echo times were 12, 28, 44 and 60 ms, with 64 x 64 matrix, 3.75 mm in-plane voxels, 32 oblique interleaved slices of 4.4 mm with a 10% gap and an acceleration factor of 3. The MPRAGE had 1 mm in-plane resolution and an inversion time of 1,100 ms. Anatomical images were defaced with pydeface by the OpenfMRI curators.

## Annotations

None. The data are raw images without labels.

## Known limitations

The release has no demographic file and no data descriptor of its own. Only a single rest run is available per subject. The README says MRIQC outputs sit under derivatives/mriqc, but the published file tree does not contain them.

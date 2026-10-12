This entry covers the cohort behind a 2013 PLoS ONE methods paper by Yanlu Wang and Tie-Qiang Li of Karolinska Institutet and Karolinska University Hospital Huddinge in Stockholm. The authors acquired resting-state functional MRI from healthy adults and used it to show that hierarchical clustering can run voxel by voxel over the whole brain's grey matter, rather than on a few slices or anatomical regions. The clustering recovered known networks such as the motor, sensory, visual, memory and default-mode networks and split the default-mode and visual systems into sub-networks. The scans themselves were not released. The PLOS figshare item linked to the paper holds only two supplementary figures and an appendix document.

## Composition

86 adults without reported disease took part, 40 men and 46 women, aged 21 to 84 years. The paper gives no age breakdown or further participant characteristics. The Central Ethical Review Board in Sweden approved the study and every participant gave written consent.

## Acquisition

All data came from one Siemens Magnetom Trio 3 T scanner with a 32-channel head coil. Each person had at least one resting-state run of single-shot 2D gradient-echo EPI with 32 axial slices of 3.6 mm, TR/TE 2000/35 ms, 220 mm field of view, a 64 x 64 matrix, GRAPPA factor 2, a 90 degree flip angle and 300 volumes. Preprocessing in AFNI and FSL dropped the first 10 volumes, corrected head motion, registered to MNI space and smoothed with a 4 mm Gaussian kernel.

## Annotations

There are no image labels. Outputs are group-level cluster maps and dendrograms shown in the paper's figures.

## Known limitations

- Individual fMRI data are not shared and the paper gives no access route.
- The paper does not say how many subjects had more than one run, so the number of scans is unknown.
- Single site and single scanner.
- The paper reports no anatomical scans.
- The same lab later released a different, larger open resting-state cohort from the same hospital (see the related entry), with other acquisition settings.

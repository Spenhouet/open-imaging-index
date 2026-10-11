This OpenNeuro dataset holds the brain scans from a developmental replication study by Daniel Ansari's numerical
cognition group at Western University in London, Ontario. Children aged 6 to 14 watched the digit 6 shown over and
over, followed now and then by a different digit, so that the recovery of the BOLD signal in the intraparietal sulcus
could be related to the numerical ratio between the two digits. The study repeats an earlier fMRI-adaptation
experiment with a larger, preregistered sample and is reported as Chapter 3 of Celia Goffin's 2019 doctoral thesis,
which names ds002116 as its imaging data. The data are shared under a CC0 waiver.

## Composition

The release has 57 children, 22 girls and 35 boys, with one scan session each. The participant table has 65 rows
because it lists every consented child, including those never scanned and one removed for an incidental finding;
those eight have no image folders. For each child it records age in years, sex, the eligibility of each run under the
motion and catch-trial accuracy criteria, the reason for exclusion and which runs entered the analysis. The thesis
analysed 45 of the children, five at each age from 6 to 14, with 161 runs in total.

## Acquisition

Imaging took place on a 3 T Siemens Magnetom Prisma with a 32-channel head coil. The task runs are multiband (factor
4) gradient-echo EPI with 48 slices of 2.5 mm isotropic voxels, TR 1 s, TE 30 ms, flip angle 40 degrees and 386
volumes. Four runs were planned per child, with a fifth when motion looked likely to fail the cut-off. The
anatomical scan is a sagittal MPRAGE with 1 mm voxels (TR 2300 ms, TE 2.98 ms, TI 900 ms). Event files mark adaptation,
deviant, null and catch trials.

## Known limitations

Children with too much head motion or low catch-trial accuracy remain in the release, so some runs are unusable; the
eligibility columns flag them. A diffusion scan was acquired in the same session but is not part of this dataset. The
behavioural math and IQ measures sit in a separate OSF project, not in the participant table. Left-handed children
and children with a diagnosed learning disability were not scanned.

TractoInferno is a processed diffusion MRI collection built at the University of Sherbrooke to train and compare
machine learning tractography methods on a common, multi-site footing. It pools healthy adults from six existing
studies, runs every scan through one pipeline, and ships fixed training, validation and test subsets together with
an evaluation script. It was first released on OpenNeuro as ds003900 in November 2021 under a CC0 waiver and
described in Scientific Data in 2022.

## Composition

The release holds 284 subjects: 198 in the training set, 58 in validation and 28 in test. Each subject has a T1w
image, a single-shell diffusion series with b-values and b-vectors, DTI maps (FA, AD, MD, RD), an order-6 spherical
harmonics fit of the diffusion signal, fODFs and their peaks, and white matter, grey matter and CSF masks. Reference
tractograms are given for up to 30 bundles per subject, only where the bundle could be reconstructed. The six source
studies are BIL&GIN, MRi-Share, Bilingualism and the Brain, the UCLA CNP study, the Stockholm Sleepy Brain Study and
the controls of an mTBI and aging study. Per-site age, sex and handedness are reported only for the 354 subjects
before quality control, not for the released 284.

## Acquisition

All scans come from 3T scanners: Philips Achieva, two Siemens Prisma sites, Siemens Trio, Siemens TIM Trio and GE
Discovery MR750. Five sites used b = 1000 s/mm² and one used b = 700 s/mm², with 21 to 128 gradient directions and
voxel sizes of 1.75 to 2.3 mm. Processing used TractoFlow 2.1.1 without Topup, since reverse phase-encoded b0 images
were not available for every site.

## Annotations

Reference streamlines were produced by ensemble tractography with deterministic, probabilistic, particle-filtered
and surface-enhanced tracking, then sorted into bundles with RecoBundlesX. Three raters checked the raw data, and
further manual quality control removed failed scans and bundles after processing.

## Known limitations

- The reference bundles come from tractography, not histology, and RecoBundlesX varies between runs.
- Only healthy subjects are included, so models may not transfer to patients.
- The release has no participants table, so per-subject age, sex and site are not given.
- Streamlines are compressed, so their step size varies.

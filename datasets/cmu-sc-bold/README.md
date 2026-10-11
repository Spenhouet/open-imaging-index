This entry covers a brain MRI cohort of 60 healthy adults scanned at Carnegie Mellon University and the derived
connectivity data that Arian Ashourvan and Timothy Verstynen deposited on figshare in 2019. The data underpin a PLOS ONE
study by Ashourvan, Telesford, Verstynen, Vettel and Bassett that detected nested community structure across scales in
structural and functional brain networks. Only derived data are public, under CC BY 4.0: one streamline count matrix per
participant and regional resting-state BOLD time series. The source images are not shared.

## Composition

The 60 participants (32 women, 28 men) were aged 18 to 45 years, with a mean of 26.5. They were recruited around
Pittsburgh, Pennsylvania and at the U.S. Army Research Laboratory in Aberdeen, Maryland, and had no history of head
trauma, neurological or psychological pathology. All 60 had T1-weighted and diffusion spectrum imaging. Resting-state fMRI
was collected from 56 of them, and 3 were dropped for repeated head movement of more than two voxels, which leaves 53
participants in the BOLD file.

## Acquisition

All scans ran on one Siemens Verio 3T system with a 32-channel head coil. The protocol had a 1 mm isotropic MPRAGE, a
50-minute diffusion spectrum sequence with 257 directions and a maximum b-value of 5000 s/mm2, and 210 resting-state EPI
volumes at a TR of 2 seconds. Foam padding and a chin restraint limited head motion. Diffusion data were reconstructed
in DSI Studio and tracked between pairs of regions of a 600-region upsampled AAL atlas. The fMRI data were normalised in
SPM8, resampled to 1 second, and cleaned of white matter and CSF signal before regional averaging.

## Known limitations

- Images are not public and no terms for obtaining them are published.
- The released matrices and time series are tied to one atlas (AAL600, no cerebellum or brainstem) and one processing
  pipeline.
- Single site, single scanner, healthy young adults only.

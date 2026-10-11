Data4ProposalReview is a small demonstration set of cardiac MRI raw data published on Synapse by the organizers of
CMRxRecon2025, a MICCAI 2025 challenge on foundation models for accelerated cardiac MRI reconstruction across
centers, scanners and diseases. The organizers released it so that reviewers of the challenge proposal could inspect
the data format. It is not the challenge's training or validation release, which sits in a separate Synapse dataset.

## Composition

The directory listing on the dataset page shows six folders, each with five cases under `TestSet/FullSample`: Aorta
(sagittal and transversal acquisitions), BlackBlood, Cine (long-axis, LVOT and, for four of the five cases,
short-axis), Flow2d, Mapping (one T1 and one T2 mapping file per case) and Tagging. In total the listing holds 49
MATLAB files. Case numbers repeat across folders, but the page does not say whether equal numbers mean the same
person, so the number of people is not known. The six zip archives total about 16.4 GB.

## Acquisition

The files hold fully sampled multi-coil k-space. The page refers to the acquisition protocol of the earlier CMRxRecon
papers and gives no scanner, field strength or site for these cases. For the full CMRxRecon2025 study the page
announces 600 cases from five or more centers, with raw k-space, 24 auto-calibration lines and basic acquisition
information.

## Annotations

None. The data serve image reconstruction from undersampled k-space, and the fully sampled data act as reference.

## Known limitations

The set is tiny and meant only as a preview. The file description section on the page (separate `_ks`, `_calib` and
`_info` files) does not match the file names in the directory listing, so the exact file layout should be checked
after download. Demographics, diagnoses, vendors and countries are not reported for these cases. The license is
named only as "CC-BY" without a version, and access needs a Synapse account.

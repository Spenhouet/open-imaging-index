This OpenNeuro release (ds006156) holds brain MRI from a study at Brigham Young University of executive functioning in
emerging adults with type 1 diabetes. The study compared young adults with the disease to peers without it, using
functional MRI during a Go/No-Go response inhibition task and at rest. The data are shared under a CC0 waiver. No
paper is linked from the dataset page, and the release has no README describing the protocol.

## Composition

The participants table lists 64 people aged 18 to 25 years: 31 in the type 1 diabetes group and 33 controls, 36 women
and 28 men. It records only age, sex and group. No clinical measures such as diabetes duration or HbA1c, and no
cognitive test scores, are part of the release.

## Acquisition

Every subject has one T1-weighted image, three runs of the Go/No-Go task and one resting-state run, all in BIDS
format with JSON sidecars converted by dcm2niix. The sidecars show a single 3 Tesla Siemens TrioTim with a 32-channel
head coil. The T1-weighted image is a sagittal MPRAGE with 0.9 mm isotropic voxels. The functional runs are 2D
gradient-echo EPI with a repetition time of 3 s, an echo time of 28 ms and 3 mm slices. The task event files code
each trial as a correct or incorrect Go or No-Go response.

## Known limitations

- Single site and scanner, with a small sample.
- Six of the 192 Go/No-Go runs have no events file, so task timing is missing for them.
- The release contains no task description, inclusion criteria or study paper, so recruitment and the task design
  beyond the event codes are not documented.
- Snapshot 1.0.2 replaced images of subjects that had been uploaded without defacing; earlier snapshots should not be
  used.
- No derivatives or fieldmaps are included.

This OpenNeuro dataset comes from the Zurich Center for Neuroeconomics at the University of Zurich. It accompanies a
study asking whether people appear risk averse partly because they perceive large amounts imprecisely. Inside the
scanner, participants saw two clouds of 1-franc coins one after the other and chose the cloud with more coins. The
fMRI data were used to fit numerical population receptive field models in parietal cortex, and the precision of
those neural magnitude codes was related to risk attitudes measured afterwards in a separate gambling task outside
the scanner. Snapshot 1.0.0 (September 2022) is released under a CC0 waiver and was shared with the preprint; the
study was later published in Nature Human Behaviour.

## Composition

There are 64 right-handed adults aged 18 to 35, 26 of them women. None reported a psychiatric or neurological
disorder or needed visual correction. The release has no participants table, so age and sex per subject are not
included. Behavioural data of the risky-choice task are not part of this dataset; the paper points to a separate
Zenodo record for them.

## Acquisition

Scanning used a Philips Achieva 3 T system with a 32-channel head coil. Each person has one 1 mm isotropic MPRAGE
T1-weighted image and six gradient-echo EPI runs (2.5 mm in-plane, TR about 2.8 s, 189 volumes per run) of the
numerosity comparison task, 216 trials in total. For 62 subjects there are also three to five phase-difference field maps,
each with two magnitude images. Events files give stimulus timing and responses.

## Known limitations

- Single session per participant, healthy young adults only.
- No demographic table in the release; only the group-level counts from the paper are available.
- One subject (sub-28) has two files labelled run 6, and two subjects lack field maps.
- Pupil, heart and breathing recordings described in the paper are not included.
- The risky-choice task was done outside the scanner and has no imaging.

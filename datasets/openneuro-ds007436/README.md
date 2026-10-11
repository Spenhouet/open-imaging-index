This OpenNeuro release accompanies a bioRxiv preprint by Saurabh Bedi, Christian Ruff and colleagues at the University
of Zurich. Healthy students played a game in the scanner in which an insect image was paired either with a beep
sequence or with a tactile pattern, and had to decide whether the pairing would attract a mate. Only the
combination of the two cues predicted the probabilistic reward, and the pairings occurred with unequal frequencies. The
design lets reward prediction errors (reinforcement learning) be separated from stimulus surprise (statistical
learning). The data are in BIDS.

## Composition

58 participants, each with one T1-weighted image, six task runs of BOLD fMRI with per-run event files, and four
gradient-echo fieldmap runs (two magnitude and two phase images each). Runs alternate between audiovisual and
visuotactile blocks, three of each, with 60 trials per block. The preprint reports that 64 right-handed students aged
18 to 30 were scanned (21 women in that group) and that six were dropped for scanner problems or head motion. No
participants table is included, so sex and age of the 58 released subjects are not known.

## Acquisition

All scans come from one Philips Achieva 3 T scanner with a 32-channel head coil at the University Hospital Zurich.
Functional runs use gradient-echo EPI at 3 mm in-plane resolution, 40 slices and a TR of about 2.33 s, and the preprint gives 222
volumes per run. The anatomical image is a 1 mm isotropic MPRAGE. The preprint also describes diffusion imaging, eye
tracking, breathing and ECG recordings from the same sessions; none of these are in snapshot 1.0.0.

## Known limitations

- Single site, young student sample, no clinical conditions.
- No demographics in the release.
- The dataset README promises behavioral files, stimuli and preprocessed data, but snapshot 1.0.0 holds only the raw
  anat, func and fmap folders plus event files.
- The license statement conflicts: dataset_description.json says CC0, the README says CC BY 4.0.
- The accompanying paper is a preprint and has not been peer reviewed.

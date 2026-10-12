This dataset holds the brain imaging of the original sample in a study from Brian Knutson's lab at Stanford
University on which brain signals predict whether a person takes or declines a gamble. Leili Mortazavi and
colleagues put the raw scans on OpenNeuro as ds006105 under CC0 in April 2025 and updated the description in
snapshot 1.0.1 in October 2025. The accompanying PNAS Nexus paper also analyses a replication sample and two
generalization samples from earlier public studies; those are not part of this release. Behavioral data,
questionnaires, extracted region timecourses and analysis code are on the project's OSF page.

## Composition

75 right-handed adults with no neurological or psychiatric history, recruited on the Stanford campus. The paper
reports 25 women and 50 men, mean age 26.3 years. The participants table gives sex and age in whole years (18 to
52) and splits the subjects into two groups, Original_1 (27) and Original_2 (48), which neither the README nor the
paper explains. Each subject has one T1-weighted scan and one functional run of the Skewed Gambling Task.

## Acquisition

Scanning took place at the Stanford Center for Cognitive and Neurobiological Imaging on a GE Discovery MR750 at
3 T with a 32-channel head coil. The task run is a single-band gradient-echo EPI with TR 2 s, TE 25 ms, flip angle
77 degrees and 2.9 mm isotropic voxels in axial slices. On each of 72 trials, subjects chose between a safe option
paying nothing and a gamble with zero expected value that was positively skewed, negatively skewed or symmetric,
and then saw the gain or loss.

## Annotations

There are no image annotations. BIDS events files give the trial timing and choices.

## Known limitations

- The T1-weighted images ship without JSON sidecars, so their acquisition parameters are not documented in the
  release.
- The sample is young, mostly male and drawn from a single university campus.
- Real-life financial measures used in the paper, such as debt, are not part of the imaging release.

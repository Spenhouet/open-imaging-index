This OpenNeuro release holds the raw scans behind a study by Damien Brevers, Joël Billieux and colleagues on how the
brain supports imagining future changes in everyday environmental behaviour. During scanning, participants saw cues
asking them to picture doing more of a sustainable behaviour or less of an unsustainable one, and rated how feasible
that change was for them. The paper reports ventromedial prefrontal and hippocampal activity when picturing more
sustainable behaviour, and right dorsolateral prefrontal activity, coupled negatively with the hippocampus, when
picturing less unsustainable behaviour. The data are shared in BIDS under CC0, with funding from the Luxembourg
National Research Fund.

## Composition

86 participants, each with one T1-weighted image, one cue-exposure BOLD run with an events file, and a gradient-echo
field map (magnitude and phase difference). Subject labels run from 1 to 87 with no folder for subject 47. There are no
sessions. The release has no participants table and no README, so sex, age and other demographics are not part of the
shared data.

## Acquisition

All sidecars name a Siemens Prisma Fit 3 T scanner in Ghent, Belgium. The BOLD run is a 2D echo planar sequence with
2.5 mm isotropic voxels, 52 slices, TR 1.72 s, TE 27 ms and flip angle 66 degrees. Run length varies between subjects,
as the BOLD files differ in size. The anatomical image is a 1 mm isotropic MPRAGE (TR 2.25 s, TI 0.9 s, TE 4.18 ms). The
field map uses echo times of 5.19 and 7.65 ms.

## Annotations

There are no image labels. The events files give onset, duration, trial number and a condition code (1 or 2, 36 trials each) for each cue,
without a key to what the codes mean.

## Known limitations

- The methods section of the paper is behind a paywall, so recruitment, inclusion criteria and demographics could not
  be checked for this entry.
- Without a participants table, the data cannot be split by sex or age.
- Feasibility ratings are not in the events files.
- Group statistical maps are kept separately on NeuroVault (collection 7266) and the task code on GitHub.

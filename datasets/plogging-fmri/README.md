This OpenNeuro dataset holds the raw MRI behind a study by Philips, Brevers and colleagues (Human Brain Mapping
2024) on how the brain represents imagined physical activity. Participants looked at photographs taken every 200 m
along the route of the Louvain-la-Neuve 10 Miles race and imagined themselves either running the trail or plogging
it, which means running while stopping to pick up litter shown in the picture. The study compared brain activity
between the two imagined actions and related it to how much participants run in daily life and how vividly they
could imagine running. The release is under CC0.

## Composition

Snapshot 1.0.0 has 103 subject folders. Each holds one T1-weighted scan, one run of the cue exposure task with its
events file, and a phase-difference field map with one magnitude image. There is no participants file, so the
release carries no demographics. The paper scanned 104 first-year undergraduates in psychology or motor sciences at
UCLouvain in October 2021 (62 women, mean age 19.30, range 18 to 26) and dropped one person because of a head coil
fault, which matches the 103 shared folders.

## Acquisition

All scans come from a 3 T Siemens MAGNETOM Prisma at the GIfMI centre of Ghent University Hospital. The functional
run is a z-shim gradient-echo EPI with prospective motion correction, TR 1720 ms, TE 27 ms and 52 axial slices of 2.5
mm, tilted about 30 degrees from the AC-PC plane to limit signal loss in prefrontal and orbitofrontal cortex. The
structural scan is a 176-slice MPRAGE with 1 mm slices. Field maps were acquired before the EPI with the same slice
prescription.

## Annotations

There are no image annotations. Events files give onset, duration, trial number and a numeric condition code per
picture; the release has no sidecar that explains the codes.
Behavioural ratings are kept on OSF, and unthresholded group maps on NeuroVault, not in this release.

## Known limitations

- Participants are young, healthy university students from one campus, so the sample is narrow in age and
  background.
- Sex and age are reported only for the 104 people scanned, not per released subject.
- Each subject has a single task run, and the condition codes in the events files are not documented.

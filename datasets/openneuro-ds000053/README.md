This dataset holds the scans from an fMRI study of loss aversion by Mei-Yen Chen, Russell Poldrack, W. Todd Maddox and
colleagues. Participants decided whether to accept gambles with an even chance of winning or losing set amounts, a task
adapted from Tom et al. (2007). Between a baseline phase and a post-test phase, a feedback training phase rewarded more
or less loss-averse choices depending on which of two clients a cue named. The authors report that training mainly
changed sensitivity to potential gains, both in behavior and in brain activity. The data were first released on
OpenfMRI in May 2017 and are published on OpenNeuro as snapshot 00001 under the PDDL. No journal article is linked to
the dataset.

## Composition

The snapshot has 59 subjects aged 18 to 30 (31 female, 28 male). The README describes 60 participants with a mean age
of 22.9 and lists sub-055, a 22-year-old man, as missing. Every released subject has one T1-weighted scan and eight
functional runs: one baseline run, five training runs and two post-test runs. MRIQC quality reports are included as
derivatives.

## Acquisition

All sidecars name a Siemens Skyra at 3 T. The anatomical scan is a 3D inversion-prepared gradient-echo (MP-RAGE) scan
(TR 2.4 s, TE 1.94 ms, 0.8 mm voxels). The functional runs are 2D echo-planar BOLD with TR 1.16 s, TE 30 ms, flip
angle 63 degrees, 2.4 mm in-plane pixels and 2 mm slices with a 2.4 mm gap between slice centers.

## Annotations

There are no image annotations. The events files give per-trial onset and duration, a normalized response
time, the gain and loss values of each gamble and the choice; training runs add the client and the feedback.

## Known limitations

- The README says two participants were left out of the brain imaging analyses, one for a missing anatomical image and
  one for head motion, but the release does not say which; all 59 released subjects have a T1-weighted scan.
- Anatomical scans were defaced with pydeface.
- No snapshot DOI, publication or study site is given.

This OpenNeuro dataset holds the brain imaging of a Virginia Tech study on how the degree of food processing changes
metabolism and food reward. The DiFeliceantonio lab scanned healthy-weight young adults while they placed bids on
pictures of foods, half ultraprocessed and half not, that were matched on nutrients. The study is reported in Nature
Metabolism (Hutelin et al. 2026) and the images were released in 2026 under a CC0 waiver.

## Composition

Snapshot 1.0.0 contains 57 participants, the full enrolled sample. Every subject folder has one T1-weighted anatomical
image, four task fMRI runs of the food auction and reverse phase-encoded EPI field maps. The paper reports a mean age
of 26.2 years (SD 6.85), 18 men among the 57, and a mean BMI of 22.75. Eligibility required an age of 18 to 45, a
BMI of 18.5 to 25, and no metabolic, neurological or psychiatric disorder. A subset of 32 people also completed two
whole-room calorimetry sessions with test meals; those metabolic data are in a separate Virginia Tech repository, not
on OpenNeuro.

## Acquisition

All scans come from one 3T Siemens MAGNETOM Prisma with a 64-channel head coil at the Fralin Biomedical Research
Institute in Roanoke. Functional runs used multiband EPI (factor 4) with a 1.5 s TR, 34 ms TE and 2 mm isotropic
voxels. The anatomical scan is an MPRAGE-type sequence at 0.9 mm isotropic resolution. In each run participants bid
between 0 and 5 USD on 28 foods (14 ultraprocessed, 14 not) in a Becker-DeGroot-Marschak auction; event files hold
the onsets and bids.

## Annotations

There are no image annotations. Task event files record the presented food and the willingness-to-pay bids.

## Known limitations

- The release has no participants.tsv, so age and sex cannot be matched to subjects.
- The README lists five subjects left out of the analyses: two for head motion, one for equipment failure and two
  for unusable bids. Several other subjects miss one or two runs in the paper's analyses.
- The sample is small, young, healthy-weight and from one site, so it does not cover overweight or clinical groups.

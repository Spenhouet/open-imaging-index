The 1000 Functional Connectomes Project (FCP) was the first open pool of resting-state functional MRI at scale. By
December 2009 independent laboratories around the world had donated resting-state scans they had already collected,
so that anyone could study intrinsic functional connectivity across many sites. The review boards of NYU Langone
Medical Center and New Jersey Medical School approved receiving and redistributing the data. The FCP later became the parent of the International Neuroimaging Data-sharing Initiative (INDI), which
hosts ABIDE, ADHD-200, CoRR and other collections. This entry covers the original "FCP Classic" release.

## Composition

The FCP Classic table lists 35 samples from 33 sites, with between 8 and 198 people each; together they add up to
1,355 people, and the page itself speaks of more than 1,200 datasets. In the INDI file listing, subjects have a resting-state fMRI
run and a T1-weighted anatomical scan, with age, sex and site as the only phenotypic variables. Most samples are young
adults, but reported age ranges go from 7 (NewYork_a) to 85 (ICBM). For five samples the page gives no sex or age.
The PNAS paper that introduced the project describes 1,414 participants from 35 laboratories in the repository as of
December 11, 2009, and analyzes a subset of 1,093.

## Acquisition

Every site used its own scanner and protocol. Repetition times on the table range from 0.75 to 3 s, with 16 to 64
slices and 72 to 395 time points per run. In the analyzed subset of the paper, 970 people were scanned at 3 T and
123 at 1.5 T. The data are now also offered in BIDS layout, with skull-stripped T1-weighted images as derivatives.

## Annotations

There are no image labels. Age and sex come from the contributing sites.

## Known limitations

- Samples were collected for unrelated studies, so protocols and inclusion criteria differ by site.
- Phenotypic information is minimal: no diagnosis, cognition or behavior beyond age and sex.
- One sample is named NewYork_a_ADHD, and its listed sex counts (19 male, 4 female) do not add up to its n of 25.
- Durham_Madden is available only on request at the PI's discretion, and Cleveland CCF moved to a separate INDI page.
- Field strength and vendor are not reported per site on the release page.

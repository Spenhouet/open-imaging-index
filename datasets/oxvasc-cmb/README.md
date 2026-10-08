This entry covers a labelled subset of the Oxford Vascular Study (OXVASC), not the whole OXVASC imaging cohort.
OXVASC is a population-based study at the Wolfson Centre for the Prevention of Stroke and Dementia in Oxford that has
followed patients with vascular events from eight Oxfordshire general practices since 2002. Sundaresan et al. (2023)
used T2*-weighted gradient echo scans of 74 OXVASC patients, with manual cerebral microbleed segmentations, to train
and test a deep learning microbleed detector. The rest of the OXVASC imaging data is not part of this
entry.

## Composition

74 patients who had recently had a minor non-disabling stroke or a transient ischaemic attack; the paper does not
split them by diagnosis. 36 are women and 38 are men, aged 39.6 to 91.2 years (mean 69.8, median 67.3). 36 patients
have at least one microbleed, 366 microbleeds in total (mean 10.2, median 3 per patient). The other 38 have none and
serve as negative cases. The paper describes T2*-weighted GRE images for every patient.

## Acquisition

Scans were acquired on a 3 T Siemens Verio: 2D single-echo T2*-weighted GRE with GRAPPA 2, TR 504 ms, TE 15 ms,
flip angle 20 degrees, 0.9 x 0.8 mm in-plane resolution, 5 mm slices and a 640 x 640 x 25 matrix. The study was
approved by the South Central Oxford A Research Ethics Committee (05/Q1604/70).

## Annotations

Microbleeds were segmented manually on the T2*-GRE images for all 36 positive patients, giving voxel masks. The paper
does not say who drew them or which rating rules were used. The authors' detection code is public at
github.com/v-sundaresan/microbleed-detection, without a license file.

## Known limitations

- Not public. Requests go to the OXVASC principal investigator and are judged case by case; no data use terms are
  published.
- One scanner model and one protocol, with thick 5 mm slices.
- Rater, protocol and inter-rater agreement for the masks are not reported.
- The paper does not say whether other sequences or clinical data come with the T2*-GRE scans.

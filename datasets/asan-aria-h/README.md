This is an in-house collection of susceptibility-weighted brain MRI from Asan Medical Center in Seoul, used by VUNO Inc.
and Asan researchers to train an automatic cerebral microbleed detector. The goal is to count microbleeds for ARIA-H
severity grading during anti-amyloid therapy, where fewer than 5, 5 to 9 and 10 or more microbleeds mean mild,
moderate and severe. The only public description is a poster abstract from AAIC 2025 published in Alzheimer's &
Dementia.

## Composition

565 SWI scans: 429 with at least one microbleed and 136 without. The cohort has a mean age of 71.9 years (SD 10.2) and
includes 363 women and 202 men. The scans were split 3:1:1 into training, validation and test sets; the test set has
114 scans (86 positive with 158 microbleeds, 28 negative). The abstract does not state whether the patients were on
anti-amyloid therapy or what their diagnoses were.

## Acquisition

All scans are SWI with 2 mm slices from a single centre. Scanner vendor, field strength and sequence parameters are
not reported.

## Annotations

One neuroradiologist with 14 years of experience labelled microbleeds, defined as hypointense lesions 2 to 10 mm across
on SWI. The model was scored with Dice and lesion-level metrics using a 3 mm centre distance, which suggests
lesion-level labels, but the label format (masks or points) is not described.

## Known limitations

- Not publicly available, with no published access route or terms.
- Single centre, single reader, and only a short abstract describes the data.
- No scanner, field strength or clinical diagnosis information.

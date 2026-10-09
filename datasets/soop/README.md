SOOP is an open collection of routine clinical brain MRI from people admitted to Prisma Health-Upstate in Greenville,
South Carolina, during 2019 and 2020 under a suspected acute stroke. The team behind it, from Prisma Health and the
University of South Carolina, shared it on OpenNeuro under CC0 so that lesion mapping, normalization and outcome
prediction methods can be built and taught on unrestricted clinical stroke data, and released scripts that predict
NIH Stroke Scale scores from lesion location and age as a baseline.

## Composition

The release holds 1,715 people. The paper counts 1,461 with acute ischemic stroke and 254 in whom stroke was first
suspected and then ruled out. Each person has one T1-weighted scan, one FLAIR, and a diffusion TRACE image with its
ADC map. `participants.tsv` gives sex, age, race, BMI, NIHSS, discharge Rankin score, prior stroke and stroke etiology
for 1,106 stroke survivors (538 women, 568 men, aged 16 to 89, median 65); the other rows are empty. Ages above 89
are released as 89+.

## Acquisition

Scans were taken within 30 days of admission, most within 48 hours. The authors picked, per person, the series with
the best coverage and signal, so resolution, coverage and contrast vary a lot, and the authors note that clinical T1-weighted
scans include gadolinium-enhanced ones. The JSON sidecars show mostly Philips scanners (1,676 people), with a few GE and Siemens, at 1.5T
(1,357) or 3T (358). Images were converted with dcm2niix and defaced with an extended SPM script, keeping the scalp.

## Annotations

Three trained raters traced acute lesions slice by slice in MRIcroGL on the diffusion images, and chronic lesions in
a separate mask. The masks sit in `derivatives/lesion_masks` in native TRACE space, as acute, chronic (where present)
and combined files; 1,456 people have a mask folder. Normalized FLAIR images are shared separately on OSF.

## Known limitations

- Single center, with hemorrhage, stroke mimics, transient ischemic attacks and major structural comorbidities
  excluded.
- The paper gives 1,461 ischemic strokes in the abstract and 1,415 in the cohort section.
- Demographic and clinical data cover only 1,106 people; race is limited to Black and White.
- The paper mentions T2-weighted scans, but the release contains T1w, FLAIR, TRACE and ADC only.
- No inter-rater agreement is reported for the lesion masks.

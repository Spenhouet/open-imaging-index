The Mayo Clinic Study of Aging (MCSA) is a longitudinal, population-based cohort of residents of Olmsted County,
Minnesota. It was set up to measure how common mild cognitive impairment (MCI) is, how often it develops and how often
it progresses to dementia or Alzheimer's disease, and to find risk factors along the way. The study shares a curated,
de-identified subset of its imaging and clinical data through the LONI Image and Data Archive (IDA). Richer clinical,
biomarker or imaging data and specimens need a separate request to the MCSA executive committee.

## Composition

The IDA study record lists 2,122 participants aged 30 to 89, all with MRI. Diffusion MRI is listed for 1,960 and PET
for 2,096 of them; the record does not name the PET tracer.

The first phase of the public release, described in a 2024 conference abstract, held clinical data of 5,925
participants aged 30 to 90 with 1 to 12 visits about 15 months apart, and three MRI sequences (T1w, FLAIR and
diffusion) of 1,802 participants. Clinical data cover demographics, APOE4 status, cognitive status (normal, MCI,
dementia or other), neuropsychological scores, imaging summary measures, medications, cardiovascular risk factors,
sleep, mood and function. Amyloid PET was first shared only as global PiB SUVR and Centiloid values, with defaced PET
images announced for later.

## Acquisition

For the first imaging release, the study took the first timepoint acquired on a 3 T GE scanner with a PiB PET scan at
the same visit, from participants aged 50 to 90. Sequences are 3D T1w MPRAGE (1 x 1 x 1.2 mm), FLAIR (0.85 x 0.85 x
3.6 mm) and diffusion MRI (2.7 mm, 41 directions at b=1000 plus 5 b=0). Images are DICOM, de-identified with CTP, and
T1w and FLAIR are defaced with mri_reface 0.3.3 and checked visually.

## Annotations

No manual image labels are described. The clinical tables include diagnoses and imaging summary measures.

## Known limitations

- A single county in Minnesota, so the cohort reflects that population.
- The counts on the IDA are larger than those in the 2024 abstract, and what was added since (more visits, PET
  images, other scanners) is not documented publicly.
- Whether the imaging on the IDA is still limited to 3 T GE scanners is not stated.

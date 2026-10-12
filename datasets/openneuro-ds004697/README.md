This OpenNeuro dataset holds the raw brain MRI of the Food and Brain Study, a Penn State project led by Kathleen
Keller that asks how children's brains respond to portion size and energy density of food, and whether those responses
relate to how much more they eat when served larger meals. Children aged 7 to 8 at enrollment came for six baseline
visits between 2017 and 2022, with test meals at increasing portion sizes, and were scanned at the last of these
visits. The images were released in 2023 under a CC0 waiver; the protocol is on OSF.

## Composition

Snapshot 1.0.2 has image folders for 84 children, 42 girls and 42 boys, with a mean baseline age of 7.8 years.
participants.tsv lists 94 children, so 10 of them have demographics but no images. Every imaged child has a
T1-weighted scan. 82 have the resting-state run and 82 have food-cue runs, 77 of them all five. Field maps exist for
79 children. participants.tsv also records BMI percentile, race, ethnicity and a familial obesity risk group (low or
high) based on the mother's BMI.

## Acquisition

All data come from one 3T Siemens scanner at Penn State's University Park campus, one session per child. The protocol
is an MPRAGE at 1 mm isotropic resolution (defaced with pydeface), a resting-state run during which children watched
an abstract video, five food-cue fMRI runs (TR 2 s, 3 mm voxels) and a gradient-echo field map. In the task, children
saw blocks of food pictures that varied in portion size and energy density, plus office supplies as a control, and
indicated whether they wanted each item.

## Annotations

There are no image annotations. Event files of the food-cue runs give the onset, condition, picture and button response of
every trial.

## Known limitations

- The Nutrients paper names a Siemens Magnetom Trio, while the image sidecars report a Prisma fit.
- The paper excluded 25 of 88 children from its analyses, mainly for head motion or too few usable runs.
- The sample is small, nearly all White and non-Hispanic, from higher-income families, and excludes children with
  obesity.
- Ages in participants.tsv are from the first baseline visit, not the scan date.

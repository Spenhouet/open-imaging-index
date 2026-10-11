This OpenNeuro release (ds006092) holds brain MRI from the CogRief Study at the University of Granada, Spain. The
dataset accompanies a manuscript on brain activation in prolonged grief disorder after the COVID-19 pandemic, measured
with functional MRI while participants performed an emotional counting Stroop task. The data are shared under a CC0
waiver. At the time of checking, the manuscript named in the README could not be found as a published paper.

## Composition

The participants table lists 60 people aged 19 to 67 years, with a median age of 24.5. A group column splits them
into 30 marked experimental and 30 marked control, but the release does not define what the groups mean. The README
calls all 60 participants healthy. The sex column is coded 1 and 2 without a key, so sex is not reported here. No
clinical or grief questionnaire scores are included.

## Acquisition

Every subject has one T1-weighted image and one functional run of the Stroop task, stored as uncompressed NIfTI in
BIDS format with JSON sidecars. The sidecars show a single 3 Tesla Siemens Prisma fit with a 64-channel head and neck
coil at the CIMCYC research centre. The structural scan is a TFL (MPRAGE type) sequence with 1 mm slices. The
functional run is 2D gradient-echo EPI with a repetition time of 2.03 s, an echo time of 25 ms and 35 slices. The
event files code blocks of death-related, negative, positive and neutral word conditions, labelled in Spanish.

## Known limitations

- Single site and scanner, with a small sample skewed toward people in their twenties.
- The README mentions field maps, but snapshot 1.0.0 contains no fmap folder.
- Group labels and sex codes have no data dictionary (no participants.json), so diagnosis and sex cannot be read
  reliably from the files.
- No derivatives, no task description beyond the event files and no linked paper.

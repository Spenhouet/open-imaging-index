This OpenNeuro dataset comes from a University of Oregon memory study that asks whether the way the hippocampus
connects with the rest of the brain explains why some people remember single episodes in detail while others are
better at extracting what episodes share. Participants first rested in the scanner and then passively watched
blended face images, each made by mixing a parent face from one of three families with a second, unrelated face.
Scores from categorisation and recognition tests are shared for every participant. Snapshot 1.0.0 was published in
December 2025 under a CC0 waiver. No journal article is linked from the dataset page.

## Composition

The release holds 52 participants aged 18 to 28 (mean about 20), each with one session. By self-reported gender, 33
are male, 18 female and one other. Subject numbers run up to 70 with gaps, and the dataset page does not say why the
missing numbers were left out. Every participant has one T1-weighted image, one resting-state run and four
passive-viewing runs. The participants file adds a categorisation score (corrected hit rate) and a recognition
accuracy per person.

## Acquisition

All images come from a Siemens Skyra 3T scanner with a 32-channel head coil at the University of Oregon in Eugene,
according to the image sidecar files. The T1-weighted scan is a 1 mm MPRAGE. Functional runs use a multiband
(factor 3) gradient-echo echo-planar sequence with a repetition time of 2 s, an echo time of 25 ms and 2 mm slices.

## Annotations

There are no image annotations. Each passive-viewing run has an events file with trial onsets and durations, the
face-blend shown, its category-relevant and category-irrelevant parent faces and their family labels.

## Known limitations

- Participants are young adults only; the dataset page states no inclusion criteria or health screening.
- No paper describing recruitment, exclusions or the behavioural tests is linked, so the meaning of the two scores
  rests on the short descriptions in participants.json.
- No field map or T2-weighted image is included.

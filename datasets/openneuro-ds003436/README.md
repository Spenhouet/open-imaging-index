This OpenNeuro dataset holds the functional MRI behind a study of whether the way the brain separates social from
non-social content tracks the agreeableness personality trait. Participants watched short clips of geometric shapes
that either moved at random or interacted as if they had thoughts and feelings, and judged which kind each clip was.
The study was published in NeuroImage in 2021. Snapshot 1.0.0 was released in December 2020 under a CC0 waiver.

## Composition

The file tree has 55 subjects, each with one T1-weighted image, four task fMRI runs and a pair of reversed phase
encoding fieldmaps. participants.tsv has rows for 49 of them (30 female, 19 male, aged 18 to 34) with Big Five raw
scores for agreeableness, extraversion, conscientiousness, neuroticism and openness, an abbreviated Raven IQ score
and the accuracy for social and random clips. The README states that 6 participants were judged outliers on image
quality metrics; it does not name them, and six subjects in the tree have no participants.tsv row.

## Acquisition

Imaging was done on a Philips Achieva 3T scanner with a SENSE head coil at the hospital in Udine, Italy, as
named in the sidecars. The structural scan is a 1 mm 3D gradient-echo T1-weighted image. Functional runs use
gradient-echo EPI with TR 2 s, TE 30 ms and 3 mm slices. Each run shows five 20 s animations, two or three of each
type, separated by 15 s of fixation. A third button allowed an unsure answer.

## Annotations

There are no image annotations. Events files give onset, duration, animation type, the chosen response, accuracy
and reaction time. MRIQC 1.5.2rc1 image quality reports are included under derivatives.

## Known limitations

- Demographics and trait scores are missing for six subjects, and the README does not say which subjects are the
  quality outliers.
- Subject identifiers in participants.tsv use an underscore (sub_01) instead of the BIDS hyphen.
- The sample is small, young and from a single site.

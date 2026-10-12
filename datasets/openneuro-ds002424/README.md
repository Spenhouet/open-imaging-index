This OpenNeuro dataset comes from a Northwestern University study of how reward and feedback change working memory in
children with attention deficit hyperactivity disorder. Children aged about 8 to 12 were scanned once while doing
n-back tasks in which they tracked either the identity (verbal) or the screen position (visuospatial) of letters.
Each task was run under a large or a small monetary reward per correct answer, with feedback given either right after
each block or only later, which yields eight task variants. Two 2015 papers by Hammer and colleagues analysed boys
from this cohort. Snapshot 1.0.0 was published in January 2020; the current snapshot 1.2.0 (August 2021) is shared
under a CC0 waiver.

## Composition

The release holds 79 children, 65 boys and 14 girls, aged 8.6 to 12.0 years at the scan (mean 10.4). Parents reported
an earlier ADHD diagnosis for 35 of them; the other 44 serve as comparison children. Every child has one T1-weighted
image and between two and eight functional runs, 546 runs in all, and 54 children completed all eight. The
participants file also lists ADHD medication, handedness, race and ethnicity. Phenotype tables cover ADHD rating
scales, K-SADS-PL interviews, a continuous performance test, working memory, reading, intelligence and achievement
tests, and a developmental history questionnaire. A second session about two years later holds only these tests, no
images.

## Acquisition

Images were acquired on a Siemens 3T TIM Trio. Functional runs are gradient-echo EPI with a 2 s TR, 20 ms TE, 80
degree flip angle, 32 slices and GRAPPA acceleration. Tasks were presented with E-Prime and answers were given on a
right-hand button box. Anatomical images were defaced, and the defacing code ships with the data.

## Annotations

There are no image annotations. Event files give per-trial onsets, conditions and responses, and the stimulus images
are included.

## Known limitations

- Not every child completed all eight task runs.
- ADHD status is the parent report of a previous diagnosis, not a study-confirmed diagnosis in the participants file.
- All 35 children with ADHD are boys, so sex and diagnosis are confounded.
- Acquisition dates were shifted at random per subject to protect identity.

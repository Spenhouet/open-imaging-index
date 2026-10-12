This OpenNeuro collection (ds006239) holds brain MRI of children and adolescents with typical hearing, scanned at
Vanderbilt University while they judged written words for sound and meaning. It comes from a larger longitudinal
study of reading in hearing and deaf or hard-of-hearing children run by James Booth's lab and funded by the NIDCD.
Besides the two word reading tasks, each child did four localizer tasks meant to find phonological and semantic
regions independently: picture rhyming, picture meaning, speech reading (lip movements) and signed language
(handshape, location or movement). The data descriptor appeared in Data in Brief in 2025. The data are released
under CC0.

## Composition

The data descriptor reports 83 participants aged 10 to 17 (mean 12.7 years, 42 female) for snapshot 1.0.2. Snapshot
1.0.7, counted from its file tree, has 91 subjects with imaging, each in one BIDS session: all have a T1-weighted
scan and BOLD runs, and 75 also have diffusion scans. There are 1,091 BOLD runs, mostly two per task, 93
T1-weighted volumes and 152 diffusion volumes. participants.tsv lists one more ID that has no imaging. Standardized
reading, language and cognitive tests, background surveys and audiology results are in the phenotype folder.

## Acquisition

All scans were taken on 3 T Philips scanners; the sidecars name two model labels (Ingenia Elition X and MR7700).
T1-weighted images are 1 mm isotropic TFE scans. BOLD runs use multiband EPI with a 2 s repetition time and 2.25 mm
voxels. Diffusion imaging uses 64 directions at b = 1000 s/mm², with a short reverse phase-encoded series, and
spin-echo EPI field maps are included for distortion correction. Scanning was spread over up to three days.

## Annotations

There are no image labels. Events files give trial timing, condition, accuracy and response time for every run,
and the derivatives folder holds MRIQC reports and summary accuracy tables. Stimulus lists come with lexical
characteristics.

## Known limitations

- The paper's participant numbers describe snapshot 1.0.2; later snapshots added subjects, so the paper and the
  current file tree disagree on the count.
- Anatomical images in snapshots before 1.0.6 were defaced incorrectly.
- Runs with more than 25% bad volumes were removed before sharing, so some tasks lack runs for some children.
- The sample leans toward skilled readers.
- Dates in the files are shifted to protect identity.

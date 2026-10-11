MR-ART pairs motion-free and motion-corrupted structural brain MRI from the same people. Researchers at the Brain Imaging Centre of the Research Centre for Natural Sciences in Budapest scanned healthy adults three times in one session with an identical T1-weighted protocol: once while holding still and twice while nodding on a visual cue. The result is a real-world test set for checking how sensitive analysis software is to head motion, for validating retrospective motion correction and for training automatic quality control. The data are on OpenNeuro under CC0.

## Composition

148 healthy adult volunteers (95 female) aged 18 to 75, median age 25.16 years, with no reported neurological or psychiatric history. Most are in their twenties. Each subject has a standard scan without motion and scans with low (HM1) and high (HM2) levels of head motion. For 8 subjects one of the two motion scans is missing because of acquisition issues, which gives 436 T1-weighted volumes in total. Age and sex are in participants.tsv.

## Acquisition

All scans were acquired between 2019 and 2021 on a Siemens Magnetom Prisma 3 T scanner with a 20-channel head-neck coil. The sequence is a 3D MPRAGE at 1 mm isotropic resolution (TR 2300 ms, TE 3 ms, TI 900 ms, flip angle 9 degrees, GRAPPA 2). For the motion scans the word "MOVE" appeared on screen for 5 seconds, 5 times during HM1 and 10 times during HM2, and participants nodded once per cue. Images were converted to BIDS with dcm2bids and defaced with PyDeface.

## Annotations

Two neuroradiologists with over ten years of experience, blind to the acquisition condition, rated every scan for clinical usability on a 3-point scale: 1 good, 2 medium, 3 bad (unusable for diagnosis). Each scan was rated by one of them, after the two calibrated on 100 independent scans. Scores are in derivatives/scores.tsv. MRIQC 0.16.1 image quality metrics and HTML reports are included for every scan.

## Known limitations

Single site, single scanner and a single motion pattern (nodding in the sagittal plane). The cohort is young and skewed toward women. Each scan has one rater, so inter-rater agreement is not reported. Only T1-weighted images are included.

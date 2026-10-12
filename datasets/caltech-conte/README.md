The Caltech Conte Center release combines brain MRI with detailed psychological testing of healthy adults from the
Los Angeles area. It was built to study individual differences in social cognition and decision-making, and pairs
structural, resting-state and movie-viewing fMRI with intelligence, personality, mood and social behavior measures from
standardized instruments. The data are on OpenNeuro as ds003798 under CC0, organized in BIDS with preprocessed
derivatives.

## Composition

117 adults remain from 191 who enrolled (enrollment years 2012 to 2019 in the behavioral table); the others were excluded on screening criteria, MRI
safety, head motion or an incidental finding, or dropped out. Exclusions covered IQ below 90, psychotropic medication,
moderate to severe depression and a range of neurological and psychiatric histories. According to the behavioral table,
68 participants are male and 49 female, with estimated ages at enrollment from 18 to 48 years. 27 subjects were scanned
in two or three sessions over several years, giving 153 sessions. Every subject has T1w and resting-state fMRI; 65 also
have T2w, and 57 to 58 watched two short films ("Bang! You're Dead" and "Partly Cloudy") in the scanner.

## Acquisition

Scans come from a Siemens 3T TIM Trio (2012 to 2017) and the same system after its upgrade to a Prisma.Fit (2018 to
2019), with a 32-channel head coil. The protocol changed over the years: T1w moved from MP-RAGE at 1 mm to multi-echo
MP-RAGE at 0.9 mm, T2w SPACE was added from protocol 1.3, and fMRI moved from single-band 3 mm EPI (TR 2.5 s) to
multiband 2.5 mm EPI (TR 1.0 s, then 0.7 s). Each functional run has a field map. Structural images were defaced.

## Annotations

There are no lesion or pathology labels. Derivatives include FreeSurfer 7.1 reconstructions that were visually checked
and manually corrected, fMRIPrep outputs in native, MNI and surface spaces, denoised resting-state data, MRIQC reports
and manual fMRIPrep quality ratings. A CSV holds item-level and summary scores of 12 psychological instruments plus
four exploratory factor scores.

## Known limitations

- Small sample for individual-difference studies, as the authors note.
- Protocol and scanner changes across sessions mix image resolution and fMRI timing.
- Ages are estimated from birth and enrollment year, and no participants.tsv is provided.

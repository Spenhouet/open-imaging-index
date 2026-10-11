This record holds the functional MRI data and analysis material behind a study by Wen Zhou's group at the Institute of Psychology, Chinese Academy of Sciences, published in Nature Human Behaviour in 2024. The study asked whether the brain treats an odorant molecule as one unit or builds odour quality from parts of its chemical structure. Participants were adapted to one odorant and then smelled test odorants that shared some of its substructures, and the authors compared responses in the piriform cortex, amygdala and orbitofrontal cortex before and after adaptation. The whole study had 458 participants, but most took part only in behavioural experiments; the imaging part covers 26 healthy young adults.

## Composition

The fMRI experiment included 26 healthy non-smokers, half of them female, aged 18 to 30 by the inclusion criteria. Each person was scanned in two sessions on separate days, with a different adapting odorant per session. A session had six runs of about six minutes: two baseline runs, then four runs with the adapting odour in the background. The record contains preprocessed images, cleaned time series with motion and drift removed, region-of-interest masks, the stimulus delivery scripts and the analysis results, in eight files totalling about 63 GB.

## Acquisition

Scans were done on a Siemens Prisma 3 T scanner. A software update during the study split the functional protocol in two: 17 participants had gradient-echo EPI with 34 oblique slices at 2 mm resolution covering the olfactory regions, and 9 had whole-brain multiband EPI at 1.5 mm, both with a repetition time of 2 s. A 1 mm T1-weighted volume and a field map were acquired per person; the dataset description does not list them among the shared files. Preprocessing in SPM12 included slice timing correction, field map unwarping, realignment and 6 mm smoothing.

## Known limitations

Only processed fMRI is described; raw DICOM or BIDS files are not part of the record. The two EPI protocols differ in coverage and resolution. Images stay in each participant's native space. The sample is small and drawn from young adults in China. Demographics per fMRI participant are not published beyond the share of women.

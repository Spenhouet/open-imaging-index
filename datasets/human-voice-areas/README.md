This dataset holds the scans behind the "voice localizer", a short fMRI protocol from the Voice Neurocognition
Laboratory at the University of Glasgow that finds the voice-sensitive temporal voice areas of auditory cortex in a
single subject. Pernet, Belin and colleagues pooled the localizer runs of many studies to map where these areas lie
and how much their position varies between people (NeuroImage 2015). The data were first deposited on Edinburgh
DataShare in 2015 under CC BY 4.0 and later converted to BIDS on OpenfMRI and OpenNeuro, where they are released
under the PDDL.

## Composition

The OpenNeuro snapshot 1.0.0 contains 217 subjects with one T1-weighted scan and one BOLD run each, plus an events
file, the sound stimuli and the original analysis workflow. The paper describes 218 healthy adult volunteers (117
male, mean age 24.1, SD 7.0), recruited from the student population of Glasgow and screened by interview and questionnaire for physical and
mental health conditions. There is no participants table, so sex and age per subject are not released.

## Acquisition

All data come from one 3 T Siemens Tim Trio at the Centre for Cognitive Neuroimaging in Glasgow. The functional run
is a single-shot gradient-echo EPI with TR 2 s, TE 30 ms, 32 slices of 3 x 3 x 3.3 mm and 310 volumes. During the
run of 10 minutes and 20 seconds, subjects listened with eyes closed to forty 8 s blocks of vocal or non-vocal
sounds, separated by silence. The anatomical scan is a 1 mm isotropic 3D T1-weighted image.

## Annotations

There are no image annotations. The events file gives the onset, duration and category (vocal or non-vocal) of
each block, and the stimulus file behind it.

## Known limitations

- The OpenNeuro copy has one subject fewer than the paper and the DataShare archives. Its CHANGES file notes that
  subject numbers were shifted down by one during BIDS conversion.
- The OpenNeuro curators note that defacing was aggressive in some T1-weighted scans and removed small parts of
  brain.
- Several T1-weighted scans differ in matrix size or voxel size, and a few BOLD runs have 315 instead of 310
  volumes.
- Stimulus order was fixed for all subjects and listening was passive, so attention and order effects cannot be
  separated.

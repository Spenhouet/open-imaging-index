This OpenNeuro release holds the brain MRI behind a pre-registered study from Royal Holloway, University of London, on
how the visual word form area, a left occipitotemporal region that responds to written words, is coupled at rest with
other language regions. The authors asked whether this coupling tracks separate reading skills: sound-based skills
such as nonword reading, nonword repetition and spoonerisms, meaning-based skills such as vocabulary and morpheme
knowledge, and general word reading and spelling. The images are shared in BIDS under CC0; the behavioural scores are
not part of the OpenNeuro snapshot.

## Composition

71 right-handed adults took part, mostly university students recruited through local adverts, in three data
collection periods between November 2014 and February 2017. None reported current or past language, reading or
learning difficulties, hearing loss or uncorrected vision problems. Two people were dropped from the published
analysis for excessive head motion, leaving 69 (53 women, 16 men, aged 18 to 34 with a mean of about 21). All 71
subject folders contain one resting-state run and at least one T1-weighted image; 46 also have a diffusion scan.

## Acquisition

All data come from a 3T Siemens Trio with a 32-channel head coil. The T1-weighted MPRAGE has 1 mm isotropic voxels,
and some subjects have a second or third T1-weighted run. The resting-state scan is a 10-minute echo-planar run with
a repetition time of 2 s, 300 volumes and 3 x 3 x 3.75 mm voxels. Diffusion imaging was added for most participants,
but the paper does not report its parameters. Images were converted with dcm2niix and stored as compressed NIfTI with
JSON sidecars.

## Known limitations

- There is no participants.tsv, so age and sex cannot be linked to individual subjects from the snapshot.
- Published demographics describe the 69 analysed participants, not all 71 folders, and one age was recorded wrongly.
- Three folders (106a, 106b, 106c) share one number; the snapshot does not explain them.
- The sample is young, right-handed and mostly female students, so it does not represent the wider adult population.
- Eyes-open or eyes-closed instructions for the resting-state run are not reported.

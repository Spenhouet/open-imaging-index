The Neuroscience Project (Project 5) of the MIDUS 3 wave is the second neuroscience follow-up of the Main and
Milwaukee samples of Midlife in the United States. Between 2017 and 2022 it brought a subsample of people who had
completed the MIDUS 3 survey and biomarker projects to the University of Wisconsin-Madison. The aim is to measure brain
ageing, structure and function, with a focus on the circuits behind individual differences in emotional reactivity,
recovery and sustained responses, and to relate them to the health, cognitive and social data of the other MIDUS
projects. Carol Ryff and Richard Davidson lead the project. ICPSR study 38862 holds the summary and behavioral
variables only; the raw images sit in the restricted MIDUS Neuroscience Repository on Globus and are released after a
research plan is approved and a data use agreement is signed.

## Composition

231 participants: 74 from the random digit dialing sample, 96 from the twin sample and 61 from the Milwaukee sample of
Black Americans. The restricted data documentation counts participants with each data type: 160 with a T1w image, 158
with task fMRI, 155 with resting-state fMRI, 153 with diffusion imaging, 149 with arterial spin labeling and 79 with
T2-weighted structural images, which were added part way through data collection. The images are organized in BIDS.
Age and sex of the imaged group are not stated in the public documentation.

## Acquisition

One GE MR750 3 T scanner with a 32-channel head coil, in a session of just under 1.5 hours: a 1 mm T1w BRAVO image,
three runs of an emotional picture task with neutral face probes, one 8-minute resting-state run, multi-shell diffusion
imaging (63 directions at b = 500, 800 and 2000 s/mm² plus six b = 0 volumes), field maps, 3D ASL and, later in the
study, sagittal Cube T2 FLAIR and Cube T2 images. Electrodermal activity, respiration and pulse oximetry were recorded
during the functional runs and are shared with the images.

## Known limitations

- Raw images only by application, for a named study team; collaborators at other institutions must apply
  separately.
- Single scanner and single site.
- The documentation gives one count for T2-weighted images without separating Cube T2 from T2 FLAIR.
- Not every participant has every scan; the README in the access package explains missing data, but that file is not
  public.
- Public derived measures (FreeSurfer values, atlas-based diffusion tensor values, brain age) are on the MIDUS
  Colectica Portal, not in this image release.

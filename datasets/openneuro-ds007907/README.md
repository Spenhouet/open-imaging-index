This OpenNeuro release (ds007907) holds the imaging behind a Massachusetts General Hospital study by Marco Loggia's
group on whether chronic pain goes along with immune activation in the bone marrow of the skull. Participants had a
PET scan with [11C]PBR28, a tracer that binds the 18 kDa translocator protein (TSPO), together with a T1-weighted MRI
acquired in the same session. The data are shared openly under CC0 in BIDS format. The accompanying paper was listed
as in press at Science Translational Medicine when the dataset was released.

## Composition

147 people were scanned once each. 88 have chronic low back pain (51 from the IGNITE study and 37 scanned before
treatment in a cannabidiol trial), 37 have knee osteoarthritis and 22 are healthy controls. 79 are female and 68
male. Ages at scan range from 19 to 85 years, with a mean of 53.5. Every subject has one T1w image and one PET
image. The study is observational and cross-sectional; no task was performed during imaging.

## Acquisition

All data come from a Siemens Biograph mMR, a simultaneous PET/MR system at 3 T. PET was recorded as a 90 minute
dynamic list-mode scan after a bolus injection, and the shared image is a static SUV map built from the 60 to 90
minute window, reconstructed with OSEM and corrected for attenuation with an MR-based pseudo-CT. The structural image
is a multi-echo MPRAGE, defaced before release and coregistered to the PET.

## Annotations

A derivatives folder holds, per subject, a binary skull mask in T1w space, made by thresholding the pseudo-CT and
corrected by hand, plus skull and brain SUV maps warped to MNI152 space with ANTs. A group skull probability map in
MNI152 space is also included.

## Known limitations

- Single site and scanner, and only one tracer, so results may not carry over to other PET systems.
- Only the static 60 to 90 minute SUV image is shared, not the dynamic frames.
- participants.tsv gives study group, age and sex but no pain ratings or TSPO genotype.

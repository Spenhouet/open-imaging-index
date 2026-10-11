The Developmental Neuroimaging Lab at the University of Calgary scanned young children from the Calgary area again and
again between 2013 and 2024 to describe how the brain develops in early childhood and how that relates to cognitive and
behavioral development. A first release of T1-weighted, diffusion, perfusion and resting-state fMRI data was published
on OSF and described in a 2020 data descriptor. The current BIDS release on the Canadian Open Neuroscience Platform
(CONP) extends and replaces it, and the files are downloadable from OSF without an account.

## Composition

Release 1.0 holds 143 children (72 girls, 71 boys) with 679 scan sessions; each child has between 1 and 27 sessions in
participants.tsv. Ages range from about 2 to 13 years, and the mean age at the first session is 4.0 years. All children
have T1-weighted and diffusion scans, 142 have T2-weighted images, 140 have arterial spin labeling and 126 have
resting-state fMRI. Diffusion data were taken at b=750 for every child and at b=2000 for 111 children. Inhomogeneous
magnetization transfer (ihMT) images are included for part of the cohort. participants.tsv adds sex, age, household
income, caregiver education and handedness for every session. NEPSY-II, Woodcock-Johnson IV and parent questionnaire
scores are not in the download and are available by email.

## Acquisition

Every scan was done on the same GE 3T Discovery MR750w with a 32-channel head coil at the Alberta Children's Hospital.
Children were not sedated and either watched a movie or slept. The earlier release used a BRAVO T1-weighted sequence,
pseudo-continuous 3D ASL, single-shot spin-echo EPI diffusion with 30 directions and passive-viewing EPI fMRI. Children
were first invited back every six months and later once a year.

## Known limitations

Recruitment excluded complicated or premature births, diagnosed developmental or psychiatric conditions and prior
neurosurgery, yet participants.tsv flags a developmental disorder at some session for 21 children. Not every session
contains every sequence, because of time limits and motion. The descriptor of the first release reports 126 children
and 431 sessions, so its numbers do not match the current release. The BIDS dataset_description.json names PDDL as
license while the OSF project and the CONP metadata state CC BY 4.0.

This release holds the imaging data of a Caltech and UCLA study by John O'Doherty's group on how people differ in
the way they learn from rewards. Healthy adults played a variant of the two-step task, a sequential choice game that
separates model-based planning from model-free habit-like learning, while their brains were scanned with fMRI. The
imaging data sit on OpenNeuro as ds007474 under CC0. Event timings and behavioral responses are on OSF
(doi:10.17605/OSF.IO/CTFZD), and task and analysis code on GitHub. The data suit work on reward learning, value
signals in the striatum and prefrontal cortex, and brain-behavior links across individuals.

## Composition

189 adults were scanned. Every subject has a T1-weighted and a T2-weighted structural image, two task fMRI runs with
single-band reference images, and a pair of opposite phase-encoding field maps per run. One subject lacks the field
maps of the first run. Participants were recruited in greater Los Angeles at ages 18 to 65 and screened by a
psychiatrist; people reporting substance use, anxiety or depressive disorders, or psychiatric medication, were not
included. The two-step task was paired with a second task on habits in the same session, and the subject id records
whether the two-step task came first or second. Five subjects saw only state-contingent rewards. The paper analysed
179 of the 189 after excluding 10 for head motion; of those 179, 105 were female and the mean age was 30.4 years.
Sex and age per subject are not part of the OpenNeuro release.

## Acquisition

All scans come from one Siemens Prisma 3T with a 32-channel head coil at the Caltech Brain Imaging Center.
Functional runs use multiband EPI (factor 4) with 2 mm isotropic voxels and TR 1.12 s. T1w and T2w images are 0.9 mm
isotropic. Data are organized in BIDS.

## Annotations

There are no image labels. The derivatives folder holds group-level SPM t-maps for model-based and model-free value
and prediction error regressors.

## Known limitations

- Single site and scanner, and a screened healthy sample, so results may not transfer to clinical populations.
- No participants.tsv, so demographics cannot be matched to subjects.
- Behavioral data needed to model the task are hosted separately on OSF.

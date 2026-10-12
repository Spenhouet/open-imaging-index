This OpenNeuro dataset follows the brains of school children as they do simple arithmetic. A lab at Northwestern
University recruited children from schools around Chicago, deliberately including some who find math hard, and
scanned them at about 11 years of age while they verified single-digit multiplication and subtraction problems. Two
localizer tasks, a written rhyming judgment and a dot numerosity comparison, map verbal and quantity regions in the
same children. About two years later part of the group was scanned again with the same protocol. Snapshot 1.0.0 went
public in 2018; the current snapshot 1.3.1 (March 2021) is released under a CC0 waiver.

## Composition

The first time point holds 132 typically developing children, 70 girls and 62 boys, aged 8.4 to 15.0 years (mean
11.3). 63 of them returned for a second scan at a mean age of 13.4 years, giving 195 imaging sessions. Each session
has one T1-weighted image and up to seven functional runs: two each for multiplication, subtraction and numerosity
and one for rhyming, 1,360 runs in all. Twenty more children gave only behavioural data at the second time point.
Phenotype files hold standardized math, reading, intelligence, working memory and attention scores per time point
and a parent questionnaire on development and family background. MRIQC image quality tables are in the derivatives.

## Acquisition

Scans were taken on a Siemens 3T TIM Trio with a 32-channel head coil. The structural image is an MPRAGE at 1 mm
isotropic resolution. Functional runs are gradient-echo EPI with a 2 s TR, 20 ms TE, 1.7 x 1.7 x 3 mm voxels over 32
slices and GRAPPA factor 2. Children practised in a mock scanner about a week before. Faces were removed with
mri_deface, and 81 images that kept facial detail were masked again after registration to a template.

## Annotations

There are no image annotations. Event files list per-trial stimuli, onsets, condition, accuracy and response time.

## Known limitations

- Only raw data is shared, and no run was excluded for motion.
- 133 functional runs have a different number of volumes than planned.
- Some trials carry an accuracy coding error and are marked "err" in the event files.
- In one numerosity and one subtraction run the response window for control trials was only 800 ms.
- Left-handedness was an exclusion criterion, yet participants.tsv codes one child as left-handed.

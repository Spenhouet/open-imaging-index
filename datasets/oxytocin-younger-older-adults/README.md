This dataset comes from a randomized, double-blind, between-subject trial (NCT01823146) run by Natalie Ebner's lab at
the University of Florida. Healthy younger and older adults sprayed a single 24 IU dose of oxytocin or a placebo into
their nose and were then scanned, to test how the neuropeptide changes brain networks, cognition and social behavior
with age. Marilyn Horta, Rebecca Polk and Natalie Ebner released the imaging and phenotype data on OpenNeuro as
ds004725 under CC0 in August 2023 and described it in a Data in Brief article.

## Composition

The release holds 87 adults: 44 younger (18 to 31 years) and 43 older (63 to 81 years). The design crossed age group,
sex and treatment. In the participants table, 45 are women and 42 men, and 45 received oxytocin and 42 placebo. Every
subject has one T1-weighted scan and one resting-state functional run. A phenotype table adds the Telephone Interview
for Cognitive Status, the Digit Symbol Substitution Test, the Rey Auditory Verbal Learning Test, medication and
contraception use, menstrual cycle phase, plasma oxytocin and vasopressin levels, and ApoE genotype from saliva.
Demographics include handedness, education, ethnicity and body mass index.

## Acquisition

Data were collected between August 2013 and October 2014 on a 3 T Philips Achieva with a 32-channel head coil at the
McKnight Brain Institute. Scanning began about 45 minutes after the spray. The T1-weighted image is a sagittal
MPRAGE at 1 mm isotropic resolution. The resting-state run is gradient-echo EPI with TR 2 s, TE 30 ms, 3 mm isotropic
voxels and 240 volumes, recorded with eyes open on a fixation cross about 70 to 90 minutes after dosing. Images were
defaced before sharing.

## Annotations

There are no image annotations. Treatment group is given per subject.

## Known limitations

- Task fMRI runs from the same sessions are not part of this release.
- Participants who missed the resting-state scan, the last one in the session, were left out, as were files lost to
  technical problems.
- Only white, English-speaking adults from the Gainesville area were enrolled, and the sample has no middle-aged
  adults.
- Two subjects (sub-11001 and sub-12000) have slightly different resting-state parameters, given in their own
  sidecar files.

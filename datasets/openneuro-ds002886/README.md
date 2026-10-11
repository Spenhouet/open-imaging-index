This OpenNeuro dataset records the brains of school-aged children while they solve short logic problems. A lab at
Northwestern University scanned children aged about 8 to 15 years as they judged whether a conclusion followed from
three premises, in two task variants: set-inclusion problems (syllogisms) and linear-order problems (transitive
reasoning). A battery of standardized cognitive, reading and math tests comes with the scans. Snapshot 1.0.0 was
released in June 2020, and the current snapshot 1.1.0 (August 2021) adds race and ethnicity and is published under a
CC0 waiver.

## Composition

The release holds 56 right-handed, native English speaking children, 32 girls and 24 boys, with a mean age of 11.2
years at the scan (range 8.47 to 15). Each child has one T1-weighted image and task fMRI from a single imaging
session. Each task was split into two runs, giving 196 functional runs in total. Two years later 45 children came
back for repeat cognitive testing only; those scores are in the phenotype files, but no new images were taken for
this dataset. Children also took part in a separate arithmetic study by the same lab that shares participant labels
and structural images.

## Acquisition

All images come from one Siemens Trio 3T scanner with a 16-channel head coil. Structural images are 1 mm isotropic
MPRAGE. Functional runs used single-shot EPI with a 2 s TR, 20 ms TE and 1.7 x 1.7 x 3 mm voxels across 32 slices.
Trials were self-paced, so run length varies. Children practised in a mock scanner beforehand. Faces were removed from
the structural images with FreeSurfer's mri_deface, followed by a manual mask where needed.

## Annotations

There are no image annotations. Event files give per-trial onsets, condition, accuracy, response time and the
premise and conclusion text.

## Known limitations

- Runs in which more than 25% of volumes moved over 1.5 mm between volumes were removed, so task coverage varies.
- Children with neurological or psychiatric history, prematurity or MRI contraindications were excluded.
- Acquisition dates are shifted to protect privacy.

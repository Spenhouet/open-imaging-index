This OpenNeuro dataset shares raw brain MRI from GRMPY, a single-site study at the University of Pennsylvania by the group of
Theodore Satterthwaite and funded by grant R01MH107703. Participants were enrolled in three groups: young people
with irritability, people with borderline personality disorder and typically developing peers. The release pairs
multimodal imaging with clinical diagnoses, n-back task performance and many symptom and cognition questionnaires.
Snapshot 1.0.0 was published in August 2026 under a CC0 waiver. The dataset README contains only a title, so the
study aims are not described in the release itself.

## Composition

The release contains 231 participants with one imaging session each: 136 in the irritability group, 60 typically
developing and 35 in the borderline personality disorder group. There are 140 female, 90 male and one participant of
another sex, aged 12.6 to 30.9 years (mean 22.0). The participants file holds group, age, sex, race, ethnicity,
education, parental education, body mass index, binary DSM diagnostic flags (with remission status) and summary
scores of the fractal n-back task. A phenotype folder adds anxiety, depression, mania, anhedonia, sleep, substance
use and puberty questionnaires and the Penn Computerized Neurocognitive Battery. Every participant has a T2-weighted
image, a time-of-flight angiogram and resting-state fMRI; 230 have a T1-weighted image, 214 arterial spin labeling and
177 diffusion imaging.

## Acquisition

All sidecars checked report a Siemens Prisma at 3 T at the University of Pennsylvania. The protocol includes a 1 mm
MPRAGE T1-weighted image, a sagittal 3D SPACE T2-weighted image, a 3D multi-slab time-of-flight angiogram with
projection images in three planes, multi-shell diffusion imaging (117 directions), arterial spin labeling with M0
scans, multiband and single-band resting-state runs, a fractal n-back working memory task (199 participants) and a
face task (48 participants). Field maps are included. Anatomical images are defaced or refaced.

## Annotations

There are no image annotations. Derivatives hold group-level n-back activation maps and FreeSurfer-based outputs.

## Known limitations

- No data descriptor or study paper is linked from the release, and the README gives no study design.
- Diagnostic flags are missing for 12 participants, and group membership does not match diagnoses one to one: only
  15 of the 35 borderline personality disorder group members carry that diagnostic flag.
- The face task covers only 48 participants, and diffusion imaging is missing for 54.
- Acquisition parameters vary between participants, recorded as variant acquisition labels in the file names.

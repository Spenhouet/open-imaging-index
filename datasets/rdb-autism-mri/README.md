The Robert Debré Hospital autism MRI cohort is a set of brain scans collected at Robert Debré Hospital (AP-HP) in
Paris by its child and adolescent psychiatry department together with the Institut Pasteur. It has not been released.
Its only description as a whole comes from Traut et al. (2022), who used it as an unseen external site in the IMPAC
challenge, where teams built models to predict an autism diagnosis from MRI. The other challenge data came from ABIDE I
and II.

## Composition

The cohort holds 247 people: 49 with autism spectrum disorder and 198 controls. The groups differ a lot in age and sex.
Autistic participants were mostly children and adolescents (mean age 14.2, range 4.7 to 43.7, 39 male and 10 female),
while controls were mostly adults (mean 32.4, range 4.0 to 70.8, 85 male and 113 female). Recruitment was family-based:
107 participants are probands and 140 are relatives, and 134 of the controls are relatives. Cognitive level was rated
by clinical judgement backed by IQ tests and was normal in 227 people, borderline in 10 and delayed in 9. 56 of the 247
subjects are also part of ABIDE II.

## Acquisition

All scans were acquired on a 1.5 T scanner, unlike the 3 T scanners of the other challenge sites. The paper does not
name the scanner vendor or give sequence parameters. The challenge data, this site included, consisted of anatomical MRI
and resting-state functional MRI, processed with FreeSurfer, FSL and AFNI. Diagnoses were supported by the ADI and ADOS instruments alongside clinical assessment.

## Annotations

No image annotations. Labels are diagnosis (autism or control), age, sex and family status.

## Known limitations

- Not shared. The images stay with the holders, the paper's data availability statement covers only the public ABIDE
  part, and no access process or terms are published.
- Age and sex are strongly confounded with diagnosis, and many controls are relatives of autistic probands.
- The paper gives no per-subject breakdown of which contrasts are available.
- 56 subjects overlap with the ABIDE II IP_1 collection, so pooled analyses must remove duplicates.

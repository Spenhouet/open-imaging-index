This OpenNeuro release (ds003653) holds the structural MRI of a University of Pittsburgh study on cortical myelin in
unipolar depression. The authors estimated intracortical myelin as the ratio of T1-weighted to T2-weighted signal,
averaged it over the 360 regions of the Glasser atlas, and used elastic net regression with linear discriminant
analysis to classify patients versus controls. The release is part of a longer-running longitudinal study and covers
participants who were scanned and passed quality checks by January 2021. The data are shared under a CC0 waiver.

## Composition

The release has 87 right-handed adults aged 19 to 44 years (65 women, 22 men). At baseline, 47 were healthy controls
with no personal or family psychiatric history, 26 had major depressive disorder and 13 had persistent depressive
disorder. One further participant was a control at baseline and was later diagnosed with major depression; this person
also has a 6-month follow-up session and was left out of the main analysis. Every session has one T1-weighted image,
one T2-weighted image and a pair of spin-echo field maps. The participants table adds diagnosis, number of comorbid
diagnoses, a psychotropic medication load score and an IQ estimate from the National Adult Reading Test.

## Acquisition

All scans come from one 3 T Siemens Prisma scanner with a 64-channel head coil at the University of Pittsburgh/UPMC
Magnetic Resonance Research Center. The T1-weighted image is an MPRAGE with 0.8 mm isotropic voxels, and the
T2-weighted image also has 0.8 mm isotropic voxels. Field maps were acquired in opposite phase-encoding directions at 2
mm resolution. Data were organized with the ReproIn naming scheme, converted with heudiconv and dcm2niix, and defaced
before release; an extra file lists the defacing method per subject.

## Known limitations

- Single site and scanner, and a modest sample with about three women to every man.
- Only participants who passed quality review are included. The paper starts from baseline data of 55 controls and 50 patients and lists exclusions for
  incidental findings, artifacts, diagnosis changes and poor myelin maps.
- Only one participant has a follow-up session, so the release is effectively cross-sectional.
- The release has no derived myelin maps and no functional or diffusion images.

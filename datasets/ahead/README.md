A 7 tesla structural MRI collection from the University of Amsterdam, made to study the small, iron-rich nuclei of the
subcortex across adult life. Every participant had one multi-echo MP2RAGE scan (MP2RAGEME), from which the authors
derived a set of perfectly aligned quantitative maps. The release also holds group-level probability maps of five basal
ganglia structures and multimodal templates in MNI space. A companion record of the raw k-space for part of the cohort is
listed separately.

## Composition

The database has 105 healthy adults (60 women, 45 men). One further volunteer was scanned but left out because of poor
image quality. Participants were recruited through the Dutch Parkinson Foundation's channels and the University of
Amsterdam, with self-reported health and an age of 18 to 80 years. Each age band from 31 to 80 holds at least six men and
six women; the 18 to 30 band is larger because scans of young adults from other projects with the same sequence were
added. Sex and age band per subject are given in a participants file; exact ages are not shared.

## Acquisition

Scans were run on a Philips Achieva 7T with a 32-channel head coil at the Spinoza Centre in Amsterdam. The MP2RAGEME
sequence records a first inversion at one echo and a second inversion at four echoes, at 0.7 mm isotropic acquired
resolution (reconstructed 0.64 x 0.64 x 0.7 mm), in about 20 minutes. From it come T1-weighted images, T1 and R1 maps,
T2* and R2* maps and susceptibility maps (QSM). No motion correction was applied. Images are skull-stripped NIfTI files in
a folder layout close to BIDS. Version 2 (2022) adds the magnitude and phase source images of each inversion and echo.

## Annotations

Raters outlined the subthalamic nucleus, substantia nigra, red nucleus and both globus pallidus segments on both sides
in every subject. Only the averaged probability maps and average masks in MNI space are released, not the individual
delineations.

## Known limitations

- Age is given only in bands of about ten years.
- All scans come from one scanner and one site.
- Skull stripping removes the face but also all tissue outside the brain mask.

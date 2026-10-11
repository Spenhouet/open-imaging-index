This OpenNeuro release holds the baseline resting-state scans from a Novosibirsk study of brain network connectivity in
mild to moderate depression. Dmitry Bezmaternykh, Mikhail Melnikov and colleagues compared functional connectivity
between independent components, such as the default mode and executive control networks, in patients and healthy
volunteers, and followed subgroups through psychotherapy or fMRI neurofeedback. Each participant contributes one
eyes-closed resting-state BOLD run and one T1-weighted anatomical image, shared in BIDS under CC0. It suits work on
resting-state markers of depression in a small single-site sample.

## Composition

72 adults: 51 outpatients diagnosed with a mild or moderate depressive episode or dysthymia under ICD-10, and 21 healthy
volunteers. 53 are women and 19 men. Ages in the participants table run from 19 to 55, with a mean of about 33 in both
groups. Every subject has one T1w and one BOLD run; there are no session folders. The participants table carries ICD-10
code, Raven IQ, Beck and Zung depression scores, alexithymia, social desirability, attachment and rumination scales.
MADRS, the Hospital Anxiety and Depression Scale and handedness are filled in mainly for the later-recruited patients.

## Acquisition

All scans come from one Philips Ingenia 3 T scanner at the International Tomography Center in Novosibirsk. The
functional run is a single-shot T2\*-weighted echo planar sequence with 2 x 2 x 5 mm voxels, TR 2500 ms, TE 35 ms,
flip angle 90 degrees and 25 slices; the dataset README gives 100 volumes per run. Participants lay still with eyes
closed. The anatomical image is a 3D T1-weighted turbo field echo with 1 mm isotropic voxels.

## Annotations

There are no image labels. Group membership and ICD-10 codes come from clinical diagnosis, with questionnaire scores as
phenotype.

## Known limitations

- The repeat scans of the 29 patients followed over 2 to 3 months, with or without treatment, are not part of this
  release.
- The paper excluded one patient for head motion and one for scanner artifacts, but does not say which subjects.
- The paper describes a 6 minute eyes-closed instruction, while 100 volumes at TR 2.5 s cover a little over 4 minutes.
- Single site, single scanner, and a modest number of controls.
- One patient has no ICD-10 code in the participants table.

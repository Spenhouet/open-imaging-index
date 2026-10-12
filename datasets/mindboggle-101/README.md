Mindboggle-101 pairs T1-weighted brain MRI from 101 healthy people with cortical labels that a trained rater
corrected by hand. Arno Klein and Jason Tourville built it within the Mindboggle project so that labeled brains could
serve as atlases, as a normative reference for brain shape, and as training and test data for automated
registration and labeling methods. It also introduced the Desikan-Killiany-Tourville (DKT) cortical protocol.

## Composition

The 101 people come from nine groups (paper, Table 1): 20 from the OASIS test-retest sample, 21 from the Kirby
Multi-Modal Reproducibility Resource plus 2 people scanned later on the same protocol at 3 T and 7 T, 20 from the
Nathan Kline Institute test-retest set, 22 from the NKI/Rockland Sample, 12 from a Human Language Network study, the
Colin27 template, a pair of identical twins and one further volunteer. Five people were scanned for this dataset.
Ages across the groups range from 19 to 61 years; 57 are male and 44 female. Each subject folder holds the
T1-weighted image, a skull-stripped copy, label volumes and their affine registration to MNI152 space. Separate
archives hold labeled surfaces (VTK) and Mindboggle shape tables.

## Acquisition

The T1-weighted images were taken from publicly shared studies, chosen for image quality and for being part of a
multi-modal acquisition. Scanners and protocols differ by source group and are documented in the scan information
archive. All images went through FreeSurfer recon-all (version 5.1.0, OASIS group 5.0.0) on a fixed computer setup.

## Annotations

FreeSurfer's DK atlas produced initial cortical labels for 54 brains and a DKT atlas trained on the first 40
labeled brains did so for the other 47. A rater at Neuromorphometrics edited
them on the surfaces following the DKT protocol, which has 31 regions per hemisphere, and Jason Tourville checked
and approved every edit. Labels were then carried into the gray matter volume. The OASIS group additionally has
manually labeled subcortical structures.

## Known limitations

The cohort is small, young and drawn from a few sources. Label errors in several subjects were corrected in the
March 2019 release, so earlier copies differ. Licensing statements differ between sources: the 2012 paper names CC
BY-NC-SA 3.0, while the current website and repositories state CC BY 4.0, with CC BY-NC-ND 3.0 for the OASIS
subcortical labels. The source images originate from other studies with their own terms.

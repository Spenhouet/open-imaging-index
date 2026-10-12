This entry covers a pilot study from the Centre for Clinical Brain Sciences at the University of Edinburgh. While a
1.5T research scanner was being replaced by a 3T scanner, healthy adult volunteers were imaged on both machines back to
back, so that long-term studies could be carried over between field strengths. The release on Edinburgh DataShare
uses these paired scans to ask how enlarged perivascular spaces (PVS) measured at 1.5T compare with those measured at
3T, and whether ComBat or z-score harmonisation closes the gap. The MRI images are not part of the release.

## Composition

The study README reports 130 volunteers recruited through local networks, aged 20 to 80 (mean 45.44, SD 13.71), 81 of
them women, with no medication, no chronic disease and no history of brain disease. A few had hypertension, high
cholesterol or a heart condition. The DataShare abstract states that brain MRI from 100 of these adults was analysed,
and the released participant table has 100 rows, each with a 1.5T and a 3T protocol. Sex and age are given only for the
130 recruited.

## Acquisition

Scans were done at the Edinburgh Imaging Facility on a 1.5T GE Signa HDx with an 8-channel head coil and a 3T Siemens
Prisma with a 32-channel head coil. Volunteers were randomised to one of four main protocol families with variations.
The protocol table lists T1-weighted, T2-weighted, FLAIR and susceptibility-weighted imaging, with nearly isotropic
T1-weighted voxels of 1 to 1.3 mm.

## Annotations

A trained clinician rated PVS in the basal ganglia and centrum semiovale on T1- and T2-weighted images with a
published visual scale, blind to scanner and protocol, and repeated ratings for intra-observer agreement. PVS were
also segmented automatically on T1-weighted images with two filters (Frangi and RORPO), and counts, volumes and
lengths were derived per region. The release holds these scores and measurements before and after harmonisation, the
protocol pairing per volunteer, and the Matlab scripts and figures.

## Known limitations

- MRI images and PVS masks are not shared, and no terms for them are published.
- Sex and age are reported for the 130 recruited volunteers, not for the 100 analysed.
- Single site; the 1.5T and 3T protocols differ in more than field strength.

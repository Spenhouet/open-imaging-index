This is an in-house MRI collection from Radboud University Medical Center in Nijmegen, the Netherlands, used to develop
deep learning detectors of cerebral microbleeds after traumatic brain injury. In trauma, microbleeds are taken as a
marker of traumatic axonal injury, and severe cases can show a hundred or more of them, often in clusters or with a
curvilinear shape. The 2022 paper compares a patch classifier, a segmentation CNN and a 3D U-Net on these data.

## Composition

The text describes 45 patients with moderate or severe TBI (Glasgow Coma Scale 3 to 12), 20 of them scanned at two
timepoints, plus 18 healthy volunteers, for 81 MRI studies in total. Table 1 of the paper lists 46 TBI subjects across
the splits, so the patient count differs by one between text and table. The studies are split into 45 for training
(41 TBI, 4 control), 16 for validation (12 TBI, 4 control) and 20 for testing (10 TBI, 10 control). The data were
collected retrospectively with a waiver of informed consent.

## Acquisition

All scans come from one 3 T Siemens Magnetom Trio. Each study has an SWI scan (TR 27 ms, TE 20 ms, flip angle 15
degrees, 0.98 x 0.98 x 1.00 mm voxels) and a T1 MP-RAGE (1 mm isotropic). Only SWI is used by the deep learning
models.

## Annotations

Training and validation studies have voxel segmentations of the full blooming extent of each microbleed. An
experienced neuroradiologist sorted the output of an earlier computer-aided detection system into definite, possible
and false positive microbleeds and added missed ones, and a medical student then outlined each lesion under her
supervision. For 10 test studies, six observers of differing experience placed points on definite and possible
microbleeds; region growing from these points and a majority vote give the test reference. Agreement between
observers was low (Fleiss' kappa 0.19 to 0.24).

## Known limitations

- Not publicly available. The paper announced a Zenodo release and a challenge, but neither could be found.
- One scanner, one SWI protocol and one centre.
- Only moderate and severe TBI; mild TBI is not included.
- Small test set with low inter-observer agreement on what counts as a microbleed.

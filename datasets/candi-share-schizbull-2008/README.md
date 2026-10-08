This collection holds the structural brain MRI behind a 2008 study of limbic volumes in young people with early-onset
bipolar disorder or schizophrenia spectrum illness. The Child and Adolescent NeuroDevelopment Initiative (CANDI)
released it in 2012 on NITRC as part of its CANDI Share data, with preprocessed images and the matching
segmentations. It suits work on pediatric brain segmentation and on comparing psychiatric groups with controls.

## Composition

There are 103 participants, each with one MR session:

| Group                                  | Subjects |
| -------------------------------------- | -------- |
| Healthy controls                       | 29       |
| Schizophrenia spectrum                 | 20       |
| Bipolar disorder with psychosis        | 19       |
| Bipolar disorder without psychosis     | 35       |

The schizophrenia group includes schizoaffective disorder. The open subject listing on the NITRC image repository
gives sex (57 male, 46 female), age in whole years, handedness and diagnostic group for every subject.

## Acquisition

All scans were acquired on a 1.5 Tesla GE Signa scanner at the McLean Hospital Brain Imaging Center. Participants
were recruited through McLean Hospital, Cambridge Health Alliance and professional and patient advocacy groups. The study
protocol included a T1-weighted sagittal scout, an axial proton density and T2-weighted double-echo series and a
three-dimensional inversion recovery prepped spoiled gradient coronal series. The release contains one preprocessed
anatomical volume per session (labelled `anat`) in NIfTI format, plus a quality-control snapshot. This index lists
it as T1-weighted, assuming it is the inversion recovery series used for the volumetric analysis.

## Annotations

Each session has a segmentation label map in NIfTI. In the paper, two raters at the Center for Morphometric Analysis
outlined the amygdala, hippocampus, thalamus, caudate, putamen, globus pallidus and nucleus accumbens with the
Cardviews software. A sample label map from the release also contains cerebral cortex, white matter and ventricle
labels, coded with FreeSurfer-style label numbers.

## Known limitations

- The paper gives an age range of 6 to 17 years, while the repository listing records ages from 4 to 16. The
  source of the difference is not documented.
- The repository holds preprocessed images only. The proton density and T2-weighted series from the protocol are
  not part of the release.
- The license is shown as Creative Commons "Attribution" without a version number.
- Small groups from a single site and scanner.

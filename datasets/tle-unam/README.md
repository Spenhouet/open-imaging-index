This dataset holds functional and structural brain MRI from a study at the Instituto de Neurobiología of the
Universidad Nacional Autónoma de México on how brain activity and connectivity relate to cognition in temporal lobe
epilepsy (TLE). Each participant has a T1-weighted scan plus resting-state fMRI and/or fMRI during a Sternberg
working memory task, together with scores from the WAIS-IV intelligence scale and the WMS-IV memory scale. The study
was published in PLoS ONE in 2024, and the data have been on OpenNeuro under CC0 since 2023.

## Composition

The paper and the OpenNeuro release cover 66 people: 31 patients with TLE and 35 healthy controls matched for age
and education. Patients were diagnosed with ILAE criteria at clinics in Mexico City and San Luis Potosí; 19 had a
left and 12 a right epileptogenic focus, and 17 showed mesial temporal sclerosis on imaging. The participants table
lists group, side of TLE, sex, age (17 to 57 years), cognitive index scores, age at onset, antiseizure medication,
hippocampal volumes as a fraction of intracranial volume and flags for the sub-analyses each person entered. Every
subject folder has a T1-weighted image; 65 have a resting-state run and 63 a Sternberg task run with events files.

## Acquisition

All scans were acquired on a 3 T Philips Achieva TX at the National Laboratory for MRI in Juriquilla, Querétaro.
Both fMRI runs used gradient echo EPI with TR 2 s, TE 30 ms and 2×2×3 mm voxels over 34 slices; the resting-state
run has 200 volumes with eyes closed and the task run 190 volumes. The T1-weighted image is a 1 mm isotropic 3D
magnetization-prepared gradient echo scan. In the task, participants memorized lists of 2, 4 or 6 digits and judged
whether a probe digit had been in the list.

## Known limitations

- The paper mentions further structural and diffusion sequences from the same protocol; they are not in this
  release.
- The participants table has 74 rows but only 66 subject folders contain images.
- The paper gives 17 women among the controls, while the participants table lists 26.
- The level labels of the mesial temporal sclerosis column in participants.json (0 = yes, 1 = no) look inverted, so
  that column should be checked before use.
- One scan site and a modest sample; sub-analyses use different subsets.

The Southwest University Longitudinal Imaging Multimodal (SLIM) repository follows healthy Chinese undergraduates
with repeated brain MRI over roughly three and a half years. Jiang Qiu's group at the Brain Imaging Center of
Southwest University in Chongqing collected it between November 2011 and January 2015 and released it through the International Neuroimaging
Data-sharing Initiative (INDI) with a Scientific Data descriptor in 2017. Its narrow age range and long retest
interval make it a resource for test-retest reliability and for tracking brain change in early adulthood.

## Composition

The phenotype files list 594 participants and 1,048 sessions: 580 at the first time point, 240 at the second and 228
at the third. 121 participants have all three sessions. At the first scan the mean age was 20.1 years (range 17
to 27). Each session holds a T1-weighted image, a resting-state
fMRI run and a diffusion scan, with a few sessions missing one of the latter two. Released
behavioral measures include depression and anxiety inventories. QA metrics from the
Preprocessed Connectomes Project protocol and parcellated connectivity matrices (Dosenbach 160 and Shen 268 atlases)
are also provided.

## Acquisition

All sessions used one 3 T Siemens Trio. The MPRAGE has 176 slices of 1 mm isotropic voxels, TR 1900 ms, TE 2.52 ms
and TI 900 ms. The eight-minute eyes-closed resting-state run has 242 EPI volumes of 32 slices, TR 2000 ms, TE 30 ms
and 3.4 x 3.4 x 3 mm voxels with a 1 mm gap. Diffusion was a spin-echo EPI at 2 mm isotropic with 30 directions at
b = 1000 s/mm², repeated three times for 93 volumes in total. Faces were removed from the anatomical images.

## Annotations

There are no image labels. Phenotypes cover age, sex, scan dates and questionnaire scores.

## Known limitations

- Single site and single scanner, and a narrow age range of university students.
- The paper's counts per number of sessions add up to 595 participants, while the phenotype files list 594.
- Fourteen participants have no first-time-point session, so their age is not given.
- Task fMRI was acquired for some participants but is not released, and only part of the behavioral battery is shared.
- Images were released regardless of quality; users apply their own exclusions.
- Some sessions of the first two time points were shared earlier as part of CoRR.

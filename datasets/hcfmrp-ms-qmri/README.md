This entry covers the brain MRI cohort of a retrospective single-center study at the Clinics Hospital of Ribeirão
Preto Medical School, University of São Paulo, Brazil. The authors extracted regional quantitative MRI measures from
patients with clinically confirmed multiple sclerosis and from people without detected neurological abnormalities, and
trained a k-nearest-neighbor classifier to separate the two groups and rank the brain regions and techniques that
contributed most. The images are not public. The paper's figshare record holds only its figures and result tables.

## Composition

Table 1 of the paper lists 144 patients (44 male, 100 female, mean age 41.5) and 203 controls (108 male, 95 female,
mean age 29.3), both aged 7 to 65. Based on the radiology reports, 12% of the patients had lesions of low
destructiveness, 32% moderate and 56% high. Not every person had every acquisition, and some scans were dropped in
quality control, so the per-technique counts in Table 3 are smaller than the cohort.

## Acquisition

All scans were acquired between 2008 and 2014 on a single 3 T Philips Achieva. The study used a 3D T1-weighted scan,
diffusion tensor imaging, a magnetization transfer acquisition and a multi-echo T2 relaxometry acquisition. Fractional
anisotropy and diffusivity maps came from the scanner, while MTR and T2 maps were computed with in-house tools.

## Annotations

FreeSurfer 4.5 with the Destrieux atlas segmented the T1-weighted scans. The authors kept 126 of 166 labels after
merging or dropping small regions, and extracted volume, cortical thickness, diffusion, MTR and T2 values per region.

## Known limitations

- Images, segmentations and regional measures are not shared, and the paper has no data availability statement.
- The abstract reports 124 patients, while the methods text and Table 1 report 144.
- Per-technique counts come from the classification tables and reflect quality exclusions, not the full acquisition
  numbers.
- Patients and controls differ in mean age by about 12 years.

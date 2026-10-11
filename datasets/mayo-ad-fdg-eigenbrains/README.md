This package holds preprocessed FDG-PET scans of 423 patients with cognitive impairment and amyloid plaques, taken
from Mayo Clinic research cohorts in Rochester, Minnesota. It accompanies a 2022 Nature Communications paper that
decomposed the between-patient variation in brain glucose uptake into eigenbrains, a small set of large-scale patterns
that explain about half of that variation and relate to clinical symptoms and functional brain systems. The package
also contains the MATLAB script that rebuilds the first ten eigenbrains from the images.

## Composition

Participants come from the Mayo Clinic Rochester Alzheimer's Disease Research Center and the Mayo Clinic Study of
Aging. Inclusion required a global Clinical Dementia Rating above zero, a PiB amyloid PET SUVR above 1.5 and good
quality MRI, amyloid PET and FDG-PET. The paper reports a median age of 77.4 years and 244 men (57.7%). By global CDR,
274 patients scored 0.5, 106 scored 1, 39 scored 2 and 4 scored 3. Data were collected between 2006 and 2018.

## Acquisition

FDG-PET was acquired on GE PET/CT scanners as four 2-minute frames 30 to 38 minutes after injection, with CT for
attenuation correction. Each scan was registered to the patient's 3 T T1-weighted MRI, warped to an older adult
template, normalized to the pons and smoothed with a 6 mm kernel. The released file is a MATLAB matrix of 423 subjects
by 902,629 template voxels; a companion file holds the information needed to write NIfTI images.

## Annotations

No image labels. The data package does not include clinical variables per subject.

## Known limitations

- Only processed, template-space FDG-PET is shared. The MRI, CT, amyloid PET and raw PET are not included.
- No healthy controls; every subject is amyloid positive and cognitively impaired.
- The ADNI validation cohort of the paper (410 patients) is not part of this package.
- Clinical and further imaging data of the Mayo cohorts are available only on request from the studies.

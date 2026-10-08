TotalSegmentator is a CT dataset built at University Hospital Basel to train a single model that segments most
clinically relevant anatomy in any CT scan. Its labels underpin the widely used open-source TotalSegmentator tool,
and the data are a common pre-training and benchmark set for multi-organ CT segmentation.

## Composition

Version 2.0.1 on Zenodo contains 1,228 CT series, each with one mask file per structure for 117 classes: organs,
vessels, bones (including individual vertebrae and ribs), muscles and, new in v2, structures such as the thyroid,
prostate, sternum, costal cartilages, kidney cysts and appendicular bones. A metadata table gives age, sex, an
anonymized institution letter, study type, scanner, tube voltage, a coarse pathology category and the official
train/validation/test split (1,082 / 57 / 89). The series cover every body region, from head CT angiography to
whole-body trauma scans. A 102-case subset is offered separately for quick exploration.

## Acquisition

Series were drawn at random from the Basel hospital archive for the years 2012, 2016 and 2020, so they reflect
routine practice: native and contrast phases, soft-tissue and bone kernels, dual-energy scans and a wide mix of
pathologies. Most images come from Siemens scanners, with smaller numbers from Philips and GE. All images were
resampled to 1.5 mm isotropic resolution.

## Annotations

Labels were produced iteratively. Existing models and atlas tools gave first drafts, two physicians reviewed and
corrected them, and an nnU-Net retrained on the corrected cases produced better drafts for the next round, until
every case had been manually reviewed. Version 2 also fixed systematic errors in classes such as the femur, hip,
heart, aorta, liver, spleen and kidneys.

## Known limitations

- The v1 paper treats each series as one patient; the v2 release does not state this, so counts here are given as
  series.
- The paper describes v1 (1,204 series, 104 classes); v2 changed the test split size and the class list.
- Most data come from one hospital and one vendor.
- Pathology information is missing for many series and is only a coarse category.

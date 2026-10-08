ACDC is the dataset of the Automated Cardiac Diagnosis Challenge held at MICCAI 2017. It pairs cine cardiac MRI
with expert segmentations and a diagnostic group for every patient, and is one of the standard benchmarks for
segmenting the ventricles and myocardium and for classifying cardiac pathologies from the resulting volumes and
ejection fractions.

## Composition

There are 150 patients, each with one exam, in five groups of 30: normal cardiac anatomy and function, systolic
heart failure after myocardial infarction, dilated cardiomyopathy, hypertrophic cardiomyopathy, and abnormal right
ventricle. The groups were assigned from clinical reports using thresholds on ventricular volumes, ejection
fraction, wall thickness and myocardial mass, and ambiguous cases were left out. The training set has 100 patients
(20 per group) and the test set 50 (10 per group). The test labels were first kept private; the creators now
publish the data and ground truth of both sets. Each patient folder holds the 4D cine sequence, the end-diastolic
and end-systolic frames with their masks, and a small file with group, height, weight and frame numbers.

## Acquisition

Exams come from routine care at the University Hospital of Dijon over six years, on two Siemens scanners, a 1.5 T system and a
3 T Siemens Trio Tim. Short-axis slices from base to apex were acquired with a breath-hold SSFP sequence, usually
5 mm thick, with 28 to 40 frames over the cardiac cycle. Long-axis slices were not included. Data are stored as
NIfTI.

## Annotations

Two experts with 10 and 20 years of experience drew and cross-checked the left ventricular cavity, the myocardium
and the right ventricular cavity at end-diastole and end-systole, reaching consensus when they disagreed.
Papillary muscles are counted as cavity.

## Known limitations

- Single centre, single vendor, small cohort.
- Groups are balanced by design and do not reflect clinical prevalence.
- Age and sex are not part of the public files.
- Slice thickness and gaps vary between exams.

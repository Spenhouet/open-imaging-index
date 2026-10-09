The Sunnybrook Cardiac Data (SCD) is a set of short-axis cine cardiac MRI exams with manual left ventricular
contours, contributed by Perry Radau and colleagues at Sunnybrook Health Sciences Centre in Toronto. It was built
for the Cardiac MR Left Ventricle Segmentation Challenge at a MICCAI 2009 workshop and is now hosted by the Cardiac
Atlas Project under a CC0 public domain dedication. It is used to develop and compare left ventricle segmentation
methods and to measure ejection fraction and myocardial mass.

## Composition

There are 45 patients, one cine exam each, in four groups: 9 healthy, 12 with left ventricular hypertrophy, 12 with
heart failure without infarction and 12 with heart failure after infarction. Heart failure groups have an ejection
fraction below 40%, split by the presence of late gadolinium enhancement; the hypertrophy group has a normal ejection
fraction and an indexed LV mass above 83 g/m2. The patient spreadsheet lists 32 men and 13 women aged 23 to 88. For
the 2009 challenge the exams were split at random into three sets of 15 (training, testing and on-line contest).
The download comes as five DICOM batches plus the contours, LV models and the patient spreadsheet, which maps the
Cardiac Atlas Project ids to the original challenge ids.

## Acquisition

Exams were collected in clinical routine on a 1.5 T GE Signa scanner. Short-axis SSFP cine images were acquired in
breath-holds of 10 to 15 seconds with 20 phases over the cardiac cycle. Six to twelve slices cover the heart from the
atrioventricular ring to the apex, with 8 mm slice thickness, an 8 mm gap, a 320 mm field of view and a 256 x 256
matrix. Images are given without preprocessing after reconstruction.

## Annotations

An experienced cardiologist drew endocardial and epicardial contours of the left ventricle on all slices at
end-diastole and end-systole, with papillary muscles and trabeculations counted as cavity. A second cardiologist
confirmed every contour.

## Known limitations

- Single centre, single scanner and a small cohort.
- Only the left ventricle is contoured, and only at two phases.
- Thick slices with large gaps limit through-plane resolution.
- Group sizes are set by design and do not reflect clinical prevalence.

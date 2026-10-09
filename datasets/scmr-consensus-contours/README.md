The SCMR Consensus Contours dataset is a small reference set of cardiac cine MRI exams built to give a dependable
ground truth for left ventricular myocardial contours. Seven experienced core laboratories of the Society for
Cardiovascular Magnetic Resonance each traced the myocardium on the same exams following their own clinical
protocol, and the Cardiac Atlas Project (CAP) fused these tracings into one consensus contour per slice. The set is
meant for training new readers and for benchmarking automated or manual contouring against expert agreement.

## Composition

The set holds 15 exams: five healthy volunteers, six patients with myocardial infarction, two with heart failure and
two with left ventricular hypertrophy. By the per-case table of the 2015 paper, 11 subjects are male and 4 female,
aged 42 to 77. Requesters receive the DICOM short-axis images, low-resolution PNG snapshots of the consensus contours,
a description of the contour file format, and a CSV listing pathology, vendor, end-diastolic and end-systolic frame
numbers and the study instance UID.

## Acquisition

Exams were acquired with contiguous short-axis steady-state free precession cine slices and two or three long-axis
slices, following SCMR guidelines, on GE, Siemens and Philips scanners. Slice thickness was 8 or 10 mm. Short-axis
series have 10 to 15 slices and 20 to 60 frames per cycle. Images were anonymized and contributed to CAP with
institutional review board approval and written informed consent.

## Annotations

Each reader drew endocardial and epicardial contours on short-axis slices at end-diastole and endocardial contours at
end-systole. Consensus contours were estimated slice by slice with the STAPLE algorithm, and an independent reader
judged all of them clinically acceptable. The consensus contours are not released. Users submit their own contours
and CAP returns a report comparing them with the consensus, including volume, mass and ejection fraction agreement.

## Known limitations

- Only 15 cases, so subgroups have two to six subjects.
- The paper's Methods text gives 4 GE, 5 Siemens and 6 Philips exams, while its per-case table lists 8 GE,
  5 Siemens and 2 Philips.
- Field strength and acquisition sites are not reported.
- The consensus reflects a blend of core lab practices, which differ in where they place contours.

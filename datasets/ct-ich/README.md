CT-ICH is a small head CT collection for detecting and outlining intracranial hemorrhage after traumatic brain
injury. It was gathered by researchers at Florida Atlantic University and the University of Technology in Baghdad
together with radiologists in Babil, Iraq, and published on PhysioNet with a data descriptor that also reports a
U-Net baseline. At release it was presented as the first public head CT set with hemorrhage masks.

## Composition

The study covers 82 patients (46 male, 36 female) admitted to the emergency unit with a head injury, aged from one
day to 72 years with a mean of 27.8; 27 were under 18. Each has one non-contrast CT scan of about 30 to 34 slices.
36 patients have a hemorrhage: intraventricular in 5, intraparenchymal in 16, subarachnoid in 7, epidural in 21 and
subdural in 4, with some slices showing more than one type. 22 have a skull fracture. Slices without hemorrhage
dominate: 2,173 slices are hemorrhage-free against a few dozen to a few hundred per hemorrhage type. The PhysioNet
release contains CT volumes and masks for 75 patients; the volumes of patients 59 to 65 are missing, while the
demographics and label tables list all 82.

## Acquisition

Scans were collected retrospectively between February and August 2018 at Al Hilla Teaching Hospital on a Siemens
SOMATOM Definition AS at 100 kV with 5 mm slices. The DICOM files were converted to NIfTI. Faces were blurred and
overlaid with random noise for de-identification in version 1.3.1, which ships NIfTI files only.

## Annotations

Two radiologists read each scan together without access to clinical history. After agreeing on the diagnosis, they
recorded the hemorrhage types and fractures per slice and drew the hemorrhage regions on windowed images in a
custom Matlab tool. The masks are stored as NIfTI. One scan with a chronic hemorrhage was excluded from the
descriptor's study.

## Known limitations

- Single hospital, single scanner and a young, trauma-only population.
- Some hemorrhage types appear in only a handful of patients, and only one consensus annotation exists per slice.
- Seven of the 82 CT volumes are missing from the release.
- The descriptor names CC BY 4.0, but PhysioNet distributes the data under its Restricted Health Data License.

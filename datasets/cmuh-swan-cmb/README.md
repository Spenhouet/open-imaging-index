This collection of clinical susceptibility-weighted brain MRI comes from China Medical University Hospital in Taichung,
Taiwan. Researchers at the hospital's Artificial Intelligence and Robotics Innovation Center gathered it retrospectively
under institutional review board approval to test whether cerebral microbleed detectors trained on synthetic lesions
transfer to real scans. Microbleed-free exams served as hosts for inserting synthetic microbleeds, and exams with real
microbleeds were used for real-data training and testing. The images are not public.

## Composition

205 MRI examinations: 104 with at least one microbleed and 101 without. The paper splits them into a training set of
78 positive exams (687 lesions) and 75 negative exams, and a hold-out test set of 26 positive (171 lesions) and 26
negative exams. Positive exams were assigned to the two sets by lesion burden (fewer than 5, 5 to 9, 10 or more
microbleeds) so both have a similar mix. The paper does not report patient age, sex, diagnoses or whether any patient
contributed more than one exam.

## Acquisition

All exams are GE SWAN (susceptibility-weighted angiography) from routine clinical practice on five GE systems:
Discovery MR750w, Optima MR450w, Signa HDxt, Signa Architect and Signa Voyager, at 1.5 T and 3 T. In-plane resolution
is 0.43 to 0.51 mm (median 0.47 mm) and slice spacing 0.8 to 1.4 mm (median 1.0 mm). The count per field strength is
not given.

## Annotations

An experienced neurologist drew voxel-wise masks of every microbleed between 2 and 10 mm in diameter on the SWAN
images. Negative exams were checked to contain no visible microbleeds and have no masks.

## Known limitations

- Not publicly available. The code repository asks interested researchers to contact the corresponding author about
  collaboration; no data terms are published.
- One annotator, single hospital, one vendor.
- No demographic or clinical information is reported.

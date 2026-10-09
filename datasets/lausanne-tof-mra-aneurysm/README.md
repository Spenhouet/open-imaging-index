This cohort comes from the Department of Radiology of Lausanne University Hospital (CHUV) in Switzerland. It pairs
clinical time-of-flight MR angiography with aneurysm annotations and was released on OpenNeuro as ds003949 in 2021,
with a revised snapshot (1.0.1) in 2022, under a CC0 waiver. The authors built it to train and test automated
detection of unruptured intracranial aneurysms and released their code and model weights alongside it.

## Composition

The release holds 284 adults: 157 patients with at least one unruptured intracranial aneurysm and 127 people in whom
none was found. Together the patients carry 198 aneurysms, 178 saccular and 20 fusiform, most of them 7 mm or smaller.
The paper reports 170 women and 114 men with a mean age of 51 years; patients were older on average than controls.
Eleven subjects were scanned more than once, giving 296 sessions. Each session has a TOF-MRA volume and a T1-weighted
volume. The participants table holds only the group and the exam date, so age and sex are not available per subject.

## Acquisition

Subjects were drawn retrospectively from consecutive clinical TOF-MRA exams between 2010 and 2015. All TOF scans used
a 3D gradient echo sequence with partial Fourier. According to the image sidecars, 239 TOF scans were acquired at 3T
and 57 at 1.5T, on six Siemens models (Verio, Skyra, Trio, Symphony, Aera, Prisma) and a Philips Intera. Data are
de-identified and organised in BIDS.

## Annotations

A radiologist with two years of neuroimaging experience labelled the aneurysms and a senior neuroradiologist checked
the labels. For 246 subjects the labels are spheres drawn around each aneurysm, oversized on purpose to save time;
the remaining 38 subjects have voxel-wise masks. The derivatives folder also contains skull-stripped and
bias-corrected volumes, registration parameters and a vessel atlas mapped to each TOF scan.

## Known limitations

- Single centre, clinical population; patients with ruptured or treated aneurysms or other vascular disease were
  excluded, as were fully thrombosed aneurysms and infundibula.
- Most masks are spherical weak labels, not exact aneurysm outlines.
- Repeat sessions of the same person need to be kept in one split to avoid leakage.
- Scanner models and field strengths vary across sessions.

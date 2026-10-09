This database holds routine lumbar spine MRI from patients of the Klinikum rechts der Isar in Munich, with manual masks
of the lumbar vertebral bodies and intervertebral discs. It was assembled by radiologists at the Technical University of
Munich together with Eindhoven University of Technology. Its purpose is to train and test segmentation methods that have
to cope with images from different scanners and pulse sequences, rather than from one tuned protocol.

## Composition

There are 34 adult patients (20 female, 14 male) aged 30 to 88 years. They were scanned for low back pain or
radiculopathy, follow-up after resection of a spinal tumour, known cancer with suspected spinal metastases,
spondylodiscitis or other inflammation, and in one case a sacral fracture. Twenty-one patients have a second session on
another scanner model or with another protocol, between two weeks and five years after the first, which gives 55
sessions. Every session has a non-contrast sagittal T1-weighted series. Depending on the session there are also
contrast-enhanced T1-weighted, fat-saturated contrast T1-weighted, T2-weighted, STIR and T2-weighted Dixon series; for
Dixon the water, fat and in-phase images are separate files. A spreadsheet lists sex, age, indication, scanner and
sequences per patient.

## Acquisition

Scans date from August 2014 to October 2019, partly from the hospital's own scanners and partly transferred from other
institutions. About 71% of sessions come from Philips systems (Achieva, Ingenia, Elition), about 27% from seven
Siemens models and one from a GE Signa. Each patient has at least one Philips session with a reference sagittal T1 and
a T2 Dixon turbo spin echo protocol at roughly 0.8 x 1 x 3 mm voxels. All images are NIfTI files.

## Annotations

A medical doctor outlined the vertebral bodies L1 to L5 and the discs L1/2 to L4/5 by hand in the sagittal plane of the
non-contrast T1 images in MITK, under the supervision of a radiologist with eleven years of experience. Posterior
elements are excluded. The other series of each patient were registered to that T1 image and resampled into its space,
so every volume comes with nine binary masks, one per structure.

## Known limitations

- Small cohort from one hospital, with mixed clinical indications.
- Field strength is not reported.
- Labels exist only in the T1 space; other series were resampled with linear interpolation, which smooths them.
- One annotator; no inter-rater agreement is given.

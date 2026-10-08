ATLAS (Anatomical Tracings of Lesions After Stroke) is a collection of stroke brain MRIs with hand-drawn lesion
masks, assembled at the University of Southern California with the ENIGMA Stroke Recovery working group. Release 2.0
replaced the 304-subject v1.2 and was built to give lesion segmentation methods a larger, more varied training set
and a proper held-out test. It was part of the ISLES challenge at MICCAI 2022.

## Composition

The release covers 1,271 people, each with a single T1-weighted scan. Of these, 655 training cases come with lesion
masks and 300 test cases come as images only, both drawn at random from the same 33 cohorts. A further 316 cases
from 11 other cohorts form a generalizability set that is never released and exists only for challenge evaluation.
Training metadata give scanner information per cohort, lesion count and location, and days since stroke where
known. Age, sex and clinical outcomes are not shared. Nine repeat scans from v1.2 were dropped so that every subject
appears once.

## Acquisition

Scans were collected for different research studies at 1.5T and 3T, mostly at 1 mm resolution or better, and range
from the first day after stroke to the chronic stage. Each cohort used one scanner and protocol, with two
exceptions. INDI hosts a version registered to MNI-152 space, bias-corrected and defaced; the native-space images
are kept at ICPSR under stricter terms.

## Annotations

Trained team members traced lesions in ITK-SNAP following a standard protocol, excluding white matter
hyperintensities and perivascular spaces where possible. Two further team members reviewed every mask, and the
original tracer made any corrections. For some subjects the contributing site supplied a mask that the team then
edited.

## Known limitations

- Each lesion has only one tracing, so inter-rater agreement is unknown.
- Cohorts come from research studies with their own inclusion criteria and may not represent all stroke patients.
- No demographics are provided.
- Release 2.0 has since been superseded by R2.1 (test masks released) and R3.0 (1,453 scans).

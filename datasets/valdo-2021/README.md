VALDO 2021 ("Where is VALDO?") was a MICCAI 2021 challenge run by University College London and Erasmus MC on the
automated detection and segmentation of three small markers of cerebral small vessel disease on brain MRI: enlarged
perivascular spaces (Task 1), cerebral microbleeds (Task 2) and lacunes (Task 3). The training data is public on
Zenodo; the validation and test cases stayed with the organisers.

## Composition

Cases come from three population cohorts: SABRE (London, UK), the Rotterdam Scan Study (RSS, Netherlands) and ALFA
(Barcelona, Spain, cognitively normal relatives of people with Alzheimer's disease). Tasks 1 and 3 use SABRE and RSS
with 40 training and 66 test cases each. Task 2 adds ALFA and has 72 training and 147 test cases. Each task also had
5 RSS validation cases. According to the challenge design document, the RSS training subjects are the same in all
tasks and the training subjects of Tasks 1 and 3 are identical, so the 152 training cases are not 152 different
people. No age, sex or clinical information is shipped with the images.

## Acquisition

SABRE was scanned on a Philips 3T system, RSS on a dedicated GE 1.5T scanner and ALFA on a GE Discovery 3T. Tasks 1
and 3 provide T1w, T2w and FLAIR registered to T1w space. Task 2 provides T2*-weighted gradient echo with T1w and T2w
registered to T2* space; slice thickness of the T2* ranges from 0.8 mm (RSS) to 3 mm (SABRE, ALFA). All images were
defaced and RSS scans were bias-field corrected. Files are NIfTI.

## Annotations

Task 1 labels are mixed: SABRE slabs segmented by two raters, six RSS cases segmented in selected slices and regions,
and 28 RSS cases with counts only, plus region masks and per-region count tables. Task 2 has full-brain microbleed
segmentations for every case, following BOMBS or the Rotterdam protocol. Task 3 has full-brain lacune segmentations
from two raters for every case.

## Known limitations

- Training sets are small and the test labels are not public.
- Task 1 training labels are weak (counts or partial segmentations), and the two cohorts used different PVS criteria.
- The Zenodo license field says CC BY-NC 4.0 while the record text and paper say CC BY-NC-SA 4.0.
- Overlap between the Task 1 and Task 3 test sets is not reported, so no total subject count is given.

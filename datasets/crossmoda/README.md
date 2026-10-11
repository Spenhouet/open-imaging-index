crossMoDA is a MICCAI challenge series (2021, 2022, 2023) run by King's College London on unsupervised
cross-modality domain adaptation. Participants get annotated contrast-enhanced T1 (ceT1) scans and separate,
unannotated high-resolution T2 (hrT2) scans of other patients, and must segment the vestibular schwannoma and both
cochleas on hrT2. The 2022 edition added Koos grade classification; the 2023 edition split the tumour into intra- and
extra-meatal parts and added routine surveillance scans from several UK hospitals. This entry counts only the
training and validation data the challenge released; test sets were kept private.

## Composition

The 2021 release holds the 242 London patients of [Vestibular-Schwannoma-SEG](../vestibular-schwannoma-seg/), re-split
into 105 annotated ceT1, 105 hrT2 training and 32 hrT2 validation scans. The 2022 release keeps these and adds 242
patients from Elisabeth-TweeSteden Hospital, Tilburg, with the same split, for 484 patients with one scan each. The
2023 release drops post-operative cases from London (196 remain) and adds 100 patients with 180 longitudinal scans
from the UK multi-centre routine surveillance cohort (38 patients and 43 scans as annotated source, 47 and 105 as
target, 15 and 32 for validation).

## Acquisition

London scans come from a Siemens Avanto 1.5 T (MPRAGE ceT1; CISS hrT2, with TSE or FIESTA also named by
the papers), Tilburg scans from a Philips Ingenia 1.5 T (3D-FFE ceT1, 3D-TSE hrT2). The UK surveillance scans span ten sites, 2006 to 2019, on Siemens,
Philips, GE and Hitachi scanners at 1.0, 1.5 and 3 T. All images were de-identified, defaced and distributed as
NIfTI.

## Annotations

Tumours were contoured in Leksell GammaPlan by the treating neurosurgeon and physicist; radiology fellows added both
cochleas in ITK-SNAP on T2. The 2022 release includes GIF parcellation masks for the source training scans and a CSV
with the centre and Koos grade per source case, graded by two neurosurgeons with consensus review. In 2023 a
radiologist sub-segmented the tumour into intra- and extra-meatal parts.

## Known limitations

- The London part is not new data; it repeats Vestibular-Schwannoma-SEG in NIfTI with extra cochlea labels.
- Source and target scans are unpaired by design, so no patient has both contrasts in the release.
- The 2022 Zenodo record lists CC BY 4.0 in its metadata but CC BY-NC-SA 4.0 in its description.
- 2023 data required challenge registration and a request form.

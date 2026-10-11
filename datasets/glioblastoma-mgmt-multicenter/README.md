This OpenNeuro dataset (ds007045) collects routine preoperative brain MRI of adults with primary glioblastoma from
eight hospitals, led by the Federal Neurosurgical Center and the AI Research Center of Novosibirsk State University
together with Italian, German and Spanish neurosurgery departments. Each patient comes with a tumor mask and the MGMT
promoter methylation status, so the data serve tumor segmentation, radiomics and imaging-based prediction of MGMT
methylation across heterogeneous scanners.

## Composition

Snapshot 2.0.1 holds 363 patients: 171 from Bologna, 110 from Karlsruhe, 39 from Novosibirsk, 14 from Turin, 11 from
Tarragona, 8 from Foggia, 7 from Messina and 3 from Bari. The data descriptor in Scientific Data describes the
earlier 337-patient release; version 2.0.0 added Karlsruhe cases and removed one case without tumor and five
duplicates. All patients had histologically confirmed IDH-wildtype glioblastoma, a complete preoperative protocol
and a definite MGMT result from methylation-specific PCR. In `participants.tsv`, 166 tumors are methylated and 197
unmethylated. The file also gives sex, age, field strength and scanner model per patient.

## Acquisition

Images were acquired between 2018 and 2025 as part of clinical care on 1.5 T and 3 T Siemens, Philips and GE
scanners (one case on a 1 T system), with site-specific protocols mixing 2D and 3D sequences. Every patient has
four raw series: T1-weighted before and after gadolinium (stored as run-01 and run-02 of T1w), T2-weighted and FLAIR,
defaced with PyDeface. Derivatives provide skull-stripped images linearly registered to MNI152, a variant with N4
bias field correction and one with additional z-score normalization.

## Annotations

Tumor masks follow the BraTS labels (necrotic core, non-enhancing or edematous tumor, enhancing tumor) in MNI152
space. A SegResNet model produced the initial masks, and neuroradiologists reviewed every mask and corrected it in
3D Slicer where needed. In the 337-patient release, 87 cases needed minor and 11 cases extensive manual editing.

## Known limitations

Protocols, slice thickness and scanner models vary widely between and within sites, and four sites contribute
fewer than 15 cases each. Masks start from a model output rather than from fully manual delineation. No survival,
treatment or IDH-mutant cases are included, and the paper's site and patient counts refer to the earlier release.

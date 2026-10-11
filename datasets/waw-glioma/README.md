WAW-Glioma is a single-cohort collection of brain MRI from 192 adults with diffuse gliomas of WHO CNS5 grades 2 to 4, released on Zenodo by a team at the Medical University of Warsaw and Warsaw University of Technology. Each patient comes with clinical variables, molecular markers, tumor segmentations and radiomics features. The authors describe it as a Central European cohort meant to widen the geographic range of public glioma data, for radiogenomics, segmentation benchmarking and outcome prediction.

## Composition

The record holds 156 preoperative and 161 postoperative MRI exams. Some patients have several postoperative exams, numbered in the file names. The clinical table gives age at diagnosis, sex, resection type, hemisphere and lobe, overall survival, progression and time to progression, and an integrated WHO CNS5 diagnosis with grade. Molecular fields cover IDH1/2, ATRX, TP53, TERT promoter, 1p/19q codeletion, CDKN2A/B, EGFR, chromosome 7 gain and chromosome 10 loss, plus MGMT and GFAP. About half of the patients have a glioblastoma diagnosis; the rest are mostly IDH-mutant astrocytomas and oligodendrogliomas, with a few rarer types.

## Acquisition

Sequences, where acquired, are T1-weighted before contrast, early and delayed post-contrast T1, T2-weighted, FLAIR, diffusion-weighted imaging with b-values up to 1500 s/mm², ADC maps and susceptibility-weighted imaging. Raw archives hold the skull-stripped NIfTI files without further processing. Separate archives hold the four core sequences co-registered and bias-field corrected. Per-file metadata list GE, Siemens and Philips scanners at 1.5 T and 3 T.

## Annotations

Masks on the co-registered images mark necrotic core, FLAIR abnormality, enhancing tumor and resection bed. They were first produced with the FeTS and FL-PoST workflow and then corrected by radiologists experienced in neuro-oncology. Inter-observer Dice and HD95 results, scanner-association analyses and the PyRadiomics code are included.

## Known limitations

Molecular testing is incomplete for some markers and the reasons are not recorded. The release flags diagnoses that are not or only partly supported by the molecular data. Scanners and protocols vary, and no harmonization was applied to the radiomics tables. One patient in the clinical table has no images in the raw archives. Earlier Zenodo versions had restricted files under a non-commercial license; only version 3 is open under CC BY 4.0.

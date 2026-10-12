A retrospective single-centre cohort from the National Cancer Institute of Naples (IRCCS Fondazione G. Pascale). The
study tested whether quantitative diffusion MRI of colorectal cancer metastases in the liver can tell lesions with a
RAS mutation from wild-type ones before treatment. Diffusion was modelled three ways (mono-exponential ADC,
intravoxel incoherent motion and diffusion kurtosis), and the per-lesion statistics were compared by ROC analysis and
simple classifiers. The authors posted a spreadsheet of these per-lesion values on Zenodo under CC BY 4.0. The MR
images themselves are not available.

## Composition

52 patients (27 men, 25 women, mean age 59 years, range 36 to 80) with 106 liver metastases, all confirmed at
pathology after hepatic resection between January 2018 and December 2019. 60 metastases carried a RAS mutation; at
patient level 28 were mutated and 24 wild-type. The primary tumour was in the colon in 28 patients and in the rectum
in 24. 20 patients had one metastasis and 32 had between 2 and 15. Of 66 eligible patients, 14 were excluded for
missing or poor-quality MRI or missing contrast phases.

## Acquisition

All scans came from one 1.5 T Siemens Magnetom Symphony. The liver protocol had T2-weighted TrueFISP and HASTE
sequences, T1-weighted in- and opposed-phase imaging, fat-suppressed VIBE before and after the hepatobiliary agent
Gd-EOB-DTPA (including a 20-minute hepatobiliary phase), and echo-planar DWI with eight b-values from 0 to
2000 s/mm2. Parameter maps were computed with a Siemens prototype diffusion toolbox.

## Annotations

Two radiologists with at least 15 years of liver MRI experience drew a volume of interest around every lesion on the
highest b-value image, blinded to RAS status. RAS status from histology is the label. The Zenodo spreadsheet gives
the mean and standard deviation of seven diffusion parameters per lesion with that label.

## Known limitations

- Images and segmentations are not shared; only derived values are open.
- Single centre and single scanner, small sample, no external validation set.
- No inter- or intra-reader variability analysis of the segmentations.

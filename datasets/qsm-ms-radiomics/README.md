Brain MRI from 100 adults with multiple sclerosis (MS) and 50 healthy controls, scanned at the IRCCS Istituto delle Scienze Neurologiche di Bologna, Italy. The dataset was built to study whether radiomic features computed from quantitative susceptibility mapping (QSM) of normal-appearing white matter are robust, and it ships the images, the volumes of interest, the extracted features and the processing scripts. It is described in Fiscone et al., Scientific Data 2024.

## Composition

The cohort has 100 MS patients (58 women, 42 men, mean age 47.6 years) and 50 controls (31 women, 19 men, mean age 57.1 years). Patients had relapsing-remitting, primary progressive or secondary progressive MS under the 2017 McDonald criteria and were treated with intravenous anti-CD20 antibodies. Each of the 150 subject folders, organised in BIDS, holds a T1-weighted MPRAGE, a 3D FLAIR, the raw magnitude and phase of a five-echo gradient-echo scan, the QSM map registered to T1w space, and preprocessed diffusion-weighted images with b-values, b-vectors and registration matrices. A participants file gives age, sex, scan date, group and whether the diffusion scan was single-shell or multi-shell.

## Acquisition

All scans come from one Siemens Magnetom Skyra 3 T scanner with a 64-channel head and neck coil, acquired between November 2020 and August 2023. The diffusion protocol changed during the study from single-shell (b = 2000) to multi-shell; the shared diffusion files contain the unweighted and b = 2000 volumes. Images were defaced and de-identified.

## Annotations

Volumes of interest were produced automatically: white matter from MRtrix3 5ttgen, MS lesions from the LST lesion prediction algorithm (patients only), and six tracts (arcuate, corticospinal, frontal aslant, inferior fronto-occipital, optic radiation, uncinate) from tractography, each split by hemisphere with lesions removed. For each of the 14 volumes, 107 PyRadiomics features from the QSM map are provided. No manual labels are included.

## Known limitations

Single site and single scanner. Controls are on average about ten years older than patients. For three controls the FLAIR comes from an earlier exam, up to 42 months before the other sequences. All masks are automatic; the lesion masks used to define normal-appearing white matter are not listed among the shared files.

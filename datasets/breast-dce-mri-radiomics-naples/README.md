A retrospective single-centre cohort from the National Cancer Institute of Naples (IRCCS Fondazione G. Pascale),
analysed together with the University of Naples Federico II. The study asked how well features computed from
dynamic contrast-enhanced breast MRI separate benign from malignant lesions. Texture metrics, shape descriptors and
time-intensity curve parameters were extracted from manually segmented lesions and tested one at a time with ROC
analysis and jointly with linear discriminant analysis, decision trees, k-nearest neighbours and support vector
machines. The authors posted the 15 shape features per lesion on Zenodo under CC BY 4.0. The MR images are not
available.

## Composition

85 women (mean age 52 years, standard deviation 11, range 26 to 78) with histologically proven breast lesions were
enrolled between October 2017 and April 2018. Together they had 91 lesions: 35 benign (mostly ductal hyperplasia,
fibroadenoma and fibrosis) and 56 malignant (ductal carcinoma in situ, infiltrating lobular and ductal carcinoma and
a few rarer types). Exclusion criteria included breast implants, metal implants, pregnancy, renal disease and
ongoing chemotherapy.

## Acquisition

All examinations ran on one 1.5 T Siemens Magnetom Symphony with a 16-channel breast coil, patients prone. The
protocol had axial turbo spin-echo T2-weighted and fat-suppressed T1-weighted images and a coronal T1-weighted 3D
FLASH dynamic series: one acquisition before and nine after 0.1 mmol/kg Gd-DOTA, 56 seconds apart, with 0.885 mm
in-plane pixels and 1.6 mm slices. Subtraction images were generated automatically.

## Annotations

Two breast radiologists with 22 and 15 years of experience outlined every lesion slice by slice on the third
subtracted dynamic series, first separately and then in consensus. The label is histology: surgical specimens for
malignant lesions, and surgery, fine needle aspiration or core biopsy for benign ones. The Zenodo spreadsheet lists
patient and lesion ids, BI-RADS category, histology and the shape features.

## Known limitations

- Images, segmentations, texture and dynamic features are not shared; only the shape features are open.
- Single centre and single scanner, small sample, no external validation set.
- The paper's lesion table counts two intraductal papillomas among the malignant lesions.

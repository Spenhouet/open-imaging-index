Fetal brain extraction data from IRCCS Ospedale San Raffaele in Milan, funded by the Italian Ministry of Health grant RF-2016-02364081. The release pairs single resting-state functional MRI (rs-fMRI) volumes of the fetus with binary brain masks. The authors used it to compare transformer models (Swin-UNETR, UNETR) with convolutional and adversarial networks for masking the fetal brain, and they share the weights of their best Swin-UNETR model in the same record.

## Composition

The paper started from 179 fetuses scanned retrospectively between 2018 and 2022 and excluded fetuses with congenital anomalies of the central nervous system, brain parenchymal signal changes or poor masks, leaving 172 fetuses. The record holds 519 image files and 519 matching label files in NIfTI format, about three volumes per fetus. The gestational week at scan is encoded in the last two digits of each file name and ranges from 21 to 37 weeks (median 29). The paper's fixed test set has 17 fetuses with 47 volumes, one fetus per gestational week. Sex and maternal data are not included.

## Acquisition

Seventy-seven fetuses were scanned at 1.5 T and 95 at 3 T. The scanner vendor and sequence parameters are given only in the paper's supplementary appendix, which was not checked for this entry. All mothers gave written informed consent and the San Raffaele ethics committee approved the protocol.

## Annotations

Brain masks were made with the authors' RS-FetMRI preprocessing package and checked by an experienced neuroimaging scientist, who removed fetuses with inaccurate masks. The code for training and testing on the data is on GitHub (NicoloPecco/Swin-Functional-Fetal-Brain-Segmentation).

## Known limitations

Single centre, and only extracted single volumes are shared, not full rs-fMRI time series. The paper's external test cohort of 131 fetuses came from a separate OpenNeuro dataset and is not part of this release. Fetuses with brain anomalies were excluded, so the data do not cover pathological anatomy.

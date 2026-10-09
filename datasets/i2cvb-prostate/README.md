The I2CVB prostate dataset is a multi-parametric MRI collection built by the Initiative for Collaborative Computer
Vision Benchmarking, a group from the Universitat de Girona and the Université de Bourgogne. It was put together to
develop and compare computer-aided detection and diagnosis of prostate cancer, and it was used in the group's PhD thesis
and papers on DCE-MRI normalization and multi-parametric classification. The images are deposited on Zenodo, where the
record carries a CC BY 4.0 label but its files are restricted.

## Composition

The thesis describes the 3 T set as 19 patients referred for a raised prostate-specific antigen level, all of whom had
a guided biopsy. 17 had biopsy-proven cancer: 12 in the peripheral zone, 3 in the central gland and 2 in both. The
other 2 had negative biopsies and are treated as healthy. Each patient has T2-weighted MRI, dynamic contrast-enhanced
MRI, diffusion-weighted MRI with an ADC map, and MR spectroscopic imaging. The website states that images are shared as
DICOM and the Siemens spectroscopy as RDA files.

## Acquisition

All 3 T scans come from one Siemens Magnetom Trio TIM. T2-weighted imaging uses 3D fast spin echo in an oblique axial
plane with 1.25 mm slices. DCE-MRI is a fat-suppressed 3D T1 VIBE with 16 partitions of 3.5 mm, one volume every 6 s for
about 5 minutes after a Gd-DTPA bolus. DWI is single-shot spin-echo EPI at b = 100 and 800 s/mm², with the ADC map made
on the scanner workstation. Spectroscopy uses a PRESS sequence tuned for choline and citrate. The thesis also describes
a 1.5 T GE Signa protocol with an endorectal coil, which the website lists as coming soon.

## Annotations

An experienced radiologist outlined the prostate on T2-weighted, DCE and ADC images, and the peripheral zone, central
gland and cancer on the T2-weighted images. The website names four label classes: prostate, peripheral zone, central
gland and cancer.

## Known limitations

- Files are not downloadable from Zenodo without permission from the record owner, and no request procedure is
  published.
- Very small, single-scanner cohort with only 2 biopsy-negative patients.
- Cohort size differs between sources: the thesis reports 19 patients, while a DCE-MRI preprint on a subset from the same
  scanner reports 20.
- The 1.5 T GE part has no published patient count.
- No age or other demographic data are published.

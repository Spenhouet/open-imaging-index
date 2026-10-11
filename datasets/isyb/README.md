ISYB, short for "I See Your Brains", is an open multimodal brain MRI release of healthy young Chinese Han adults from the Institute of Psychology of the Chinese Academy of Sciences in Beijing, one of the sites of the Chinese imaging genetics cohort CHIMGEN. The authors shared it because public brain imaging resources hold few non-Western participants, and they used it to show that face masking with a Chinese head template removes more facial information from Chinese scans than the default MNI152 template. The data are published on Science Data Bank under CC BY 4.0.

## Composition

241 right-handed volunteers were scanned. After visual checks and MRIQC-based quality control, 26 were dropped and 215 are in the release: 156 women and 59 men aged 18 to 30 (mean 22.55 years). Volunteers were recruited through adverts at colleges and in communities and were excluded for smoking, pregnancy, colour vision problems, substance abuse, current medication, neuropsychiatric or severe somatic illness, or MRI contraindications. Each participant folder holds a T1-weighted volume, a resting-state fMRI run, a 64-direction diffusion scan and an arterial spin labeling scan with a cerebral blood flow map. A spreadsheet gives sex and age; behavioural and clinical measures are not included.

## Acquisition

All scans come from one GE Discovery MR750 3 T scanner. The T1-weighted image is a 1 mm 3D gradient-echo volume with inversion preparation. Resting-state fMRI uses 36 slices with a repetition time of 2 s, diffusion uses b = 1000 with b = 0 images, and the 3D spiral ASL sequence has an inversion time of 2025 ms. Files follow BIDS and the anatomical images were defaced with the face masking toolkit using the CN200 template. Per-subject and group MRIQC reports are shared alongside the images.

## Known limitations

The sample comes from a single site and is mostly female and in their early twenties. Three-plane localizer runs are stored under the T2w suffix and are not usable T2-weighted images. Only age and sex are released, so genetic and environmental measures of the wider CHIMGEN cohort are not available here.

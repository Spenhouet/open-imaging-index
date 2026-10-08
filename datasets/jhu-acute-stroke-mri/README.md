This collection holds routine clinical brain MRI of patients admitted with acute stroke to the Johns Hopkins
Comprehensive Stroke Center in Baltimore between 2009 and 2019. Its creators released it so that segmentation,
mapping and scoring tools can be trained and tested on real clinical scans rather than uniform research protocols.
It is archived at ICPSR as a restricted-use collection.

## Composition

There are 2,888 patients, one MRI each, aged 18 to 99 (mean 62.2), 1,527 men and 1,361 women. The largest racial
group is African American (43.5%). By radiological appearance, 1,878 lesions are ischemic, 540 show any bleeding
(including hemorrhagic transformation and extra-parenchymal blood) and 470 are not visible on imaging, mostly
transient ischemic attacks or very small strokes. Every patient has DWI with ADC. Most also have FLAIR (2,746), T2
(2,581), SWI (2,106) and T1-weighted images, either conventional (2,373) or MPRAGE (1,298); 531 have perfusion images
of usable quality. Per-patient metadata include NIHSS, stroke type, 90-day modified Rankin score for part of the
cohort, hospital stay, blood tests, blood pressure, BMI, prior conditions and medication.

## Acquisition

Scans come from 11 scanners over ten years, 1,766 at 1.5T and 1,122 at 3T, mostly Siemens with some GE and Philips
systems. Most were done 6 or more hours after symptom onset, and 43% after acute treatment. DWI has about 1 mm
in-plane resolution with 2 to 7 mm slices. DICOM files were converted to NIfTI with dcm2niix in a BIDS layout, and
images with full head coverage were defaced. DWI, B0, ADC and the masks are also provided in MNI space, together with
intensity-normalized DWI, lesion frequency maps and average DWI templates.

## Annotations

Two experienced tracers outlined lesions on DWI and ADC in ROIEditor, using other contrasts to exclude chronic or
white matter lesions. A neuroradiologist reviewed every mask, and cases were redrawn until tracers and reviewer
agreed. Intraventricular and subarachnoid blood was not traced. On 220 cases traced twice, inter-rater Dice was 0.68
and intra-rater Dice 0.72. Brain masks come from a U-Net trained on corrected level-set masks.

## Known limitations

- Single center, with more Black and fewer Hispanic and Asian patients than many urban stroke centers.
- Protocols vary widely across scanners and years, and slice thickness is clinical.
- Lesion type is a radiological label and does not always match the clinical diagnosis.
- Paper and table differ on the scanner vendor split, so no per-vendor counts are given here.

QIN Breast DCE-MRI is a small longitudinal breast MRI collection from Oregon Health & Science University (PI Wei Huang),
contributed within the NCI Quantitative Imaging Network and published on The Cancer Imaging Archive in 2014. It was
assembled for a multicenter challenge in which seven QIN institutions ran twelve pharmacokinetic analysis tools on the
same dynamic contrast-enhanced data, to measure how much the choice of software alone changes the estimated parameters
and their ability to predict response to neoadjuvant chemotherapy. It suits work on DCE-MRI quantification and early
response prediction.

## Composition

The collection holds 10 women with locally advanced breast cancer, each scanned twice: before chemotherapy (visit 1)
and after the first treatment cycle (visit 2), giving 20 studies. The parent study scanned four visits in total, but
only the first two are shared. The 10 patients are a subset of 16 consecutive patients; the other six were left out
because the second visit was missing or motion degraded the images. Each DICOM series is one dynamic time frame. Besides
DICOM, the data are offered as Matlab and NIfTI files wrapped in DICOM key object series. A spreadsheet gives the
pathologic response: 3 patients reached pathologic complete response and 7 did not. A population-averaged arterial
input function is also provided.

## Acquisition

All exams were acquired on a Siemens 3 T TIM Trio with the body coil for transmission and a four-channel bilateral
breast coil for reception. Axial fat-suppressed bilateral DCE images were recorded with a 3D gradient echo TWIST
sequence (flip angle 10°, TE/TR 2.9/6.2 ms, 320×320 matrix, 1.4 mm slices) at a temporal resolution of 18 to 20 s
over about 10 minutes. Gadoteridol (0.1 mmol/kg) was injected after two baseline frames. The T2-weighted and
non-fat-suppressed T1-weighted series of the protocol are not part of the shared DICOM data.

## Annotations

In the challenge, breast radiologists drew tumor regions of interest on post-contrast slices, and these were shared
with the participating sites together with precontrast T1 values. The collection page does not state whether the
regions of interest are included in the Matlab or NIfTI files.

## Known limitations

- Ten patients from a single site and a single scanner.
- Only the first two of four visits are shared.
- No clinical data beyond the pathologic response status are provided.

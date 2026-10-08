VinDr-Mammo is a Vietnamese collection of full-field digital mammograms released by VinBigData on PhysioNet in 2022. It was built as a benchmark for computer-aided detection and diagnosis of breast findings and for predicting
BI-RADS assessment and breast density, and it is one of the larger public digital mammography sets with
radiologist annotations.

## Composition

The dataset contains 5,000 exams with four images each: craniocaudal and mediolateral oblique views of both
breasts, 20,000 DICOM images in total. The creators split the exams into 4,000 for training and 1,000 for testing
with iterative stratification, so that BI-RADS categories, density levels and finding types have similar
frequencies in both parts. Two CSV files hold the breast-level labels and the finding boxes, and a third keeps age
and scanner model from the DICOM headers. The number of distinct women is not published.

## Acquisition

Exams were sampled at random from the PACS of Hanoi Medical University Hospital and Hospital 108, covering
2018 to 2020, so screening and diagnostic exams are mixed. Images are "for presentation" mammograms from Siemens,
IMS and Planmed units. Identifying text burned into image corners was blacked out, and only age and device
information were kept in the headers.

## Annotations

Three radiologists with 14 to 22 years of experience took part. Each exam was read independently by two of them,
and a third, more senior reader settled disagreements. Each breast received a BI-RADS category (1 to 5) and a
density category (A to D). Findings that needed follow-up (BI-RADS 3 or higher) were boxed and typed: mass,
suspicious calcification, asymmetry (global or focal), architectural distortion, skin thickening or retraction,
nipple retraction and suspicious lymph node. Benign BI-RADS 2 findings were not boxed.

## Known limitations

- No pathology confirmation; labels are radiologist consensus only.
- Some finding types have fewer than 40 examples.
- The authors note that the files are not fully DICOM-compliant.
- Single country and two hospitals.

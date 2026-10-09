MRNet is a collection of 1,370 clinical knee MRI exams from Stanford University Medical Center, acquired between 2001 and 2012. The Stanford Machine Learning Group assembled it to train and evaluate MRNet, a convolutional network that classifies whole knee exams, and released it together with a public benchmark. Each exam carries three binary labels: any abnormality, anterior cruciate ligament (ACL) tear and meniscal tear. The data are now distributed by the Stanford AIMI center through Redivis.

## Composition

Of the 1,370 exams, 1,104 are abnormal, 319 show an ACL tear and 508 a meniscal tear; 194 have both tears. The exams are divided into a training set (1,130 exams, 1,088 patients with an identifier), a validation set (120 exams, 111 patients) and a test set (120 exams, 113 patients). The paper calls the validation set the tuning set and the test set the validation set. All exams of one patient fall into the same split, and the two smaller sets were sampled so that each holds at least 50 positive cases per label. The test set is held back for the benchmark and is not part of the download. The mean patient age is 38.0 years, and 569 exams belong to female patients.

## Acquisition

All exams were done on GE scanners with a standard knee coil and a routine protocol without contrast: coronal T1-weighted, coronal T2-weighted with fat saturation, sagittal proton density, sagittal T2-weighted with fat saturation and axial proton density with fat saturation. 775 exams were acquired at 3 T and the rest at 1.5 T. The paper used three series per exam (sagittal T2-weighted, coronal T1-weighted and axial proton density), resampled to 256 × 256 pixels.

## Annotations

Training and validation labels were extracted by hand from the clinical radiology reports. For the test set, the reference labels are the majority vote of three musculoskeletal radiologists who had the images, reports, clinical history and follow-up exams.

## Known limitations

Released labels come from reports, not surgery, and are exam-level only, with no localization. The data come from one institution and one scanner vendor. The research use agreement forbids commercial use, redistribution and derivative works.

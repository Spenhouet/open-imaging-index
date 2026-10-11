Short-axis cine cardiac MRI from two Italian hospitals, gathered to develop a convolutional network with attention gates that outlines the left and right ventricular cavities and the left ventricular myocardium when a pacemaker or implantable cardioverter-defibrillator distorts the image. The study was retrospective and the authors deposited the related raw data as a restricted Zenodo record. No files or terms are visible on the record, and the paper says the data can be requested from the corresponding author.

## Composition

The internal cohort has 230 patients scanned at Centro Cardiologico Monzino in Milan between May 2017 and December 2021: 100 with a cardiac implanted electronic device (16 pacemakers, 84 defibrillators) and 130 without one, whose artifact-free images were added to enlarge the training set. Mean age was 56 years (SD 17) and 68 patients were women. The main reasons for the scan were coronary artery disease, ventricular arrhythmia, dilated or hypertrophic cardiomyopathy and acute myocardial infarction. An external test cohort of 56 device carriers came from Fondazione Toscana Gabriele Monasterio in Pisa (2016 to 2022). The internal set gave 4198 and the external set 893 end-diastolic and end-systolic slices. Internal patients were split by patient into training, validation and test sets in proportions that differed between the device and no-device groups.

## Acquisition

All scans were at 1.5 T on GE systems: a Discovery MR450 with a 32-channel cardiac coil in Milan, and Signa Excite or Signa Artist in Pisa. Breath-hold balanced steady-state free precession cine stacks covered both ventricles from base to apex with 8 mm slices, no gap and 30 phases per cycle. Internal images were 512 x 512 pixels, external ones 256 x 256.

## Annotations

One reader with EACVI Level III certification traced the left and right ventricular endocardium and the left ventricular epicardium at end-diastole and end-systole in cvi42, with a second expert consulted when in doubt.

## Known limitations

Access is at the authors' discretion and no license is published. The record does not say which cohort or which derived files it contains. Sex and age are reported only for the internal cohort. Only end-diastolic and end-systolic frames carry manual contours.

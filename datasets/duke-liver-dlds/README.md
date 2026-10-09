The Duke Liver Dataset (DLDS) is a collection of routine clinical liver MRI examinations from Duke University,
released on Zenodo and described in a 2023 data resource article in Radiology: Artificial Intelligence. It was built
to train and test two kinds of models: classifiers that recognize the type of an abdominal MRI series from its pixels
alone, and liver segmentation models.

## Composition

The dataset holds 2146 de-identified image series (113 280 DICOM images) from 105 adult patients, 76 men and 29
women aged 30 to 80. Every series carries one of 17 series-type labels, coded as letters A to Q so that users can
blind themselves; a key file maps the letters to the types. The types cover diffusion and ADC, axial and coronal T2w,
MRCP, localizers, in-phase and opposed-phase imaging, precontrast fat-suppressed T1w, several arterial, transitional,
late dynamic and portal venous phases, and a catch-all "anything else" class. A segmentation subset contains 310
series from 95 patients with liver masks. Version 2.0.0 restored labels and masks for 26 patients that version 1.0.0
had withheld; the record lists their ids for users who want them as a test set.

## Acquisition

Patients had contrast-enhanced abdominal MRI for a clinical indication of cirrhosis at one of three centers, and 87
showed imaging signs of cirrhosis. Contrast agents were gadobenate dimeglumine or gadoxetate disodium. Scanners were
Siemens (96) and GE (9), at 1.5 T (54) or 3 T (51). The article reports ranges of sequence parameters per series type.

## Annotations

Series types were labelled by humans. Liver masks were drawn slice by slice in OsiriX on axial portal venous and
precontrast fat-suppressed T1w, in-phase and opposed-phase series, by an abdominal radiologist or one of two research
fellows whose work the radiologist checked and corrected. Major portal vein branches and the inferior vena cava are
excluded. Masks are binary DICOM stacks matching the image series.

## Known limitations

- Each liver was segmented by a single reader, so no inter-rater estimate exists.
- Clinical images include motion and susceptibility artifacts; cirrhotic liver shapes differ from healthy livers.
- No lesion labels, and MRI is the only modality.
- The CC BY-NC-ND 4.0 option rules out commercial use and sharing of derived data; a separate Duke license is
  needed for commercial use.

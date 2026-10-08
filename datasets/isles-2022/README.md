ISLES 2022 is the dataset behind the 2022 edition of the Ischemic Stroke Lesion Segmentation challenge. It pairs
routine clinical stroke MRI from three European stroke centers with expert infarct masks, and was built to benchmark
automatic segmentation of acute and subacute infarcts, from large territorial strokes to scattered small embolic
lesions.

## Composition

The collection has 400 cases, one per patient. 250 form the training set, which is public on Zenodo; the other 150
are a hidden test set used only to score challenge entries. The training cases come from the Technical University of
Munich (198) and the University Hospital of Bern (52), per the center list published with Zenodo version 2.3.1. The
test set adds a third center, the University Medical Center Hamburg-Eppendorf, that does not appear in training. Each
case has a FLAIR image, a DWI trace image at b=1000 and its ADC map, plus a lesion mask. Three training cases were
scanned for suspected stroke but show no infarct. The authors deliberately included more posterior circulation and
infratentorial infarcts than random sampling would give. Only adults (18 or older) were included; no age or sex
figures are published.

## Acquisition

Scans were taken during clinical care on 3T Philips (Achieva, Ingenia), 3T Siemens (Verio) and 1.5T Siemens
(Avanto, Aera) systems. Munich and Hamburg cases were acquired after revascularization therapy, Bern cases before it.
Images are released in native space as NIfTI in a BIDS layout, with DICOM header fields as JSON where available.
For de-identification, all images were skull-stripped with HD-BET before release.

## Annotations

A 3D U-Net produced first drafts, which trained medical students corrected or redrew. A neuroradiology resident then
revised every mask and one of three senior neuroradiologists approved it, using DWI, ADC and FLAIR together. In a
10-case check by two further neuroradiologists, the released masks agreed better with each expert than the experts
agreed with each other.

## Known limitations

- Demographics, onset-to-scan times and clinical outcomes are not released.
- The test set and the entire Hamburg center are hidden, so held-out evaluation needs the challenge platform.
- Case selection over-represents posterior circulation strokes.
- Annotation started from algorithm drafts, which may carry a bias toward that model's output.

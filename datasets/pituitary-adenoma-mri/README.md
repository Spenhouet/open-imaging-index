Researchers led from the Military University Hospital Prague shared preoperative MRI of 50 patients with pituitary adenoma on OpenNeuro. The aim is a public reference for segmenting the sellar region, where a tumor distorts the normal gland, the internal carotid arteries and the optic pathway. Each patient has a hand-made multi-class mask, and the release adds the predictions of five published segmentation methods so new models can be compared on the same cases.

## Composition

There are 50 patients, 22 female and 28 male, aged 22 to 80 at surgery (mean 56.1). Every tumor in the participants file is a non-functioning adenoma; a tumor volume column exists but is empty. Each patient has up to ten series: coronal T1-weighted before and after contrast, sagittal and 3D axial contrast-enhanced T1, coronal T2, FIESTA with and without contrast, and three apparent diffusion coefficient (ADC) maps. 33 patients have ADC maps and 48 have at least one T2-type series. Diffusion appears only as ADC maps in the derivatives folder.

## Acquisition

All scans come from one GE 750w 3 T scanner. Images were converted from DICOM to NIfTI in BIDS layout, and 3D scans were defaced; the defacing masks are included. The conversion, defacing and benchmarking scripts ship in the code folder.

## Annotations

The first author drew masks on the coronal contrast-enhanced T1 in Brainlab Elements with five labels: tumor, normal gland, left and right internal carotid artery, and optic pathway. A second author and an external reviewer checked and refined them. Seed points for semi-automated methods and keyframe slice indices are also provided. Predictions from two nnU-Net models, a CNN ensemble, a keyframe-only CNN and the semi-automated GrowCut method are aligned to the contrast-enhanced T1 space, with Dice, IoU and Hausdorff results reported in the README.

## Known limitations

Single center and single scanner. Only non-functioning adenomas are included, so hormone-secreting tumors are absent. Sequence coverage varies between patients. Ages are age at surgery. The license statements disagree: the README names CC BY-NC 4.0 and the dataset metadata names CC0, and this entry records the non-commercial license. The data descriptor paper was under review at release and is not cited here.

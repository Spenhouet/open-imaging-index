NIH ChestX-ray14 is a set of frontal chest radiographs released by the NIH Clinical Center in 2017. It grew out
of the ChestX-ray8 work presented at CVPR 2017 and became one of the first chest X-ray collections large
enough for deep learning. It is mostly used for multi-label classification and weakly supervised localization
of thoracic findings.

## Composition

The release contains 112,120 frontal images (PA or AP) of 30,805 patients, stored as 1024 x 1024 PNG files.
The README states that the images are taken from the Clinical Center PACS and make up about 60% of all frontal
chest radiographs there. Many patients have follow-up images. A metadata table gives, per image, the labels,
follow-up number, patient id, age, sex, view position and the original size and pixel spacing. The ages and
follow-up numbers were corrected in an April 2020 update of this table.

The creators provide a split at patient level: a training/validation list and a test list. All images of one
patient are in the same list. The numbers on this page count the official training/validation list as `train`.

## Annotations

Fourteen findings were text-mined from the radiology reports with natural language processing: atelectasis,
cardiomegaly, effusion, infiltration, mass, nodule, pneumonia, pneumothorax, consolidation, edema, emphysema,
fibrosis, pleural thickening and hernia. Images without any of them are labelled "No Finding". An image can have
several labels. About 1,000 images also have bounding boxes for one finding each. The reports themselves are not
released.

## Known limitations

- Labels come from reports, not from reading the images; the creators estimate their accuracy at over 90%.
- "No Finding" is not the same as normal: such images can show other diseases or uncertain findings.
- Only PNG images are available, without the original DICOM headers.
- Single US hospital; scanner and acquisition details are not documented.
- Counts on this page were computed from the public metadata file.

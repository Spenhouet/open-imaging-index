KNIGHT was a challenge held with the 2022 IEEE International Symposium on Biomedical Imaging (ISBI). Teams predicted,
from preoperative CT and clinical information, the risk group that the American Urological Association (AUA)
guidelines assign to a renal mass after surgery. It adds no new public images: the released cases are the 300
training patients of the KiTS21 kidney tumor segmentation challenge, with a new risk label and a curated clinical
record per patient. The images and segmentations of these cases are also part of KiTS23.

## Composition

The development set holds 300 patients. A JSON file in the KNIGHT repository gives each patient's clinical data,
including age at nephrectomy, sex, body mass index, comorbidities, smoking and alcohol history, preoperative kidney
function (eGFR), radiographic tumor size, surgical details, pathology and survival. The organizers evaluated
submissions on a further 103 patients selected by the same criteria; these were not released in the repository.

## Acquisition

Patients had partial or radical nephrectomy for a renal tumor between 2011 and 2020, at the University of Minnesota
Fairview medical center or the Cleveland Clinic. Each case is one late arterial phase abdominal CT. Imaging was
fetched as NIfTI with a download script.

## Annotations

The target attribute is the AUA risk group with five levels: benign, low, intermediate, high and very high risk. The
main task groups high and very high risk, the candidates for adjuvant therapy, against the three lower groups; a
second task predicts all five levels. Only twelve clinical attributes, such as age, sex, BMI, comorbidities, smoking,
preoperative eGFR, tumor size and voxel spacing, may be used as model inputs.
The KiTS21 kidney and tumor segmentations of the same cases can be taken from the KiTS21 repository.

## Known limitations

- The download script points to a storage bucket that no longer exists; the images are now obtained through the
  KiTS repositories.
- The KNIGHT repository's MIT license covers the clinical file; the imaging is distributed by KiTS under CC BY-NC-SA
  4.0.
- Counting high and very high risk in the clinical file gives 85 positive cases, while the outcome paper reports 87.
- No test labels or test images are public.

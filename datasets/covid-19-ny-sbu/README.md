COVID-19-NY-SBU is a collection of routine clinical images from adults who tested PCR positive for COVID-19 at
Stony Brook Medicine in New York, released through The Cancer Imaging Archive in 2021. Each patient is linked to
a row of clinical data drawn from the hospital's COVID Data Commons, so the collection is mainly used to build
diagnostic and prognostic models that combine chest imaging with outcomes such as death, ICU admission or
mechanical ventilation.

## Composition

The release covers 1,384 patients, 7,361 studies and 17,950 series. Chest radiographs dominate: 1,343 patients
have computed radiography and 157 have digital radiography, most of them portable AP chest views, with some
abdominal films. 458 patients have CT, mainly chest CT with and without contrast, CT pulmonary angiography and
abdomen-pelvis CT. A handful of patients have abdominal MRI, FDG PET/CT or nuclear medicine lung perfusion scans.

The clinical table has one row per patient for a single encounter, chosen as the most severe COVID-positive
visit. It holds demographics, comorbidities, symptoms at admission, first lab and vital values, ICU stay,
ventilation and discharge status, coded to the OMOP Common Data Model with LOINC codes for labs. In that table,
183 patients died and 1,201 were discharged; 260 were in the ICU and 213 were ventilated. Ages are only given
in three bins (18 to 59, 60 to 74, 75 to 90).

## Acquisition

Images were exported from the Stony Brook radiology PACS and de-identified with POSDA. Dates are shifted, and
the clinical encounter date uses the same shift so images can be aligned with the selected visit. Radiographs come
from Carestream systems; CT scanners are from GE, Toshiba and Siemens.

## Annotations

There are no image-level labels or segmentations. Targets come from the clinical table (outcome, ICU,
ventilation, lab values).

## Known limitations

- Single center, and only COVID-positive patients, so there is no negative control group.
- Imaging is whatever was ordered in care, so the number and timing of studies differ widely between patients.
- Clinical values cover one selected encounter only; many fields are missing (NA).
- Sex differs slightly between the clinical table and the DICOM headers.
- The collection summary mentions brain MRI, but the MR series in the release metadata are all abdominal.

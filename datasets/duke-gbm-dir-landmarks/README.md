This dataset collects routine longitudinal brain MRI of glioblastoma patients treated at Duke University and pairs
the pre-operative scan of each patient with the scan at recurrence through matched anatomical landmarks. It was
released on Zenodo in 2026 as a benchmark for checking the accuracy of deformable image registration (DIR) across
large anatomical change. The authors state that a dataset article describing it in full is planned; until then the
Zenodo record and the GBM-DIR-QA GitHub repository are the only descriptions.

## Composition

The release covers 61 patients with between 3 and 18 imaging sessions each, 503 sessions in total. Every session
contains six images: T1w, T2w, FLAIR, contrast-enhanced T1w, DWI and an ADC map. Per-patient tables give relative
dates of scans, diagnosis, chemoradiation, radiation, major surgery and death, along with age, race and ethnicity,
smoking status, IDH mutation status and BT-RADS scores where available. All dates are expressed relative to the
first available session of each patient.

## Acquisition

Images come from clinical care at Duke University Hospital. They are skull-stripped, resampled to 1 mm isotropic
voxels and aligned to the MNI brain atlas to standardize the field of view, and stored as NIfTI. Images within a
session are co-registered, but different sessions of the same patient are not aligned to each other.

## Annotations

Landmark pairs mark the same blood vessel bifurcations in the pre-operative and the recurrence session, found with a
semi-automatic pipeline. Recurrence was defined by clinical progression or by enhancing tumor volume growing more than
40% above the post-operative nadir. Landmarks are stored as voxel indices in CSV files and split into those closer
than 3 cm to the enhancing tumor boundary and those farther away. Each session also has an automatic nnU-Net tumor
mask with four labels: necrotic core, non-enhancing FLAIR abnormality, enhancing tumor and resection cavity.

## Known limitations

- Tumor masks are model output, not manual delineations.
- Dates were extracted automatically from charts and may be off by a few days.
- Patient selection criteria and landmark validation are not yet published.
- No scanner, vendor or field-strength information is given in the public description.
- The CC BY-NC-ND 4.0 option rules out commercial use and sharing of derived data; commercial use needs a separate
  Duke license.

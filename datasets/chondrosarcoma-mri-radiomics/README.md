A retrospective single-study cohort of patients with cartilaginous tumours of bone, assembled by researchers
at the University of Milan and the IRCCS Galeazzi Orthopaedic Institute. The study asked whether texture
and first-order radiomic features from unenhanced MRI, fed to a machine-learning classifier, can separate low-grade
atypical cartilaginous tumours from higher-grade chondrosarcoma before surgery. A record with the study title was
deposited on Zenodo in November 2020, but its files are restricted, access requests are disabled and no license is
given, so the data cannot be obtained.

## Composition

58 patients had a cartilaginous bone tumour confirmed by histology. 26 had a low-grade or atypical cartilaginous
tumour of the appendicular skeleton. 32 had a higher-grade chondrosarcoma, half in the appendicular and half in the
axial skeleton. Patients were split at random into 42 for training and 16 for testing. Age and sex are not given in
the public abstract.

## Acquisition

Each tumour was imaged with T1-weighted and T2-weighted MRI without contrast agent. Scanner, field strength and
protocol details are reported only in the full journal article, which was not openly accessible for this entry.

## Annotations

Every tumour was outlined by hand with a two-dimensional region of interest on both the T1- and T2-weighted images.
Histological grade is the reference label. A musculoskeletal radiologist, blinded to histology, also graded the test
lesions visually.

## Known limitations

- The image files are not available: the Zenodo record is restricted with no request option, and it does not say
  whether it holds images or only extracted features.
- Small cohort, and low-grade lesions are all appendicular while half of the high-grade ones are axial.
- Segmentations are two-dimensional regions of interest, not volumes.
- Numbers here come from the study abstract only.

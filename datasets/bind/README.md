BIND gathers the clinical brain imaging of patients who had an electroencephalogram (EEG) or a polysomnogram for clinical reasons over roughly 30 years at Mass General Brigham (Massachusetts General Hospital and Brigham and Women's Hospital) and Stanford. The images are linked by patient to EEG and sleep recordings released earlier on the Brain Data Science Platform, and to the de-identified radiology reports of each session. The authors built it for large neuroimaging studies, machine learning and research that combines imaging with neurophysiology.

## Composition

The data descriptor reports 38,942 patients with 108,737 clinical encounters: 28,438 patients from Mass General Brigham and 10,504 from Stanford. Patients range from newborns to 106 years, covering healthy findings and a wide spread of neurological disease. Of 1,791,885 images, 1,723,699 are MRI, 54,137 CT, 5,093 PET and 526 SPECT. Race, death records, education and other demographics come with the data. The project page gives slightly different modality counts for release 1.0.

## Acquisition

Scans were acquired in routine care, so protocols vary by indication and site. MRI was acquired at 1.5 T, 3 T and 7 T, mostly on Siemens and GE scanners. DICOM files were converted to NIfTI with dcm2niix and arranged in BIDS folders per site, patient and session, with JSON sidecars that keep scanner and acquisition details. Data were de-identified by the hospitals, date-shifted and screened with optical character recognition to remove burned-in text.

## Annotations

MRI sequence types (T1, T2, FLAIR, diffusion, fMRI, SWI, perfusion, MR angiography) were assigned automatically from DICOM parameters with thresholds, Gaussian mixture clustering and keyword matching. On 100 hand-labeled sessions per site, accuracy was 0.9471 at Mass General Brigham and 0.8455 at Stanford. A biomedical Llama 3 model extracted findings from the reports and mapped them to 10 clinical categories with 150 subcategories; a neurologist checked 1,000 reports.

## Known limitations

The report-derived findings are not curated by humans and may contain errors or hallucinations, so the full-text reports remain the reference. About 13% of diffusion scans lack b-values and b-vectors because de-identification overwrote those headers. Images are unprocessed and vary in quality and resolution. Sequence labels can be wrong, for example localizers labeled as T1 or T2, and neonatal scans are harder to classify. Access is limited to non-commercial research by credentialed users.

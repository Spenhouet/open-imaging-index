Brain MRI from adults with primary trigeminal neuralgia and from healthy volunteers, recorded at the Federal Neurosurgical Center in Novosibirsk, Russia. Most patients were scanned before microvascular decompression or a percutaneous procedure (radiofrequency rhizotomy or balloon compression), and part of them again after surgery with the same protocol. The project looks for imaging, clinical and psychological predictors of facial pain and of surgical outcome. The data are on OpenNeuro in BIDS format under CC0.

## Composition

Snapshot 2.0.2 (October 2025) lists 119 patients and 53 healthy volunteers, with follow-up MRI for 64 patients and a later telephone follow-up for 93. The data descriptor in Scientific Data covers the earlier snapshot 1.0.1 with 112 patients (103 surgical, 9 managed as outpatients) and 48 age- and sex-matched controls; 58 patients had a follow-up scan at about six months. In that cohort surgical patients were 30 to 84 years old and controls 38 to 75. The participants file gives age, sex, pain side, type and severity, disease duration, medication, neurovascular compression grade (Sindou), surgery type and outcome. A second file holds psychological and neuropsychological test scores for 84 patients and 47 controls, and MRIQC quality metrics are included.

## Acquisition

All scans come from one Philips Ingenia 3 T scanner with a 16-channel head coil. The protocol has a 3D T1-weighted gradient echo (1 mm acquired, two runs), a 3D T2-weighted turbo spin echo, diffusion imaging with 64 directions at b = 1500 plus b0-only runs in both phase-encoding directions, and a 10-minute eyes-closed resting-state BOLD run of 200 volumes. Structural images were defaced with pydeface. FLAIR, SWI, time-of-flight and contrast-enhanced scans were acquired for screening but are not shared.

## Annotations

No image labels. Per-subject clinical variables include the radiologist's MRI findings, Sindou grade and surgical outcome, with 100% pain relief counted as a favorable result.

## Known limitations

Single site and single scanner. The README and the folder structure of snapshot 2.0.2 differ slightly in group sizes (120 patient, 55 control and 65 follow-up folders), the participants file of that snapshot has fewer rows than subject folders, and some sessions lack T2w, diffusion or BOLD images. The paper states recruitment from October 2021 to October 2024, while the README says 2022 to 2025. Blood samples and screening sequences are not part of the release.

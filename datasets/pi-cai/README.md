PI-CAI is a grand challenge on detecting clinically significant prostate cancer (csPCa, ISUP grade group 2 or
higher) in prostate MRI, comparing AI systems with radiologists. Its Public Training and Development Dataset was
released in 2022 by the Diagnostic Image Analysis Group at Radboud University Medical Center with partners in
Groningen and Twente. This entry covers that public part only. The private training data and the hidden
validation and testing cohorts are not released.

## Composition

The public set holds 1500 MRI studies from 1476 patients, scanned between 2012 and 2021. 425 studies are labelled
csPCa and 1075 contain benign tissue or indolent cancer. 328 cases come from the earlier ProstateX challenge, so the
two should not be combined. Each study has an axial T2-weighted image, an axial high b-value diffusion image and an
ADC map, and some also have sagittal or coronal T2-weighted images. No contrast-enhanced sequences are included.
Images are MHA files, distributed as five zip archives named fold0 to fold4.

## Acquisition

Exams were acquired at Radboud University Medical Center, University Medical Center Groningen (the clinical table lists
this center as PCNN, Prostaat Centrum Noord-Nederland) and Ziekenhuisgroep Twente. The study protocol reports 1.5T and 3T scanners from Siemens and
Philips with surface coils: five Siemens and two Philips scanners in the public set.

## Annotations

Labels are maintained in the separate picai_labels repository. Positives are histologically confirmed ISUP 2 or
higher; negatives are confirmed by histology (ISUP 1 or lower) or by MRI (PI-RADS 2 or lower), without follow-up.
Lesions were delineated in ITK-SNAP by trained investigators supervised by expert radiologists. The original expert
masks carry the ISUP grade, while the AI-derived and follow-up masks are binary. Expert masks cover 1295 cases; the remaining 205 positives first had only AI-derived masks and
later received expert masks from a follow-up study. AI-derived whole-gland masks and a per-study clinical table
(age, PSA, PSA density, prostate volume, biopsy type, PI-RADS and Gleason scores per lesion, center) are included.

## Known limitations

- Cases were selected by convenience sampling, so the case mix does not reflect routine care.
- Some patients have several studies with different outcomes, each labelled on its own.
- The README on Zenodo and the study protocol differ slightly on median age and lesion counts.
- The whole-gland masks are automatic and contain known errors.

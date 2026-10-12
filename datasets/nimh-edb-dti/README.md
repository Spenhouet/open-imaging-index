The Emotion and Development Branch of the US National Institute of Mental Health released this dataset on OpenNeuro to support studies that link brain structure, especially white matter, to irritability, inattention and hyperactivity in young people. It pairs diffusion tensor imaging with T1-weighted and T2-weighted anatomical scans and with parent, child and clinician ratings. The data were collected between 2012 and 2017 under two NIH clinical protocols, and the release accompanies a 2024 paper that modelled shared and specific components of these three symptom dimensions.

## Composition

132 youths have imaging, each with one session holding a diffusion series, a T1-weighted scan and a T2-weighted scan. The participants and phenotype tables cover 583 youths aged roughly 7 to 20 years; most of them have ratings only. Among the imaged subjects with a participants row (131), 77 are male and 54 female, with a mean age of 13.8 years. Based on the KSADS diagnosis columns, 54 imaged subjects are healthy volunteers, 52 meet criteria for disruptive mood dysregulation disorder and 36 for ADHD; diagnoses can co-occur, and 21 also meet criteria for an anxiety disorder. Phenotype data include the Affective Reactivity Index, the Conners Comprehensive Behavioral Rating Scale, the SCAR-H, the KSADS, the CGAS, IQ, income, race, ethnicity and medication.

## Acquisition

All scans come from a single 3 T GE scanner with an 8-channel head coil at the NIMH in Bethesda. Diffusion images were acquired with single-shot EPI at 2.5 mm isotropic resolution, with five b=0 volumes and 75 diffusion-weighted volumes (6 at b=300 and 69 at b=1000 s/mm²) over four or five runs. Because the scanner wrote wrong gradient tables, the runs are shared as one concatenated file per subject with corrected bval and bvec files produced in TORTOISE. Anatomical scans were defaced with the DSST defacing pipeline. A few subjects have a different slice thickness or in-plane reconstruction, marked by acq and rec labels in the filenames.

## Known limitations

The released imaging sample (132) is smaller than the 152-subject DTI sample in the paper. One imaged subject has no row in participants.tsv or the phenotype table. Exclusion criteria removed youths with autism, psychosis, bipolar disorder, substance use or IQ below 70, and the sample comes from one research clinic.

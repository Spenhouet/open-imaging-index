The Aphasia Recovery Cohort brings together brain MRI, demographics and language test scores from people living with aphasia after a left-hemisphere stroke. The Aphasia Lab at the University of South Carolina pooled the data from several of its studies, among them anomia treatment, the POLAR outcome prediction protocol, speech entrainment and a brain stimulation trial. Because many people took part in more than one study, most of the cohort was scanned repeatedly. The data are shared on OpenNeuro in BIDS under CC0 and are meant for tool development, lesion mapping, impairment prediction and teaching.

## Composition

The first release covers 230 people (89 female, 141 male) and 902 scanning sessions. All participants were in the chronic phase, at least six months after the stroke, and were 21 to 80 years old at enrolment. 141 people had a second session and 103 a third. Western Aphasia Battery scores and aphasia types are included; the paper lists 31 people without an aphasia diagnosis by the test cut-offs. `participants.tsv` holds 245 rows, more than the 230 people with images, and gives age at stroke rather than age at scan, so no age rows are listed here.

## Acquisition

All scans come from Siemens 3 T scanners at one site, first Trio systems with 12-channel head coils and later Prisma systems with 20-channel head and neck coils. A first visit usually holds a 1 mm isotropic T1-weighted MP-RAGE and a T2-weighted SPACE scan. Other sessions add FLAIR, several diffusion protocols (some for tractography, some for kurtosis-type microstructure), resting-state fMRI and a sparse picture-naming fMRI task. Sequence parameters changed over the years and are stored in the BIDS sidecars. Anatomical images were defaced with spm_deface.

## Annotations

An expert drew a lesion mask on the T2-weighted scan of each person's first visit. The snapshot holds 228 masks in `derivatives/lesion_masks`. The median lesion volume was 69.2 ml.

## Known limitations

The cohort is retrospective and pools studies with different goals and protocols, so sequences vary between sessions. All participants volunteered for aphasia therapy, so lesions cluster in the middle cerebral artery territory and people with stroke but without aphasia are rare. No acute-phase imaging is included. The paper reports 441 T1-weighted and 447 T2-weighted series, while the file tree holds 447 and 441. The authors plan a second batch held back for competitions.

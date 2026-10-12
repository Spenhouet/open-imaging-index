This OpenNeuro release accompanies two lesion-symptom mapping studies from the Fiez lab at the University of Pittsburgh. The question behind it is how damage to the left hemisphere affects two kinds of number skill: approximate numeracy (judging which of two dot arrays is larger) and precise numeracy (reading, writing and calculating exact numbers), and how each relates to language and aphasia. Participants are chronic stroke survivors recruited through the Western Pennsylvania Patient Registry. The release shares spatially normalized brain images and hand-drawn lesion masks together with per-person test scores, so the images can be used for lesion segmentation work and the scores for lesion-behavior regression.

## Composition

Snapshot 2.1.0 contains 105 participants; the Cortex paper analysed 104 and the second version added one more. Each participant has one skull-stripped brain volume normalized to the ICBM152 template, one binary lesion mask in that space and one copy of the mask smoothed with a 4 mm Gaussian kernel. The participants file records image source (research MRI, clinical MRI or clinical CT), age, years of education, the Western Aphasia Battery aphasia quotient, left hemisphere lesion volume, z-scores for approximate and precise numeracy, and factor scores from two factor analyses. In the paper cohort, 59 participants are male and 45 female, with a mean age of about 62 years.

## Acquisition

Research-grade MRI exists for 80 people in the paper cohort: 32 were scanned on a Siemens 3T Allegra and 48 on a Siemens 3T Prisma, both with a 1 mm T1 MPRAGE. For the other 24, scans were taken from medical records because research imaging was delayed by the COVID-19 pandemic or was contraindicated. In the release, 21 of these are clinical MRI and 3 are clinical CT. Images were normalized with enantiomorphic registration in MATLAB.

## Annotations

Lesions were traced by hand in ITK-SNAP on the research T1-weighted image where available and on the clinical scan otherwise. A neurologist and a second rater, blind to behavior, checked every mask.

## Known limitations

Only normalized, skull-stripped images are shared, not raw scans or the FLAIR and T2 images of the research protocol, and the files of clinical cases carry the T1w label whatever their original contrast or modality. The README notes weaker skull stripping for some clinical images. Sex is not included in the participants file. All lesions are left hemispheric and chronic.

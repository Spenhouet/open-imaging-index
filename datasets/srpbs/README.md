The SRPBS Multi-disorder MRI Dataset is the imaging release of the DecNef consortium, a group of Japanese universities
and institutes formed in 2013 under the Strategic Research Program for the Promotion of Brain Science (SRPBS) and
funded by AMED. It was built to train and test functional-connectivity classifiers for psychiatric disorders across
sites. Data are hosted on Synapse and on the DecNef Project Brain Data Repository run by ATR.

## Composition

The restricted release holds 1,627 participants (958 men, 669 women, mean age 38.2 years): 950 healthy controls, 255
with major depressive disorder, 147 with schizophrenia spectrum disorders, 125 with autism spectrum disorder, 67 with
chronic pain, 41 with bipolar disorder, 10 with stroke, 4 with dysthymia and 28 with other diagnoses. The unrestricted
release is the subset of 1,410 participants who consented to public release. Each participant has one resting-state
fMRI run, one T1w scan and an optional B0 field map, together with age, sex, handedness, diagnosis and clinical
rating scales, MRIQC metrics and a defacing quality rating.

## Acquisition

All scans were done at 3T on Siemens (TimTrio, Trio, Verio, Spectra) and GE (Signa HDxt, MR750w) scanners at 12 sites
in Japan. A shared protocol recommended a 10-minute eyes-open run of 240 volumes with TR
2.5 s and 3.3 mm in-plane resolution, but several sites used shorter runs or other parameters. T1w scans follow the
J-ADNI2 protocol at about 1 mm isotropic. Faces were masked with SPM8 and mri_deface.

## Annotations

Diagnoses were made by clinicians at each site with DSM-IV, DSM-IV-TR or DSM-5 criteria, supported by the MINI or SCID, and
chronic pain by the IASP definition. Three raters scored the defacing of every T1w scan.

## Known limitations

- Diagnoses are not balanced across sites, so disorder and site are confounded. A separate Traveling Subject dataset
  of 9 men scanned at the sites is offered for harmonization.
- Run length, TR and phase-encoding direction differ between sites.
- The summary row of Table 3 in the descriptor gives a wrong sex split for autism; the site rows sum to 109 men and 16
  women.
- The two releases carry different terms, and the full release needs an approved application.

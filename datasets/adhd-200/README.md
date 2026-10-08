The ADHD-200 Sample is an open collection of resting-state fMRI and structural brain MRI from children, adolescents and
young adults with and without attention deficit hyperactivity disorder (ADHD). Eight imaging sites in the US, the
Netherlands and China pooled data they had collected for earlier studies, and the ADHD-200 Consortium released it
through the 1000 Functional Connectomes Project / INDI on NITRC on March 1, 2011. The release was paired with the
ADHD-200 Global Competition, which asked teams to predict diagnosis from imaging; it is used to benchmark
ADHD classification and to study functional connectivity in development.

## Composition

The labelled release holds 776 datasets: 285 from people diagnosed with ADHD and 491 from typically developing
participants, all aged 7 to 21. Each dataset has a defaced T1-weighted MPRAGE and at least one resting-state fMRI run;
some sites provide two to four rest runs. A further 197 datasets from six sites, two of which were absent from the
training data, were released on July 1, 2011 as the unlabelled competition test set; the diagnoses for these were
later published as a separate phenotypic file. Phenotypic data cover diagnosis and ADHD subtype, dimensional ADHD
symptom scores, age, sex, IQ, handedness and lifetime medication status.

## Acquisition

Each site used its own scanner and protocol. Rest instructions differed by site: some asked for eyes open with a
fixation cross, others for eyes closed. Files are distributed in BIDS layout.

## Annotations

There are no image labels. Diagnoses come from each site's clinical assessment. Every resting-state scan carries a
preliminary quality rating (usable or questionable) from visual inspection of the time series.

## Known limitations

- The data were gathered for separate studies without a shared protocol, so inclusion criteria, age ranges and
  acquisition differ strongly between sites.
- The groups differ in sex and IQ: males make up 53% of typically developing and 79% of ADHD participants in the
  training set, and mean IQ is 114 versus 106. A competition entry using only phenotypic variables scored highest.
- The per-site counts in the paper's Table 1 add up to 904, not 776, because they also count datasets that the site
  pages list as held back for the competition test set (51 from Brown, 65 from Peking, 12 from Pittsburgh).
- Two corrections were issued in 2011: corrected structural images for 73 participants and corrected phenotypic values
  for 49.

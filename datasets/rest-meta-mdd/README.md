REST-meta-MDD is the first project of the Depression Imaging REsearch ConsorTium (DIRECT), set up in 2017 by 25 research groups at 17 hospitals in China. Each group preprocessed its own previously collected resting-state fMRI scans locally with a common DPARSF protocol and passed only the resulting individual-level indices to the consortium, which pooled them for mega-analyses of major depressive disorder (MDD). The pooled derivatives are distributed through Science Data Bank and the R-fMRI Maps Project of the Institute of Psychology, Chinese Academy of Sciences. Raw scans are not part of the release.

## Composition

The release covers 2428 participants: 1300 patients with MDD and 1128 normal controls. Per cohort, the number of patients ranges from 13 to 282 and of controls from 6 to 251. Of the patients, 826 are female and 474 male. 562 patients were in a first episode (318 of them drug-naive) and 282 had recurrent MDD; episode type and medication were not recorded for 456. The consortium agreed to provide diagnosis, age, sex and education for everyone, with episode, medication and severity where collected. The PNAS analysis used a subset of 848 patients and 794 controls from 17 sites after quality and completeness exclusions.

## Acquisition

Cohorts used Siemens, GE and Philips scanners, three of them at 1.5T and 21 at 3T (one cohort states no field strength), with repetition times of 2000 to 3000 ms and 100 to 250 volumes per run. The site table on the rfmri.org page lists scanner, coil, timing and voxel size per cohort. Preprocessing used DPARSF with Friston-24 head motion regression; outputs include time series for the Dosenbach 160 regions and functional connectivity matrices.

## Annotations

There are no image labels. Phenotypic data with diagnosis and clinical variables come with the signed agreement.

## Known limitations

Only derivatives from one fixed pipeline are available, so other preprocessing choices cannot be applied. The data are retrospective and heterogeneous across cohorts, medication information is incomplete, and all participants were scanned in China. Downloads are open but the archives stay encrypted until the agreement is signed.

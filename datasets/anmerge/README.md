ANMerge is a cleaned and extended version of the data from AddNeuroMed, a European longitudinal cohort study started
in 2005 under the EU InnoMed programme to find biomarkers of Alzheimer's disease progression. Researchers at
Fraunhofer SCAI and the University of Oxford reorganised the earlier Synapse release, unified the participant
identifiers across data types, added a months-in-study time scale, corrected entry errors and added clinical data
that had not been shared before. The result is hosted on Synapse and is meant as a discovery or validation cohort
next to ADNI.

## Composition

The release covers 1,702 participants: 773 from AddNeuroMed itself, 665 from the Maudsley BRC Dementia Case Registry
(DCR) and 264 from the Alzheimer's Research Trust UK cohort (ART). At baseline, 793 were cognitively healthy, 397 had
mild cognitive impairment and 512 had Alzheimer's disease, with a mean age of 76.4 years. Clinical data exist for
everyone; MRI features exist for 453 participants, proteomics for 680, blood gene expression for 709 and genotypes for
1,014. The tables report 4,585 participant visits, with follow-up of up to 12 years.

## Acquisition

AddNeuroMed recruited at six centres in Finland, Greece, the United Kingdom, Poland, Italy and France. Structural
T1-weighted MRI was acquired at 1.5 T at months 0, 3 and 12 with a protocol aligned to ADNI. ANMerge provides
FreeSurfer 5.3 and 6.0 volumes and cortical thickness. The raw T1-weighted images are shared in NIfTI format in the
earlier AddNeuroMed folder under the same access terms; the folder notes that scanners and protocols changed during
the study.

## Annotations

There are no image annotations. Labels are clinical diagnoses (DSM-IV and NINCDS-ADRDA for Alzheimer's disease,
Petersen criteria for MCI) and cognitive scores such as MMSE, CDR and ADAS-Cog.

## Known limitations

No amyloid PET or cerebrospinal fluid markers were collected, so amyloid status is unknown. Many participants miss one
or more data types, and DCR participants were included even when only clinical data exist. Genotype and expression
data come in separate batches and need batch correction. Study protocols are only partly documented.

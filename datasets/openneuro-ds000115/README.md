This OpenNeuro release holds structural MRI and task functional MRI from a study at Washington University in St. Louis on working memory in schizophrenia and familial risk. Participants were people with schizophrenia, their non-psychotic full siblings, healthy controls and the siblings of those controls, recruited through the Conte Center for the Neuroscience of Mental Disorders. The accompanying 2012 paper by Repovš and Barch used the scans to test whether connectivity between frontal-parietal, cingulo-opercular, cerebellar and default mode networks changes with working memory load, and whether patients and siblings differ from controls across rest and task states.

## Composition

The snapshot summary on OpenNeuro lists 99 subjects in BIDS layout, with subject numbers up to 102; the README notes that three numbers are missing. The participant table records the diagnostic group (schizophrenia, sibling of a patient, control, sibling of a control), sex, race, age, education, symptom ratings, cognitive test scores and N-back accuracy and response times. The paper analysed a subset of 74 participants (19 patients, 28 patient siblings, 10 controls, 17 control siblings), after excluding people with poor image quality or without N-back data. Group sizes for the shared 99 are not stated by the paper or the dataset page.

## Acquisition

The paper reports scanning on a Siemens 3 T Tim Trio, with a sagittal MP-RAGE T1-weighted volume at 1 mm isotropic resolution and BOLD runs at 4 mm isotropic resolution with a repetition time of 2.5 s. The release organises the functional data as one run per letter N-back load (0-back, 1-back, 2-back) with an events file each, next to the T1-weighted volume in each subject folder. The paper also describes two resting-state runs, but these are not part of the OpenNeuro release. Anatomical images were defaced with pydeface.

## Known limitations

No license is stated, so terms of reuse are unclear. Diagnostic group counts for the release are only available in a participant file that has no license, so they are not reported here. Resting-state data are not shared. The release is a single snapshot from 2018 in an early BIDS version.

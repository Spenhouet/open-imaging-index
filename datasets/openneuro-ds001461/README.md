This OpenNeuro dataset pairs two groups of interest, people with schizophrenia and healthy controls, with a second
factor, whether they smoke. Each of the 81 adults contributes a single resting-state functional MRI run, which makes
the collection suited to studying how schizophrenia and tobacco smoking interact in intrinsic brain connectivity. It
was uploaded by Wei Liao and Yun-Shuang Fan. Snapshot 1.0.0 appeared in August 2018, and the current snapshot 1.0.3
(January 2020) is shared under a CC0 waiver.

## Composition

There are 47 participants with schizophrenia and 34 healthy controls. Crossed with smoking status this gives four
groups, coded by the first digit of the subject label: 25 nonsmoking patients (1xx), 22 smoking patients (2xx), 12
nonsmoking controls (3xx) and 22 smoking controls (4xx). The cohort has 53 men and 28 women, aged 17 to 60 years
(mean 32.3). participants.tsv lists sex, age, diagnosis and smoking status and nothing else; no clinical scales or
smoking quantity measures are included.

## Acquisition

All runs come from one GE Signa HDxt 3T scanner; the sidecar files name the 1st Hospital of CQMU as the institution.
The sequence is a 2D gradient-echo EPI with a 2 s repetition time, 40 ms echo time, 90 degree flip angle, a 64 by 64
matrix and 4 mm slices. Images were converted from DICOM with dcm2niix.

## Known limitations

- Only resting-state BOLD runs are shared. There is no anatomical scan for registration or segmentation.
- The dataset page links no publication, and the README gives no recruitment criteria, smoking definition or
  medication details.
- The nonsmoking control group is small (12) and most smokers are men, so smoking and sex are confounded.

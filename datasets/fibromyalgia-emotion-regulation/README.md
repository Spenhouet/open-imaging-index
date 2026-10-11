This OpenNeuro release (ds004144) holds raw brain MRI from a case-control study of women with fibromyalgia and
healthy women, run at the National Institute of Psychiatry in Mexico City. The study looks at how emotion processing
and regulation relate to clinical and psychological symptoms in fibromyalgia. Imaging is shared in BIDS under CC0,
and the matching demographic, clinical and behavioral tables sit in a separate Zenodo record under CC BY 4.0.

## Composition

The release has 66 women: 33 with fibromyalgia and 33 controls matched for age and years of education. The authors
scanned 67 women between November 2018 and August 2019 and dropped one after an incidental finding. Participants had to
be 18 to 50 years old, all were right-handed, and recorded ages run from 29 to 50. Fibromyalgia was diagnosed beforehand by a
rheumatologist or internist and confirmed with the 1990 and 2016 American College of Rheumatology criteria. The
clinical spreadsheet covers tender points, pain and symptom scales, psychiatric interview, depression and anxiety
ratings, emotion regulation and alexithymia questionnaires, and medication.

## Acquisition

All scans come from one 3 T Philips Ingenia with a 32-channel head coil, in a single session per person: a 10-minute
eyes-open resting-state EPI run, a 1 mm isotropic 3D T1w, a 1 mm isotropic 3D T2w and a task EPI run (TR 2 s, 3 mm
voxels). In the task, participants viewed affective pictures and followed a block instruction to attend, reappraise or
suppress, then gave three visual analogue scale ratings after each block. Faces were removed with pydeface.
Every subject has the structural scans and the resting-state run; one subject has no task run.

## Known limitations

- Only women, from one site and one scanner, so results may not carry over to men or other settings.
- Patients with major psychiatric disorders, other dominant pain conditions, migraine or opioid use were excluded,
  which narrows how typical the patient group is.
- The changelog says fieldmaps were removed because they were acquired incorrectly, yet two fieldmap files remain
  for one subject.
- Preprocessed images are not in the release; the authors offer them on request.

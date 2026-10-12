This OpenNeuro dataset captures how school-aged children process written and spoken words. A Northwestern University
lab scanned typically developing children while they decided whether two words rhymed, shared the same rime spelling,
or were related in meaning, with each task given once with heard words and once with printed words. Standardized
reading, language and intelligence tests accompany the scans. It was first released in October 2019, and the current
snapshot 1.1.1 (April 2022) is published under a CC0 waiver.

## Composition

The release holds 91 children, 52 boys and 39 girls, aged about 8.7 to 15.5 years (mean 11.4). Every child has one
T1-weighted image and task fMRI. Not every child completed every task: according to the data paper, between 60
(auditory spelling) and 87 (visual rhyming) children have at least one run per task. Participants were right-handed
native English speakers recruited around Chicago, with no reported neurological, psychiatric, reading, language or
attention disorder. The phenotype folder holds raw and standard scores from six test batteries, and participants.tsv
lists age, sex, handedness, ethnicity, race and a shifted birth date.

## Acquisition

All images come from one GE Signa Excite 1.5 T scanner at Evanston Hospital with a quadrature birdcage head coil.
Structural images are 1 mm SPGR. Functional runs used single-shot gradient-echo EPI with a 2 s TR, 24 slices and
3.75 x 3.75 x 5 mm voxels. Each of the six tasks was split into two runs, and the tasks were spread over three scanning
days. Children practised in a mock scanner beforehand. Anatomical images were defaced with pydeface, and dates were
shifted to years before 1900.

## Annotations

There are no image annotations. Event files give per-trial onsets, conditions, accuracy and response times. The
release also contains all word, symbol and tone stimuli with word characteristics, and MRIQC reports.

## Known limitations

- Functional runs with more than a quarter of volumes moving over 2 mm between volumes were dropped, so task coverage
  varies between children.
- The scanner is 1.5 T with thick 5 mm slices, coarser than current fMRI protocols.
- participants.tsv codes four children as left-handed, although the paper lists right-handedness as an inclusion
  criterion.
- The paper gives an EPI echo time of 25 ms while the sidecar files record 35 ms.
- Age in participants.tsv refers to the testing visit, not the scan date.

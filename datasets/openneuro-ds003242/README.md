This OpenNeuro dataset holds the MRI behind a study of whether a day without social contact makes people crave
company the way a day without food makes them crave food. Each participant came in three times: after 10 hours alone
in a room with no social contact, after 10 hours of fasting, and on a baseline evening. In every session they viewed
photographs of food, social activities and flowers in a cue-induced craving task while being scanned. The snapshot
1.0.0 was released in October 2020 under a CC0 waiver; the study was published in Nature Neuroscience in November
2020.

## Composition

The paper analysed 40 healthy, right-handed adults aged 18 to 40, 27 of them women, after dropping 2 of 42 recruits
who missed a session. The shared snapshot contains image folders for 32 of these people, 22 women and 10 men, each
with all three sessions. BIDS stores every session as its own subject (suffix b, f or s), giving 96 folders.
participants.tsv lists age and sex for 41 people, including some without images. Every session holds a T1-weighted
and a T2-weighted image, field maps and six craving task runs; one fasting session has four runs. Baseline sessions
add a run of a reward localizer task used to find the dopaminergic midbrain. In total there are 1,182 image files.

## Acquisition

Scans were made on a Siemens Prisma fit 3T system with a 32-channel head coil at the McGovern Institute at MIT.
Structural images are 1 mm isotropic; the paper calls the second image T2*-weighted, while the file is named T2w and
its sidecar names a T2 SPACE protocol. Functional runs are partial-head EPI with 3 mm voxels, TR 2 s and TE 30 ms,
147 volumes per run. A phase-difference field map corrects distortion near the midbrain.

## Annotations

There are no image annotations. Events files give trial onsets and conditions for both tasks. Craving ratings and
other behavioural data are kept on the Open Science Framework, not in this dataset.

## Known limitations

- Only 32 of the 40 analysed participants have images in the snapshot, and the reason is not stated.
- The dataset_description.json still points to the paper as under revision and leaves task names as TODO.
- The sample is small, from a single site, and selected for low loneliness and large social networks.

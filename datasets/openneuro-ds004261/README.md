This OpenNeuro release holds the fMRI experiment of a Beijing Normal University study of the misinformation effect by
Xuhao Shao, Bi Zhu, Elizabeth Loftus and colleagues. Participants first viewed eight picture stories of incidents such as a street theft,
three hours later read narratives about the same stories in which some details were described wrongly, and the next
morning answered a recognition test. The study tracks how hippocampal and cortical activity patterns carry over between
these three stages and which of them predict a false or a true memory. Data are in BIDS under CC0, with the analysis
code bundled as a zip file.

## Composition

57 healthy, right-handed Chinese college students, all in the misinformation condition. The paper reports 29 women and
28 men with a mean age of 22 years. Each subject has three sessions (day1AM original event, day1PM post-event
information, day2AM memory test), each with four BOLD runs and a fieldmap. The T1-weighted image is stored in the
day1PM session. The participants table gives age, sex and group.

## Acquisition

All scans were made on a Siemens Prisma 3 T scanner with a 64-channel head-neck coil at the Beijing Normal University
MRI Center. Functional runs use a simultaneous multi-slice EPI with TR 2000 ms, TE 34 ms, 2 mm isotropic voxels, 72
slices and multiband factor 3. The structural image is a 1 mm MPRAGE (TR 2530 ms, TE 2.27 ms). A dual-echo gradient
echo fieldmap was recorded for distortion correction.

## Annotations

There are no image labels. Event files give onsets, item ids and versions, trial types and, for the memory test, the
response, reaction time and response type.

## Known limitations

- participants.tsv lists 30 women and 27 men, while the paper reports 29 and 28; the paper's mean age (22) is rounded,
  the table gives 21.5.
- sub-2063 has no T1-weighted image.
- sub-2035 has two fieldmaps in the day1PM session.
- The two behavioural-only groups of the paper (neutral and consistent information) were not scanned.
- Single site, narrow age range; dataset_description.json still holds template placeholders.

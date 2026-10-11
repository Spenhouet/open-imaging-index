This OpenNeuro release holds the raw fMRI data of a Princeton University study by Asieh Zadbood, Uri Hasson and
colleagues on how the brain revises memories of past events once new information changes their meaning. Participants
watched a shortened cut of the film The Sixth Sense in the scanner and then described each scene aloud from short cues.
One group learned the twist ending before the film, one saw it at the end, and one never saw it, which lets researchers
compare event representations with and without updating. Data are in BIDS under CC0.

## Composition

57 right-handed native English speakers: 18 in the spoiled group, 19 in the twist group and 20 in the no-twist group,
coded 1 to 3 in the condition column of participants.tsv. The paper scanned 66 people aged 18 to 24 (21 men) and
excluded nine; age and sex of the 57 released subjects are not given. Each subject folder holds one T1-weighted image,
one movie run, one recall run (two or three for six subjects whose recall was paused) and a pair of opposite
phase-encoding field maps, without sessions.

## Acquisition

All scans were made on a Siemens Prisma 3 T scanner with a 64-channel head coil. Functional runs use interleaved
multiband EPI (TR 1500 ms, TE 33 ms, flip angle 80 degrees, 2 mm slices, simultaneous multi-slice factor 4). The
anatomical image is an MPRAGE at 1 mm isotropic resolution, taken before the film. Field maps were acquired after the
recall run. Spoken recall was recorded in the scanner with a noise-cancelling optical microphone.

## Annotations

There are no image labels. Event files mark the onset of each of the 18 film scenes in the movie run and of each
recalled scene in the recall runs, with its duration; recall event files add a column named correct. scene_info.txt describes the content of each scene. The run length in volumes is
part of each functional file name and of participants.tsv.

## Known limitations

- Runs were stopped by hand, so run lengths differ between subjects.
- Age and sex are reported only for all 66 scanned people, not for the released subset.
- Single site, narrow age range, one film.

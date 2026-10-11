Yeshurun, Nguyen and Hasson at Princeton scanned young adults while they listened to a short recorded story. Two
versions of the story keep the same sentence structure but swap one to three words per sentence, so one tells of a man
fixated on Milky Way bars and the other of a woman fixated on vodka. Comparing brain responses between the versions
shows how small local differences grow into distinct narrative representations in regions that integrate information
over long time windows. The images and stimuli are on OpenNeuro as ds001131 under a CC0 waiver.

## Composition

Snapshot 1.0.0 holds 54 subjects aged 18 to 34, 27 female and 27 male according to participants.tsv. The README
splits them into three groups of 18: one heard the Milky Way story, one heard the vodka story, and one heard two
control versions, a synonym rewrite of the first story and a scrambled version of the second. Each subject has one
T1-weighted image, and there are 72 BOLD runs in total. The four audio files are included in a stimuli folder.

## Acquisition

All scans come from a 3 T Siemens Skyra. The task sidecars give a repetition time of 1.5 s, an echo time of 28 ms, a
flip angle of 64 degrees and 27 interleaved slices of 4 mm. The preprint reports 3 x 3 mm in-plane resolution, a
12-channel head coil and an MPRAGE anatomical scan at about 0.9 mm. Each run starts with 18 s of music and 3 s of
silence and ends with 15 s of silence around the story.

## Annotations

There are no image labels. Event files mark the stimulus timing, and the README notes that the story spans volumes 15
to 283 for most subjects.

## Known limitations

- Two subjects (sub-18 and sub-27) have a story onset shifted by four volumes because of scanner trigger problems.
- The preprint describes only the 36 subjects of the two main stories and excluded two of them for head motion; the
  control group is not described in any source opened for this entry.
- The preprint mentions a resting-state scan in 26 subjects, which is not part of this release.
- The Narratives collection (ds002345) also contains a milkyway task, so subjects may overlap with that release.

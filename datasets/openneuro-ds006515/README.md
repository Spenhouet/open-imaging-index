The Chicago Attention and Thoughts (CAT) dataset comes from the Cognition, Attention, and Brain Lab of Monica
Rosenberg at the University of Chicago. Healthy young adults took part in two fMRI sessions on separate days, on
average about 11 days apart. Each session combined resting runs in which people reported what they had been thinking,
naturalistic stories and films, and a continuous performance task that measures sustained attention. The lab uses the
data to ask how spontaneous thought and attention relate to functional connectivity. The images are on OpenNeuro as
ds006515 in BIDS under CC0.

## Composition

60 right-handed, English-speaking adults from the university and its surroundings were scanned, 34 women and 26 men
with a mean age of 22.9 years (SD 3.3). Four did not come back for the second session, so the release holds 116
sessions. Every session has one T1-weighted image and three to five BOLD runs (five in 110 sessions), 689 NIfTI volumes in total. No
participants.tsv is included, so age and sex are only available as group summaries from the preprint.

## Acquisition

All scans come from one 3 T Philips Ingenia with a 32-channel head coil. The BOLD runs use multiband EPI with a 1 s
repetition time and 2.5 x 2.5 x 3 mm voxels; the T1-weighted scan is a 1 mm MPRAGE. Per session the order was a story
presented as audio only or video only, a first annotated rest run, an audiovisual film (a cooking video or a segment
of North by Northwest), a second annotated rest run, and the attention task. In annotated rest, each 30 s rest period
was followed by a short spoken description of the thoughts and ratings on nine dimensions.

## Annotations

There are no image labels. The preprint says thought ratings will be shared on GitHub, while the spoken
descriptions stay private.

## Known limitations

- The release has no events files, participant table or behavioral data; the task timing and the thought reports are
  not part of snapshot 1.0.0.
- One participant has two first-session runs with a 1.026 s repetition time.
- The attention task appears in the files as separate audio and visual runs (aCPT, vCPT), while the README describes
  it as one audiovisual task.
- The accompanying paper is a preprint and has not been peer reviewed.

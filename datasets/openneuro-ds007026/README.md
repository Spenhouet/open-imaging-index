This OpenNeuro dataset holds functional and structural brain MRI from a study of decisions under risk by Maike
Renkert, Gilles de Hollander, Gökhan Aydogan, Saurabh Bedi and Christian Ruff. The release is named stressrisk and
the one task in it is a risk task, but the snapshot ships no README, no participants file and no linked paper, so the
study design, including any stress manipulation, is not documented with the data. It was released in December 2025
under a CC0 waiver.

## Composition

Snapshot 1.0.0 has 55 subject folders, numbered up to sub-61 with gaps. Every subject has a first session, and 50
subjects also have a second session. In the file listing, 52 subjects have one T1-weighted scan in the first session,
54 have BOLD runs, and 51 have both. Most sessions hold six risk-task runs; sub-03 has twelve runs in its first
session, six of them labelled with a generic task name. In total the release has 630 BOLD runs and 618 EPI field maps,
recorded in left-right and right-left phase-encoding pairs. Age, sex and group membership are not given.

## Acquisition

The task sidecar reports a 3T scanner, a repetition time of 2.298 s, in-plane acceleration factor 2 and 39 slices in
the slice-timing list. Scanner vendor, model and site are not stated. Of the 624 risk-task runs, 600 come with an events file
for the task. Images are stored as uncompressed NIfTI in BIDS 1.8.0 layout, about 64.6 GB in total. The uploader
affirmed that structural scans were defaced.

## Annotations

There are no image annotations. Task event files hold the trial timing and behavioural records of the risk task.

## Known limitations

- No README, participants.tsv or paper accompanies the release, so the population, the task design and the meaning of
  the two sessions cannot be checked from the data.
- Three subjects lack a T1-weighted scan and one subject has no functional data.
- Six runs of sub-03 carry the task label "task" instead of "risk".

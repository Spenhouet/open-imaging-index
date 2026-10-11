This OpenNeuro dataset comes from a University of Pittsburgh study of how people pull their attention away from
repetitive thought such as worry and rumination. Before scanning, each participant described nine of their own
recurring concerns in an interview. In the scanner, a short reminder of one concern was shown for about 30 seconds,
followed by a sustained attention task (SART, press for every digit except 8) and thought probes asking how
uncontrollable the thoughts had been. The first snapshot appeared in September 2025; snapshot 1.0.3 (July 2026)
removes the participant-written reminder text and adds diagnoses and questionnaire scores. It is released under a CC0
waiver.

## Composition

The release holds all 61 adults who completed the scan session, aged 20 to 45. The sample was recruited from the
community and enriched for severe repetitive thought. Diagnostic interview data (ADIS-5) are available for 58 of them;
46 meet criteria for at least one DSM-5 disorder, most often generalized anxiety disorder, social anxiety disorder,
specific phobia and obsessive-compulsive disorder. The participants file gives age, gender, race, ethnicity, worry
and perseverative-thinking totals and a flag for the four people left out of the associated preprint's analysis.

## Acquisition

All scans come from one Siemens MAGNETOM Prisma 3T with a 64-channel head coil at the CMU-Pitt BRIDGE Center. Each
session has a 1 mm isotropic MPRAGE, three task runs of 14 minutes 40 seconds, a resting-state run and a pair of
opposite phase-encoding field maps. Functional runs use multiband (factor 3) EPI with TR 2 s, TE 30 ms and 2 mm
voxels. One participant has only two task runs and two have no resting-state run.

## Annotations

There are no image annotations. Events files give block timing, SART responses, probe ratings and an anonymous label
for which of the nine concerns was cued. Pre-scan ratings of each concern and per-disorder diagnosis columns are in
separate tables.

## Known limitations

- The cue text written by participants was removed for privacy, so the content of each concern is not available.
- Two task runs of one participant were excluded from the preprint for head motion but are kept here.
- Diagnoses, race and ethnicity are missing for three participants.

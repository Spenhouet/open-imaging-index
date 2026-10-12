This OpenNeuro dataset comes from a Brigham Young University fMRI study that asked whether left-handed volunteers, who
are usually excluded from fMRI research, change the results of memory experiments. Left-handed and right-handed young
adults studied and later recognised words and faces in the scanner and also did a semantic fluency task that served to
estimate each person's language lateralization. Goulding, Hamm, Schmidt and Kirwan found no group differences in memory
performance or memory-related activation, and simulations showed that adding a few left-handers to a sample barely
changed group maps (bioRxiv preprint). Snapshot 1.0.0 was posted in June 2023 and 2.0.0 in August 2026, both under CC0.

## Composition

The snapshot holds 109 subjects with one session each, 54 left-handed and 55 right-handed by the Edinburgh Handedness
Inventory (group cut-offs at scores of -40 and +40). participants.tsv lists age, sex, the inventory score, a language
laterality index from the fluency task, flags for inclusion in each task's group analysis and four subscales of the
Internal Representations Questionnaire. Ages run from 18 to 47 and 61 subjects are female. The preprint recruited 120
people and excluded 11 before reaching this sample. Version 2.0.0 removed one further subject for poor image quality.

## Acquisition

All scans were made on a 3 T Siemens TIM Trio with a 32-channel head coil. Each subject has a 1 mm MPRAGE T1-weighted
scan and seven multiband EPI runs (1.8 mm isotropic, 72 slices, TR 1.8 s, TE 42 ms, multiband factor 4): word study,
face study, semantic fluency, and two runs each of word and face recognition, with events files. Most subjects also
have a T2-weighted scan, and all have magnitude and phase-difference field maps; 99 also have reverse phase-encoding EPI
field maps.

## Known limitations

- 12 subjects have no T2-weighted scan and 10 lack the reverse phase-encoding field maps.
- Some subjects are flagged in participants.tsv for exclusion from one or more task analyses.
- The T1w echo time in the sidecars (2.26 ms) differs from the 4.92 ms stated in the preprint.
- The study is described in a preprint, not a peer-reviewed article.

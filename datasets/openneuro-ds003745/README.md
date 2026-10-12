This OpenNeuro dataset comes from a Temple University pilot study, supported by the Scientific Research Network on
Decision Neuroscience and Aging, on whether the effect of social context on reward and economic choices differs
between younger and older adults. Each participant came with a self-chosen friend and played three games in the
scanner. The first snapshot appeared in July 2021 with trust game data only; version 2.0.0 (July 2023) added the other
two tasks and derivatives, and the current snapshot is 2.1.1. A data article in Scientific Data describes it, and the
trust game results were published in NeuroImage in 2022. It is released under a CC0 waiver.

## Composition

The release holds 50 scanned adults: 26 younger (18 to 34 years) and 24 older (63 to 80 years); participants.tsv lists
27 as female and 23 as male. Each person has one T1-weighted and one T2-weighted scan, a B0 field map and BOLD runs
from three tasks in fixed order: an iterated trust game as investor with a friend, a stranger or a computer (two to
five runs), a card-guessing game whose gains and losses were shared with the same three partners (two runs), and an
ultimatum game as responder to a computer, an age-similar and an age-dissimilar proposer (two runs). Folders named
sub-2xx hold only behavioural data from the friends, who were not scanned. Derivatives include fMRIPrep and MRIQC
outputs, single-trial activation estimates and temporal signal-to-noise maps.

## Acquisition

All scans come from one Siemens Prisma 3T with a 20-channel head coil at the Temple University imaging centre in
Philadelphia. Functional runs use single-shot EPI with TR 2.02 s, TE 23 ms and 2.97 x 2.97 x 2.8 mm voxels. The T1w
(MPRAGE) and T2w images are 1 mm isotropic and were defaced with PyDeface; acquisition dates were shifted.

## Annotations

There are no image annotations. Events files give onsets, durations, trial types (coding partner and outcome or choice) and response times for each
task run; the trust and ultimatum files also hold the amounts and offers.

## Known limitations

- Demographics beyond age and gender and the extra neuropsychological data are not available because of an experimenter error.
- Older adults moved more and missed more trials than younger adults.
- No data were excluded; users must set their own quality thresholds, for example from MRIQC metrics.
- The sample is small and comes from a single site.

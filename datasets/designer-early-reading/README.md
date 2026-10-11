This OpenNeuro collection (ds007398) holds diffusion MRI of young Mexican children who speak only Spanish and are in
the first stages of learning to read. It was shared by Moramay Ramos-Flores of the Instituto de Neurobiología at
UNAM in Querétaro to support research on the white-matter tracts behind phonological awareness and early reading.
It is a BIDS derivative dataset: only preprocessed diffusion images are released, not raw scans. Snapshot 1.0.2 was
published in February 2026; versions 1.0.0 and 1.0.1 appeared the same day and differ only in the README and the
author name.

## Composition

There are 61 children, each with one session and one preprocessed diffusion series with its b-value and gradient
files. The README calls all of them early readers aged 6.0 to 8.5 years. According to participants.tsv, 34 are girls
and 27 are boys, with a mean age of 7.33 years. Children had no neurological, developmental or psychiatric diagnosis
and no reason they could not be scanned. The study is cross-sectional.

## Acquisition

Diffusion data are multishell, with b = 800 and b = 2500 s/mm² shells plus interleaved b = 0 volumes. All series were
processed with DESIGNER 2.0, which per the sidecars covers denoising, motion, eddy-current and susceptibility
distortion correction. Images stay in native space and are not skull-stripped. No scan was task-based; reading and
phonological tests were done outside the scanner.

## Known limitations

- Scanner make, field strength and acquisition parameters are not given in the dataset.
- Reading and phonological test scores are not included; participants.tsv has only age and sex.
- Raw, unprocessed diffusion data and structural scans are not part of the release.
- The associated article is cited only by a manuscript number, so no peer-reviewed description of the cohort is
  linked yet.

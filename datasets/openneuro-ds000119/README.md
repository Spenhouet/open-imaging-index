This dataset holds the scans from a developmental fMRI study at the University of Pittsburgh in which children,
adolescents and young adults switched between looking toward a visual cue (prosaccade) and looking away from it
(antisaccade). Velanova, Wheeler and Luna compared brain activity on correct and error antisaccade trials across age
groups to trace how error processing and inhibitory control mature (Cerebral Cortex 2008). The data were first posted
in raw form in January 2016, converted to BIDS in March 2016 and published on OpenNeuro as snapshot 00001 under the
PDDL.

## Composition

The snapshot has 73 subjects aged 8 to 26 (43 female, 30 male) with one T1-weighted scan each. 72 of them have
functional runs: 63 with four runs and 9 with three. One subject has only the anatomical scan. The paper scanned 98
volunteers and analysed 77 after excluding incomplete or artifact-laden sessions, equipment failures and one adult at
ceiling; it grouped them as children (8 to 12), adolescents (13 to 17) and adults (18 to 27). All were native English
speakers without a history of neurological problems. MRIQC reports for every subject are included as derivatives.

## Acquisition

All scans come from a Siemens 3 T MAGNETOM Allegra. The anatomical scan is a sagittal MP-RAGE with 0.78 x 0.78 x
1 mm voxels. The functional runs use echo-planar BOLD imaging with TR 1.5 s, TE 25 ms, 3.125 mm in-plane resolution
and 29 axial slices of 4 mm. Each run lasts about 6 minutes and holds one block of 12 prosaccade trials and one block
of 12 antisaccade trials, separated by fixation, with block order counterbalanced.

## Annotations

There are no image annotations. The events files give the onset, task and eye-tracking outcome of each trial, scored
by hand as dropped, incorrect, correct or error-corrected, with saccade latency.

## Known limitations

- The participants.tsv header has the sex and age columns swapped: the column named sex holds age in years and the
  column named age holds sex.
- The release has 73 subjects while the paper reports 77; the subject numbers have gaps, and the age group of each
  subject is not given.
- High-resolution anatomical scans were defaced with pydeface.
- No snapshot DOI is listed for this dataset.

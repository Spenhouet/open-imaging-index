This OpenNeuro release holds the brain MRI behind a developmental fMRI study from the Centre for Advanced Imaging at
the University of Queensland. Samuel Fynes-Clinton, Lars Marstaller and Hana Burianová scanned children, adolescents
and young adults while they retrieved long-term memories, to test whether younger brains separate autobiographical,
episodic and semantic recall the way adult brains do. The data went public on OpenNeuro in February 2019 as ds001748
under CC BY-SA 4.0; the current snapshot is 1.0.4 from March 2019. Group statistical maps sit in a separate NeuroVault
collection that the release links to.

## Composition

The participants table lists 62 people in three age groups: 21 children aged 10 to 12, 20 adolescents aged 14 to 16
and 21 adults aged 21 to 34. Each row gives age in whole years, sex and group. Women and men are split evenly, 31 each.
Every subject folder holds one anatomical image and three task runs, 248 NIfTI files in total.

## Acquisition

The JSON sidecars place all scans on one Siemens 3 T TrioTim at the University of Queensland St Lucia campus, with a
32-channel head coil. The anatomical image is the denoised uniform (UNI-DEN) output of an MP2RAGE sequence at 1 mm
slice thickness, stored under the BIDS T1w suffix. The functional runs are 2D gradient-echo EPI with TR 3 s, TE 30 ms
and 2.5 mm slices. The memory paradigm is adapted from an earlier adult study by Burianová and Grady (2007), with one
run each for autobiographical, episodic and semantic retrieval.

## Annotations

There are no image annotations. BIDS events files give the onsets of the retrieval conditions in each run.

## Known limitations

- The paper's abstract reports 22 young adults, but the release contains 21, so the shared sample does not match the
  published analysis exactly.
- The 1.0.4 snapshot corrected event onsets for two subjects; earlier snapshots carry the wrong timings.
- Age is given only in whole years.
- All participants come from a single site in Brisbane, and the groups are small.

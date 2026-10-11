This OpenNeuro release (ds005850) holds the functional MRI data behind a study by Lanfang Liu, Jiahao Jiang, Hehui
Li and Guosheng Ding on how the brain switches between a small set of large-scale network states while people follow
a spoken story. The authors fitted hidden Markov models to whole-brain network activity and related the states to the
acoustic and semantic properties of the narrative and to how well each listener understood it. The data were
published in January 2025 under CC0.

## Composition

The cohort is 68 Chinese college students, 33 of them men, aged 19 to 27. Every subject folder has one T1-weighted
image and three BOLD runs: a 10-minute real-life story in Mandarin told by a female student (one of three stories,
assigned at random), a 10-minute story in Mongolian that the listeners could not understand, and a resting-state run.
A derivatives folder adds a preprocessed version of each functional run. The older-adult replication sample that
the paper also analyses is not part of this release.

## Acquisition

All participants were scanned on a 3 T Siemens Trio at the MRI center of Southwest University in Chongqing. The
functional runs are gradient-echo EPI with a TR of 2 s, TE of 30 ms and 32 interleaved slices at 3.44 x 3.44 x 3.99
mm. Each raw run has 312 or 310 volumes, of which the first 12 or 10 are a fixation period that let the
noise-cancelling audio equipment adapt to scanner noise. The structural scan is an MPRAGE with 1 x 1 x 1.33 mm voxels.

## Annotations

There are no image annotations. The audio of the stories, their transcripts and the participants' behavioral and
comprehension scores are kept in a separate GitHub repository of the authors, not in the OpenNeuro dataset.

## Known limitations

- The release has no participants table, so sex and age are only available as the group summary in the paper.
- Several runs were excluded from the paper's analyses for head motion: four story runs (subjects 65 to 68), four
  Mongolian runs and four resting runs. They are still in the release.
- The sample is a narrow age band of students from one university setting.

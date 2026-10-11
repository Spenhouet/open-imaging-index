This dataset pools the MRI of six studies on pragmatic language run at the Universidad Nacional Autónoma de México
between 2016 and 2019. Pragmatics covers how listeners recover a speaker's intended meaning beyond the literal words,
for example in speech acts, proverbs and metaphors. Each study used its own fMRI paradigm, and all share a
T1-weighted scan and a set of psychometric tests of language, theory of mind and executive function. The data
descriptor appeared in Frontiers in Human Neuroscience in 2021, and the data are on OpenNeuro under CC0.

## Composition

The paper and the OpenNeuro README describe 145 neurotypical, Mexican-born adults with Spanish as their first
language: 79 women and 66 men, aged 17 to 35 years (median 23.46). Every subject folder holds one T1-weighted image
and at least one BOLD run, 717 NIfTI files in total. The task runs cover speech act recognition, speech act and
facial emotion categorization, an emotion face matching task, proverb comprehension, metaphor comprehension and a
one-back task on verbs and pseudo-verbs. 104 subjects have a resting-state run. A behavioral table with the shared
test scores, events files for the task runs and MRIQC quality reports are included.

## Acquisition

All scans come from one 3 T GE Discovery MR750 with a 32-channel head coil at the national MRI laboratory of UNAM
in Juriquilla. The anatomical image is a 1 mm isotropic 3D spoiled gradient echo T1-weighted scan. Task and
resting-state fMRI used the same gradient echo EPI with TR 2 s, TE 40 ms, 38 slices and 4 mm isotropic voxels.

## Known limitations

- Each protocol scanned a different subset of the cohort, so task samples are small (17 to 28 subjects per task)
  and overlap only in part.
- The README describes a resting-state test-retest study with a second visit six months later for 16 people, but
  the BIDS tree has no sessions and one resting-state run per subject.
- There is no participants table, so sex and age per subject are not released.
- Several studies are cited as theses or as in preparation, so task details rest mostly on the README and the
  project description files.

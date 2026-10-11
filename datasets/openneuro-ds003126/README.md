This OpenNeuro dataset holds the imaging behind a study of how children with dyslexia and children with a spelling
deficit alone process written words. Children read single German words and pseudohomophones aloud in the scanner;
pseudohomophones are misspellings that sound like a real word when read. The data were first released in September
2020; snapshot 1.4.0 (September 2026) is published under a CC0 waiver.

## Composition

The release contains 58 children aged 8 to 10 years, 24 girls and 34 boys. Twenty-two have typical reading and
spelling skills, 16 have an isolated spelling deficit and 20 have dyslexia; the README lists the subject codes of
each group and participants.tsv gives group, age and sex. Each child has one T1-weighted image and three task fMRI
runs, for 232 image files. The BIDS tree stores the structural image under ses-1 and the functional runs under ses-2.

## Acquisition

Scans were made on a Siemens Skyra 3T system with a 20-channel head and neck coil at the Graz site
named in the sidecars. Structural images are 1 mm MPRAGE. Functional runs are 2D gradient-echo EPI with a 64 x 64
matrix, 3 mm slices, TR 2.34 s and TE 33 ms. Each run shows 40 items for 3 s, half words and half pseudohomophones,
separated by a jittered fixation of 2 to 6 s. Runs hold 122 to 130 volumes because the scanner was stopped by hand.

## Annotations

There are no image annotations. Events files give onset, duration, condition, the shown letter string, item number,
length and which of two pseudorandomised task versions the child received. A HED annotation of the events is
included. Spoken responses were recorded as audio but are not scored, so no accuracy or reaction times are present.

## Known limitations

- Events files up to version 1.3.1 mixed two task schedules and should not be used; 1.4.0 rebuilt them from the
  stimulus logs.
- Six runs have no events file because their timing could not be recovered, and one of them was acquired apart from
  its paradigm and should be dropped.
- The sample is small and from a single site.

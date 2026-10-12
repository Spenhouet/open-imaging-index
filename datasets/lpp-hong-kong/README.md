Le Petit Prince Hong Kong (LPPHK) records brain activity of older native Cantonese speakers while they listen to
about 20 minutes of The Little Prince read aloud in Cantonese. It extends the Le Petit Prince family of naturalistic
listening datasets to an older, non-Indo-European speaking group, so that language comprehension in healthy aging can
be studied. Researchers from The Hong Kong Polytechnic University and City University of Hong Kong shared it on
OpenNeuro as ds004718 under a CC0 waiver in 2023 and described it in Scientific Data in 2024.

## Composition

The study recruited 52 healthy, right-handed native Cantonese speakers aged 65 to 77 (mean 69.12 years, 40 female),
who took part in an fMRI session and an EEG session at least two weeks apart. Snapshot 1.1.2 holds raw MRI for 50 of
them, because two did not attend the fMRI session, and EEG recordings for 51. Each scanned subject has a T1-weighted
image, four story-listening runs and one resting-state run. participants.tsv adds comprehension quiz accuracy for
both sessions and the item answers of the Lifetime of Experiences Questionnaire (LEQ).

## Acquisition

MRI was acquired between July 2021 and December 2022 on a 3 T Siemens MAGNETOM Prisma with a 20-channel coil at The
Hong Kong Polytechnic University. The T1-weighted scan is 0.8 mm isotropic, and the functional runs use EPI at 2.5 mm
isotropic with a 2 s repetition time. EEG was recorded with a 64-channel Neuroscan system at 1000 Hz. After each of
the four story sections, subjects answered five yes or no comprehension questions. Images were defaced with pydeface.

## Annotations

There are no image labels. Stimulus annotations include sentence and word timing, per-word intensity and pitch,
word frequency and part-of-speech tags. Derivatives contain fMRIPrep-based preprocessed anatomical and functional
images for 46 subjects and preprocessed EEG for 51.

## Known limitations

- The authors excluded 4 subjects' fMRI for excessive head movement, so their analyses use 46 subjects, while the
  raw folders hold fMRI for 50.
- The sample is small and mostly female.
- A radiological review noted incidental findings in two subjects, a likely cavernoma and a posterior fossa cyst.
- EEG is not an imaging modality in this index and is not counted in the statistics.

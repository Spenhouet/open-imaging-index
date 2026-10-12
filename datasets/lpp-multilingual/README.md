The Le Petit Prince fMRI Corpus (LPPC-fMRI) records brain activity of young adults while they hear the whole of The
Little Prince read aloud in their native language, in English, Chinese or French. Because all three groups
heard the same story, the corpus supports comparing how language comprehension unfolds across typologically different
languages. Groups at Cornell University, Jiangsu Normal University and NeuroSpin shared it on OpenNeuro as ds003643
under a CC0 waiver in 2021 and described it in Scientific Data in 2022. A separate release of the same paradigm with
older Cantonese speakers is indexed as
[Le Petit Prince Hong Kong](https://spenhouet.com/open-imaging-index/datasets/lpp-hong-kong/).

## Composition

The corpus holds 112 healthy, right-handed native speakers: 49 English (30 female), 35 Chinese (15 female) and 28
French (15 female), aged 18 to 40. Every subject has one T1-weighted image and nine story-listening runs of about ten
minutes each, one per section of the audiobook; two subjects have extra runs. participants.tsv adds quiz accuracy for
the English and Chinese groups.

## Acquisition

The English and Chinese groups were scanned on a 3 T GE Discovery MR750 with a 32-channel coil, the French group on a
3 T Siemens Magnetom Prisma Fit. Anatomy is a 1 mm MPRAGE. Functional runs use multi-echo EPI with three echoes, a
2 s repetition time and 3.75 x 3.75 x 3.8 mm voxels. English and Chinese subjects were scanned in a single session of
about 2.5 hours and answered four comprehension questions after each run; French subjects were scanned in two
sessions because of a legal limit on time in the scanner. Identifying anatomical information was removed before
release.

## Annotations

There are no image labels. Each language comes with word boundaries aligned to the audio, pitch and intensity every
10 ms, word frequency, lemmas and part-of-speech tags, GloVe and BERT embeddings, constituency and dependency parses,
and, for English and Chinese, coreference annotations. Derivatives hold AFNI-preprocessed, multi-echo denoised
functional runs in MNI space for all 112 subjects.

## Known limitations

- The three groups differ in scanner, site, headphones and session structure, which confounds language with site.
- Earlier work on the English data used 51 subjects; 49 were released after excluding two for head movement.
- The paper's Table 2 gives a mean age of 19.9 for the Chinese group while its text gives 19.3; participants.tsv
  matches 19.9.
- Raw run numbers vary between subjects; the authors kept consistent numbering through renamed links.

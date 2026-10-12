Brain MRI from the CANDICE project (Cerebral Asymmetry: New Directions in Correlates and Etiology), led by Dorothy Bishop at the University of Oxford. Adults who had already been tested with functional transcranial Doppler ultrasound (fTCD) on six language tasks were scanned with fMRI on the same tasks, so that laterality indices from the two methods could be compared within each person. The raw fMRI data are on OpenNeuro in BIDS format under CC0. The fTCD recordings themselves are not part of this release; the participants file holds one fTCD laterality index per task.

## Composition

51 subjects have imaging: 27 scanned in Oxford and 24 in Bangor. The participants file lists 50 of them (25 women, 25 men; 28 right-handed and 22 left-handed by self-reported writing hand), with site, the six fTCD laterality indices and the number of days between the fTCD and fMRI sessions. Recruitment was limited to neurotypical native-level English speakers aged 18 to 50 with no history of neurological, psychiatric or language disorders; individual ages are not shared.

## Acquisition

Oxford used a 3 T Siemens Prisma and Bangor a 3 T Philips Ingenia Elition X. Each session started with three task runs, then a gradient echo field map and a T1-weighted structural scan, then the last three task runs, for about 75 minutes in total. The tasks were word generation, sentence generation, phonological decision, word comprehension, sentence comprehension and syntactic decision, each with 12 blocks, in counterbalanced order. BOLD runs use multiband echo planar imaging with a repetition time of 0.8 s and 2.4 mm slices. Oxford runs also include single-band reference images, and spoken responses were recorded there; Bangor had no scanner microphone.

## Annotations

There are no image labels. Event files give block timing per task. Derivatives contain first-level z and t statistic maps per task and contrast, the t maps resampled to MNI152 space.

## Known limitations

The sample is small and was split across two scanner vendors. sub-BAN24 has images but no participants entry, and sub-OXF13 did not do the word comprehension task. The derivative README states that the EPI data of sub-BAN20 were corrupted, so that subject is missing from the t statistic maps. sub-OXF17 was repositioned mid-session and has two field maps; the README corrects which tasks each one belongs to. The link to the separate behavioural and fTCD data on OSF is available only on request.

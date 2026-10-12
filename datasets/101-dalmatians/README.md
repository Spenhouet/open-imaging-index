Functional MRI recorded while adults with and without congenital sensory loss followed a shortened Italian version of
the live-action film 101 Dalmatians (1996). The work comes from the University of Turin and the IMT School for Advanced
Studies Lucca. Typically developed volunteers saw either the full audiovisual film, a sound-only version or a
silent version with subtitles, while congenitally blind adults heard the sound-only version and congenitally deaf
adults saw the silent version. The design lets users compare brain responses to the same story across senses and
across sensory histories. Raw and preprocessed data are on figshare in BIDS under CC BY 4.0.

## Composition

The release covers 50 right-handed native Italian speakers: 30 typically developed adults split into three groups of
10 by movie version, 11 congenitally blind adults and 9 congenitally deaf adults. Mean ages range from 24 years in the
deaf group to 46 years in the blind group, so the deaf group is younger than the others. The BIDS layout gives each participant a defaced
T1-weighted and T2-weighted anatomical image, six movie runs and one run of scrambled scenes. A
derivatives archive holds motion-regressed, smoothed functional data in MNI space.

## Acquisition

All scans were made on a 3 T Philips Ingenia with a 32-channel head coil during one session per person. Functional
runs use gradient-echo EPI with a repetition time of 2 s and 3 mm isotropic voxels, 1,614 volumes over the six movie
runs plus 256 for the scrambled run. Anatomy is a 1 mm MPRAGE and a 1 mm T2-weighted scan. Sound and image reached
the scanner through MR-compatible goggles and headphones, and an Italian voice-over described visual events.

## Annotations

The release adds features computed from the film (motion energy, VGG-19, sound power spectrum, VGGish, GPT-4
sentence embeddings) and one rater's second-by-second tags of visual and auditory categories and editing events such
as cuts, scenes, dialogue and subtitles.

## Known limitations

Groups hold 9 to 11 people and are not matched for age. Four blind participants and one audiovisual participant have
more than 20% of time points with framewise displacement above 0.3 mm. Category tags come from a single rater. The
film itself is not shared. Table 1 of the paper lists 9 blind participants although the text gives 11.

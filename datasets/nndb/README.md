Functional MRI of healthy adults who each watched one complete feature film in the scanner, shared by Jeremy Skipper's
lab at University College London. The creators wanted brain data recorded under conditions close to everyday life,
with long, continuous stimuli rich in speech, faces and narrative, so that networks can be labelled with movie
annotations. The release on OpenNeuro is in BIDS format under CC0 and also carries behavioural scores from the NIH
Toolbox and demographic answers for every participant.

## Composition

The cohort holds 86 adults, 42 female, aged 18 to 58 with most in their twenties. All were right-handed native
English speakers without psychiatric or neurological illness, hearing loss or medication. Each person saw one of ten
films from ten genres that they had not seen before. Two films have larger groups (20 and 18 viewers) and the other
eight have six viewers each. Every participant has one defaced T1-weighted anatomical scan and between two and six
BOLD runs, 264 runs in total. Derivatives hold preprocessed time series in several blurring and censoring variants,
nuisance regressors, ICA artifact labels, anatomical masks and MRIQC reports.

## Acquisition

Scanning took place on a 1.5 T Siemens MAGNETOM Avanto with a 32-channel head coil. The functional sequence was a
multiband EPI with a repetition time of 1 s, multiband factor 4 and 3.2 mm isotropic voxels. The films played
almost without interruption, paused only every 40 to 50 minutes because of a sequence limit or when a participant
asked for a break, which gives each person more than an hour and a half of movie data. A 1 mm MPRAGE anatomical scan
followed the film. Behavioural testing took place on a separate day before scanning.

## Annotations

Automated face annotations from a commercial face recognition service are shared for each film. The paper also
describes word timings aligned from speech transcripts and subtitles.

## Known limitations

Each film has a different viewer group, so most films have only six viewers. Three versions of the movie-pausing
script were used, one of which sometimes skipped forward instead of rewinding at a pause; the creators logged
every delay and corrected for it in preprocessing. The lowest cerebellar slices are missing in some people with
large heads. The
films themselves are commercial and not part of the release; the paper lists where to buy them.

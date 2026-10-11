This dataset holds the brain MRI from a study on how people put a value on objects made of several parts. Healthy adults first learned the monetary worth of novel pseudo objects called fribbles. In one condition the value followed from single parts, in the other only from the specific combination of parts. In the scanner they then bid money for each object while their eye movements were tracked. The study, by Gabriel Pelletier, Nadav Aridan, Lesley Fellows and Tom Schonberg, found that the ventromedial prefrontal cortex and perirhinal cortex were engaged when value depended on the whole object. The images are shared on OpenNeuro in BIDS under CC0.

## Composition

The snapshot holds 56 subjects, each with one T1-weighted scan, four runs of the bidding task and a pair of reverse phase-encoded field map images. 51 subjects also have four runs of a visual localizer task with faces, scenes, objects and scrambled objects. The paper reports 55 people recruited for the fMRI study, of whom 42 (21 female, 21 male, mean age 27, range 18 to 39) entered the analysis after exclusions for task performance, artefacts and motion. `participants.tsv` lists only subject ids, so no sex or age rows are given here for the shared set.

## Acquisition

All scans were acquired at Tel Aviv University on a 3 T Siemens MAGNETOM Prisma with a 64-channel head coil. The T1-weighted MP-RAGE has 1 mm isotropic voxels. Functional runs used multiband echo planar imaging with a 1.2 s repetition time and 2 mm voxels, tilted 30 degrees from the commissural line to limit signal loss in the ventral frontal lobe. Each run also comes with a single-band reference image. T1-weighted images were defaced with PyDeface.

## Annotations

Event files of the bidding task give the onset, condition, object image, bid and learned value of each trial; localizer event files give the category of each block. No image labels are included.

## Known limitations

The shared subject count does not match any sample size in the paper, and no demographics are released. The paper describes a FLAIR scan that is not part of the snapshot. Eye-tracking and behavioural data are kept in the authors' GitHub repository, not on OpenNeuro. Pilot scans used for the power analysis are a separate OpenNeuro dataset.

A group at the Jagiellonian University in Krakow scanned young healthy adults to study how chronotype, the personal
preference for morning or evening activity, relates to brain anatomy. The released data pair one T1-weighted brain scan
per person with questionnaire scores for chronotype, sleep quality and daytime sleepiness. It was published on
OpenNeuro as ds003826 under a CC0 waiver.

## Composition

Snapshot 3.0.1 (March 2022) holds 136 participants aged 18 to 35 (median 23): 87 women and 49 men. Recruitment
excluded people who reported a history of psychiatric or neurological illness or who were taking medication. The
participants table gives age, sex and a chronotype group: 68 early types and 68 late types, split on the
morningness-eveningness scale of the Chronotype Questionnaire. It also holds the amplitude scale of that questionnaire,
the Pittsburgh Sleep Quality Index and the Epworth Sleepiness Scale. A flag marks the 113 people whose data entered
the associated paper, and for them the table adds the mean cortical thickness of the left fusiform and entorhinal
cluster that the paper reported.

## Acquisition

Every scan comes from one 3T Siemens Skyra at the Malopolska Centre of Biotechnology in Krakow, using a 64-channel
head and neck coil. The anatomical sequence is a 3D MPRAGE with TR 2.3 s, TE 2.98 ms, TI 0.9 s, 9 degree flip angle
and 1.1 mm slices. All sessions took place between 5:20 PM and 8:55 PM to limit time-of-day effects. The images are
defaced and organized in BIDS 1.6.0.

## Annotations

There are no image annotations. The questionnaire scores serve as targets for correlation or regression analyses.

## Known limitations

- Only a T1-weighted scan is shared; there is no functional, diffusion or second structural contrast.
- The age range is narrow, so the data do not represent children or older adults.
- Chronotype, sleep quality and sleepiness are self-reported questionnaire measures.
- Intermediate chronotypes are not labelled as a separate group; every person is assigned to early or late.

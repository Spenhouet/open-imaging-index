This OpenNeuro dataset comes from a Temple University project, funded by the National Institute on Drug Abuse, on
whether brain responses to social and monetary rewards relate to trait reward sensitivity, substance use and mood
symptoms. Young adults filled in a battery of questionnaires and then played four reward games in the scanner. The
first snapshot was posted in January 2024 and the current one is 1.1.1; a data article in Data in Brief describes it.
It is released under a CC0 waiver.

## Composition

The release holds 59 young adults (45 female, 14 male) aged 18 to 26, recruited from the university participant pool
and the surrounding community. Each person has one T1-weighted scan and BOLD runs from up to four tasks: an Ultimatum
and Dictator Game task (two runs), a card-guessing task in which wins and losses were shared with a friend, a stranger
or a computer (two runs), a Social Doors task with separate monetary and social feedback runs, and a monetary
incentive delay task. Not every task is complete for everyone: the shared-reward task is present for 52 people and the
incentive delay task for 56. The phenotype folder holds 20 questionnaires on reward sensitivity, substance use, mood,
empathy, aggression and childhood adversity.

## Acquisition

All scans were acquired on one Siemens Prisma 3T with a 20-channel head coil at Temple University in Philadelphia.
Functional runs use multiband (factor 2) EPI with TR 1.75 s, TE 29 ms and 3 mm isotropic voxels, each with a
single-band reference image. The structural scan is a 1 mm isotropic MPRAGE, defaced before release. A B0 field map
(magnitude and phase difference) is included for 58 people.

## Annotations

There are no image annotations. Events files give stimulus onsets, durations, trial types and response times for every
task run. The participants file lists age, gender, race, BMI, handedness, drug and breathalyzer screens and
medication use.

## Known limitations

- Data collection paused for 15 months during the COVID-19 pandemic after 10 scans, and planned diagnostic interviews
  on substance use and mood disorders were dropped, so there are no clinical diagnoses.
- The closeness rating for the stranger partner is missing for 23 of the 59 participants.
- Six participants lack three follow-up questionnaires (childhood trauma, childhood unpredictability and social
  experience).
- The sample is small and mostly female, from a single site.

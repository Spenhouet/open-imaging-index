This release holds the imaging data of a randomized controlled trial at the University of Pennsylvania (Joseph Kable
and Caryn Lerman) that asked whether commercial adaptive brain training changes decision making. Healthy young adults
were scanned before and after 10 weeks of home training with either Lumosity or non-adaptive online video games. In
the scanner they made choices between immediate and delayed rewards and between certain and risky rewards. The trial
found no training effect on brain activity, choice behavior or cognitive tests beyond the trained games. The data sit
on OpenNeuro as ds002843 in BIDS under CC0.

## Composition

166 participants aged 18 to 34 were randomized, 84 to cognitive training and 82 to the video game control. Every
participant has a baseline session, and 127 have a second session after training. participants.tsv labels 64
participants per arm as trained or control and marks the other 38 as not having finished both sessions. It also gives
sex, age, education and the Shipley intelligence score. 98 participants are male and 68 female.

## Acquisition

All scans were done on one Siemens Trio 3 T with a 32-channel head coil. Each session has an MPRAGE T1-weighted
image, a T2-weighted spin echo image, field maps, a resting-state run and up to four runs each of the delay
discounting and the risky choice tasks. The task runs are EPI with 3 mm voxels and a repetition time of 3 s, and
trial-level events with the choices are included. A diffusion-weighted scan exists in 262 of the 293 sessions.

## Annotations

There are no image labels. Events files give the offers and the accept or reject response for every task trial.

## Known limitations

- The paper analyses 128 completers and 114 after fMRI quality exclusions; the release keeps all 166 randomized
  participants, including those lost to follow-up.
- One participant in the training arm has only the baseline session.
- Eligibility excluded people with extreme baseline discounting or risk preferences, IQ below 90 and MRI
  contraindications, so the sample is narrow.
- The T2-weighted and diffusion scans are not described in the paper; their parameters come only from the BIDS
  sidecar files.

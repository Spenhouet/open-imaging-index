This OpenNeuro release comes from a Stanford study by the Etkin and Saggar labs that combined single-pulse
transcranial magnetic stimulation (TMS) with fMRI. Short TMS pulses were delivered inside the scanner to one cortical
target at a time while BOLD images were acquired, so the evoked response shows which regions a stimulated site drives.
The aim was to map causal circuit links relevant to anxiety, mood and trauma-related symptoms, with a focus on how
cortical nodes act on the medial prefrontal default mode network. The data are in BIDS on OpenNeuro as ds005498 under
CC0, and a bioRxiv preprint describes them.

## Composition

The release has 152 adults aged 18 to 61 (mean 31.1 years). participants.tsv holds diagnostic flags per
participant: 75 participants have no diagnosis, 63 a current major depressive disorder, 38 a current generalized anxiety
disorder and 27 a current PTSD diagnosis, with overlap between disorders. Half of the participants meet the trauma
exposure criterion. The table also carries symptom scales (PHQ-9, GAD-7, PCL-5, CAPS-5), WASI IQ scores, motor
threshold, stimulation intensity and one column per stimulation target marking which runs a person completed. Subject
ids carry one of four group prefixes that the release does not define.

## Acquisition

Each subject has one to five sessions, 314 in total. The release holds 159 T1-weighted images (147 subjects), 151
resting-state runs (148 subjects) and 1,425 TMS fMRI runs. Eleven targets were stimulated, named in the task labels by
their MNI coordinates, including right and left frontal pole, right frontal eye field, inferior frontal junction,
inferior parietal lobule, primary motor cortex, pre-supplementary motor area, and anterior and posterior middle
frontal gyrus. Scans were acquired on GE 3 T scanners (Discovery MR750 and SIGNA Premier) at the Stanford Lucas
Center; the sampled fMRI sidecars give TE 30 ms and TR 2.4 s or 2.0 s. Stimulation event timings are in task-stim_events.tsv.

## Known limitations

- No README and no participants.json, so the sex coding (1 or 2) and the subject group prefixes are not documented.
- Five subjects have no T1-weighted image, and not every subject completed every stimulation target.
- The preprint was not peer reviewed at the time of writing.

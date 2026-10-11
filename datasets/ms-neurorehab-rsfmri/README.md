This release shares resting-state fMRI from 60 people with multiple sclerosis who were each scanned twice, before and after two months of outpatient physiotherapy based on neuroproprioceptive "facilitation and inhibition" principles. It was assembled by the COBRA group at the Institute of Computer Science of the Czech Academy of Sciences together with the National Institute of Mental Health in Klecany and the Third Faculty of Medicine of Charles University, and is hosted on OSF under CC BY 4.0. The authors intend it for studying how rehabilitation changes functional connectivity and for resting-state work in multiple sclerosis more broadly.

## Composition

The cohort has 37 women and 23 men aged 22 to 70 (median 46) at the first visit. 34 have relapsing-remitting, 20 secondary progressive and 6 primary progressive disease, with a median EDSS of 4. Each subject was assigned to one of three therapy variants: motor program activating therapy (34), Vojta reflex locomotion (13) or functional electric stimulation in a posturally corrected position (13). Participants came from two consecutive projects, a pilot run in 2013 to 2014 (NCT04448444) and a follow-up run in 2015 to 2017 (NCT04355663). The release holds the preprocessed fMRI of both visits as NIfTI, functional connectivity matrices and region time series for the 116 AAL atlas regions, framewise displacement and DVARS per volume, and a clinical table with sex, age, MS type, EDSS, disease duration, BMI, therapy and outlier counts.

## Acquisition

All scans were made on a Siemens Trio 3T with a 12-channel head coil. The pilot project used single-shot EPI with TR 2.2 s and 300 volumes, the follow-up project TR 2.5 s and 240 volumes. Data were preprocessed with the CONN toolbox: realignment and unwarping, slice-timing correction, outlier flagging, normalization to MNI space and 8 mm smoothing.

## Known limitations

- Only preprocessed, smoothed fMRI in MNI space is shared; raw images are not.
- T1-weighted images were acquired and used for preprocessing but are not part of the release. The paper said they were planned for later release.
- The fMRI protocol differs between the two projects, which the clinical table marks per subject.
- There is no control group, and all participants had motor impairment, as required by the original rehabilitation trials.

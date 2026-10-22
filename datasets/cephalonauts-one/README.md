Cephalonauts One is a deeply sampled fMRI dataset for brain decoding of natural speech. The company Karavela
recorded three healthy volunteers while they listened to French radio podcasts over many sessions, so that models can
learn to recover what a person heard from their brain activity alone. The release comes with fixed training,
validation and test sessions and baseline code, and it was accepted at the NeurIPS 2026 Evaluations and Datasets
track.

## Composition

Three native French speakers aged 31 to 51 took part, with about 30 hours of functional MRI each: 24 sessions per
person, 358 runs and 89.31 hours in total. The stimuli are unscripted stories from a French public radio podcast.
Each run comes with the audio, a French transcript aligned word by word to the scans, and audio and text embeddings
from pretrained models aligned to the same time points. Per subject, held-out sessions serve as validation and test
data.

## Acquisition

All sessions were recorded on one 3 T Siemens MAGNETOM Cima.X scanner with a 64-channel head and neck coil at the
Paris Brain Institute. The functional scans use a fast multiband BOLD sequence with a repetition time of 520 ms at
3 mm resolution, which gives about 207,000 volumes per subject. A T1-weighted anatomical scan was also acquired,
and the data were preprocessed with DeepPrep. The release offers the functional data in native
anatomical space, in a standard template space and on the fsaverage5 cortical surface.

## Annotations

There are no image labels. The targets for decoding are the time-aligned transcripts and the audio and text features.

## Known limitations

With three participants, the data suit models trained per person, not conclusions about a population. Sex and other
demographics beyond the age range are not reported. The public file list holds brain masks but no raw anatomical
images. The terms of use limit use to non-commercial scientific research and forbid moving the data outside the
European Economic Area without adequate protection under the GDPR.

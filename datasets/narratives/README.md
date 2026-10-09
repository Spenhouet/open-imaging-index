Narratives pools functional MRI recorded while adults listened to spoken stories in the Hasson and Norman labs at the
Princeton Neuroscience Institute between October 2011 and September 2018. The authors shared it on OpenNeuro as
ds002345 under a CC0 waiver and described it in Scientific Data in 2021. It serves as a benchmark for models of
language and narrative comprehension and for naturalistic analyses such as intersubject correlation.

## Composition

Snapshot 1.1.4 covers 345 adults aged 18 to 53 (mean 22.2 years, 204 reporting female). Subjects heard one or more of
27 stories lasting from about 3 to 56 minutes, about 4.6 hours of unique audio in total, and the paper counts 891
functional scans. Subjects who took part in several sub-studies keep one identifier, and participants.tsv lists the
stories, experimental conditions and comprehension scores per subject. Every subject has a T1-weighted image, and 46
also have a T2-weighted image. The release includes the audio files, plain transcripts and word- and phoneme-level
time stamps.

## Acquisition

All scans come from the Scully Center for Neuroimaging in Princeton with a 1.5 s repetition time. The earlier
sub-studies used a 3 T Siemens Skyra with a 20-channel head coil and 3 x 3 x 4 mm EPI. Later ones used a 3 T Siemens
Prisma with a 64-channel coil and multiband EPI at 2 or 2.5 mm, and T2-weighted images were only acquired in the
2018 sub-studies. Images were converted with dcm2niix, defaced with pydeface and organized in BIDS 1.2.1.

## Annotations

There are no image labels. Annotations are on the stimulus side: transcripts aligned in time to the audio. The full
DataLad distribution adds fMRIPrep outputs, AFNI-postprocessed time series and MRIQC quality metrics.

## Known limitations

- The sample is mostly young adults from a university community, and both native and non-native English speakers
  are included.
- Acquisition parameters differ between sub-studies, so data from the Skyra and Prisma groups need harmonization.
- The authors recommend excluding specific scans, flagged by their intersubject correlation checks and listed in
  code/scan_exclude.json.
- The paper counts 891 functional scans, while the snapshot 1.1.4 file listing holds 873 BOLD NIfTI files.
- Ages in participants.tsv are given per story, so a subject scanned across years has several ages.

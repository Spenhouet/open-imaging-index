NARPS (Neuroimaging Analysis Replication and Prediction Study) collected one task fMRI dataset and gave it to many independent analysis teams, who each tested the same set of hypotheses with their own pipelines, so that the spread of results across teams could be measured. The scans were acquired at Tel Aviv University while participants decided whether to accept or reject gambles that paired a possible gain with a possible loss. The raw images, together with fMRIPrep preprocessing and MRIQC quality reports, were released on OpenNeuro as ds001734 in February 2019 and described in a Scientific Data paper the same year. Snapshot 1.0.5 is from May 2020.

## Composition

119 healthy, right-handed adults completed the experiment. Eleven were removed before release: nine under preregistered behavioural exclusion criteria and two whose preprocessing failed. The release holds 108 subjects, split evenly between two versions of the task (equal indifference and equal range, 54 each), which differ in how potential losses relate to potential gains: half their size in the first version, the same range in the second. The participants file lists 60 women and 48 men aged 18 to 37. Every subject has one T1-weighted scan, four runs of the task with a single-band reference image each, a gradient echo field map and the trial events with responses and reaction times.

## Acquisition

All scans come from a 3 T Siemens Prisma with a 64-channel head coil at the Strauss Imaging Center. Task runs used multiband echo planar imaging (factor 4) with a 1 s repetition time, 2 mm in-plane resolution, 2 mm slices tilted 30 degrees from the AC-PC line and 453 volumes per run. The T1-weighted scan is an MPRAGE at 1 mm isotropic resolution. Resting-state fMRI, diffusion imaging and eye tracking were also collected but are not part of this release.

## Annotations

There are no image labels. Events files hold the gamble amounts and each choice, and the derivatives folder holds fMRIPrep outputs and MRIQC reports.

## Known limitations

All subjects are young adults from a single site and scanner. The paper notes that one participant (sub-056) appears to have reversed the accept and reject buttons and was kept because this was not a preregistered exclusion. The snapshot size includes the preprocessed derivatives.

This OpenNeuro dataset comes from a study at the National Institute of Mental Health (NIMH) in Bethesda, Maryland, by
the Section on Development and Affective Neuroscience. It compares brain function in children and adolescents with an
anxiety disorder against youths without any psychiatric diagnosis, and accompanies a paper on threat-related neural
efficiency accepted by The American Journal of Psychiatry. The first snapshot appeared in June 2025; snapshot 1.1.2
(March 2026) is released under a CC0 waiver. Analysis code is on GitHub at NIMH-SDAN/Neural.Efficiency.2025.

## Composition

Of 206 enrolled participants, the 149 who agreed to public sharing are included. 81 met KSADS criteria for an anxiety
disorder (separation anxiety, generalized anxiety, social phobia or panic disorder) and 68 had no psychiatric
disorder. 90 are female and 59 male, aged 8 to 18 years. Every participant has a first session with a T1-weighted
scan and fMRI; 74 also have a second session. A phenotype file adds clinical scales (SCARED self and parent report,
PARS, CGAS), IQ from the WASI, and family income.

## Acquisition

All scans were acquired on GE 3T scanners (Signa HDxt and Discovery MR750) at the NIH functional MRI facility, in two
cohorts that used an 8-channel or a 32-channel head coil. Each session holds a 12-minute resting-state run (single
echo in cohort 1, three echoes in cohort 2, TR 2 s) and two runs of a 14-minute emotional dot-probe task (TR 2.3 s),
plus a 3D T1-weighted scan. The dataset README describes the sessions as before and after treatment.
Structural images were defaced with the DSST defacing pipeline.

## Annotations

There are no image annotations. 444 of the 448 dot-probe task runs come with an events file listing trial types.

## Known limitations

- The README does not say which participants received treatment or what the treatment was.
- Acquisition parameters differ between the two cohorts, including echo count, flip angle and slice number.
- Only 149 of 206 enrolled participants are shared, so the release may not match the published analysis sample.
- No derivatives are included.

This dataset comes from a Stanford project led by Russell Poldrack and Patrick Bissett that tried to map the brain
basis of self-regulation, the set of abilities people use to pursue long-term goals. The in-scanner tasks were picked
from a larger behavioral battery as the subset that best reproduced that battery's results. The images were released
on OpenNeuro as ds004636 in September 2023 under CC0, and the data descriptor appeared in Scientific Data in 2024.

## Composition

113 healthy, right-handed adults aged 18 to 50 at enrollment were recruited around Stanford. Three left during the
first session, so 110 subjects have images, and 103 of them completed both scan sessions. The participants table
lists self-reported gender (71 women, 38 men, one missing) and age (18 to 45, mean 23.8). Every subject has
resting-state fMRI, 108 have a T1-weighted scan and 102 a T2-weighted scan.

## Acquisition

All scans were made on one GE Discovery MR750 3 T scanner with a 32-channel head coil at the Stanford Center for
Cognitive and Neurobiological Imaging. fMRI used multiband EPI (factor 8, TR 680 ms, TE 30 ms, 2.2 mm isotropic).
Each session started with a rest run followed by five task runs. Session one covered stop signal, cued task
switching, Columbia card, attention network and tower tasks; session two covered motor selective stop signal, dot
pattern expectancy, a 40-item survey, delay discounting and Stroop. The T1-weighted image is a 0.9 mm BRAVO scan from
session one, the T2-weighted image a CUBE scan from session two. Spiral fieldmaps, single-band references and pulse
and respiration recordings are included.

## Annotations

There are no image annotations. Events files give trial timing and responses for each task. MRIQC reports and
quality metrics are in the derivatives, and spreadsheets list the subjects and runs the authors suggest excluding.

## Known limitations

- The authors judged only 68 of the 103 complete subjects to have usable behavior on all tasks and recommend fully
  excluding 12.
- Anatomical images were defaced with pydeface.
- The online behavioral battery done after scanning is not part of this release.
- The sample is young and drawn from one university area.

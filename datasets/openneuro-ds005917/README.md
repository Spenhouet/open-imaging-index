This dataset holds the imaging from a mechanism-of-action study of ketamine run by Jennifer Evans, Allison Nugent and
Carlos Zarate in the Experimental Therapeutics and Pathophysiology Branch of the NIMH Intramural Research Program (NIH
protocol 04-M-0222, ClinicalTrials.gov NCT00088699). Adults with major depressive disorder who had not responded to at
least one antidepressant, and healthy volunteers, received one ketamine infusion and one saline placebo infusion in a
double-blind crossover design. The data were first published on OpenNeuro in February 2025; snapshot 1.1.0 (March 2026)
added the MR spectroscopy, resting-state fMRI and more physiological recordings. It is released under CC0.

## Composition

The snapshot has 58 subjects: 33 with major depressive disorder, 3 with bipolar disorder (recruitment of this group
stopped early) and 22 healthy controls. Where recorded, 34 are female and 22 male, aged 20 to 66. Up to five sessions
per subject are planned: a baseline about two days before the first infusion, then sessions two to three days and ten to
eleven days after each infusion. Dropouts and technical problems leave 236 sessions with MRI. Depression ratings (MADRS,
HAMD-6, HAMD-17) from the scan days are in the phenotype folder.

## Acquisition

MRI was acquired on a 3 T GE Signa HDx with an 8-channel head coil. Sessions contain a 3D T1-weighted fast spoiled
gradient-echo scan (1 mm slices), a 2D fat-saturated fast spin-echo T2-weighted scan (1.7 mm slices), diffusion imaging
with 30 directions at b = 1100 s/mm² split into two parts, and BOLD runs for rest with eyes closed, a dot probe task, an
emotional faces evaluation task and an n-back task. Cardiac and respiratory signals accompany most resting runs. For
participants enrolled later, 30 subjects have single-voxel PRESS spectroscopy from a 7 T Siemens scanner, placed in the
perigenual anterior cingulate cortex and tuned for glutamate.

## Annotations

There are no image annotations. Many task runs come with events files of stimulus timings.

## Known limitations

- Not every session is complete: five lack a resting-state run, 22 lack physiological data, and not every task run has
  an events file.
- The README describes T2-weighted and diffusion scans as baseline-only, but the file tree has them in follow-up
  sessions too.
- The baseline anatomy of one subject comes from an excluded scan taken two weeks earlier.
- Two subjects have no age or sex in participants.tsv.

This KiltHub record holds the imaging behind a single-case report from Carnegie Mellon University and the University
of Rochester. A 26-year-old man with a glioma in the left inferior parietal lobe had the tumour removed in an awake
craniotomy with direct electrical stimulation mapping. The resection partly cut the left arcuate fasciculus, after
which he had trouble repeating sentences, and he recovered over the following months. The study followed his
recovery with task fMRI and diffusion tractography and compared his tracts against a group of healthy young adults.
The files were published in March 2019 and updated in October 2019 under CC BY 4.0.

## Composition

All_MRI.zip is a BIDS folder with 53 subjects: one patient and 52 controls. Every subject has an MPRAGE T1-weighted
image, a diffusion scan and a B0 fieldmap. The patient's nine sessions add 59 task fMRI runs across twelve paradigms,
among them naming, verb and word generation, finger tapping, tongue and tool movement, and a repeated task (TAFP) run
in four sessions. participants.tsv gives age, sex and group: 28 women and 25 men, aged 18 to 57, most in their
twenties. The record also holds FSL tractography scripts, CSV summary tables and an archive of experiment
scripts and stimuli.

## Acquisition

The control scans and most patient sessions come from a 3T Siemens TrioTim at the University of Rochester; the T1
image is a 1 mm isotropic MPRAGE. The diffusion series has ten b0 volumes and 60
directions at b = 1000 s/mm². The patient's first pre-operative fMRI session was acquired on a 3T GE Discovery MR750
at a different site. The README dates data collection from April 2015 to July 2017.

## Annotations

There are no image annotations. The CSV tables give per-subject streamline counts for left and right tractography and
functional connectivity values between four language regions per patient run.

## Known limitations

One patient carries all the clinical and functional data, so the controls only serve as a structural reference. The
control group is young and mostly student-aged, with two older outliers. The T1 images of most subjects are stored
under a *_defacemask file name rather than *_defaced. The archive README is inconsistent about the number of patient
sessions (six in the summary, nine in the list), and participants.tsv gives the patient's age as 25 while the paper
says 26.

This OpenNeuro dataset comes from the Healthy Research Volunteer study of the US National Institute of Mental Health
(NIMH) intramural program in Bethesda, Maryland. Adults from the Washington DC area are screened online and in person
so that they can serve as healthy controls in NIMH studies, and everything collected is shared. Besides imaging, the
release holds screening questionnaires, a structured psychiatric interview, IQ testing, mood and anxiety scales,
blood and urine laboratory panels and NIH Toolbox cognitive tasks. Snapshot 2.1.0 (February 2025) is shared under a
CC0 waiver. The first release (v1.0.0, July 2022) is described in a 2022 Scientific Data paper.

## Composition

The participants file lists 1,859 people, but most have only online screening data. 251 have imaging: 249 with MRI,
123 with MEG and 121 with both. Of the imaged participants, 154 are female, 94 male and 3 have no recorded sex; ages at
first screening range from 18 to 72 years (median 31). Release 2.0.0 added 769 participants collected up to April
2024, and three imaged participants have a second session. Per subject, the MRI visit can include T1-weighted,
T2-weighted, 2D and 3D FLAIR, T2\*-weighted, diffusion, pseudo-continuous arterial spin labeling and resting-state
fMRI scans; 206 subjects have all seven contrasts.

## Acquisition

MRI was done on a GE Discovery MR750 at 3 T. The protocol started from the ADNI-3 basic protocol and later took the
T1-weighted MPRAGE and 3D T2-weighted scans from the ABCD protocol; each participant has either the ADNI-3 FSPGR or
the ABCD MPRAGE T1-weighted scan. In release 2.0.0 the resting-state scan became a multi-echo sequence and the field
maps were replaced by reversed phase-encoding scans. Some images are shared both with and without GE surface coil
intensity correction. Structural scans are defaced. MEG was recorded on a 275-channel CTF system with a task battery
(oddball, go/no-go, Sternberg, Hariri hammer, air puff, movie, rest and an artifact run) plus empty-room recordings.

## Annotations

There are no image annotations. MEG event files mark trial timing.

## Known limitations

- Participants are a convenience sample screened to exclude mental and medical illness, and the 2022 paper reports
  that they were younger and more often female than the surrounding county.
- Age in the participants file is age at the first online screening, not at the scan.
- The MRI flag in the participants file marks 239 participants, while 249 subject folders contain MRI files.

This repository holds routine clinical brain MRI from the picture archiving and communication system (PACS) of Massachusetts General Hospital, part of Mass General Brigham. It is the "MGH dataset" that Iglesias and colleagues used to test SynthSR, a network that turns clinical scans of any contrast, orientation and resolution into synthetic 1 mm isotropic MPRAGE images for 3D morphometry. The data are meant for work on methods that must cope with uncontrolled clinical acquisitions, such as synthesis, super-resolution and segmentation of heterogeneous scans.

## Composition

The release contains 15,926 scans from 1,384 subjects as compressed NIfTI files, with a spreadsheet giving each subject's age and gender. The paper describes its subjects as patients with neurology visits and memory complaints at MGH, who are not expected to have large lesions such as tumors or strokes. Each subject has a different number of scans with different sequences. The paper's own analysis used a filtered subset of 9,146 scans after dropping 4D series such as diffusion and scans with an intracranial volume under 1.1 liters.

## Acquisition

All scans were acquired during routine clinical care between 2014 and 2026, according to the data use license. Sequences, resolutions, orientations, slice spacing and thickness vary from session to session. The paper shows examples of axial, sagittal and coronal turbo spin echo T1-weighted, T2-weighted and FLAIR scans with 4 to 6 mm slice spacing, and notes that sessions also include angiography and diffusion. Scanner vendors and field strengths are not reported.

## Annotations

There are no manual labels. Every scan was skull stripped with SynthSeg+, and the data include all scans that SynthSeg could process.

## Known limitations

The collection is uncurated on purpose: many scans are unusable because of a limited field of view, heavy noise or a non-structural sequence. Dates and DICOM headers were removed and ages of 90 and over are aggregated. Scan-level metadata such as sequence type is not described. Access needs approval by the principal investigator, a data use agreement with Mass General Brigham, and is limited to countries allowed under the U.S. Data Security Program.

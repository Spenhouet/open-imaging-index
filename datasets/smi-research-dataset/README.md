The Scottish Medical Imaging (SMI) Archive is a research copy of the national Picture Archiving and Communication
System of NHS Scotland. It is held in the Scottish National Safe Haven, which the University of Edinburgh (EPCC)
operates for Public Health Scotland, and was built with the Health Informatics Centre at the University of Dundee.
Researchers do not download it. The eDRIS team of Public Health Scotland cuts a pseudonymised extract for each
approved project, optionally linked to hospital, prescribing, cancer registry, maternity and death records through
the Community Health Index number.

## Composition

The snapshot described in the 2024 data resource paper covers imaging from 1 January 2010 to 31 August 2018 across
all 14 NHS Scotland health boards: about 57.3 million studies, 94.9 million series and 2.47 billion DICOM images in
36 DICOM modalities. CT accounts for 3.26 million studies, MRI for 1.54 million and computed radiography for 14.2
million, and 27.2 million studies are structured reports. The paper lists 2,182,123 female and 2,081,040 male
patients, and its ethnicity table adds up to 4,271,698 patients, of whom 72.1% are recorded as White. 94.2% of
imaged patients have linked longitudinal health records.

## Acquisition

All images come from routine clinical care, so scanners, vendors and protocols vary between health boards and over
time. At publication, CT, MRI, PET and structured reports (about three quarters of all studies) were curated for
research use. Public Health Scotland lists 2010 to 2017 for CT, MRI, PET and structured reports as its initial
offering, with computed, digital and panoramic radiography and later years to follow.

## Annotations

The paper describes no curated labels; radiologists' structured reports accompany the images. Cohorts can be built from DICOM
tags, linked clinical data or natural language processing of the reports. The platform can keep annotations made by
one project for reuse by later projects, subject to consent to share.

## Known limitations

Access requires a project application, approval by the Public Benefit and Privacy Panel and payment of service costs,
and all analysis happens inside the safe haven. Only the subset needed for the approved question is released, and
trained models could not yet be exported when the paper was written. The Scottish population is about 96% White. Sorting
images by sequence or body part from clinical DICOM tags alone is unreliable. Studies after
August 2018 were not part of the described snapshot.

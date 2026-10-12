This OpenNeuro dataset holds brain MRI of 92 young adults scanned at the Brigham Young University MRI Research
Facility to compare resting-state activity of the default mode network between people who speak one language and
people who acquired a second language either in childhood or later in life. It was shared by Carrie E. Gold,
Athena L. Howell, Jacob Burdis, C. Brock Kirwan and Gregory L. Thompson. The first snapshot appeared in February 2019;
snapshot 1.1.0 from July 2023 added age of acquisition to the participants table. The data are released under CC0.

## Composition

Each participant contributed one T1-weighted structural image and one resting-state BOLD run. The participants table
assigns 33 people to a monolingual control group, 27 to an early-acquisition bilingual group and 32 to a
late-acquisition bilingual group. It lists 51 women and 41 men aged 18 to 29 years (median 21), and also gives
self-reported ethnicity, years of education, English and Spanish proficiency scores, the number of languages spoken
and, for bilinguals, the age at which the second language was acquired. The README describes the sample as young
healthy adults.

## Acquisition

All scans were made on a 3 T Siemens TIM Trio with a 32-channel head coil. The structural image is an MP-RAGE with
1 mm slices, TR 1900 ms and GRAPPA factor 2. The resting-state run is a T2\*-weighted multiband EPI with multiband
factor 8, TR 875 ms, 1.8 mm isotropic voxels and 823 volumes, about 12 minutes, angled parallel to the long axis of the
hippocampus. The images were converted from DICOM with dcm2nii; structural images were reoriented and cropped during
conversion.

## Known limitations

- There is no data descriptor or study paper linked from the dataset; the README is the only description.
- The README does not state the inclusion criteria or how the bilingual groups were defined beyond the group labels.
- Proficiency scores and the number of languages are missing for several participants.
- Each participant has a single session; there are no field maps.

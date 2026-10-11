A group at the MRI unit of the Instituto de Neurobiología of the Universidad Nacional Autónoma de México (UNAM) scanned
adults with obsessive-compulsive disorder (OCD) to look at structural and functional connectivity of the brain. The
raw images are on OpenNeuro as ds008110 under a CC0 waiver. Only patients are included; there is no healthy control
group. At release, the dataset description listed no linked publication.

## Composition

Snapshot 1.0.0 (July 2026) holds 54 subject folders, and the participants table and the CHANGES entry agree on 54
patients. The README section on participants gives n = 41, which does not match the files. Patients met DSM-5
criteria for OCD, were 18 to 50 years old at inclusion and could be on or off medication. Other psychiatric
comorbidity, neurological disease, substance abuse and an IQ outside 80 to 120 were reasons for exclusion. The
participants table gives age, sex and group only, with no symptom scores or medication status. Every subject has a
T1-weighted scan; 53 have a resting-state functional run, and 44 also have a T2-weighted and a diffusion scan.

## Acquisition

All scans come from one GE Discovery MR750 3 T scanner with a 32-channel head coil. The T1-weighted image is a
sagittal 3D spoiled gradient echo at 1 mm slice thickness. The resting-state run lasts 10 minutes with eyes open on a
fixation cross, using gradient-echo EPI with a repetition time of 2 s, 35 axial slices of 4 mm and a 64 by 64 matrix.
Diffusion data have 60 directions at b = 1000 plus three b = 0 volumes at 2 mm. The T2-weighted scans are axial and are
not described in the README beyond their file sidecars. Structural images were defaced.

## Known limitations

- Patients only, so case-control comparisons need an external control sample.
- The participant count in the README disagrees with the files.
- No clinical measures beyond diagnosis, age and sex are shared.
- Runs with more than 2 mm head motion were discarded before release; the README does not say which subjects or runs were affected.

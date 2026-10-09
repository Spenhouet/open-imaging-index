SUDMEX CONN comes from a cross-sectional case-control study at the National Institute of Psychiatry Ramón de la
Fuente Muñiz in Mexico City. The study set out to describe how crack cocaine affects the brain. It pairs brain MRI of people with cocaine use disorder (CUD) with healthy controls and was released on OpenNeuro as ds003346 in 2020 under a CC0 waiver. The data
descriptor appeared in Scientific Data in 2022.

## Composition

Snapshot 1.1.3 holds 144 subject folders. The participants table assigns 74 to the CUD group and 64 to the control
group, leaves 6 without a group, and records age (18 to 50) and sex for most of them plus drug use variables
and an exclusion flag. All 144 have a T1w
scan, 141 a resting-state fMRI run and 135 a diffusion scan. Clinical and cognitive test results are published
separately on Zenodo. CUD patients had to use cocaine at least three days a week and be abstinent for no more than
60 days; medical, neurological and other psychiatric disorders were exclusion criteria for everyone.

## Acquisition

All scans were made between March 2015 and October 2016 on one Philips Ingenia 3T scanner with a 32-channel head
coil, in a single session of about 50 minutes. The protocol was a 10-minute eyes-open resting-state EPI (TR 2 s,
3 mm voxels, 300 volumes), a mostly 1 mm isotropic 3D T1-weighted scan and a multishell HARDI diffusion scan (2 mm voxels,
b = 1000 and 3000 s/mm²) with reverse phase-encoded field maps for both EPI series. Images were converted to BIDS
NIfTI and defaced with pydeface.

## Annotations

There are no image annotations. Diagnosis of cocaine dependence used the MINI-Plus interview. MRIQC quality reports
are available on OpenNeuro.

## Known limitations

- The paper reports a final sample of 138 after removing 7 of 145 scanned people, but the release keeps 144 subjects.
  Its participants table flags 36 of them for exclusion with a short reason, more than the paper removed.
- Counts in the paper disagree with each other: the text gives 75 CUD and 62 controls in one place and 74 and 64 in
  another, and the female counts differ between the abstract and Table 1.
- The CUD group moved more during scanning; the authors recommend motion correction.
- The snapshot contains a GPL v3 LICENSE file, while its dataset description declares CC0.

The Yale reading dataset pools brain MRI from several reading research projects of one lab, whose work was
supported by NICHD grants, into a single BIDS collection on OpenNeuro (ds005339). Its purpose is to let researchers
study how brain structure and function relate to reading skill and age, and how good and poor readers differ. The uploaders describe the wider database as
covering ages 5 to 30, from children who cannot yet read to skilled adult readers, with behavioural, cognitive and
background measures collected alongside the scans. Snapshot 1.0.0, released in April 2026, is the first and so far
only version; the README says a white paper will follow once all data are uploaded.

## Composition

Snapshot 1.0.0 has 223 subjects and 321 scanning sessions. Every subject has a T1-weighted scan, 217 have BOLD runs
and 179 have diffusion scans; 177 have all three. Counted from the file tree there are 325 T1-weighted volumes, 460
diffusion volumes and 1,899 BOLD runs. The functional runs cover five task labels: sj, story, fastloc, srtt and a
resting-state run. The README states that the full database holds over 1,000 scans from 700 people, so this
snapshot is a partial upload.

## Acquisition

All T1-weighted scans with scanner metadata come from 3 T Siemens systems, mostly TrioTim with a smaller share on Skyra.
T1-weighted images are sagittal 3D MPRAGE. Going by the institution field in the sidecars, about 230 T1-weighted
volumes were acquired at Yale (Magnetic Resonance Research Center and School of Medicine) and about 90 in Jerusalem
(Hadassah Ein Kerem and Hebrew University). The data were converted to BIDS with ezBIDS.

## Annotations

There are no image labels. Task runs come with BIDS events files, and diffusion scans with gradient tables.

## Known limitations

- The snapshot has no participants.tsv and no phenotype files, so age, sex, reading scores and diagnostic group are
  not available in this release.
- Session labels are not uniform across subjects (for example ses-1, ses-001 and ses-011).
- The README does not describe the tasks behind the sj, story, fastloc and srtt labels.
- One T1-weighted sidecar carries no scanner fields.

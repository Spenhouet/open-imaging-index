MASiVar is an openly shared collection of diffusion-weighted brain MRI from healthy volunteers, designed so that the variability of diffusion measures can be separated into four levels: repeated scans in one session, repeated sessions on one scanner, the same person on different scanners, and different people. The Vanderbilt MASI Lab released it on OpenNeuro under CC0, and the accompanying 2021 paper in Magnetic Resonance in Medicine uses the adult data to compare these four levels for tensor metrics, NODDI, bundle segmentation and structural connectomes.

## Composition

The release holds 97 subjects in four cohorts: 14 adults and 83 children aged 5 to 8. Cohort I is one adult man scanned in three sessions on consecutive days with several scans per session. Cohort II is five adults, each scanned on three or four scanners at three institutions. Cohort III is eight young adults scanned in one to six sessions on a single scanner. Cohort IV is the 83 children, scanned once or twice about one year apart. In total there are 169 sessions and 319 diffusion scans. The participant table gives sex, age per session and, for most cohorts, handedness.

## Acquisition

All scans were acquired at 3 T on two Philips Achieva scanners at the first site, a GE Discovery MR750 at the second and a Siemens Skyra at the third. Cohorts I and II were acquired with 96 directions per shell at b-values from 1000 to 3000 s/mm², cohort II adding a shorter b = 1000 acquisition. Cohorts III and IV have two shells (40 directions at b = 1000, 56 at b = 2000). Reverse phase-encoded b = 0 volumes and, in most sessions, a T1-weighted image are included. Images are defaced and in BIDS layout.

## Annotations

There are no manual labels. The derivatives folder holds every scan preprocessed with the PreQual pipeline (denoising, intensity normalization, susceptibility, eddy current and motion correction).

## Known limitations

The sample is small and healthy, so it does not cover disease. The sites are not named in the paper or the files. The children were scanned on only one scanner, so scanner effects can be studied only in the five cohort II adults. Resolution and echo times differ between some sessions of the same scanner.

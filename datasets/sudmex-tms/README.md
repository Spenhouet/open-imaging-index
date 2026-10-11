SUDMEX TMS holds the brain MRI of a double-blind, placebo-controlled randomized trial at the National Institute of
Psychiatry Ramón de la Fuente Muñiz in Mexico City (NCT02986438). The trial tested 5 Hz rTMS over the left
dorsolateral prefrontal cortex as an add-on to usual treatment for cocaine use disorder (CUD), followed by an
open-label maintenance phase. The images were released on OpenNeuro as ds003037 in 2020 under a CC0 waiver; the
data descriptor appeared in Scientific Data in 2024 and describes snapshot 2.1.0. It is a sister dataset of
SUDMEX CONN, scanned on the same scanner.

## Composition

Snapshot 2.1.0 contains 53 patients and 156 MRI sessions. Every patient has a baseline session (T0). Follow-up
sessions were planned after the two-week blinded phase (T1), at 3, 6 and 12 months (T2 to T4), and two weeks after
T1 for sham patients who then chose open-label rTMS (T14). The participants table covers 50 patients with age
(18 to 48), sex, arm (23 sham, 27 active), years of education and an exclusion flag that marks 6 of them.
Clinical scales and cognitive tests for each study phase are published separately on Zenodo.

## Acquisition

Scanning ran from 2017 to 2019 on one Philips Ingenia 3T with a 32-channel head coil, about 50 minutes per session.
Each session had a 10-minute eyes-open resting-state EPI (TR 2 s, 300 volumes), a mostly 1 mm isotropic 3D T1-weighted
scan and a multishell HARDI diffusion scan (b = 1000 and 2500 s/mm², b = 3000 for the first 4 patients), each
EPI series with a reverse phase-encoded field map. Images are BIDS NIfTI, defaced with pydeface.

## Annotations

There are no image annotations. CUD was diagnosed with the MINI-Plus interview. The paper reports MRIQC and
EDDY QC metrics per session.

## Known limitations

- The paper reports 54 patients (30 active, 24 sham) in the text and 53 (30 active, 23 sham) in Table 1; the
  release has 53 subject folders, and 3 of them have no participants.tsv row.
- Attrition is high: 45 patients have a T1 session, 15 a T3 and 7 a T4.
- 2 patients have a session labelled t5 that neither the README nor the paper describes.
- Some patients moved a lot during scanning; the authors recommend artifact correction.

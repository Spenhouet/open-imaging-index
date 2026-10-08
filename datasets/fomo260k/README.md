FOMO260K is a pooled collection of brain MRI built for self-supervised pretraining of 3D models. A team at the
University of Copenhagen and the Pioneer Centre for AI gathered scans from 910 public sources, applied only light
preprocessing and republished everything as one Hugging Face download that needs no account. Companion code covers
preprocessing, pretraining and finetuning, and pretrained weights are released with it.

## Composition

The release holds 260,927 scans from 77,589 sessions of 55,378 people. Most scans come from HBN, the Yale Brain Mets
Longitudinal cohort and 884 OpenNeuro datasets, which alone contribute 140,389 scans. Sequences include T1w, T2w,
FLAIR, contrast-enhanced T1w, PD, T2*w, SWI magnitude, minIP, diffusion (derived 3D volumes and trace ADC), MP2RAGE,
relaxometry maps, angiography and ASL. Of the sessions with diagnostic metadata, about two thirds are controls and about
a quarter have brain tumors; stroke, mental disorders, neurological disorders and dementia make up small shares.
Ages span the lifespan, with a session-level mean of 34.8 years.

## Acquisition

Scans come from many sites and protocols. The paper reports mostly Siemens (80%) and Philips (10%) scanners, mostly 3T
(81%) and 1.5T (15%) field strength, and roughly half 2D acquisitions. About 20% of scans have slices thicker than 3 mm,
which the authors treat as clinical grade. Images were reoriented to RAS, 4D series were reduced to 3D and scans with
fewer than 15 slices were dropped. Functional MRI, field maps, SWI phase, PET, CT and ex vivo scans were excluded.
Files follow a modified BIDS layout with `participants.tsv`, `mapping.tsv` (link to the source scan) and
`mri_info.tsv` (acquisition parameters).

## Annotations

No image labels. Age, sex, handedness and a diagnostic group are given where the source provided them.

## Related releases

FOMO-MRI also publishes FOMO300K (306,207 scans in V1.1 of April 2026), the full superset that adds sources under
data use agreements (OASIS, GSP, HCP WU-Minn) and is gated with automatic approval; FOMO50K (49,193 scans), a
co-registered and skull-stripped or defaced subset first released as FOMO60K for the FOMO25 challenge; and FOMO45K (46,149
scans), the open part of FOMO50K. Each is a subset of FOMO300K, so they must not be combined.

## Known limitations

- Demographic and diagnostic metadata are incomplete and were harmonised by keyword matching.
- Scanner metadata in `mri_info.tsv` are not normalised across sources.
- Constituent datasets keep their own licenses and citation duties.

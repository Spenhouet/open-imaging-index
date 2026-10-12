A single-centre diffusion MRI cohort of adults with drug-resistant unilateral temporal lobe epilepsy (TLE) assessed
for surgery at the National Hospital for Neurology and Neurosurgery in London, plus healthy controls recruited by
advertisement. The study split the patients by whether their seizures had ever spread to both hemispheres (focal to
bilateral tonic-clonic seizures, FBTCS) and compared the whole-brain structural network of each group with that of
the controls, both at group level and as per-patient abnormality scores per brain region. The authors deposited the
connectivity matrices and subject metadata on Zenodo under CC BY 4.0. The MR images themselves are not available.

## Composition

112 people: 83 patients and 29 controls. 60 patients had a history of FBTCS and 23 did not. Patients are 51 women
and 32 men, controls 17 women and 12 men. The epileptic focus was left-sided in 42 patients and right-sided in 41.
Hippocampal sclerosis was present in 45 patients. Mean age at the scan was 38.8 years in the FBTCS group, 35.3 in the
group without FBTCS and 38.0 in controls. Two-year post-surgical seizure outcome is reported per group in the paper.

## Acquisition

All participants were scanned on a 3 T GE Signa HDx. Diffusion MRI used cardiac-gated single-shot spin-echo EPI
with 52 gradient directions at b = 1200 s/mm² and six b = 0 volumes, 2.4 mm axial slices. A 3D T1-weighted volume
was also acquired. Diffusion data were corrected for drift, eddy currents and motion, reconstructed into ICBM-152
space with DSI Studio and fitted with a tensor model. Connections between the 90 regions of the AAL atlas were
defined from a normative tractography atlas and weighted by mean fractional anisotropy and mean diffusivity.

## Annotations

No image annotations. Labels are group membership (FBTCS positive, FBTCS negative, control) and the subject
metadata tables in the shared file. Table S1 of the paper lists per-patient clinical details.

## Known limitations

- Only 90 by 90 connectivity matrices are open, not the images.
- Connections come from a template tractography atlas, not from each subject's own tractography.
- Single centre and a single scanner; small control group.

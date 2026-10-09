The Pediatric Template of Brain Perfusion (PTBP) is an openly shared multimodal MRI collection of typically
developing children and adolescents, built to chart how brain structure, white matter, resting-state connectivity
and cerebral blood flow change between late childhood and adolescence. It was collected by the Laboratory of
Functional MRI Technology at UCLA and processed with ANTs and ANTsR by collaborators at the University of
Pennsylvania and the University of Virginia.

## Composition

120 children aged 7 to 18 at the first visit, 61 girls and 59 boys, contributed 183 imaging sessions. Most
children were scanned once; the rest returned for up to four sessions. Each session can contain a T1-weighted
MPRAGE, a pseudo-continuous ASL series with its mean CBF map, a diffusion scan and a resting-state BOLD run. Not
every session has every modality, and the data index file records which images exist per session. Besides the
subject images, the release contains a population T1 template with tissue priors and AAL labels, group-average
CBF, BOLD and diffusion tensor images, a copy of the template in MNI space, and a spreadsheet with age, sex,
handedness, WASI IQ scores, family income, parental education, Ladder SES scores and regional thickness, FA, CBF
and connectivity summaries.

## Acquisition

All scans come from one Siemens 3T TIM Trio with a 12-channel head coil at the Ahmanson-Lovelace Brain Mapping
Center between January 2010 and February 2014. The protocol was a 1 mm isotropic MPRAGE, pCASL with 40
label/control pairs (labeling duration 1.5 s, post-labeling delay 1.2 s), single-shell DTI with 30 directions at
b=1000 and one b=0 volume, and an eyes-open resting BOLD run of up to 244 volumes at 4 mm.

## Known limitations

- Single site and single scanner, so there is no scanner variability to learn from.
- Recruitment excluded children with diagnosed developmental, neurological, psychiatric or learning disorders, so
  the cohort covers healthy development only.
- Some sessions lack DTI, CBF or BOLD data, either because they were not acquired or because quality was
  insufficient. The authors used 91 subjects with complete, usable data in their own analyses.
- The paper does not state whether faces were removed from the T1-weighted images.

This release holds the raw brain MRI behind a 2015 PLoS ONE study by Pratik Mukherjee's group at the University of California San Francisco (UCSF). The study fit the neurite orientation dispersion and density imaging (NODDI) model to multi-shell diffusion data from healthy children and adults to describe how neurite density and fiber orientation dispersion in white matter change from childhood into middle age, and compared these measures with standard diffusion tensor metrics. Recruitment was funded by the Simons Foundation. The data were published on Dryad and on Harvard Dataverse under CC0.

## Composition

The paper analyses 66 healthy people aged 7 to 63, 30 female and 36 male, out of 70 who were imaged; one was dropped for motion and three as outliers. The shared subject list also has 66 entries, with ages from 7 to 64 and 47 scanned at UCSF and 19 at the Children's Hospital of Philadelphia (CHOP). Five subjects were scanned two to four times for test-retest analysis, which brings the release to 75 session folders. Each folder contains a T1-weighted volume and three diffusion series (DTI, HARDI1, HARDI2) as NIfTI, with b-value and gradient files for the two HARDI series. Text files give age, sex and site per unique subject. The full deposit is about 8.2 GB.

## Acquisition

Both sites used a Siemens 3T TIM Trio with a 32-channel head coil. The T1-weighted scan is a 3D MPRAGE at 1 mm isotropic resolution. Diffusion was acquired with single-shot spin-echo echo-planar imaging at 2 mm isotropic resolution: 30 directions at b = 1000 s/mm2 and 64 directions at b = 3000 s/mm2, each shell with its own echo and repetition times and matching b = 0 volumes. The bval files show that the b = 3000 shell is split across the HARDI1 and HARDI2 series. Diffusion scanning took about 20 minutes.

## Known limitations

The Dryad abstract reports 67 subjects while the paper and the subject list give 66, and the maximum age in the shared ages file is 64 rather than the 63 stated in the paper. The unique-subject list contains two sessions with the same subject number (8229.102 and 8229.103). No b-value file is shipped for the DTI series. No derived NODDI or DTI maps and no clinical or cognitive measures are included.

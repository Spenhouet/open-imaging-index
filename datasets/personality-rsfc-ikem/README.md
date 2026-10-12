This entry covers the MRI cohort of a 2020 PLOS ONE replication study by Tomeček, Hlinka and colleagues. An earlier
study of 39 people had reported that each Big Five personality trait relates to resting-state functional
connectivity from seeds in the anterior cingulate cortex and precuneus. The Prague group repeated that analysis on a
larger healthy sample with the same seeds and a matching pipeline. With permutation-based correction for multiple
testing, the results agreed with no relation between connectivity and personality. The MRI images are not released;
per-subject derived maps and covariates are on OSF.

## Composition

84 healthy controls took part, 48 of them male and 80 right-handed, with a mean age of 30.83 years (SD 8.48). The age
range is not reported. Personality was measured with the Czech 60-item NEO Five-Factor Inventory. The study was
approved by the ethics committee of the Institute for Clinical and Experimental Medicine (IKEM) in Prague.

## Acquisition

All subjects were scanned on a 3 T Siemens TrioTim at IKEM. Each session had a T1-weighted MPRAGE at 1 mm isotropic
resolution and a resting-state gradient-echo EPI run with a repetition time of 2.5 s, 3 mm voxels, 44 axial slices
and 240 volumes. Connectivity was computed in CONN from 18 spherical seeds of 8 mm diameter, ten in the anterior
cingulate and eight in the precuneus, once with the denoising of the original study (global, white matter and CSF
signals plus motion) and once with the CONN default (CompCor with motion and derivatives).

## Annotations

The OSF deposit gives, for every subject and seed, the first-level beta map under both denoising schemes, in NIfTI,
plus a MATLAB file with sex, age and the five personality scores.

## Known limitations

- Only derived maps are public; the structural and functional images are not shared and have no published terms.
- The number of female subjects is not stated in the paper and is not listed here.
- The derived maps follow one seed set and pipeline, so other analyses cannot be run from them.

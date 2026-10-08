This is a small clinical test set of patients with cortical superficial siderosis (cSS), the curvilinear hemosiderin
deposits along the cortical surface that are a marker of cerebral amyloid angiopathy. Cao and colleagues used it to
check whether a segmentation network trained only on procedurally generated images with synthetic cSS and microbleed
labels works on real scans. The paper calls the set in-house. The authors are from Friedrich-Alexander-Universität
Erlangen-Nürnberg, Otto von Guericke University Magdeburg and the German Centre for Neurodegenerative Diseases, but
the paper does not say where the patients were scanned.

## Composition

10 patients with confirmed cSS, 6 of them women, with a median age of 74.5 years (interquartile range 67 to 78). The
set serves only as a test set. The paper reports no diagnoses beyond cSS and no information on how patients were
selected.

## Acquisition

Each patient has a susceptibility-weighted or T2*-weighted MRI. Field strength, scanner, vendor and voxel size of the
real scans are not reported, nor how many patients had each sequence.

## Annotations

A trained investigator delineated the cSS lesions by hand, and an experienced neuroradiologist validated the
delineations. The paper evaluates voxel-level segmentation (AUPRC and AUROC) against these masks.

## Known limitations

- Not publicly available, and no data availability statement or access route is published.
- Only 10 patients, one reader with neuroradiologist validation.
- Acquisition details and the holding site are not reported.
- The paper's microbleed evaluation used 13 ALFA scans from the VALDO 2021 challenge, which are covered by the
  VALDO 2021 entry, not by this one.

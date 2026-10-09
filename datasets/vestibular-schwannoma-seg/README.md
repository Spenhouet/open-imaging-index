Vestibular-Schwannoma-SEG holds the radiosurgery planning MRI of 242 adults with a single unilateral vestibular
schwannoma, treated with Gamma Knife stereotactic radiosurgery at the Queen Square Radiosurgery Centre in London
between October 2012 and January 2018. It was released on The Cancer Imaging Archive by a King's College London and
UCL group as the training data of their published 2.5D attention U-Net, and is used to develop and test
automatic tumour segmentation and volumetry. The radiotherapy objects also support organ-at-risk contouring and dose
planning.

## Composition

Each patient has one session with a contrast-enhanced T1-weighted scan and a high-resolution T2-weighted scan, plus
the RT structure set, RT plan and RT dose for each of the two images, giving 1,936 DICOM series and 48,582 images.
Patients are 147 women and 95 men with a median age of 56 (range 24 to 84). Forty-nine had prior surgery for the
tumour. Median tumour volume is 1.36 cm³. Version 2 added ITK affine matrices for T1-T2
co-registration and the original contour points as JSON. The paper's code splits the cohort at random into 176
training, 20 tuning and 46 test patients.

## Acquisition

Scans were acquired on the day of, or shortly before, treatment with the head fixed in a Leksell stereotactic frame,
whose fiducials drive the T1-T2 registration. The paper states a Siemens Avanto 1.5 T with a single-channel head
coil, an MPRAGE-type T1 at 0.4 mm in-plane resolution and a 3D CISS T2 at about 0.5 mm in-plane, slices 1.0 to
1.5 mm. Faces were masked with a de-facing algorithm.

## Annotations

The tumour, and for some patients organs at risk such as the cochlea and brainstem, were contoured slice by slice in
Leksell GammaPlan in consensus by the treating neurosurgeon, neuroradiologist and physicist. The tumour was usually
drawn on T1 and refined on T2; the cochlea usually on T2. The RTSTRUCT contours are interpolated by GammaPlan, while
the JSON files keep the original, uninterpolated contours.

## Known limitations

- Single centre; all scans follow planning protocols, not routine surveillance MRI.
- Rasterising the interpolated RTSTRUCT contours can drop the top and bottom tumour slices.
- Sources disagree on details: the paper names only the Avanto 1.5 T and CISS, the collection page also mentions
  FIESTA, and the series metadata lists five patients with TrioTim or Prisma_fit model names. The exclusion counts
  also differ between the paper and the collection page.

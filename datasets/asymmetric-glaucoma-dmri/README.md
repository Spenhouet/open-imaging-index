This OpenNeuro dataset holds the raw brain MRI behind a study of white matter damage along the visual system in
glaucoma, run by the Instituto de Neurobiología of the Universidad Nacional Autónoma de México (UNAM) together with
the Instituto Mexicano de Oftalmología. Patients were chosen so that one eye was clearly more affected than the other,
which lets the study compare the pathways of the better and the worse eye. The authors used the data to compare the
diffusion tensor model with fiber orientation and multi-tensor models (constrained spherical deconvolution, MRDS,
fixel-based analysis) that can separate crossing fibers in the optic chiasm. Snapshot 1.0.0 appeared in October 2025
under a CC0 waiver; snapshot 1.0.1 (April 2026) only changed the title.

## Composition

There are 62 participants: 31 with asymmetric glaucoma and 31 healthy controls, aged 20 to 75. The participants table
gives age, sex, diabetes and hypertension for everyone. For patients it adds the glaucoma subtype (open-angle,
angle-closure, normal-tension and one traumatic case), the more affected eye, years since diagnosis, treatment and
surgery history, and for most patients retinal nerve fiber layer thickness from optical coherence tomography,
vertical cup-to-disc ratio and visual field mean deviation for each eye. Three patients have no ophthalmic measures.

## Acquisition

All scans come from one GE Discovery MR750 3 T scanner with a 32-channel head coil at the UNAM MRI unit in Querétaro.
Each participant has a 3D T1-weighted MPRAGE image and two multi-shell diffusion series, one acquired with MUSE and
one with hyperband (multiband factor 2), both with b-values of 800, 1500 and 2500 s/mm² plus b=0 volumes and 1.7 mm
slices. Reverse phase-encoded EPI fieldmaps accompany each diffusion series. Most participants also have a 3D FLAIR
image. Data are in BIDS with NIfTI images and JSON sidecars.

## Known limitations

- Single site, single scanner, one session per person.
- Three participants lack the FLAIR image and one lacks the hyperband diffusion series and its fieldmap.
- The patient group mixes several glaucoma subtypes and includes young patients, while controls cluster in their
  fifties.
- No derived maps, tractograms or segmentations are included, only raw images.
- The accompanying paper was a bioRxiv preprint at the time of release.

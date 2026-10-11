This release pairs T2-weighted brain scans from 200 HCP-Aging participants with voxel masks of perivascular spaces
(PVS) in the white matter. PVS are fluid-filled channels around small vessels; when enlarged they are a marker of
cerebral small vessel disease. They are thin and hard to label by hand. The authors built the masks to give
segmentation methods a reference set across the whole adult age range. The images are a subset of HCP-Aging
(Lifespan 2.0) and are shared again here under CC0 on OpenNeuro, so they can be used without the NIMH Data Archive
agreement that governs the full HCP-Aging release.

## Composition

From 765 HCP-Aging subjects with imaging, the authors picked 217 to get an even spread of age and sex and dropped 17
after visual checks (11 for motion, 6 for very large lacunar infarcts). The remaining 200 are healthy adults aged 36
to 100, 113 women and 87 men, with roughly 32 to 34 people per decade from the thirties to the eighties and 4 aged 90
or older. Each subject has one T2w volume and one binary PVS mask. The participants file holds only age and sex.

## Acquisition

Scans come from Siemens 3T Prisma scanners with a 32-channel head coil. The T2w scan is a turbo spin echo
at 0.8 mm isotropic resolution (TR 3200 ms, TE 564 ms). Images are de-identified NIfTI files in BIDS layout.

## Annotations

Labels were built in stages. A Frangi vesselness filter inside a white matter mask gave initial candidates. Two
experts corrected these by hand in ITK-SNAP for 40 subjects, four to five per decade of life. A semi-supervised U-Net
trained on those 40 then predicted PVS in the other 160, and two neuroradiologists and a trained medical student
corrected every prediction in weekly consensus meetings. On 10 cases rated by three raters the paper reports a Fleiss
kappa of 0.95 and pairwise Dice of 0.94 to 0.97. PVS in deep grey matter are not labeled.

## Known limitations

- White matter PVS only; basal ganglia and other deep grey matter PVS are left out.
- Only T2w images are shared; T1w and other HCP-Aging contrasts stay behind the NDA agreement.
- The paper is a preprint and states the age range inconsistently (30 to 100 in places); the participants file gives
  36 to 100.

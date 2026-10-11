This OpenNeuro release (ds005143) pools spinal cord fMRI from several research groups so that the cord can be
segmented automatically on gradient-echo echo planar images (EPI), where tools built for structural MRI tend to fail
because of low resolution, distortion, signal loss and ghosting. Each subject contributes one mean image of
motion-corrected EPI volumes and a binary spinal cord mask. The data were used to train EPISeg, an nnU-Net model that
is now part of the Spinal Cord Toolbox. The release is in BIDS and carries a CC0 waiver.

## Composition

The participants file lists 397 subjects from eight institution codes: Leipzig, Northwestern, Stanford, Geneva
(EPFL), Zurich (Balgrist), Hamburg, Oklahoma and Montreal. 350 are healthy controls, 17 have degenerative cervical
myelopathy and 30 have fibromyalgia. Most images cover the cervical cord; 13 Zurich subjects were scanned at the lumbar
cord. Ages range from 18 to 76 with a median of 28. The paper describes 406 participants from 15 sites and states that
one site could not share its data because of its ethics committee.

## Acquisition

All scans were acquired at 3 T, on Siemens Prisma Fit or Trio Tim and GE Discovery 750 or Signa Premier systems.
Protocols differ by site; across the sites in the paper, slice thickness ranges from 3 to 5 mm, TR from 0.86 to
3.26 s and TE from 30 to 40 ms, and
some sites used z-shimming. Sites shared the mean of the first 20 motion-corrected volumes of a resting-state or task
run, with acquisition metadata in BIDS JSON sidecars. The full time series are not part of the release.

## Annotations

Spinal cord masks sit under `derivatives/label` for 395 subjects. Sites drew them on the mean image, either fully by
hand or by correcting an automatic PropSeg or DeepSeg output. Three raters reviewed every mask with the Spinal Cord
Toolbox quality-control report, and erroneous masks were replaced with corrected EPISeg output during a three-round
human-in-the-loop training process. participants.tsv records per subject whether the mask is manual (327) or
automated (70).

## Known limitations

- The participants.tsv header swaps the sex and age columns; the column headed sex holds ages.
- Sex is missing for 45 Stanford subjects, including all 30 with fibromyalgia.
- Disease groups come almost entirely from one site each (fibromyalgia from Stanford, myelopathy mostly from Oklahoma), so
  condition and site effects are confounded.
- One Zurich subject is listed with a Montreal institution and a Trio Tim scanner, unlike the rest of that site.
- The release holds one mean volume per subject, so it supports segmentation work but not fMRI analysis.
- The OpenNeuro README and dataset_description still point to a citation "to be added"; the paper is the reference.

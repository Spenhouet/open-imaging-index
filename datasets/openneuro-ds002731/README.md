This OpenNeuro release holds the imaging data of the fMRI experiment in a Beijing Normal University study of false
memory by Bi Zhu, Gui Xue and colleagues. In a Deese-Roediger-McDermott design, participants studied lists of
semantically related words and later judged test words as old or new, which induces false recognition of related lures.
The study varied whether words were heard or seen at study. In the scanner, one group learned the words by ear and was
tested visually (AV), the other learned and was tested visually (VV) to compare encoding and retrieval patterns across
sensory formats. Data are in BIDS under CC0. The release replaces the
earlier OpenNeuro record ds001650, which was uploaded again for privacy reasons.

## Composition

59 healthy, right-handed Chinese college students aged 18 to 25: 30 in the AV group and 29 in the VV group, 28 women
and 31 men. Each subject folder holds one T1-weighted image, three encoding BOLD runs and three retrieval BOLD runs,
without sessions. The participants table gives age, sex and group.

## Acquisition

All scans were made on a Siemens Magnetom Trio 3 T scanner at the Beijing Normal University Brain Imaging Center.
Functional runs use single-shot gradient-echo EPI with TR 2000 ms, flip angle 90 degrees, 64 x 64 matrix over a 192 mm
field of view and 41 axial slices of 3 mm. The anatomical image is a 3D MPRAGE; the paper reports different inversion
time, echo time and flip angle for the two groups, matching the T1w sidecars. The three study runs present 72 words from
nine lists; the three test runs present 108 targets, related lures and unrelated foils.

## Annotations

There are no image labels. Event files give trial onsets and word ids; retrieval runs add the response,
reaction time and item type (target, lure or foil). The stimulus images and sound files are included.

## Known limitations

- participants.tsv lists 67 rows, but only 59 subjects have image folders; the eight extra rows all read age 23, male,
  VV.
- The BOLD sidecars give an echo time of 2.5 ms, while the paper reports 25 ms.
- The VV T1w sidecars give a slice thickness of 1.33 mm, while the paper reports 1 mm for that group.
- Only two of the four study conditions were scanned, and the two groups had slightly different structural protocols.
- Single site, narrow age range.

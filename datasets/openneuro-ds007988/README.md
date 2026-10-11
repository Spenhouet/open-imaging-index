Researchers at Lausanne University Hospital (CHUV) scanned healthy adults before and after a short visuomotor
adaptation to a rightward shift of the visual field, to see how adaptation changes the way the inferior parietal lobule
represents the left and right visual fields. The shift was produced either in immersive virtual reality or with
optical prism goggles, and each method had its own control group without the shift. The raw images are on OpenNeuro
as ds007988 under a CC0 waiver. At release, the dataset description listed no linked publication.

## Composition

Snapshot 1.0.0 (July 2026) contains 58 subject folders, split by the README into four groups: 16 with the virtual
reality shift, 14 virtual reality controls, 14 with the optical shift and 14 optical controls. The study description
paragraph of the same README speaks of 56 participants, which does not match the group list or the folders. Every
subject has a first session with a T1-weighted scan and one functional run, and a second session after adaptation with
one functional run. A participants table is included; its content was not used here.

## Acquisition

The functional task is visual detection of targets presented in the left, central or right visual field. Both groups
were scanned with a repetition time of 2 s and an echo time of 30 ms. The virtual reality groups had 64 slices at 2 mm
isotropic resolution and an 80 degree flip angle; the optical groups had 32 slices at 3 mm isotropic resolution and a
90 degree flip angle. The T1-weighted image is a 3D gradient echo with 160 slices at 1 mm isotropic. Each run is
stored as 202 separate single-volume NIfTI files rather than one 4D file. The README does not name the scanner,
vendor or field strength.

## Annotations

There are no image annotations or event files describing the timing of targets.

## Known limitations

- The two adaptation methods were scanned with different functional protocols, which complicates direct comparison.
- The subject count in the README text disagrees with the group list.
- Scanner model, field strength and participant demographics are not documented in the README.
- No paper was linked at release, so the design details rest on the short README alone.

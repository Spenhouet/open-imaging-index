This OpenNeuro dataset, first deposited on OpenfMRI, holds the anatomical brain scans behind a methods study from
the radiology department of UZ Brussel. Van Schuerbeek and colleagues took one group of young healthy women and
related gray matter volume to the temperament trait harm avoidance many times over, each time changing a processing
choice: voxel-based morphometry or region-of-interest labelling, smoothing kernel, covariates in the regression
model, brain atlas and multiple comparison correction. The point was to show how much the reported brain correlates
of a personality trait depend on those settings.

## Composition

There are 95 participants, all female and aged 18 to 30. The paper pooled 25 scans from an earlier morphometry
study with 70 from functional MRI studies running at the same department. Participants were hospital staff or
students at the Vrije Universiteit Brussel or Ghent University, right-handed, free of medication other than birth
control, with no current or past psychiatric disorder on the MINI interview and a Beck Depression Inventory score
below 9. The participant table gives age and the seven trait scores of the Dutch Temperament and Character
Inventory (harm avoidance, novelty seeking, reward dependence, persistence, self-directedness, cooperativeness and
self-transcendence), plus a repetition time class.

## Acquisition

Each participant has one 3D T1-weighted turbo field echo scan from a 3 T Philips Achieva with a quadrature head
coil. The paper gives TI/TR/TE 940.4/7.6/3.7 ms, an 8 degree flip angle, a 240 x 240 x 200 mm field of view and
1 x 1 x 2 mm voxels in 100 axial slices. Images are in BIDS.

## Known limitations

The sample is small, female only and narrow in age, so it does not cover sex or age effects. The snapshot has no derivatives folder, so the gray matter maps
and region volumes from the paper are not included. The metadata declare
no license ("Not Specified"), so reuse terms are unclear. The release notes in CHANGES carry dates that are out of
order, and one entry records a correction to the repetition time in the sidecar files.

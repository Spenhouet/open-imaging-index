EPISURG holds T1-weighted brain MRI of patients with refractory focal epilepsy who had part of the brain removed
in epilepsy surgery at the National Hospital for Neurology and Neurosurgery in London between 1990 and 2018. The
group of Sébastien Ourselin and John Duncan at University College London released it to develop and test methods
that segment the resection cavity on postoperative scans, so that the removed tissue can be mapped back to a
preoperative image and its parcellation.

## Composition

The release contains one postoperative T1-weighted image for each of 430 patients. 269 of them also have the
matching preoperative T1-weighted image, for 699 images in total. The 2020 MICCAI paper reports 431 patients, and
the 2021 IJCARS paper reports 268 preoperative images; the counts here follow the repository record. No age, sex or
surgery-type breakdown is published.

## Acquisition

The images come from routine clinical care at a single hospital and were collected retrospectively as anonymised
data, so no individual consent was sought. The sources do not list scanners, field strengths or sequence
parameters. Files are NIfTI and every image was defaced with a fixed face mask defined in MNI space.

## Annotations

Three raters outlined the resection cavity on overlapping subsets of the postoperative images: a neuroimaging
researcher on 133 patients, a clinical scientist on 34 and a neurologist on 33. In the MICCAI paper the 133 were
split into ten subsets with a similar mix of resection types (for example temporal or frontal); the second and
third raters each covered two of those subsets, which gives an estimate of inter-rater agreement.

## Known limitations

- Only T1-weighted images are included; other clinical sequences are not part of the release.
- Scanner and protocol details are not documented, and the scans span almost three decades.
- Roughly a third of patients have no preoperative image.
- Most postoperative images (297 of 430) have no manual cavity mask.
- The data use terms forbid passing the data on in any form, which goes further than the CC BY-NC-SA 4.0 license on
  the record.

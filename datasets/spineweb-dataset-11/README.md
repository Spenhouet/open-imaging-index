SpineWeb Dataset 11 is a small set of routine clinical MRI scans of the lower back, released by the Computer Graphics
and Multimedia Systems Group at the University of Siegen together with the source code of a vertebral body detection
and segmentation method. The scans were chosen to reflect what clinics actually acquire: thick slices and in-plane
pixels that are much smaller than the slice spacing. SpineWeb listed the release as its Dataset 11 and pointed to the
Siegen project page for download.

## Composition

17 anonymized MRI series with matching manual segmentations. They are a subset of the 26 lumbar series (22 from
patients, 4 from healthy volunteers, 234 vertebral bodies) that the accompanying paper used for evaluation. The paper
reports sex, age, sequence, voxel size and pathology for all 26 series in its Table 2, but does not mark which 17 were
released, so those breakdowns are not given here. The number of distinct people in the released subset is not stated.

## Acquisition

The 26 evaluation series came from 7 hospitals and 9 scanners and include T1-weighted, T2-weighted and TIRM
sequences with a range of echo and repetition times. In the evaluation set, slice spacing was 2.7 to 8.2 times the
in-plane pixel spacing. The images are distributed as DICOM files.

## Annotations

Vertebral bodies were traced by hand in the primary acquisition plane by neurosurgeons or by an experienced user, at
3 to 6 minutes per vertebra. The segmentations are distributed as surface meshes, one per vertebra. The paper also
uses the data for diagnosing scoliosis, spondylolisthesis and vertebral fractures from the segmented shapes.

## Known limitations

- Small: 17 series, with no published per-series metadata for the released subset alone.
- No license or terms of use are stated for the images; the authors ask users to cite the paper.
- The SpineWeb host did not resolve on 2026-10-09; its description was read from an Internet Archive copy. The Siegen
  project page and its download links were reachable on that date.

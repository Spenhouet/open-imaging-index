M4Raw is a raw k-space collection of brain MRI acquired on a low-field (0.3 T) whole-body scanner, released by a team
led from Shenzhen Technology University. High-field raw datasets such as fastMRI do not capture the signal and noise
behaviour of low-field systems, so M4Raw was built to support learning-based reconstruction, denoising and parallel
imaging methods for affordable MRI. Every contrast was scanned several times in a row, so single repetitions can serve
as noisy inputs and their average as a cleaner target.

## Composition

The original release (V1.1, described in the paper) covers 183 healthy volunteers, mostly college students aged 18 to
32, of whom 116 are male and 67 female. Each has three T1w, three T2w and two FLAIR repetitions of 18 axial slices.
Volunteers with notable head motion were moved into a separate motion-corrupted subset; the rest were split at random
into 128 training and 30 validation subjects (1,024 and 240 files). V1.5 added a T1-weighted gradient echo series with
two repetitions for all 183 volunteers. V1.6 added a test subset of 25 new volunteers with six T1w, six T2w and four
FLAIR repetitions each, together with the reference images. The current release has 2,230 files from 208 people.

## Acquisition

All data come from one Oper-0.3 permanent-magnet scanner (Ningbo Xingaoyi) with a four-channel head coil. Slices are
5 mm thick with a 1 mm gap, with an in-plane resolution of about 0.94 x 1.23 mm. The k-space of every repetition was
exported without averaging, shifted to correct left-right off-centering, and stored as HDF5 with an ISMRMRD-style
header and a root-sum-of-squares image, in the array layout used by fastMRI.

## Annotations

There are no clinical or anatomical labels. Reconstruction targets are the per-repetition root-sum-of-squares images
and the averages over repetitions.

## Known limitations

- One scanner model at one field strength, and a young, narrow-age cohort.
- Images were not defaced; the thick slices cover only the upper half of the head.
- Age and sex are published only for the original 183 volunteers.
- The paper gives 26 motion-corrupted subjects in one place and 25 in another; the released files and the
  creators' later inventory list 25.
- The test subset has twice as many repetitions, and its inter-contrast motion is about twice as large as in the
  training and validation subsets.

This release holds the raw MRI of a University of Fribourg project on "stress deafness": the difficulty that speakers of a fixed-stress language such as French have in hearing where the stress falls in words of a free-stress language. Volunteers with no knowledge of Spanish heard pairs of recorded Spanish verb forms and pressed a button to say whether the two words were the same. In some blocks the pairs differed only in which syllable carried the stress, in others only in the final vowel, which lets the stress condition be contrasted with a matched phonemic control. The data are organised in BIDS and were deposited on Zenodo in December 2022, with funding from the Swiss National Science Foundation.

## Composition

The participants table lists 91 young adults aged 18 to 29 (60 female, 31 male). 51 have French and 40 Swiss German as their first language. A column in the table flags 6 people that the authors excluded from their analyses, because of response box faults or head motion in more than 10% of volumes; their images are still included. Every subject has one T1-weighted scan, two task runs and a gradient-echo fieldmap. The Brain and Behavior paper analyses a subset of 30 French speakers, and a second paper in Neuropsychologia uses the data as well.

## Acquisition

All scanning took place on a GE Discovery MR750 at 3 T with a 32-channel head coil. The anatomical scan is a coronal T1-weighted sequence with 0.86 x 0.86 x 1 mm voxels. Each functional run has 264 echo-planar volumes at a TR of 2 s, 36 axial slices and 2.3 x 2.3 x 3 mm voxels. The task alternates stress and vowel blocks of eight word pairs, each followed by 8 s of rest, for 24 blocks per run. The fieldmap comes from two spoiled gradient-echo acquisitions with echo times of 4.9 and 7.3 ms, recorded after the second run.

## Known limitations

The record lists CC BY 4.0 as its license, while the README and dataset description inside the release name the Open Data Commons Attribution License 1.0. Both require attribution only. File naming is not fully BIDS-compliant: the functional runs of sub-63 lack the bold suffix, and the fieldmaps are stored as real, imaginary and magnitude images. The acquisition details above come from the paper and were reported for its 30 analysed participants.

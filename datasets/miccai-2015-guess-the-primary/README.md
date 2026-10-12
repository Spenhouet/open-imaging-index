The Guess the Primary Challenge was the third challenge of the Computational Brain Tumor Cluster of Events (CBTC), a satellite event of MICCAI 2015 in Munich. It asked whether the primary cancer behind a brain metastasis can be inferred from MRI alone: participants classified each image set as coming from a lung cancer or a melanoma primary. The data were contributed by Northwestern University and distributed through the Synapse project syn4112414, in the folder "Challenge Data" (syn4841968).

## Composition

The challenge pages describe 87 brain MRI image sets from patients with brain metastases of lung cancer or melanoma. Each image set is one MRI study, and some are repeat scans of the same patient on a later date, so the number of patients is lower than 87 and is not stated. 57 image sets formed the training set, released on 12 August 2015 with a key giving the primary cancer, and 30 formed the test set, released on 15 September 2015. The split was pseudo-random with both primaries in both parts. The counts of lung and melanoma cases are not published on the open pages.

## Acquisition

Every image set has a post-contrast (gadolinium) T1-weighted scan, and some also have T2-weighted or FLAIR scans. Files are gzip-compressed NIfTI, one folder per image set and sequence. Scanner, field strength and protocol are not described.

## Annotations

Training image sets come with binary tumor masks drawn by trained raters and spot-checked by a US board-certified radiologist. The primary cancer label (lung or melanoma) is the classification target.

## Known limitations

Repeat scans of one patient can sit in both splits, since the split was by image set. The organizers note that some masks may need a left-right flip to line up with the image in some software, and twelve image sets had corrupted files that were replaced in September 2015. Two teams submitted results, with 48% and 71% correct. Under the terms of use the data were for use within the challenge only and had to be destroyed by 31 December 2015 unless the data steward, Dr. Kristin Swanson, agreed to further use.

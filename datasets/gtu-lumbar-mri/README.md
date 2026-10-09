The GTU Lumbar MRI Dataset comes from the Computer Vision Lab at Gebze Technical University and
Istanbul Medeniyet University. It was released with a 2013 IEEE Transactions on Biomedical
Engineering paper by Oktay and Akgul on finding and labelling lumbar vertebrae and intervertebral discs in sagittal MR
slices, so that other methods could be compared on the same data. It is a small benchmark for 2D spine landmark
localization.

## Composition

The release holds 80 anonymous subjects. For each subject there is one T1-weighted and one T2-weighted mid-sagittal
slice, stored as MATLAB `.mat` files, 160 images in total. Each slice shows the five lumbar vertebrae and six lumbar
discs, plus parts of the thoracic spine and sacrum. According to the paper, 16 subjects are free of pathology and 64
have disc or vertebra problems. Across the cohort, 158 lumbar intervertebral structures show findings such as
herniation, degeneration or scoliosis, and 31 vertebra abnormalities such as lumbarization or nodular lesions are
present. The zip download is about 44 MB.

## Acquisition

The paper describes the source as a clinical MR dataset with three protocols per subject: sagittal T1-weighted,
sagittal T2-weighted and axial T2-weighted. Only the two mid-sagittal slices are part of the release. Images are 512 by
512 pixels with 0.625 mm pixel spacing and 4 mm between sagittal slices. Scanner, field strength and site are not
stated.

## Annotations

One expert marked the approximate centre of each structure. The `expert` folder gives, per subject, eleven points from
the T12-L1 disc down to the L5-S1 disc, alternating discs and vertebrae L1 to L5. The `our_results` folder holds the
points predicted by the authors' method, and a MATLAB script overlays both on the image. The paper also mentions expert
contours of each structure, but the dataset page lists only the centre points.

## Known limitations

- Single 2D slices only, no volumes, and no age, sex or diagnosis per subject.
- No license or terms of use are published, so commercial use, model training and redistribution are not settled.
- Files are in MATLAB format and need conversion for most other tools.

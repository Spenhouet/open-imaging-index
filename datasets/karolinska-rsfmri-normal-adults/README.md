This collection holds raw resting-state functional MRI from 227 healthy adult volunteers, gathered at Karolinska University Hospital in Huddinge, Stockholm, to study how brain functional connectivity changes with adult age. Tie-Qiang Li of Karolinska Institutet published it on Mendeley Data under CC BY 4.0, and it downloads without an account. A companion Data in Brief article describes the cohort and the analysis.

## Composition

The download is a single 7z archive of about 10 GB that unpacks to a tar of 227 gzipped NIfTI files, one per participant. Each file name encodes sex (first letter, f or m) and age in years (next two digits), followed by a random code. The article reports 128 women and 99 men. Recruitment focused on two age groups: 124 younger adults aged 18 to 30 (73 women, 51 men) and 76 older adults aged 60 to 76 (41 women, 35 men); the article does not break down the other 27. The upper age bound differs between sources: the article abstract says 74, its methods section 76 and the Mendeley page 78, so no maximum age is recorded here. All volunteers were right-handed native Swedish speakers without neurological, psychiatric or cardiovascular disease, recruited through local social media.

## Acquisition

All scans were made on one Siemens Magnetom Trio 3 T scanner with a 32-channel head coil, in the afternoon. The resting-state run used 2D gradient-echo EPI with TE/TR 35/2500 ms, a 90 degree flip angle, 3 mm in-plane resolution on a 76 x 76 matrix, 3.5 mm slices, GRAPPA factor 2 and 150 volumes over 375 s. The session also included T1-weighted MPRAGE, T2-weighted and FLAIR scans, but these structural images are not part of the release.

## Annotations

There are no labels beyond sex and age in the file names. A separate Mendeley Data record (doi:10.17632/3nm3ctwycc) holds voxel-wise functional connectivity maps derived from these scans in MNI space, the AFNI preprocessing script and templates.

## Known limitations

Only the functional run is shared, without anatomical images, which complicates registration and segmentation-based preprocessing. The data come from one scanner and site, and the age distribution is bimodal, with few participants in middle age. The reported slice count differs between the Mendeley page (34) and the article (39).

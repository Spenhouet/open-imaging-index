The Nigerian Brains MRI dataset is a set of routine clinical brain MRI scans from people living in Nigeria, collected
by researchers at the University of Port Harcourt and processed and published with the Pestilli lab at the University
of Texas at Austin on the brainlife.io platform. The authors describe it as the first shared MRI dataset from Nigeria.
It is meant for training local clinicians and researchers and for building methods that cope with low field strength
and unstandardized protocols. A first release with 51 subjects (brainlife.pub.45) appeared in 2023; this entry follows
the 88-subject release brainlife.pub.61.

## Composition

88 participants: 31 with age-related dementia (mean age 65.3 years), 22 with Parkinson's disease (mean 61.1) and 35
healthy controls (mean 34.1, range 12 to 75). 35 are female and 53 male. Patients were recruited from the South-South
and North-Central regions; all controls come from the South-South. The release holds 761 anatomical images (442 T1w,
177 of them after gadolinium, 205 T2w and 114 FLAIR), plus 26 diffusion images that the paper does not describe. 64
participants have a contrast-enhanced T1w and 80 a FLAIR.

## Acquisition

Three diagnostic centers: two in Port Harcourt and one in Abuja. Scanners were a GE Signa 1.5 T, a Toshiba 1.5 T and a
Hitachi AIRIS II 0.3 T, each with a 12-channel head coil. Images are 2D acquisitions with one high-resolution plane and
up to two low-resolution planes, so the number of images per person varies; some people have repeated runs. DICOMs
were converted to BIDS with ezBIDS.

## Annotations

The labels are the clinical group of each participant. Brain masks were generated with FSL BET and corrected by hand
in FSLeyes, then applied to the images; they are published separately (brainlife.pub.55). MRIQC quality metrics are
included for T1w and T2w.

## Known limitations

- Clinical scans without a research protocol, partly at 0.3 T, so quality and resolution vary widely.
- Only brain-extracted images are released; the full head is not available.
- Controls are much younger than the patient groups and come from one region.
- Access needs a signed data use agreement whose text is not published, although the brainlife.io pages show CC BY
  4.0.

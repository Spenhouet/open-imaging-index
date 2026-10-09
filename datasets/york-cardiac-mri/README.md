The York University Cardiac MRI Dataset is a collection of short-axis cine cardiac MR sequences from 33 young patients,
together with manual contours of the left ventricle. Alexander Andreopoulos and John Tsotsos at York University
assembled it to train and test 3D active appearance models and 2D plus time active shape models for left ventricle
segmentation, and released it with their 2008 Medical Image Analysis paper. The images come from the Department of
Diagnostic Imaging of the Hospital for Sick Children in Toronto.

## Composition

Each of the 33 subjects has one sequence of exactly 20 frames over the cardiac cycle, with 8 to 15 short-axis slices,
giving 7980 2D images in total. All subjects were younger than 18. The paper describes most of them as having heart
abnormalities such as cardiomyopathy, aortic regurgitation, enlarged ventricles or ischemia. The public metadata file
gives an age and a free-text diagnosis or history line per subject; it records two subjects as normal and covers a
range of congenital and acquired conditions, several of them noted only as suspected. Images and contours are MATLAB
.mat files, one per subject, and the images are the raw values of the original 16-bit DICOM files.

## Acquisition

Scans were made on a GE Genesis Signa scanner with the FIESTA protocol. Each slice is 256 x 256 pixels. Pixel spacing
ranges from 0.93 to 1.64 mm and the spacing between slices from 6 to 13 mm; the metadata file lists both per subject.
The field strength is not reported.

## Annotations

The first author manually traced the endocardial and epicardial borders of the left ventricle on every image where
both were visible, which gave 5011 annotated images and 10,022 contours. Papillary muscles and trabeculae were kept
inside the cavity. Each contour has 32 points in pixel coordinates and starts at the right and left ventricle junction
nearest the posterior interventricular sulcus. Small MATLAB scripts for overlaying contours on images are provided.

## Known limitations

- Single centre, single scanner, small paediatric cohort.
- One annotator, with no reported second reading.
- Only the left ventricle is outlined; slices where either border was not visible have no contours.
- Diagnoses are short free-text notes, one subject has no age or diagnosis, and several entries are rule-outs.

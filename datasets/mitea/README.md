MITEA is a set of labelled 3D echocardiograms of the left ventricle, made at the Auckland Bioengineering Institute of
the University of Auckland and shared through the Cardiac Atlas Project. Each participant also had a cardiac MRI on
the same day, and the ventricle shapes traced on MRI were aligned to the echo volumes. The labels therefore follow
the MRI anatomy rather than an observer's reading of the ultrasound. The dataset is meant for training and testing
automatic segmentation of the myocardium and cavity and for measuring volumes, ejection fraction and mass from 3D
echo.

## Composition

144 adults were recruited and 134 kept after 10 were dropped for poor echo quality. Of these, 82 are healthy
controls and 52 have acquired cardiac disease: left ventricular hypertrophy, cardiac amyloidosis, aortic
regurgitation, hypertrophic or dilated cardiomyopathy, and two heart transplant recipients. Ages range from 18 to 84
(mean 47) and 81 participants are male. Every participant has two echo clips, scan and rescan in random order, and
each clip is given at end-diastole and end-systole, for 536 labelled volumes. The paper's own experiment grouped
both clips of a person together and used 107 participants for training and 27 for testing.

## Acquisition

Transthoracic single-beat 3D echo was recorded from the apical window during breath-holds on a Siemens ACUSON SC2000
with a 4Z1c matrix probe. An experienced sonographer tuned depth, gain, sector width and harmonic settings per person.
Volumes were resampled to Cartesian grids with 1 mm isotropic voxels, with zeros outside the imaging pyramid. The
paired cine MRI used Siemens 1.5 T and 3 T scanners and was done within two hours of the echo; the MRI images are
not part of the release.

## Annotations

One analyst built left ventricular models from the MRI with guide-point modelling, counting papillary muscles and
trabeculations as cavity. After an automatic rough alignment, the same person adjusted each model by hand inside the
echo volume at both frames. Masks hold myocardium (value 1) and cavity (value 2).

## Known limitations

- One centre, one ultrasound vendor and one observer for labels and alignment.
- Labels assume the ventricle has the same shape in both scans, although posture, breath-hold and heart rate differ.
- Parts of the labelled ventricle can lie outside the acquired pyramid.
- Only end-diastole and end-systole are labelled.

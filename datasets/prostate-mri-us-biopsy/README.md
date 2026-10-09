Prostate-MRI-US-Biopsy comes from tracked prostate biopsy sessions at the UCLA Clark Urology Center, performed with
the Artemis system. In most sessions, a 3D transrectal ultrasound volume was fused nonrigidly with a prior MRI so that
cores could be aimed at MRI-defined targets, and most sessions also took systematic cores from a 12-core template. The
system logged where every core was taken. The Cancer Imaging Archive released the collection in 2020 and added
diffusion MRI in version 2 in 2023. It suits prostate segmentation, MRI-ultrasound registration, lesion
detection and prediction of biopsy pathology.

## Composition

Version 2 holds 1,151 men with 2,799 studies, 4,819 DICOM series and 102,397 images (80.21 GB). Every patient has
ultrasound; 842 also have MRI. Version 1 contained T2-weighted MRI only, and version 2 added ADC maps and high b-value
diffusion images (mostly a calculated b of 1400) for 837 patients. Patients were enrolled consecutively when PSA or
imaging raised suspicion of prostate cancer and they had a standard-of-care biopsy planned. In the manifest, ages at
the first MRI study range from 45 upward, with a median of 65.

## Acquisition

Most MRI was acquired at 3 T on Siemens Trio, Verio or Skyra scanners with a pelvic phased-array coil, in some cases
with an endorectal coil. The usual T2-weighted sequence is a 3D SPACE scan with 1.5 mm slice spacing; some cases used
3D TSE, and a few studies were imported from other institutions with other protocols. Ultrasound used a Hitachi
Hi-Vision 5500 or Noblus end-fire probe rotated through 200 degrees and resampled to an isotropic volume.

## Annotations

STL surfaces give the prostate gland, segmented semi-automatically on MRI and ultrasound, and radiologist-drawn MRI
targets, transferred to ultrasound by registration. A spreadsheet scores each target on a 1 to 5 suspicion scale close
to PI-RADS v2 and lists its volume. A second spreadsheet lists every core with ultrasound and, for about 70%, MRI
coordinates, primary and secondary Gleason grade, cancer core length, PSA and prostate volume. 3D Slicer overlay
files combine surfaces and core paths.

## Known limitations

- Ultrasound targets carry registration error of about 3 to 4 mm.
- MRI coordinates and MRI links are missing for about 30% of cores, and tissue length for about 40%.
- Perfusion-weighted MRI, used when targets were read, is not included.
- Some ADC maps were recomputed offline, and some private DICOM tags may be altered.

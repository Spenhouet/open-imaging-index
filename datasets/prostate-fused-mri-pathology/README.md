The Fused Radiology-Pathology Prostate Dataset pairs in vivo prostate MRI with digitized histology of the same glands
after radical prostatectomy. It was contributed by Anant Madabhushi (Case Western Reserve University) and Michael D.
Feldman (Hospital of the University of Pennsylvania) and published on The Cancer Imaging Archive in 2016. Version 2
(April 2023) added a table that links MR slices to pathology slides; the images did not change. The collection
supports work on MRI-histology registration, tumor mapping on MRI and imaging markers of tumor grade.

## Composition

All 28 subjects are men with prostate cancer, each with one MR study (324 DICOM series, 32,508 images). Every
subject has T2-weighted and multiphase dynamic contrast-enhanced series, 25 have separate pre-contrast T1-weighted
series and 12 have diffusion-weighted series with ADC maps. Annotated pseudo-whole-mount H&E pathology images exist for
16 subjects (114 images), and registration files in MATLAB and MHA format for 15. Spreadsheets list the slice
correspondences between MRI and pathology.

## Acquisition

All series come from a 3 T Siemens Verio, according to the DICOM headers. The paper recommended by the authors
describes an endorectal coil and a T1-weighted VIBE sequence for DCE in its 23-patient analysis. Each excised gland was
cut into sections, each section into quarters, and each quarter slide was scanned at 20x on an Aperio scanner. The
four quarter images were then stitched into one pseudo-whole-mount section.

## Annotations

An expert pathologist outlined cancer on the stitched sections. Software matched each section to a T2-weighted MR
slice, and a pathologist and a radiologist checked the matches. Deformable registration then carried the cancer
outlines from histology onto the MRI, giving a map of tumor extent on the MR images.

## Known limitations

- Pathology images and registration files cover only about half of the subjects (16 and 15 of 28).
- The protocol varies between subjects: diffusion imaging is missing for more than half, and series naming differs.
- Age and Gleason grade are not given for the 28 subjects on the collection page.
- All MR data come from a single scanner model.

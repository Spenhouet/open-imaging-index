Diff5T is a brain diffusion MRI collection acquired on a 5.0 T scanner, built so that methods for k-space reconstruction, artifact correction, preprocessing, microstructure modelling and tractography can be developed and compared on one benchmark. It was created at the Shenzhen Institutes of Advanced Technology with collaborators and is described in a Scientific Data paper from 2025. Besides reconstructed images it ships the raw multi-channel k-space of the diffusion series.

## Composition

The release covers 50 healthy volunteers aged 18 to 38 years with no history of brain disease. Each person has three diffusion series, a T1w scan and a T2w scan. Four kinds of records are provided: raw diffusion k-space with calibration and navigator lines (MAT files), k-space after offline parallel reconstruction, reconstructed images before and after preprocessing, and scanner images converted from DICOM to NIfTI with JSON sidecars. Version 3 of the record added complex-valued noise scans from the diffusion acquisitions. The paper does not report the sex split.

## Acquisition

All scans come from a United Imaging uMR Jupiter 5.0 T system with a 48-channel head receive coil. Diffusion imaging used multiband EPI at 1.2 mm isotropic resolution: 90 directions each at b = 1000, 2000 and 3000 s/mm², plus 21 b = 0 volumes, 6 of them with reversed phase encoding, in about 45 minutes. T1w (fast spoiled gradient echo) and T2w (3D fast spin echo) images were acquired at 0.5 mm isotropic resolution with compressed sensing.

## Annotations

There are no manual labels. The paper documents its reconstruction and preprocessing pipelines and shows example DTI, NODDI and tractography results for quality checking.

## Known limitations

The cohort is small, young and healthy, and all data come from one scanner model at one site. The authors note that their offline reconstruction pipeline is not optimal. The full release is about 21 TB, and files are only shared after an access request for non-commercial research is approved.

OpenMind is a pre-training collection of 3D head and brain images assembled by the Division of Medical Image
Computing at the German Cancer Research Center (DKFZ). The authors took every 3D MRI and every 4D diffusion scan they
could find in 800 public OpenNeuro datasets, converted the diffusion scans into 3D maps, and released the result on
Hugging Face together with a benchmark of 3D self-supervised learning methods, the code and the pre-trained models.
It holds no task labels and is meant for pre-training, not for supervised training or evaluation.

## Composition

The paper reports 113,921 volumes. Of these, 653 are PET, and 40,221 are fractional anisotropy, mean diffusivity and
T2-weighted volumes computed from 13,407 diffusion scans. The volumes are grouped into 24 image types; T1w (42,732)
and T2w (22,999) dominate, followed by FA and MD maps, FLAIR and MP2RAGE. Smaller groups include 784 SWI, 687
minimum intensity projections, 409 T2\*-weighted and 76 T2\* map volumes. The subject count differs inside the paper
(34,139 in the text, 34,191 in the tables). Twelve source datasets contribute half of all volumes.

## Acquisition

The data come from many independent studies, so protocols, scanners and resolutions vary. The harmonized metadata
name Siemens, Philips and GE scanners and field strengths from 1.5 to 9.4 T, mostly 3 T, but manufacturer and field
strength are missing for about a quarter of the images. Age, sex, handedness, BMI, race and health status are filled
in only where the source dataset reported them.

## Annotations

Each image has a defacing mask that marks anonymized regions and an anatomy mask that marks where tissue is present,
created with an automated model where the source did not provide them. Two raters scored two example images per image
type and source dataset for noise, blur and artifacts; the resulting image quality score from 1 (best) to 5 applies to
all images of that type in that dataset.

## Known limitations

- The quality score is per source dataset and image type, not per image.
- Many images are skull-stripped, defaced or face-blurred, which can affect reconstruction-based pre-training.
- Each source dataset keeps its own OpenNeuro license, and the same person may appear in more than one source dataset.
- Image types come from the source BIDS labels, which are named inconsistently; the authors say the grouping into 24
  types is approximate.

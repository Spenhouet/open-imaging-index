AIMS-TBI is a lesion segmentation challenge on brain MRI after moderate to severe traumatic brain injury, run at MICCAI
in 2024, 2025 and 2026 by researchers at the University of Utah. The images come from the paediatric and adult
moderate-severe TBI working groups of the ENIGMA consortium. The task is to
detect and segment lesions on a single T1-weighted scan, the sequence most sites have.

## Composition

The 2025 dataset holds 892 T1-weighted images: 553 for training, 100 for validation and 239 for a hidden test set,
drawn from 13 sites with a similar mix of sites in each split. A case is one scan timepoint, and some patients have
longitudinal scans, so the number of people is lower than the number of images and is not reported. The 2024 edition
used 764 images (388 training, 101 validation, 275 test). For 2026 the same data were reused, and some training cases
also come with diffusion MRI, T2-weighted, FLAIR or SWI scans, without separate lesion masks. Age, sex and time since
injury come with the images. The source does not say whether the working groups contributed control subjects.

## Acquisition

Scans were made on GE, Siemens and Philips scanners at 1.5 T and 3 T with differing protocols. Most T1-weighted
images have 1 mm isotropic voxels. Contributing sites include Baylor College of Medicine, UCLA, Penn State, Kennedy
Krieger Institute, Loma Linda, Nationwide Children's Hospital, Murdoch Children's Research Institute, Deakin
University, UT Houston, Kessler Foundation, VA Palo Alto and the University of Oslo. Images are defaced with pydeface
and carry no other preprocessing.

## Annotations

Lesions are binary masks that merge all visible TBI damage, such as contusions, haemorrhage, haematoma,
encephalomalacia, gliosis, white matter lesions and drainage tracts. Each mask went through three steps: a trained
rater edited an automated segmentation, a second rater reviewed it, and one of five expert raters approved it. Raters
had to reach a Dice of 0.6 on training cases before working on real data. Masks are released for training cases only.

## Known limitations

- Access requires a data use agreement with the University of Utah; registration for the 2026 edition is closed.
- One lesion class: haemorrhage is not separated from other lesion types.
- Subject counts, age and sex distributions per split are not published.
- Two terms apply: the signed agreement and a CC BY-NC-ND license named in the challenge design document.

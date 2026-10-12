This entry covers the brain MRI cohort of a methods study at the Hospital Clinic of Barcelona and IDIBAPS, Spain. The
authors built a tractography pipeline for the optic radiation that seeds from the thalamus, targets the visual cortex,
uses probabilistic tracking on constrained spherical deconvolution fibre orientations, and then drops streamlines that
end in implausible places. They tested it on two diffusion protocols acquired in the same people and compared the
group result against a histological atlas. The images are not public. The PLOS figshare record linked to the paper
holds a binarized optic radiation template in MNI152 space for each protocol and three supplementary tables.

## Composition

The cohort has 15 participants: 10 healthy volunteers (3 men, 7 women, mean age about 30 years) without known
neurological or psychiatric disease, and 5 people with multiple sclerosis (2 men, 3 women, mean age about 35 years)
from the hospital's MS unit. Age is given only as group mean and standard deviation.

## Acquisition

Everyone was scanned in a single session on a 3 T Siemens Magnetom Trio with a 32-channel head coil. The protocol had a
sagittal 3D T1-weighted MPRAGE at roughly 0.9 mm resolution and two single-shell HARDI scans with 60 gradient
directions and one b = 0 image each: protocol A at 1.5 mm isotropic and b = 1500 s/mm2 (16 minutes), and protocol B at
2.5 mm isotropic and b = 1000 s/mm2 (4 minutes). A dual-echo field map was acquired to correct susceptibility
distortion in the diffusion data.

## Annotations

Thalamus and visual cortex masks came from FreeSurfer and were corrected by hand. The released template averages the
healthy volunteers' track density maps after normalization to MNI152 space at 1 mm.

## Known limitations

- MRI images are not shared and no terms for them are published. The lab page named in the data availability
  statement no longer exists.
- The cohort is small, and the MS group has only five patients.
- The study did not analyse optic radiation damage in the MS patients.

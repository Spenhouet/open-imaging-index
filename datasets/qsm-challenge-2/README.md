This entry holds simulated data. No image in it is a scan of a person. The second QSM reconstruction challenge (RC2,
2019) built a digital whole-head phantom from high-resolution quantitative MRI of one healthy volunteer and simulated
multi-echo gradient-echo acquisitions from it, so that susceptibility reconstruction methods could be scored against a
known ground truth. This Zenodo record shares what participants received in both challenge stages, plus the evaluation
code.

## Composition

During the challenge, Stage 1 gave participants two simulations (Sim1 and Sim2) without the answer and Stage 2 gave
four (Sim1 and Sim2, each in an Snr1 and an Snr2 variant) with their ground truth. In this record both stages include
the ground truth. The two Stage 1 datasets are byte-identical to the Snr1 datasets of Stage 2, so the record contains
four distinct simulations. Each one has 4-echo magnitude and phase images, a frequency map and a brain mask on a 164 x
205 x 205 grid at 1 mm. Sim1 and Sim2 use two phantom models that differ in their tissue susceptibility values; each
comes with a ground-truth susceptibility map and a tissue segmentation.

## Acquisition

The source volunteer was scanned with an MP2RAGEME sequence at 7T (Philips Achieva) at 0.64 mm to get co-registered
relaxation-rate, susceptibility and M0 maps, plus a PETRA scan for bone and air and diffusion data at 3T (Siemens Prisma
Fit). The tissue properties were assigned per tissue class with realistic spatial variation, and the gradient-echo
signal was simulated at 7T and reduced to 1 mm by cropping k-space. The challenge protocol used TR 50 ms, echo times 4,
12, 20 and 28 ms and a 15 degree flip angle.

## Annotations

Ground truth comes from the phantom itself: voxel-wise susceptibility and a tissue segmentation map, plus the region
definitions used by the evaluation script.

## Known limitations

- A single anatomy from one volunteer; no pathology except one calcification, and no hemorrhage.
- Simulated signal leaves out flow, respiration and readout distortions.
- The full phantom and simulation code are in a separate Radboud Data Repository collection
  (doi:10.34973/m20r-jt17) with restricted access under the RU-DI-HD-1.0 data use agreement; it is not covered by
  this entry.

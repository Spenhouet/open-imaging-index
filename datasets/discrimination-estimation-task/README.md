This OpenNeuro release (ds005381) holds the MRI data behind a Seoul National University study of how categorical
decisions interact with visual working memory. In the discrimination-estimation task, participants first judged a
remembered grating orientation against a reference and then reported the orientation itself. The accompanying Neuron
paper uses behavior, fMRI and recurrent network models to argue that memory drifts toward a few attractor states and
that the earlier decision steers this drift. The data are shared under a CC0 waiver.

## Composition

The release has 50 young adults: 30 women and 20 men aged 19 to 32 years
(mean 24.2). The participants table gives age, sex and ocular dominance. Most subjects have four sessions: a
structural session with a 3D T1-weighted and a T2-weighted scan, followed by fMRI sessions that hold 3 to 10
task runs each, retinotopic mapping runs and resting-state runs, each with a 2D inplane T1-weighted reference.
Task runs come with event files that list the stimuli and the responses. In total the raw tree has 1,220 BOLD runs.

## Acquisition

All scans come from one Siemens TrioTim 3T scanner at the Seoul National University imaging center, with a 32-channel
head coil according to the sidecars. The structural T1-weighted image is an MPRAGE with 0.85 mm slices. Task BOLD runs
use gradient-echo EPI with a repetition time of 2 s, an echo time of 30 ms and 2.3 mm slices. DICOM files were converted
with dcm2niix.

## Annotations

There are no manual labels. A derivatives folder holds fMRIPrep 20.2.0 outputs, run with field-map-free distortion
correction, and the FreeSurfer reconstructions from that pipeline.

## Known limitations

- Single site and scanner, and a small sample of young adults.
- The release does not describe health screening, so no condition is recorded here.
- No field maps are included, which is why the preprocessing used field-map-free distortion correction.
- One subject lacks retinotopy runs and one lacks resting runs.

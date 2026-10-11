The Occluded Image Interpretation Dataset (OIID) is an OpenNeuro release (ds005226) with data acquired in Zhengzhou, China,
built to study amodal completion: how the brain fills in the hidden parts of an object that is partly covered. Young
adults viewed photographs of two aircraft types with different amounts of the image masked while their brain activity
was recorded with fMRI. The authors motivate the release with the small samples and varied stimuli of earlier studies on
this topic. The data are shared under a CC0 waiver, and no accompanying paper is linked from the dataset page.

## Composition

The release holds 65 participants aged 20 to 25 years (33 female, 32 male per the participants table). Each has a
structural session with one T1-weighted image and a functional session with two runs of the occluded-image task and two
resting-state runs, 325 raw images in total. The stimulus folder contains 300 images, 150 per aircraft type, at three
occlusion levels. Derivatives add behavioural responses, NASA-TLX workload ratings, preprocessed
functional data in MNI, T1w, fsLR and fsnative spaces, FreeSurfer surface reconstructions, the full stimulus generation
pipeline (source images, masks and code) and technical validation code with its results.

## Acquisition

All images were acquired on a 3T Siemens Prisma with a 64-channel head and neck coil at the PLA No.988 Central Hospital
in Zhengzhou. The T1-weighted image is a 1 mm isotropic sagittal MPRAGE (TR 2.3 s, TI 0.9 s). The functional runs are
2D gradient-echo EPI with 2 mm isotropic voxels, 64 slices, a repetition time of 2 s and an echo time of 30 ms. Event
files list stimulus onset, aircraft label, occlusion level and button-press timing for each trial.

## Known limitations

- Single site and scanner, with a narrow age range of university-age adults.
- The README describes occlusion levels of 10%, 70% and 90%, while the event file description gives 10%, 75% and 90%.
- No health or inclusion criteria are documented on the dataset page, so no condition is recorded here.
- The functional sidecars label the task as "bold", and the dataset description still contains template placeholders
  for references and acknowledgement.

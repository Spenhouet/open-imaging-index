PsiConnect is an open-label neuroimaging study from Monash University in Australia that scanned healthy adults with no
prior psychedelic experience twice: once without any drug and once after an oral 19 mg dose of psilocybin. The aim was
to see how the drug's effect on brain activity changes with context, so each session repeats the same four conditions
in both fMRI and EEG: eyes-closed rest, audio-guided meditation, music listening and a silent movie of moving clouds.
Half of the participants were randomised to an 8-week online mindfulness course before imaging. The raw and processed
data are on OpenNeuro (ds006110) under a CC0 waiver.

## Composition

The release has 65 participants aged 19 to 54 at baseline. Subject IDs starting with PC2 belong to the meditation
training group and IDs starting with PC0 to the control group. The participants table holds age and the dose in mg
per kg body weight; sex is not part of it. Every participant has a baseline session with T1-weighted, T2-weighted and
multi-echo fMRI scans; 62 also have fMRI from the psilocybin session, and 54 of them a second T1-weighted scan. EEG
recordings cover 65 baseline and 59 psilocybin sessions in the file tree. Behavioural and self-report scores from the
sessions and from follow-ups up to one year after dosing are in the phenotype derivatives. Derivatives also include
FreeSurfer surfaces, fMRIPrep and MRIQC outputs, multi-echo ICA denoised fMRI and cleaned EEG.

## Acquisition

All MRI was acquired on one Siemens 3 T Magnetom Skyra with a 32-channel head coil. T1-weighted images are 1 mm MPRAGE,
and the T2-weighted image was taken only at baseline. The fMRI uses a four-echo, multiband echo-planar sequence with a
repetition time of 910 ms and 3.2 mm voxels. EEG was recorded in separate seated sessions with a 64-channel Brain Products
system. The paper also describes a single-shell diffusion scan (b = 3000, 71 directions), but no diffusion data are in
the release.

## Known limitations

- Single site and scanner, open-label design without a placebo session.
- Head motion is larger in the psilocybin session. The authors keep all data but list recommended exclusions for some
  fMRI runs and eight psilocybin-session T1-weighted images.
- Session counts in the file tree differ by one from those in the preprint.
- No sex information in the shared participant table.

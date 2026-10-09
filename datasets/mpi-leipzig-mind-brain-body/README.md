The MPI-Leipzig Mind-Brain-Body database is a set of brain MRI scans from healthy adults recruited by the Max Planck
Institute for Human Cognitive and Brain Sciences in Leipzig, Germany. Its imaging part is published on OpenNeuro as
ds000221 under a CC0 waiver. It joins two studies with a shared participant pool: the Leipzig Study for Mind-Body-Emotion
Interactions (LEMON), aimed at links between brain, body and emotion in younger and older people, and the
Neuroanatomy & Connectivity (N&C) protocol, aimed at resting-state connectivity, mind-wandering and personality.

## Composition

The snapshot 1.0.0 (July 2020) holds 318 people. 228 were scanned in the LEMON protocol (session 1) and 199 in the
N&C protocol (session 2); 109 took part in both. Every person has a T1-weighted image and resting-state fMRI. LEMON
adds T2-weighted images, diffusion imaging and FLAIR for most of its participants, and gradient-echo magnitude and
phase images for 112 of them. N&C contributes up to four 15-minute resting-state runs per person. LEMON recruited
a young group (20 to 35 years) and an older group (59 to 77 years); N&C participants were 20 to 75 years old. The
public participants table gives sex and age in 5-year bins only.

## Acquisition

All scans come from one Siemens Magnetom Verio 3T scanner with a 32-channel head coil. The T1-weighted image and a
quantitative T1 map are derived from an MP2RAGE sequence at 1 mm. Resting-state runs use multiband echo-planar
imaging with a 1.4 s TR, and both gradient-echo and spin-echo field maps are included. In LEMON, the 2D FLAIR was
replaced by a 3D FLAIR, and the gradient-echo scan was added, after roughly the first 110 participants. Anatomical
images were defaced before release.

## Annotations

There are no image annotations. Behavioural, cognitive, physiological and EEG data of both studies are hosted outside
OpenNeuro and are not covered by this entry.

## Known limitations

- Group sizes differ slightly between the papers (227 LEMON, 194 N&C) and the OpenNeuro release (228, 199).
- The README lists 64 diffusion directions, while the LEMON paper reports 60 directions plus 7 b0 volumes.
- Because of a sequence bug, N&C resting-state runs have a longer echo time (39.4 ms) than LEMON runs (30 ms).
- One participant has an MPRAGE instead of an MP2RAGE scan and therefore no T1 map.
- Participants were screened to be healthy, so the data suit normative studies rather than disease detection.

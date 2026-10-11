This OpenNeuro release accompanies a postmortem imaging study from the University of Pennsylvania and the University
of Castilla-La Mancha on how neurofibrillary tangles, the tau aggregates of Alzheimer's disease, relate to thinning of
the medial temporal lobe (MTL). The team scanned fixed temporal lobe specimens at very high resolution, combined them
into a computational atlas through groupwise registration, labelled MTL subregions from serial Nissl histology, and
mapped tangle burden measured on anti-tau stained sections into the atlas. Images and derivatives are shared in BIDS
under CC0.

## Composition

Specimens come from 55 brain donors: 34 from the Penn Center for Neurodegenerative Disease Research and 21 from the
Human Neuroanatomy Laboratory in Albacete, Spain. One hemisphere per donor was imaged; the other was used for
neuropathological diagnosis. All 55 specimens went into the atlas. The clinical analyses used 47 donors on the
Alzheimer's continuum (29 men, 18 women, mean age 78.6 years), ranging from unremarkable brains and primary age-related
tauopathy to low, intermediate and high Alzheimer's disease neuropathologic change, often with Lewy body or vascular
co-pathology. Seven Penn cases with Pick's disease, progressive supranuclear palsy, corticobasal degeneration or
FTLD-TDP43 are in the atlas only.

## Acquisition

Temporal lobes were fixed in formalin (Penn) or perfused with paraformaldehyde (Albacete), then scanned overnight at
9.4 T with a multi-slice spin echo sequence at 0.2 mm isotropic resolution, typically with a repetition time of 9330 ms
and an echo time of 23 ms. The paper names a Varian animal scanner, while the JSON sidecars name a Bruker BioSpec
94/30.

## Annotations

Derivatives include MTL and hippocampal layer segmentations for each specimen, all scans warped into atlas space, a
consensus atlas labelling of 26 subregions built from cytoarchitecture-based segmentations of 17 specimens, and 3-D
tangle burden maps for 25 donors, with group average and frequency maps split by low and high Braak stage. The
histology slides themselves are not part of the release.

## Known limitations

- There is no participants.tsv; donor demographics and diagnoses are only in the paper's supplement.
- The text gives an age range of 57 to 99 years, but the supplementary table lists one donor at 45.
- Scanner vendor differs between paper and sidecars.
- Manual segmentation derivatives exist for 53 of the 55 specimens.
- A gradient calibration error required linear rescaling of all scans in post-processing.

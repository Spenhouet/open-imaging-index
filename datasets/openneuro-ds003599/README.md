This OpenNeuro release (ds003599) holds the diffusion MRI from a case-control study of white matter in cocaine use disorder (CUD), run by the Developmental Cognitive Neuroscience Lab at PUCRS in Porto Alegre, Brazil. The study included women as well as men because earlier diffusion work on cocaine users was mostly male. The authors published the analysis, together with a separate post-mortem proteomics arm, in Translational Psychiatry in 2021. The images were released under a CC0 waiver in April 2021.

## Composition

Snapshot 1.0.0 has 133 subject folders, each with one diffusion-weighted NIfTI volume and its bval and bvec files. According to the paper, 75 subjects were crack-cocaine users scanned two weeks into inpatient detoxification, with negative urine drug tests on the scan day, and 58 were drug-free controls recruited by advertising. 37 of the users and 21 of the controls were men. Users were on average older (32.9 vs 28.0 years) and had fewer years of education. The release contains no participants table, so group, sex and age cannot be linked to individual subjects from the published files.

## Acquisition

All scans come from one 3T GE Signa scanner with an eight-channel head coil at the Brain Institute of Rio Grande do Sul. Diffusion imaging used single-shot spin-echo EPI in the axial plane with one b = 0 image and 33 gradient directions at b = 750 s/mm² (TR 13 s, TE 81.1 ms, 2.4 mm slices without gap, 120×120 matrix). The bval files in the release match this scheme. The paper also describes a 1 mm T1-weighted scan, but no T1-weighted images are part of the release.

## Annotations

There are no image annotations. Cocaine use disorder and other substance use disorders were assessed with the SCID-I interview, and drug use severity with the ASI-6; these clinical data are reported only in aggregate in the paper.

## Known limitations

- No participants file, no JSON sidecars and no README are included, so the per-subject diagnosis and demographics are missing.
- Only diffusion data were shared; the anatomical scans used for tractography are not available.
- Groups differ in age and education, and the CUD group has high rates of tobacco, cannabis and alcohol use disorders.

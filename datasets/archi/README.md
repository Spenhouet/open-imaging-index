ARCHI is a brain MRI database that CEA NeuroSpin in Gif-sur-Yvette, France, acquired for the European CONNECT project. Its aim was a probabilistic atlas of human brain connectivity, built from diffusion tractography and complemented by anatomical, relaxometry and resting-state functional scans of the same people. The MRI volumes themselves have not been released. What is public about the cohort are conference abstracts on atlases built from it and, since November 2019, derived connectivity releases on EBRAINS.

## Composition

The database holds 79 healthy subjects aged 18 to 40. Each was scanned in two sessions of 90 minutes. The EBRAINS releases cover 78 subjects. They come as one input release (surface-projected resting-state fMRI time series and individual cortical meshes) and three connectivity releases built on it, one per cortical atlas: Desikan, Constellation (a connectivity-driven subdivision of Desikan computed from this group) and a surface projection of AAL without deep nuclei. Each connectivity release holds individual structural connectivity matrices from tractography, rsfMRI time series reduced to the atlas regions, the atlas as a GIfTI texture with region names and surface areas, individual meshes and an average mesh.

## Acquisition

Scans were done on a 3 T Siemens Tim Trio with a 12-channel head coil. The protocol had 1 mm T1-weighted MPRAGE in each session plus one 0.75 mm T1-weighted scan, a B0 field map, HARDI diffusion along 60 directions at b = 1500 and 3000 s/mm², a multi-shell diffusion scheme of 20 directions on 10 shells up to 3000 s/mm², relaxometry series for T1, T2 and T2\* mapping, and resting-state fMRI. Processing used BrainVISA (Morphologist, Connectomist).

## Annotations

No manual labels. Derived products include automatically segmented white matter bundles (38 long and 94 short bundles in the atlas abstract), relaxometry maps and atlas-based cortical parcellations.

## Known limitations

The MRI volumes are not shared, and no terms for them are published. The EBRAINS releases are controlled access: they require an EBRAINS account, an access request and the EBRAINS Data Use Agreement. Sex distribution and per-subject demographics are not reported in the abstracts. All subjects are healthy young adults from one site and one scanner.

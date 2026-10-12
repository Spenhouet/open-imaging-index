Raw brain MRI from a University of Salerno study that compared older adults with age-related sensorineural hearing
loss against people with normal hearing. The group built whole-brain connectomes from resting-state functional
connectivity and probabilistic tractography and analysed them with graph theory. Their 2022 paper in Neurobiology of
Aging reported that hearing loss went along with a reorganized visual subnetwork, read as cross-modal compensation for
reduced hearing. Sara Ponticorvo and Fabrizio Esposito uploaded the images to OpenNeuro as snapshot 1.0.0 in March
2024 under a CC0 waiver. The work was funded by Amplifon SpA.

## Composition

There are 82 participants, each with one session: 52 with hearing loss and 30 normal-hearing controls, aged 47 to 78.
The participants table gives only group, age and sex. The hearing loss group is mostly male (36 of 52), while the
control group is mostly female (20 of 30), and the patients are on average about four years older. Audiometric
thresholds and the neurological and neuropsychological scores collected in the study are not part of the release.

## Acquisition

All images come from a Siemens Skyra 3 T scanner with a 16-channel head and neck coil, according to the JSON
sidecars, which name the San Giovanni hospital in Salerno as the institution. Each participant has a 3D T1-weighted
MPRAGE image with 1 mm slices, a diffusion series with 64 directions at b = 1500 s/mm² plus one b = 0 volume (2 mm
slices, anterior-posterior phase encoding) and a resting-state BOLD run with multiband factor 4
and a repetition time of 1 s. Single-band reference images in both phase-encoding directions come with the BOLD and
diffusion series and can serve for distortion correction. Data are in BIDS with NIfTI images and JSON sidecars.

## Known limitations

- Single site, single scanner, one session per person.
- No dataset README, clinical variables or audiometry are shared; hearing status is a two-level group label.
- The OpenNeuro page does not cite a paper; the link to the 2022 study rests on the shared authors and the matching
  group sizes.
- Groups differ in sex ratio and age, which needs to be handled in any group comparison.
- No derivatives such as connectivity matrices or tractograms are included.

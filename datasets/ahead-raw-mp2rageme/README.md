Raw scanner data from the Amsterdam Ultra-high field adult lifespan database (AHEAD). Where the main AHEAD release
shares reconstructed quantitative maps, this record holds the multi-coil k-space of the MP2RAGE-ME acquisition and the
matching coil sensitivity maps, so that groups can test their own reconstruction, parallel imaging and quantitative
mapping methods on 7 T data from adults of all ages.

## Composition

The release covers 77 adults. A demographics file gives sex and age decade only: 43 women and 34 men, spread from the
20s to the 80s, with the largest groups in their 20s and 70s. The main AHEAD paper describes a larger set of 105 scans
of participants aged 18 to 80; the record does not explain which of them were included here. No clinical or cognitive
variables are part of this record.

## Acquisition

All data come from one MP2RAGE-ME protocol on a Philips Achieva 7T, run with 32 receive channels at 0.7 mm isotropic
resolution. The sequence records a first inversion at one echo and a second inversion at four echoes, which allows T1,
T2* and susceptibility maps from a single scan. Each subject has five k-space files, one per inversion and echo, stored
in the ISMRMRD HDF5 format with the scanner parameters inside, plus one HDF5 file of complex coil sensitivities. Head
motion was corrected with fat navigators. To meet GDPR rules, faces were removed separately for each coil element in the
image domain. A MATLAB example script for reading the files is included. The whole
record is about 2.15 TB.

## Known limitations

- Ages are given only as decades, not years.
- The record states no diagnoses or inclusion criteria; see the AHEAD paper for the recruitment of the cohort.
- Defacing per coil changes the raw signal near the face, which matters for methods that use the full field of view.

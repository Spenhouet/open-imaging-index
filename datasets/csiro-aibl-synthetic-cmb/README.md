This CSIRO collection supports work on detecting cerebral microbleeds in susceptibility-weighted MRI when few labelled
lesions exist. It holds SWI scans from the Australian Imaging, Biomarker and Lifestyle (AIBL) study together with
versions of the same scans into which a mathematical model has inserted artificial microbleeds at known positions. The
accompanying paper (Momeni et al., 2021) reports that a classifier trained only on such synthetic lesions can detect
real ones.

## Composition

The file list on the Data Access Portal contains 57 SWI scans with real microbleeds and 313 scans without, each as a
bias-corrected and histogram-matched NIfTI volume. Separate folders hold the copies with synthetic lesions: 570 for the
microbleed scans and 3,130 for the scans without microbleeds, ten per scan. Three spreadsheets with real and synthetic
microbleed information come with the scans. In total the collection has 4,073 files and about 17.7 GB. File names
carry a numeric prefix and a suffix from T0 to T7; the collection does not document what they mean.

The collection description speaks of 75 scans with 175 real microbleeds, which does not match the 57 microbleed scans
in the file list. The paper abstract states that the release includes a version with 37,000 synthetic lesions.

## Acquisition

The scans come from AIBL, according to the collection's lineage statement. The collection does not state the scanner,
field strength or sequence parameters, and the full paper is not openly accessible.

## Annotations

Experts defined the locations of the real microbleeds; the labels are positions, not voxel masks. The scans with
microbleeds are filed as definite cases. Synthetic microbleeds were modelled with a random Gaussian shape and placed in
healthy brain locations, ten per scan, with their positions provided.

## Known limitations

- Point locations only; no segmentation masks.
- No demographic or clinical data are included, and the number of distinct participants is not stated.
- The collection description and the files disagree on the number of real microbleed scans.
- The CSIRO Data Licence allows non-commercial use only and forbids passing the data on.

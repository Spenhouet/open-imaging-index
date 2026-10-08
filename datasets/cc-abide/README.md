cc_abide is a set of derived segmentations built from the structural scans of ABIDE I. Heath Pardoe and colleagues at
the NYU Comprehensive Epilepsy Center segmented the corpus callosum on the midsagittal slice and the intracranial
region of each T1-weighted scan to test whether people with autism spectrum disorder differ from controls in corpus
callosum area and brain volume. They released the label images, the measurements and the analysis script on NITRC in
June 2015 so that the study can be reproduced and the labels reused.

## Composition

The image archive (about 210 MB) holds one folder per ABIDE subject, grouped by the 24 ABIDE site samples. Counted
from the archive, 1,102 subjects have an intracranial segmentation and 1,100 of them also have a corpus callosum label
together with the extracted midsagittal slice it was drawn on. A second, small archive holds corpus callosum area,
perimeter, circularity, length and seven Witelson subregion areas per subject, intracranial volumes, a 1 to 5 visual
scan-quality rating per subject, a copy of the ABIDE phenotypic file and the R script that reproduces the published
analysis. No raw ABIDE images are included apart from the midsagittal slices; the full scans must be obtained from
ABIDE I.

## Acquisition

All images come from ABIDE I, which pooled existing scans from many sites with different scanners and protocols. No
new data were acquired.

## Annotations

The paper describes both segmentations as automated. The author page computes corpus callosum areas from the labels
with the yuki tool and intracranial volumes with FSL, and the NITRC page lists the Automatic Registration Toolbox as a
companion tool. Each scan also has a visual quality rating from 1 to 5; the bundled R script drops scans rated 1 or 2
before the analysis.

## Known limitations

- Labels were not manually corrected, so errors from the automated methods remain, especially in poorly rated scans.
- Diagnosis, age and sex come from the ABIDE phenotypic file, which keeps the ABIDE non-commercial share-alike terms.
- The corpus callosum is labelled on a single midsagittal slice only, not in 3D.
- Site effects of ABIDE I carry over to every derived measure.

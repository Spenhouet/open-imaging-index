CAMELYON16 is a collection of digitised lymph node sections from breast cancer surgery, created for the first
challenge on detecting cancer metastases in whole-slide images. It was organised by Radboud University Medical
Center and is widely used to develop and compare slide-level and pixel-level metastasis detection methods in
computational pathology.

## Composition

The slides are H&E-stained sections of sentinel lymph nodes. The data note on the combined CAMELYON dataset
counts 399 slides for the CAMELYON16 part, while the challenge website speaks of 400:

| Center                | Slides | No metastasis | Macro-metastasis | Micro-metastasis |
| --------------------- | ------ | ------------- | ---------------- | ---------------- |
| Radboud UMC, Nijmegen | 249    | 150           | 48               | 51               |
| UMC Utrecht           | 150    | 90            | 34               | 26               |

Slides containing only isolated tumour cells were not included in this part. The training data were released in
two batches of 170 and 100 slides; a further 130 slides formed the challenge test set.

## Acquisition

Cases were sampled from sentinel node procedures between 2006 and 2016, stratified so that metastasis-positive
slides are over-represented. Radboud slides were scanned with a 3DHistech Pannoramic Flash II 250 and Utrecht
slides with a Hamamatsu NanoZoomer-XR. Slides are stored as tiled, JPEG-compressed TIFF files at about
0.23 to 0.25 µm per pixel.

## Annotations

A lab technician and a clinical PhD student outlined all metastases, and one of two expert breast pathologists
checked every annotation. Consecutive sections stained for cytokeratin (immunohistochemistry) were used when the
H&E slide was unclear. Outlines are provided as XML files and binary masks. The data note mentions that 15 slides
may contain metastases that were not annotated.

## Known limitations

- Only two hospitals and two scanners, all in the Netherlands.
- Positive slides are much more frequent than in clinical practice because of stratified sampling.
- Some slides contain two sections of the same node, of which only one is annotated.
- Patient demographics are not provided.

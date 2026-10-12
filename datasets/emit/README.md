EMIT is a set of cyclic immunofluorescence (CyCIF) images of one human tissue microarray, published by the Laboratory of Systems Pharmacology at Harvard Medical School together with the MCMICRO image-processing pipeline. It is meant as a shared test bed for methods such as core detection, cell segmentation and per-cell quantification, and the creators describe it as a resource that will grow and be versioned over time.

## Composition

The microarray (HTMA427) was built from excess clinical tissue of 42 patients. Two 1.5 mm cores were taken from each of 60 tissue regions, giving 120 tissue cores plus 3 marker cores used to orient the array. The cores cover 34 types of cancer, non-neoplastic disease and normal tissue. Examples named by the creators include lung and colon adenocarcinoma with matched normal tissue where possible, acute inflammatory conditions such as appendicitis and diverticulitis, and lymphoid tissues such as tonsil, spleen and lymph node. Two sections of the array, called TMA11 and TMA22, were imaged, and each yields 123 core images after dearraying. A `tissues.csv` file per section maps each core image to its array position, donor block and tissue type.

## Acquisition

Specimens were collected under an excess tissue protocol approved by the institutional review board of Brigham and Women's Hospital. Each section was stained with a different multiplex antibody panel through repeated CyCIF cycles and imaged at 20x with a 0.75 NA objective and 2x2 pixel binning. A `markers.csv` file per section lists the antibody of each channel and its quality grade (pass, fail or exploratory).

## Annotations

There are no manual labels. The project ships the outputs of MCMICRO as a baseline: stitched and registered core images, probability maps and cell and nucleus masks from a U-Net model, and per-cell tables of marker intensity and morphology. The last columns of `tissues.csv` add a pathology quality review of each core.

## Known limitations

- The segmentation masks are model outputs, not expert ground truth.
- Patient age, sex and diagnosis counts per tissue type are not reported in the paper.
- No license for the images is stated; downloading needs a Synapse account.
- A tonsil whole-slide dataset that the MCMICRO site also groups under EMIT lives in a separate Synapse project and is not part of this entry.

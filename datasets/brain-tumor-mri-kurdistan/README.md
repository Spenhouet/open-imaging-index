This release holds two-dimensional brain MRI slices from routine clinical scans, sorted into a tumor and a non-tumor class for training binary image classifiers. It was put together by researchers at the University of Human Development, the University of Halabja and the University of Sulaimani from patients seen at medical centers in the Sulaymaniyah region of Kurdistan, Iraq, among them Hiwa Hospital and Asia International Hospital. It is published on Mendeley Data under CC BY 4.0 and downloads without an account.

## Composition

The authors selected 542 original slices: 305 from 50 patients with a brain tumor and 237 from 40 people without a tumor. They then generated augmented variants of each slice, which brings the release to 6,606 images (3,953 tumor and 2,653 non-tumor). The archive has one folder per class, and file names carry the source slice number, the sequence and the augmentation applied, such as added Gaussian noise, cropping or dropout. The archive as downloaded contains 3,952 tumor and 2,652 non-tumor files, one fewer per class than the description states.

## Acquisition

Slices come from six sequences: T1-weighted, T2-weighted, FLAIR, contrast-enhanced T1-weighted, diffusion-weighted imaging and ADC maps. All images are stored as JPEG at 320 x 320 pixels. Scanner vendors, field strengths and acquisition parameters are not reported.

## Annotations

Each image carries one label, tumor or non-tumor, given by its folder. The description states that medical professionals reviewed and annotated the images. Tumor type, grade and location are not provided, and there are no segmentation masks.

## Known limitations

Only one release page documents the data; there is no paper with methods, demographics or inclusion criteria. Augmented copies of the same slice sit in the same folder as the original, so a random split leaks near-duplicates between training and test sets unless images are grouped by their source slice. Sequence names in file names are spelled inconsistently, and a few tumor files are labelled SWI, a sequence the description does not list. Patient identifiers are not given, so slices cannot be grouped by person.

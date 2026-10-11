This OpenNeuro release holds the structural brain scans behind a Duke University and VA Mid-Atlantic MIRECC study that asked whether blood levels of neuroactive steroids, such as allopregnanolone, pregnenolone and DHEA, track the thickness of the cerebral cortex. The participants are male US military veterans who served after 11 September 2001. The images are shared under CC0; the steroid measurements and clinical scores are not, because the authors describe them as protected VA data.

## Composition

The release has 143 subject folders, each with a single T1-weighted NIfTI volume and no sidecar or participants file. The paper reports a full sample of 143 men, of whom 69 had a PTSD diagnosis. The age range is 21 to 65 years. Major depression, past substance abuse and nicotine dependence were allowed; major neurological illness, moderate or severe traumatic brain injury and substance dependence were exclusion criteria. Steroid levels other than DHEA and DHEAS were measured only in a subsample of 115.

## Acquisition

Scans were taken at Duke University on 3 T GE scanners with an 8-channel head coil, using a 3D fast spoiled gradient-recalled echo sequence at 1 mm isotropic resolution. Two scanner models were used, a GE Discovery MR750 and a GE EXCITE, with slightly different repetition and echo times. The paper analysed the images with FreeSurfer 5.3 and the Destrieux parcellation of 148 cortical regions.

## Known limitations

Only images are shared: there is no participants.tsv, so age, diagnosis and the steroid values cannot be linked to scans. The scanner counts the paper gives per model (162 and 90) do not add up to 143, and its text and Table 1 swap the mean age of the full sample and the subsample, so neither is listed here. The sample is all male. The OpenNeuro curator note says the data were first posted as ds002171 and re-uploaded for privacy reasons.

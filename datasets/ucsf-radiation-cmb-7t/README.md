This dataset comes from the Lupo lab at the University of California San Francisco and was used to train a 3D deep
residual network that separates true cerebral microbleeds from false positive candidates produced by an earlier,
rule-based detector. All patients had gliomas and had received brain radiotherapy. The data are described in a 2019 paper only; the paper has no data availability
statement, and no download or request process has been published.

## Composition

73 glioma patients, each treated with radiation to a maximum dose of 50 to 60 Gy and each with confirmed
radiation-induced microbleeds. Twelve patients were scanned more than once, giving 91 scans. The paper split the
patients into 54 for training, 7 for validation and 12 for testing. The paper does not report age or sex.

## Acquisition

All scans were acquired at 7 T on a GE scanner with an 8- or 32-channel phased-array head coil. 31 patients had a
4-echo 3D TOF-SWI sequence (TE 2.4, 12, 14.3 and 20.3 ms, TR 40 ms, 0.5 x 0.5 x 1 mm) and 49 had a standard
flow-compensated 3D SWI sequence (TE 16 ms, TR 50 ms, 0.5 x 0.5 x 2 mm). These two numbers add up to more than 73,
which the paper does not explain.

## Annotations

The earlier detector proposed 19,762 candidates. A research scientist experienced in reading microbleeds, guided
beforehand by a neuroradiologist, marked each candidate as a true microbleed or a false positive with a labelling
tool, yielding 2,835 true microbleeds and 16,927 false positives. A neuroradiologist's ratings were used separately to
check the network's likelihood scores. The labels are candidate-level decisions, not voxel masks.

## Known limitations

- No data release, license or data use terms exist; access, if any, is at the authors' discretion.
- The population is narrow: glioma patients after radiotherapy, scanned at 7 T, which differs from the usual 1.5 T
  and 3 T clinical setting.
- Ground truth comes from a single reader.
- The publisher issued a correction stating the article was published open access by mistake.

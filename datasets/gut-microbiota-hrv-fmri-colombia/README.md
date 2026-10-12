This OpenNeuro release contains brain MRI from 88 healthy young men in Colombia who took part in a cross-sectional study led by research groups at the Universidad de Antioquia in Medellín. The study asked whether two markers of self-regulation, heart rate variability and the resting functional connectivity of large-scale brain networks, are linked to which bacteria live in the gut and to habitual diet. The authors report that the sympathovagal quotient and connectivity strength of control networks both correlated positively with the abundance of the Ruminococcaceae family. The images are shared under CC0 and accompany a 2024 paper in Psychoneuroendocrinology.

## Composition

Each of the 88 subjects has one T1-weighted volume and one resting-state BOLD run, with no session folders. Ages in the participant table range from 21 to 40 years. The same table holds subject-level variables used in the analysis: presence of intestinal parasites, education, socioeconomic status, physical activity, body mass index, waist-hip ratio, 24-hour Holter heart rate variability measures, depression and anxiety scale scores, dietary intake from a food frequency questionnaire, gut microbiota alpha diversity indices and the relative abundance of Ruminococcaceae. Microbiome sequences and Holter recordings themselves are not part of the release.

## Acquisition

All images come from a single 3 T Philips Ingenia scanner according to the JSON sidecars. The T1-weighted scan is a sagittal 3D gradient-echo sequence at 1 mm slice thickness. The resting-state run is a 2D echo-planar sequence with a repetition time of 2 s and 3 mm slices. Gut microbiota were profiled by sequencing the V3-V4 regions of the 16S rRNA gene.

## Known limitations

The cohort includes only young men from one country, so it does not cover women, older adults or disease. The design is cross-sectional. No defacing status or preprocessing derivatives are documented on the dataset page, and the paper is not open access. Some participant table columns listed in participants.json, such as blood pressure, are absent from participants.tsv.

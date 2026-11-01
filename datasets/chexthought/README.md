CheXthought records how radiologists think while they read chest X-rays. Readers talked through each image in a
browser-based DICOM viewer and clicked on the regions they were describing at the same time. Every reasoning trace
therefore pairs free text with numbered image points. The traces were collected to study clinical reasoning and to
train vision-language models whose explanations are grounded in the image. The images and their original reports
come from CheXpert Plus at Stanford, and the release is hosted by Stanford AIMI on Redivis.

## Composition

Version 1.0 contains 103,592 reasoning traces with 6,609,082 click points, made by 501 attending radiologists,
residents and fellows from 71 countries. They cover 50,312 chest X-rays from 45,272 studies of 18,046 patients. About
a fifth of the patients have two or more studies, which allows comparison of serial images. Many images were read
by several people independently, up to 36 per image. The paper describes another 10% of traces held back as a test
set for future benchmarking, which is not part of the public release.

The download is one CSV file of about 0.5 GB with the image id, the reasoning text, the click coordinates and the
CheXpert Plus report for each trace. The images themselves are fetched from CheXpert Plus by image id.

## Annotations

Readers followed a structured outline: image quality and search pattern, lines and tubes, normal and abnormal
findings, uncertainty, final findings, comparison with earlier images and follow-up advice. They reviewed and
corrected the automatic transcripts before submitting. Coordinates are stored relative to the image so that zoom and
pan do not shift them. A typical trace has about 117 words and 66 points.

## Known limitations

- The click points track where a reader pointed, not where they looked. They are not eye-tracking data and they are
  not lesion outlines.
- Finding counts in the paper are given per trace, not per image or patient, so they are not listed here.
- Access needs a Redivis account, AIMI membership and a Stanford research agreement whose text is visible only
  after sign-in. Images need separate access to CheXpert Plus.
- The dataset DOI shown on Redivis (10.57761/j56p-e576) did not resolve on 2026-11-01.

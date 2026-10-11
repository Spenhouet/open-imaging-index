# Social Media Addiction Time Perception fMRI

A research group at Sichuan Normal University scanned adults who met screening criteria for social media addiction and healthy controls while they judged time intervals, to test whether time perception is altered in this group and which brain activity underlies the change. The Science Data Bank record (version V1, issued August 2026) was assembled to meet a journal's open data policy. It shares behavioral tables, analysis code and one unthresholded statistical map per participant, but not the MRI scans themselves: the depositors withheld the anonymized structural and functional images for ethics and privacy reasons.

## Composition

The work has two experiments. Study 1 used a time bisection task and includes 58 participants, 29 with social media addiction and 29 controls. Study 2 used a time comparison task with social media cues and neutral cues and includes 59 participants, 30 with social media addiction and 29 controls. The record does not say whether any person took part in both studies, so no combined participant count is given here. The behavioral spreadsheets list group, age, sex, years of education, scores on the Bergen Social Media Addiction Scale, the Internet Addiction Test, PHQ-9 and GAD-7, daily social media hours, and the point of subjective equality and Weber ratio from each task. The deposit is about 127 MB in 126 files.

## Acquisition

Scans were made on a 3 T Siemens Prisma. A high-resolution T1-weighted image served for normalization and anatomical localization, and gradient-echo EPI captured task activity. Functional data were slice-time corrected, realigned, normalized to MNI space and smoothed, then modeled in SPM12. The shared files are first-level t maps in NIfTI format (`subXX_spmT_0003.nii` for Study 1, `subXX_spmT_0004.nii` for Study 2), kept without thresholding.

## Known limitations

- Only derived t maps are public. Raw or preprocessed T1-weighted and functional images are not available.
- Overlap between the Study 1 and Study 2 samples is not stated.
- No sequence parameters, run counts or recruitment site details are given on the record, and no linked article was listed at the time of checking.
